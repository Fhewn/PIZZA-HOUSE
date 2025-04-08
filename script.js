// Pizza verileri
const pizzalar = [
    {
        id: 1,
        isim: "Margarita",
        aciklama: "Domates sos, mozarella peyniri, fesleğen",
        fiyat: 89.90,
        resim: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "klasik"
    },
    {
        id: 2,
        isim: "Pepperoni",
        aciklama: "Domates sos, mozarella peyniri, pepperoni",
        fiyat: 99.90,
        resim: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "klasik"
    },
    {
        id: 3,
        isim: "Karışık Pizza",
        aciklama: "Domates sos, mozarella peyniri, sosis, mantar, biber",
        fiyat: 109.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 4,
        isim: "Dört Peynirli",
        aciklama: "Domates sos, mozarella, rokfor, parmesan, gorgonzola",
        fiyat: 119.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 5,
        isim: "Vejeteryan",
        aciklama: "Domates sos, mozarella peyniri, mantar, biber, soğan, mısır, zeytin",
        fiyat: 94.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "vejeteryan"
    },
    {
        id: 6,
        isim: "Mantarlı",
        aciklama: "Domates sos, mozarella peyniri, mantar, fesleğen",
        fiyat: 89.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "vejeteryan"
    },
    {
        id: 7,
        isim: "BBQ Tavuklu",
        aciklama: "BBQ sos, mozarella peyniri, tavuk parçaları, soğan, mısır",
        fiyat: 104.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 8,
        isim: "Ton Balıklı",
        aciklama: "Domates sos, mozarella peyniri, ton balığı, soğan, mısır, zeytin",
        fiyat: 109.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 9,
        isim: "Sucuklu",
        aciklama: "Domates sos, mozarella peyniri, sucuk, biber",
        fiyat: 99.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "klasik"
    },
    {
        id: 10,
        isim: "Kavurmalı",
        aciklama: "Domates sos, mozarella peyniri, kavurma, mantar, biber",
        fiyat: 114.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 11,
        isim: "Akdeniz",
        aciklama: "Domates sos, mozarella peyniri, zeytin, kekik, domates, roka",
        fiyat: 94.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "vejeteryan"
    },
    {
        id: 12,
        isim: "Mexicano",
        aciklama: "Domates sos, mozarella peyniri, jalapeno biber, mısır, soğan, acı sos",
        fiyat: 104.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 13,
        isim: "Hawaii",
        aciklama: "Domates sos, mozarella peyniri, ananas, jambon",
        fiyat: 99.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 14,
        isim: "Pesto",
        aciklama: "Pesto sos, mozarella peyniri, domates, fesleğen",
        fiyat: 94.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "vejeteryan"
    },
    {
        id: 15,
        isim: "Köfteli",
        aciklama: "Domates sos, mozarella peyniri, köfte, soğan, biber",
        fiyat: 109.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 16,
        isim: "Ispanaklı",
        aciklama: "Domates sos, mozarella peyniri, ıspanak, mantar, sarımsak",
        fiyat: 94.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "vejeteryan"
    },
    {
        id: 17,
        isim: "Tavuklu Barbekü",
        aciklama: "Barbekü sos, mozarella peyniri, tavuk, soğan, mantar",
        fiyat: 104.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 18,
        isim: "Kıymalı",
        aciklama: "Domates sos, mozarella peyniri, kıyma, soğan, biber",
        fiyat: 109.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "klasik"
    },
    {
        id: 19,
        isim: "Peynirli Mantar",
        aciklama: "Domates sos, mozarella peyniri, mantar çeşitleri, parmesan",
        fiyat: 99.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "vejeteryan"
    },
    {
        id: 20,
        isim: "Karışık Deniz Ürünleri",
        aciklama: "Domates sos, mozarella peyniri, karides, kalamar, midye, sarımsak",
        fiyat: 129.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 21,
        isim: "Tavuklu Ranch",
        aciklama: "Ranch sos, mozarella peyniri, tavuk, mısır, domates",
        fiyat: 104.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 22,
        isim: "Acılı Sucuk",
        aciklama: "Domates sos, mozarella peyniri, acılı sucuk, biber, soğan",
        fiyat: 104.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "klasik"
    },
    {
        id: 23,
        isim: "Patlıcanlı",
        aciklama: "Domates sos, mozarella peyniri, kızarmış patlıcan, biber, sarımsak",
        fiyat: 94.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "vejeteryan"
    },
    {
        id: 24,
        isim: "Buffalo Tavuk",
        aciklama: "Buffalo sos, mozarella peyniri, tavuk, ranch sos",
        fiyat: 109.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 25,
        isim: "Mantarlı Trüf",
        aciklama: "Trüf yağı, mozarella peyniri, mantar çeşitleri, parmesan",
        fiyat: 139.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 26,
        isim: "Tavuklu Curry",
        aciklama: "Curry sos, mozarella peyniri, tavuk, soğan, biber",
        fiyat: 104.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 27,
        isim: "Rokforlu",
        aciklama: "Beyaz sos, rokfor peyniri, mozarella peyniri, ceviz",
        fiyat: 119.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 28,
        isim: "Sebzeli Supreme",
        aciklama: "Domates sos, mozarella peyniri, brokoli, havuç, kabak, biber",
        fiyat: 99.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "vejeteryan"
    },
    {
        id: 29,
        isim: "Tavuklu Alfredo",
        aciklama: "Alfredo sos, mozarella peyniri, tavuk, mantar, sarımsak",
        fiyat: 109.90,
        resim: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    },
    {
        id: 30,
        isim: "Antrikot",
        aciklama: "Domates sos, mozarella peyniri, antrikot dilimleri, mantar, soğan",
        fiyat: 134.90,
        resim: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        kategori: "ozel"
    }
];

