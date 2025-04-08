const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises; // Promises API kullanımı

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Veritabanı dosyaları
const USERS_FILE = path.join(__dirname, 'users.json');
const ORDERS_FILE = path.join(__dirname, 'siparisler.json');
const MENU_FILE = path.join(__dirname, 'menu.json');

// Dosyaların varlığını kontrol et ve oluştur
async function initializeFiles() {
    const files = [
        { path: USERS_FILE, default: [] },
        { path: ORDERS_FILE, default: [] },
        { path: MENU_FILE, default: [] }
    ];

    for (const file of files) {
        try {
            await fs.access(file.path);
        } catch {
            await fs.writeFile(file.path, JSON.stringify(file.default));
        }
    }
}

// Dosya okuma fonksiyonu
async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Dosya okuma hatası (${filePath}):`, error);
        return [];
    }
}

// Dosya yazma fonksiyonu
async function writeJsonFile(filePath, data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error(`Dosya yazma hatası (${filePath}):`, error);
        return false;
    }
}

// Uygulama başlangıcında dosyaları oluştur
initializeFiles().catch(console.error);

// Kullanıcı kaydı
app.post('/api/register', (req, res) => {
    const { name, email, password, phone, address } = req.body;

    // Kullanıcıları oku
    const users = JSON.parse(fs.readFileSync(USERS_FILE));

    // E-posta kontrolü
    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: 'Bu e-posta adresi zaten kullanılıyor!' });
    }

    // Yeni kullanıcı oluştur
    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // Gerçek uygulamada şifre hash'lenmelidir
        phone,
        address,
        isAdmin: false
    };

    // Kullanıcıyı kaydet
    users.push(newUser);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    res.status(201).json({ message: 'Kayıt başarılı!' });
});

// Kullanıcı girişi
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Kullanıcıları oku
    const users = JSON.parse(fs.readFileSync(USERS_FILE));

    // Kullanıcıyı bul
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'E-posta veya şifre hatalı!' });
    }

    // Kullanıcı bilgilerini döndür (şifre hariç)
    const { password: _, ...userWithoutPassword } = user;
    res.json({ user: userWithoutPassword });
});

// Tüm siparişleri getir
app.get('/api/siparisler', (req, res) => {
    try {
        const siparisler = JSON.parse(fs.readFileSync(ORDERS_FILE));
        res.json(siparisler);
    } catch (error) {
        console.error('Siparişleri getirme hatası:', error);
        res.status(500).json({
            success: false,
            message: 'Siparişler alınırken bir hata oluştu'
        });
    }
});

// Sipariş durumu güncelle
app.put('/api/siparis/:siparisNo/durum', async (req, res) => {
    try {
        const { siparisNo } = req.params;
        const { durum } = req.body;

        if (!siparisNo || !durum) {
            return res.status(400).json({
                success: false,
                message: 'Sipariş numarası ve durum gereklidir'
            });
        }

        const siparisler = await readJsonFile(ORDERS_FILE);
        const siparis = siparisler.find(s => s.siparisNo === siparisNo);

        if (!siparis) {
            return res.status(404).json({
                success: false,
                message: 'Sipariş bulunamadı'
            });
        }

        siparis.durum = durum;
        const kayitBasarili = await writeJsonFile(ORDERS_FILE, siparisler);

        if (kayitBasarili) {
            res.json({
                success: true,
                message: 'Sipariş durumu güncellendi'
            });
        } else {
            throw new Error('Sipariş durumu güncellenemedi');
        }
    } catch (error) {
        console.error('Sipariş durumu güncelleme hatası:', error);
        res.status(500).json({
            success: false,
            message: 'Sipariş durumu güncellenirken bir hata oluştu'
        });
    }
});

// Menü yönetimi
app.post('/api/menu', (req, res) => {
    const { name, description, price, category, image } = req.body;

    const menu = JSON.parse(fs.readFileSync(MENU_FILE));

    const newPizza = {
        id: Date.now().toString(),
        name,
        description,
        price: parseFloat(price),
        category,
        image
    };

    menu.push(newPizza);
    fs.writeFileSync(MENU_FILE, JSON.stringify(menu, null, 2));

    res.status(201).json({ message: 'Pizza başarıyla eklendi!' });
});

// Sipariş oluştur
app.post('/api/siparis', async (req, res) => {
    try {
        const { urunler, toplam } = req.body;

        // Gelen veriyi kontrol et
        if (!urunler || !Array.isArray(urunler) || urunler.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Geçersiz sipariş: Sepet boş olamaz'
            });
        }

        // Siparişleri oku
        const siparisler = await readJsonFile(ORDERS_FILE);

        // Yeni sipariş oluştur
        const yeniSiparis = {
            siparisNo: 'SP' + Date.now(),
            urunler,
            toplamTutar: toplam,
            tarih: new Date().toISOString(),
            durum: 'hazirlaniyor'
        };

        // Siparişi kaydet
        siparisler.push(yeniSiparis);
        const kayitBasarili = await writeJsonFile(ORDERS_FILE, siparisler);

        if (kayitBasarili) {
            res.json({
                success: true,
                message: 'Siparişiniz başarıyla alındı',
                siparisNo: yeniSiparis.siparisNo
            });
        } else {
            throw new Error('Sipariş kaydedilemedi');
        }
    } catch (error) {
        console.error('Sipariş oluşturma hatası:', error);
        res.status(500).json({
            success: false,
            message: 'Siparişiniz alınırken bir hata oluştu. Lütfen tekrar deneyiniz.'
        });
    }
});

// Sipariş sorgulama
app.get('/api/siparis/:siparisNo', async (req, res) => {
    try {
        const { siparisNo } = req.params;
        const siparisler = await readJsonFile(ORDERS_FILE);
        const siparis = siparisler.find(s => s.siparisNo === siparisNo);

        if (siparis) {
            res.json(siparis);
        } else {
            res.status(404).json({
                success: false,
                message: 'Sipariş bulunamadı'
            });
        }
    } catch (error) {
        console.error('Sipariş sorgulama hatası:', error);
        res.status(500).json({
            success: false,
            message: 'Sipariş sorgulanırken bir hata oluştu'
        });
    }
});

// İletişim formu
app.post('/api/iletisim', (req, res) => {
    const { name, email, message } = req.body;

    // Gerçek uygulamada bu bilgiler e-posta olarak gönderilebilir
    console.log('İletişim Formu:', { name, email, message });

    res.json({ message: 'Mesajınız başarıyla gönderildi!' });
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
}); 