// Sepet işlemleri
let sepetUrunler = [];

// DOM elementleri
const pizzaContainer = document.querySelector('.pizza-container');
const sepetSayi = document.querySelector('.sepet-sayi');
const sepetModal = document.getElementById('sepetModal');
const sepetBtn = document.querySelector('.sepet');
const kapatBtn = document.querySelector('.kapat');
const sepetUrunlerDiv = document.querySelector('.sepet-urunler');
const araToplam = document.getElementById('araToplam');
const toplamFiyat = document.getElementById('toplamFiyat');
const siparisVerBtn = document.getElementById('siparisVer');
const filtreBtnler = document.querySelectorAll('.filtre-btn');
const iletisimForm = document.getElementById('iletisimForm');

// Pizzaları görüntüle
function pizzalariGoster(filtre = 'hepsi') {
    const filtrelenmisPizzalar = filtre === 'hepsi' 
        ? pizzalar 
        : pizzalar.filter(pizza => pizza.kategori === filtre);
    
    const pizzaContainer = document.querySelector('.pizza-container');
    if (pizzaContainer) {
        pizzaContainer.innerHTML = filtrelenmisPizzalar.map(pizza => `
            <div class="pizza-card">
                <img src="${pizza.resim}" alt="${pizza.isim}" class="pizza-image">
                <div class="pizza-info">
                    <span class="pizza-kategori">${pizza.kategori}</span>
                    <h3>${pizza.isim}</h3>
                    <p>${pizza.aciklama}</p>
                    <p class="pizza-fiyat">${pizza.fiyat.toFixed(2)} TL</p>
                    <button onclick="sepeteEkle(${pizza.id})" class="btn">Sepete Ekle</button>
                </div>
            </div>
        `).join('');
    }
}

// Sepete ürün ekleme
function sepeteEkle(urunId) {
    const urun = pizzalar.find(p => p.id === urunId);
    const sepetUrunu = sepetUrunler.find(item => item.id === urunId);
    
    if (sepetUrunu) {
        sepetUrunu.adet++;
    } else {
        sepetUrunler.push({
            id: urun.id,
            isim: urun.isim,
            fiyat: urun.fiyat,
            resim: urun.resim,
            adet: 1
        });
    }
    
    // LocalStorage'a kaydet
    localStorage.setItem('sepet', JSON.stringify(sepetUrunler));
    
    sepetGuncelle();
    
    // Animasyonlu bildirim göster
    const bildirim = document.createElement('div');
    bildirim.className = 'bildirim';
    bildirim.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${urun.isim} sepete eklendi</span>
    `;
    document.body.appendChild(bildirim);
    
    setTimeout(() => {
        bildirim.classList.add('goster');
        setTimeout(() => {
            bildirim.classList.remove('goster');
            setTimeout(() => bildirim.remove(), 300);
        }, 2000);
    }, 100);
}

// Sepet içeriğini güncelleme
function sepetGuncelle() {
    const sepetSayi = document.querySelector('.sepet-sayi');
    const sepetUrunlerDiv = document.querySelector('.sepet-urunler');
    const araToplam = document.getElementById('araToplam');
    const toplamFiyat = document.getElementById('toplamFiyat');
    
    // LocalStorage'dan sepeti yükle
    sepetUrunler = JSON.parse(localStorage.getItem('sepet') || '[]');
    
    // Sepet sayısını güncelle
    const toplamAdet = sepetUrunler.reduce((total, item) => total + item.adet, 0);
    sepetSayi.textContent = toplamAdet;
    
    if (toplamAdet === 0) {
        sepetSayi.style.display = 'none';
        sepetUrunlerDiv.innerHTML = '<p class="bos-sepet-mesaj">Sepetiniz boş</p>';
    } else {
        sepetSayi.style.display = 'flex';
        
        // Sepet içeriğini güncelle
        sepetUrunlerDiv.innerHTML = '';
        sepetUrunler.forEach(urun => {
            const urunDiv = document.createElement('div');
            urunDiv.className = 'sepet-urun';
            urunDiv.innerHTML = `
                <img src="${urun.resim}" alt="${urun.isim}" class="sepet-urun-resim">
                <div class="sepet-urun-bilgi">
                    <div class="sepet-urun-detay">
                        <h3>${urun.isim}</h3>
                        <div class="sepet-urun-fiyat">${(urun.fiyat * urun.adet).toFixed(2)} TL</div>
                    </div>
                    <div class="sepet-urun-adet">
                        <button onclick="sepetUrunAzalt(${urun.id})">-</button>
                        <span>${urun.adet}</span>
                        <button onclick="sepetUrunArtir(${urun.id})">+</button>
                    </div>
                </div>
            `;
            sepetUrunlerDiv.appendChild(urunDiv);
        });
    }
    
    // Toplam fiyatları güncelle
    const ara = sepetUrunler.reduce((total, item) => total + (item.fiyat * item.adet), 0);
    const teslimat = ara > 0 ? 15 : 0;
    const toplam = ara + teslimat;
    
    araToplam.textContent = ara.toFixed(2) + ' TL';
    toplamFiyat.textContent = toplam.toFixed(2) + ' TL';
    
    // LocalStorage'a kaydet
    localStorage.setItem('sepet', JSON.stringify(sepetUrunler));
}

// Sepetteki ürün miktarını artırma
function sepetUrunArtir(urunId) {
    const urun = sepetUrunler.find(item => item.id === urunId);
    if (urun) {
        urun.adet++;
        localStorage.setItem('sepet', JSON.stringify(sepetUrunler));
        sepetGuncelle();
        
        // Animasyonlu bildirim göster
        const bildirim = document.createElement('div');
        bildirim.className = 'bildirim success';
        bildirim.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${urun.isim} adedi artırıldı</span>
        `;
        document.body.appendChild(bildirim);
        
        setTimeout(() => {
            bildirim.classList.add('goster');
            setTimeout(() => {
                bildirim.classList.remove('goster');
                setTimeout(() => bildirim.remove(), 300);
            }, 2000);
        }, 100);
    }
}

let silinecekUrunId = null;

// Sepetteki ürün miktarını azaltma
function sepetUrunAzalt(urunId) {
    const urun = sepetUrunler.find(item => item.id === urunId);
    if (urun) {
        if (urun.adet > 1) {
            urun.adet--;
            localStorage.setItem('sepet', JSON.stringify(sepetUrunler));
            sepetGuncelle();
            
            // Animasyonlu bildirim göster
            const bildirim = document.createElement('div');
            bildirim.className = 'bildirim info';
            bildirim.innerHTML = `
                <i class="fas fa-info-circle"></i>
                <span>${urun.isim} adedi azaltıldı</span>
            `;
            document.body.appendChild(bildirim);
            
            setTimeout(() => {
                bildirim.classList.add('goster');
                setTimeout(() => {
                    bildirim.classList.remove('goster');
                    setTimeout(() => bildirim.remove(), 300);
                }, 2000);
            }, 100);
        } else {
            // Silme onayı modalını göster
            silinecekUrunId = urunId;
            document.getElementById('silmeOnayMesaj').textContent = 
                `${urun.isim} ürününü sepetten çıkarmak istediğinize emin misiniz?`;
            document.getElementById('silmeOnayModal').style.display = 'block';
        }
    }
}

// Silme işlemini onayla
function silmeOnayOnayla() {
    if (silinecekUrunId !== null) {
        const urun = sepetUrunler.find(item => item.id === silinecekUrunId);
        if (urun) {
            const index = sepetUrunler.findIndex(item => item.id === silinecekUrunId);
            if (index > -1) {
                sepetUrunler.splice(index, 1);
                localStorage.setItem('sepet', JSON.stringify(sepetUrunler));
                sepetGuncelle();
                
                // Animasyonlu bildirim göster
                const bildirim = document.createElement('div');
                bildirim.className = 'bildirim info';
                bildirim.innerHTML = `
                    <i class="fas fa-trash-alt"></i>
                    <span>${urun.isim} sepetten çıkarıldı</span>
                `;
                document.body.appendChild(bildirim);
                
                setTimeout(() => {
                    bildirim.classList.add('goster');
                    setTimeout(() => {
                        bildirim.classList.remove('goster');
                        setTimeout(() => bildirim.remove(), 300);
                    }, 2000);
                }, 100);
            }
        }
        silmeOnayIptal();
    }
}

// Silme işlemini iptal et
function silmeOnayIptal() {
    document.getElementById('silmeOnayModal').style.display = 'none';
    silinecekUrunId = null;
}

// Tıklama olaylarını dinle
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('onay-modal')) {
        silmeOnayIptal();
    }
});

// Hata modalını göster
function hataGoster(mesaj) {
    const hataModal = document.querySelector('.hata-modal');
    const hataMesaj = hataModal.querySelector('.hata-mesaj');
    hataMesaj.textContent = mesaj;
    hataModal.style.display = 'flex';
}

// Hata modalını kapat
function hataModalKapat() {
    document.querySelector('.hata-modal').style.display = 'none';
}

// Sipariş ver butonuna tıklandığında
function siparisVer() {
    if (sepetUrunler.length === 0) {
        hataGoster("Sepetiniz boş! Lütfen sipariş vermek için ürün ekleyin.");
        return;
    }
}

function siparisOnayModalAc() {
    document.getElementById('siparisOnayModal').style.display = 'block';
}

function siparisOnayModalKapat() {
    document.getElementById('siparisOnayModal').style.display = 'none';
    window.location.href = '#anasayfa';
}

function takipKoduKopyala() {
    const takipKodu = document.getElementById('siparisTakipKodu').textContent;
    navigator.clipboard.writeText(takipKodu).then(() => {
        const kopyalaBtn = document.querySelector('.kopyala-btn');
        kopyalaBtn.innerHTML = '<i class="fas fa-check"></i> Kopyalandı';
        kopyalaBtn.classList.add('kopyalandi');
        
        setTimeout(() => {
            kopyalaBtn.innerHTML = '<i class="fas fa-copy"></i> Kopyala';
            kopyalaBtn.classList.remove('kopyalandi');
        }, 2000);
    });
}

// Sepet modalını aç
function sepetModalAc() {
    document.getElementById('sepetModal').style.display = 'block';
}

// Sepet modalını kapat
function sepetModalKapat() {
    document.getElementById('sepetModal').style.display = 'none';
}

// Siparişi tamamla
function siparisiTamamla(event) {
    event.preventDefault();
    
    if (sepetUrunler.length === 0) {
        hataGoster("Sepetiniz boş! Lütfen sipariş vermek için ürün ekleyin.");
        return;
    }

    const form = document.getElementById('siparisForm');
    const formData = new FormData(form);
    
    // Sipariş verilerini al
    const siparis = {
        takipKodu: 'SP' + Math.random().toString(36).substr(2, 6).toUpperCase(),
        musteriAdi: formData.get('ad'),
        musteriSoyadi: formData.get('soyad'),
        telefon: formData.get('telefon'),
        adres: formData.get('adres'),
        odemeYontemi: document.querySelector('input[name="odemeYontemi"]:checked').value,
        urunler: sepetUrunler.map(urun => ({
            ad: urun.isim,
            adet: urun.adet,
            fiyat: urun.fiyat
        })),
        toplamTutar: sepetUrunler.reduce((total, item) => total + (item.fiyat * item.adet), 0) + 15, // Teslimat ücreti dahil
        durum: 'alindi',
        tarih: new Date().toLocaleString('tr-TR')
    };

    // Mevcut siparişleri al
    let siparisler = JSON.parse(localStorage.getItem('siparisler')) || [];
    
    // Yeni siparişi ekle
    siparisler.push(siparis);
    
    // Siparişleri kaydet
    localStorage.setItem('siparisler', JSON.stringify(siparisler));
    
    // Sepeti temizle
    sepetUrunler = [];
    localStorage.setItem('sepet', JSON.stringify(sepetUrunler));
    
    // Sepet modalını kapat
    sepetModalKapat();
    
    // Başarılı sipariş modalını göster
    const siparisOnayModal = document.getElementById('siparisOnayModal');
    const takipKoduSpan = document.getElementById('siparisTakipKodu');
    takipKoduSpan.textContent = siparis.takipKodu;
    siparisOnayModal.style.display = 'block';
    
    // Sepet sayısını güncelle
    sepetGuncelle();
    
    // Formu sıfırla
    form.reset();
}

// Başarılı modalı kapat
function basariliModalKapat() {
    document.querySelector('.basarili-modal').style.display = 'none';
}

// Kredi kartı seçeneğini kontrol etme
document.addEventListener('DOMContentLoaded', function() {
    const krediKartiBilgileri = document.getElementById('krediKartiBilgileri');
    const odemeYontemi = document.getElementsByName('odemeYontemi');
    
    function odemeYontemiGuncelle() {
        if (this.value === 'krediKarti') {
            krediKartiBilgileri.style.display = 'block';
        } else {
            krediKartiBilgileri.style.display = 'none';
        }
    }
    
    odemeYontemi.forEach(radio => {
        radio.addEventListener('change', odemeYontemiGuncelle);
    });
    
    // Kart numarası formatı
    const kartNumarasi = document.getElementById('kartNumarasi');
    if (kartNumarasi) {
        kartNumarasi.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 16) value = value.slice(0, 16);
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
        });
    }
    
    // Son kullanma tarihi formatı
    const sonKullanma = document.getElementById('sonKullanma');
    if (sonKullanma) {
        sonKullanma.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
            e.target.value = value;
        });
    }
    
    // CVV formatı
    const cvv = document.getElementById('cvv');
    if (cvv) {
        cvv.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 3) value = value.slice(0, 3);
            e.target.value = value;
        });
    }
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    pizzalariGoster();
    
    // Filtre butonları
    document.querySelectorAll('.filtre-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filtre-btn').forEach(b => b.classList.remove('aktif'));
            btn.classList.add('aktif');
            pizzalariGoster(btn.getAttribute('data-filtre'));
        });
    });
    
    // Sepet modalı
    const sepetBtn = document.querySelector('.sepet');
    const sepetModal = document.getElementById('sepetModal');
    const kapatBtn = document.querySelector('.kapat');
    
    if (sepetBtn) {
        sepetBtn.addEventListener('click', () => {
            sepetModal.style.display = 'block';
        });
    }
    
    if (kapatBtn) {
        kapatBtn.addEventListener('click', () => {
            sepetModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === sepetModal) {
            sepetModal.style.display = 'none';
        }
    });
    
    // Sipariş ver butonu
    const siparisVerBtn = document.getElementById('siparisVer');
    if (siparisVerBtn) {
        siparisVerBtn.addEventListener('click', siparisVer);
    }
    
    // İletişim formu
    const iletisimForm = document.getElementById('iletisimForm');
    if (iletisimForm) {
        iletisimForm.addEventListener('submit', iletisimFormGonder);
    }
});

// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Kullanıcı Girişi ve Kaydı
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const menuForm = document.getElementById('menuForm');
    const logoutBtn = document.getElementById('logoutBtn');

    // Kullanıcı girişi
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    window.location.href = data.user.isAdmin ? '/admin.html' : '/index.html';
                } else {
                    alert(data.message || 'Giriş başarısız!');
                }
            } catch (error) {
                console.error('Giriş hatası:', error);
                alert('Giriş yapılırken bir hata oluştu!');
            }
        });
    }

    // Kullanıcı kaydı
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;

            if (password !== confirmPassword) {
                alert('Şifreler eşleşmiyor!');
                return;
            }

            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password, phone, address })
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Kayıt başarılı! Giriş yapabilirsiniz.');
                    window.location.href = '/login.html';
                } else {
                    alert(data.message || 'Kayıt başarısız!');
                }
            } catch (error) {
                console.error('Kayıt hatası:', error);
                alert('Kayıt olurken bir hata oluştu!');
            }
        });
    }

    // Menü yönetimi
    if (menuForm) {
        menuForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const pizzaName = document.getElementById('pizzaName').value;
            const pizzaDescription = document.getElementById('pizzaDescription').value;
            const pizzaPrice = document.getElementById('pizzaPrice').value;
            const pizzaCategory = document.getElementById('pizzaCategory').value;
            const pizzaImage = document.getElementById('pizzaImage').value;

            try {
                const response = await fetch('/api/menu', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: pizzaName,
                        description: pizzaDescription,
                        price: pizzaPrice,
                        category: pizzaCategory,
                        image: pizzaImage
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Pizza başarıyla eklendi!');
                    menuForm.reset();
                } else {
                    alert(data.message || 'Pizza eklenemedi!');
                }
            } catch (error) {
                console.error('Pizza ekleme hatası:', error);
                alert('Pizza eklenirken bir hata oluştu!');
            }
        });
    }

    // Çıkış yapma
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('user');
            window.location.href = '/login.html';
        });
    }

    // Admin panelinde siparişleri yükleme
    const ordersTableBody = document.getElementById('ordersTableBody');
    if (ordersTableBody) {
        loadOrders();
    }
});

// Siparişleri yükleme fonksiyonu
async function loadOrders() {
    try {
        const response = await fetch('/api/siparisler');
        const orders = await response.json();

        const ordersTableBody = document.getElementById('ordersTableBody');
        ordersTableBody.innerHTML = '';

        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.siparisNo}</td>
                <td>${order.musteriAdi}</td>
                <td>${order.urunler.map(urun => `${urun.ad} (${urun.adet})`).join(', ')}</td>
                <td>${order.toplamTutar} TL</td>
                <td>${order.durum}</td>
                <td>
                    <button onclick="updateOrderStatus('${order.siparisNo}', 'hazirlaniyor')">Hazırlanıyor</button>
                    <button onclick="updateOrderStatus('${order.siparisNo}', 'yolda')">Yolda</button>
                    <button onclick="updateOrderStatus('${order.siparisNo}', 'teslim_edildi')">Teslim Edildi</button>
                </td>
            `;
            ordersTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Siparişler yüklenirken hata:', error);
        alert('Siparişler yüklenirken bir hata oluştu!');
    }
}

// Sipariş durumu güncelleme fonksiyonu
async function updateOrderStatus(siparisNo, yeniDurum) {
    try {
        const response = await fetch(`/api/siparis/${siparisNo}/durum`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ durum: yeniDurum })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Sipariş durumu güncellendi!');
            loadOrders();
        } else {
            alert(data.message || 'Sipariş durumu güncellenemedi!');
        }
    } catch (error) {
        console.error('Sipariş durumu güncellenirken hata:', error);
        alert('Sipariş durumu güncellenirken bir hata oluştu!');
    }
}

// Sipariş Takip Fonksiyonları
function siparisTakipModalAc() {
    document.getElementById('siparisTakipModal').style.display = 'block';
}

function siparisTakipModalKapat() {
    document.getElementById('siparisTakipModal').style.display = 'none';
    document.getElementById('takipKodu').value = '';
    document.querySelector('.siparis-takip-sonuc').style.display = 'none';
}

const ADMIN_TAKIP_KODU = "ADMIN123"; // Admin için özel takip kodu

function siparisiTakipEt() {
    const takipKodu = document.getElementById('takipKodu').value.trim().toUpperCase();
    
    if (!takipKodu) {
        hataGoster('Lütfen takip kodunu giriniz.');
        return;
    }

    // Admin girişi kontrolü
    if (takipKodu === ADMIN_TAKIP_KODU) {
        window.location.href = 'admin.html';
        return;
    }
    
    // Normal sipariş takibi
    const siparisler = JSON.parse(localStorage.getItem('siparisler') || '[]');
    const siparis = siparisler.find(s => s.takipKodu === takipKodu);
    
    if (siparis) {
        // Sipariş detaylarını göster
        document.querySelector('.siparis-takip-sonuc').style.display = 'block';
        
        // Durum timeline'ını güncelle
        const durumlar = ['alindi', 'hazirlaniyor', 'yolda', 'teslim-edildi'];
        const simdikiDurumIndex = durumlar.indexOf(siparis.durum);
        
        const durumTimeline = document.querySelector('.durum-timeline');
        durumlar.forEach((durum, index) => {
            const durumElement = durumTimeline.children[index];
            if (index < simdikiDurumIndex) {
                durumElement.classList.add('tamamlandi');
                durumElement.classList.remove('aktif');
            } else if (index === simdikiDurumIndex) {
                durumElement.classList.add('aktif');
                durumElement.classList.remove('tamamlandi');
            } else {
                durumElement.classList.remove('tamamlandi', 'aktif');
            }
        });

        // Müşteri bilgilerini güncelle
        document.getElementById('musteriAdi').textContent = siparis.musteriAdi || 'Belirtilmemiş';
        document.getElementById('telefon').textContent = siparis.telefon || 'Belirtilmemiş';
        document.getElementById('adres').textContent = siparis.adres || 'Belirtilmemiş';
        document.getElementById('siparisTarihi').textContent = siparis.tarih || 'Belirtilmemiş';
        document.getElementById('toplamTutar').textContent = siparis.toplamTutar ? `${siparis.toplamTutar.toFixed(2)} TL` : 'Belirtilmemiş';

        // Ürün listesini ekle
        const urunlerHTML = siparis.urunler ? siparis.urunler.map(urun => 
            `${urun.adet}x ${urun.ad}`
        ).join(', ') : 'Ürün bilgisi bulunamadı';
        
        // Tahmini teslimat süresini göster
        const teslimatBilgi = document.querySelector('.tahmini-teslimat');
        if (siparis.durum === 'teslim-edildi') {
            teslimatBilgi.innerHTML = `
                <div class="teslimat-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="teslimat-bilgi">
                    <h4>Sipariş Teslim Edildi</h4>
                    <p>Siparişiniz başarıyla teslim edilmiştir.</p>
                </div>
            `;
        } else {
            teslimatBilgi.innerHTML = `
                <div class="teslimat-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="teslimat-bilgi">
                    <h4>Tahmini Teslimat Süresi</h4>
                    <p>Siparişiniz <strong>15-20 dakika</strong> içinde teslim edilecektir.</p>
                </div>
            `;
        }
    } else {
        hataGoster('Bu takip koduna ait sipariş bulunamadı.');
        document.querySelector('.siparis-takip-sonuc').style.display = 'none';
    }
}

// İletişim formu gönder
function iletisimFormGonder(e) {
    e.preventDefault();
    
    const formData = new FormData(iletisimForm);
    const data = {
        isim: formData.get('isim'),
        email: formData.get('email'),
        mesaj: formData.get('mesaj')
    };
    
    // Form validasyonu
    if (!data.isim || !data.email || !data.mesaj) {
        return;
    }
    
    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return;
    }
    
    fetch('/api/iletisim', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            iletisimForm.reset();
        }
    })
    .catch(error => {
        console.error('İletişim formu hatası:', error);
    });
}

// Sipariş formunu kapat
function siparisFormKapat() {
    document.getElementById('siparisFormModal').style.display = 'none';
    window.location.href = '#anasayfa';
} 