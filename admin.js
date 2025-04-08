// Sipariş verilerini localStorage'dan al
function siparisleriGetir() {
    return JSON.parse(localStorage.getItem('siparisler')) || [];
}

// Sipariş özetini güncelle
function siparisDurumOzetiGuncelle() {
    const siparisler = siparisleriGetir();
    const toplamSiparis = siparisler.length;
    const bekleyenSiparis = siparisler.filter(s => s.durum !== 'teslim-edildi').length;
    const tamamlananSiparis = siparisler.filter(s => s.durum === 'teslim-edildi').length;

    document.getElementById('toplamSiparis').textContent = toplamSiparis;
    document.getElementById('bekleyenSiparis').textContent = bekleyenSiparis;
    document.getElementById('tamamlananSiparis').textContent = tamamlananSiparis;
}

// Sipariş tablosunu güncelle
function siparisTablosunuGuncelle(siparisler = null) {
    if (!siparisler) {
        siparisler = siparisleriGetir();
    }
    
    const siparisTablosu = document.getElementById('siparislerTablo');
    if (!siparisTablosu) {
        console.error('Sipariş tablosu bulunamadı');
        return;
    }
    
    siparisTablosu.innerHTML = '';
    
    siparisler.forEach(siparis => {
        const tr = document.createElement('tr');
        
        // Debug için sipariş durumunu yazdır
        console.log(`Sipariş ${siparis.takipKodu} durumu:`, siparis.durum);
        
        const durumMetni = siparisiDurumuGetir(siparis.durum);
        
        tr.innerHTML = `
            <td>${siparis.takipKodu}</td>
            <td>${siparis.musteriAdi} ${siparis.musteriSoyadi}</td>
            <td>${siparis.telefon}</td>
            <td>${siparis.adres}</td>
            <td>${siparis.urunler.map(urun => `${urun.adet}x ${urun.ad}`).join(', ')}</td>
            <td><span class="odeme-yontemi ${(siparis.odemeYontemi || 'kapida-odeme').toLowerCase().replace(/\s+/g, '-')}">${siparis.odemeYontemi || 'Kapıda Ödeme'}</span></td>
            <td>${typeof siparis.toplamTutar === 'number' ? siparis.toplamTutar.toFixed(2) : siparis.toplamTutar} ₺</td>
            <td><span class="siparis-durum-badge ${siparis.durum}">${durumMetni}</span></td>
            <td>
                <button class="islem-btn guncelle-btn" onclick="durumDegistir('${siparis.takipKodu}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="islem-btn sil-btn" onclick="siparisiSil('${siparis.takipKodu}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        siparisTablosu.appendChild(tr);
    });
}

// Sipariş durumunu insan tarafından okunabilir formata çevir
function siparisiDurumuGetir(durum) {
    const durumlar = {
        'alindi': 'Sipariş Alındı',
        'hazirlaniyor': 'Hazırlanıyor',
        'yolda': 'Yolda',
        'teslim-edildi': 'Teslim Edildi'
    };
    
    // Debug için durum değerini yazdır
    console.log('Gelen durum değeri:', durum);
    console.log('Dönüştürülmüş durum:', durumlar[durum]);
    
    // Durum değeri varsa onu döndür, yoksa varsayılan değer döndür
    return durumlar[durum] || 'Bilinmeyen Durum';
}

// Modal açma fonksiyonu
function durumDegistir(takipKodu) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'durumGuncelleModal';
    
    const siparisler = siparisleriGetir();
    const siparis = siparisler.find(s => s.takipKodu === takipKodu);
    
    if (!siparis) {
        bildirimGoster('Sipariş bulunamadı', 'error');
        return;
    }
    
    modal.innerHTML = `
        <div class="modal-icerik">
            <div class="modal-baslik">
                <h2>Sipariş Durumu Güncelle</h2>
                <button class="bildirim-kapat" onclick="modalKapat()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="form-grup">
                <label>Mevcut Durum: <span class="siparis-durum-badge ${siparis.durum}">${siparisiDurumuGetir(siparis.durum)}</span></label>
            </div>
            <div class="form-grup">
                <label for="yeniDurum">Yeni Durum:</label>
                <select id="yeniDurum" class="durum-select">
                    <option value="alindi" ${siparis.durum === 'alindi' ? 'selected' : ''}>Sipariş Alındı</option>
                    <option value="hazirlaniyor" ${siparis.durum === 'hazirlaniyor' ? 'selected' : ''}>Hazırlanıyor</option>
                    <option value="yolda" ${siparis.durum === 'yolda' ? 'selected' : ''}>Yolda</option>
                    <option value="teslim-edildi" ${siparis.durum === 'teslim-edildi' ? 'selected' : ''}>Teslim Edildi</option>
                </select>
            </div>
            <div class="form-butonlar">
                <button class="iptal-btn" onclick="modalKapat()">İptal</button>
                <button class="kaydet-btn" onclick="durumKaydet('${takipKodu}')">Güncelle</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

// Durum güncelleme fonksiyonu
function durumKaydet(takipKodu) {
    const yeniDurum = document.getElementById('yeniDurum').value;
    let siparisler = siparisleriGetir();
    const siparisIndex = siparisler.findIndex(s => s.takipKodu === takipKodu);
    
    if (siparisIndex !== -1) {
        try {
            // Debug için mevcut durumu yazdır
            console.log('Güncelleme öncesi sipariş:', siparisler[siparisIndex]);
            console.log('Yeni durum:', yeniDurum);
            
            // Sipariş durumunu güncelle
            siparisler[siparisIndex] = {
                ...siparisler[siparisIndex],
                durum: yeniDurum,
                guncellemeTarihi: new Date().toISOString()
            };
            
            // Eğer durum teslim edildi ise, teslim tarihini ekle
            if (yeniDurum === 'teslim-edildi') {
                siparisler[siparisIndex].teslimTarihi = new Date().toISOString();
            }
            
            // LocalStorage'a kaydet
            localStorage.setItem('siparisler', JSON.stringify(siparisler));
            
            // Debug için güncellenmiş durumu yazdır
            console.log('Güncelleme sonrası sipariş:', siparisler[siparisIndex]);
            
            // Modalı kapat
            const modal = document.getElementById('durumGuncelleModal');
            if (modal) {
                modal.remove();
            }
            
            // Tüm güncellemeleri yap
            siparisTablosunuGuncelle(siparisler);
            siparisDurumOzetiGuncelle();
            gunlukIstatistikleriGuncelle();
            takvimOlustur();
            
            // Başarı bildirimi göster
            const durumMetni = siparisiDurumuGetir(yeniDurum);
            bildirimGoster(`Sipariş durumu "${durumMetni}" olarak güncellendi`, 'success');
            
        } catch (error) {
            console.error('Sipariş güncellenirken hata:', error);
            bildirimGoster('Sipariş güncellenirken bir hata oluştu', 'error');
        }
    } else {
        bildirimGoster('Sipariş bulunamadı', 'error');
    }
}

// Siparişi sil
function siparisiSil(takipKodu) {
    if (!confirm('Bu siparişi silmek istediğinizden emin misiniz?')) return;

    let siparisler = siparisleriGetir();
    siparisler = siparisler.filter(s => s.takipKodu !== takipKodu);
    localStorage.setItem('siparisler', JSON.stringify(siparisler));
    
    siparisTablosunuGuncelle();
    siparisDurumOzetiGuncelle();
    
    bildirimGoster('Sipariş başarıyla silindi', 'success');
}

// Siparişleri filtrele
function siparisleriFiltrele() {
    const aramaMetni = document.getElementById('siparisArama').value.toLowerCase();
    const durumFiltresi = document.getElementById('durumFiltresi').value;
    
    let siparisler = siparisleriGetir();
    
    // Arama metni filtrelemesi
    if (aramaMetni) {
        siparisler = siparisler.filter(siparis => 
            siparis.takipKodu.toLowerCase().includes(aramaMetni) ||
            siparis.musteriAdi.toLowerCase().includes(aramaMetni) ||
            siparis.telefon.includes(aramaMetni)
        );
    }
    
    // Durum filtrelemesi
    if (durumFiltresi) {
        siparisler = siparisler.filter(siparis => siparis.durum === durumFiltresi);
    }
    
    siparisTablosunuGuncelle(siparisler);
}

// Modalı kapat
function modalKapat() {
    const modal = document.getElementById('durumGuncelleModal');
    if (modal) {
        modal.remove();
    }
}

// Bildirim göster
function bildirimGoster(mesaj, tur = 'info') {
    // Varsa önceki bildirimi kaldır
    const eskiBildirim = document.querySelector('.bildirim');
    if (eskiBildirim) {
        eskiBildirim.remove();
    }

    const bildirim = document.createElement('div');
    bildirim.className = `bildirim ${tur}`;
    
    // Bildirim türüne göre ikon belirleme
    let ikon = '';
    switch(tur) {
        case 'success':
            ikon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            ikon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case 'warning':
            ikon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        case 'info':
        default:
            ikon = '<i class="fas fa-info-circle"></i>';
            break;
    }
    
    bildirim.innerHTML = `
        <div class="bildirim-icerik">
            ${ikon}
            <span class="bildirim-mesaj">${mesaj}</span>
        </div>
        <button class="bildirim-kapat" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(bildirim);
    
    // Animasyon için timeout
    setTimeout(() => {
        bildirim.classList.add('goster');
    }, 10);
    
    // 4 saniye sonra otomatik kapanma
    setTimeout(() => {
        bildirim.classList.remove('goster');
        setTimeout(() => bildirim.remove(), 300);
    }, 4000);
}

// Takvim değişkenleri
let aktifTarih = new Date();

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // İlk yükleme
    siparisTablosunuGuncelle();
    siparisDurumOzetiGuncelle();
    gunlukIstatistikleriGuncelle();
    takvimOlustur();
    
    // Arama ve filtreleme için event listener'lar
    document.getElementById('siparisArama').addEventListener('input', siparisleriFiltrele);
    document.getElementById('durumFiltresi').addEventListener('change', siparisleriFiltrele);
    
    // Her 5 dakikada bir güncelle
    setInterval(() => {
        siparisTablosunuGuncelle();
        siparisDurumOzetiGuncelle();
        gunlukIstatistikleriGuncelle();
    }, 300000);
    
    // Modal dışına tıklandığında kapatma
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('durumGuncelleModal');
        if (e.target === modal) {
            modalKapat();
        }
    });
});

// Günlük istatistikleri güncelle
function gunlukIstatistikleriGuncelle() {
    const siparisler = siparisleriGetir();
    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);
    
    // Bugünkü siparişleri filtrele
    const bugunSiparisler = siparisler.filter(siparis => {
        try {
            const siparisTarihi = new Date(siparis.tarih);
            siparisTarihi.setHours(0, 0, 0, 0);
            return siparisTarihi.getTime() === bugun.getTime();
        } catch (e) {
            console.error('Tarih dönüştürme hatası:', e);
            return false;
        }
    });
    
    // Günlük kazanç hesaplama
    let gunlukKazanc = 0;
    bugunSiparisler.forEach(siparis => {
        if (siparis.toplamTutar) {
            // Eğer string ise sayıya çevir
            if (typeof siparis.toplamTutar === 'string') {
                // Para birimi sembolünü ve boşlukları temizle
                const temizTutar = siparis.toplamTutar.replace(/[^0-9.,]/g, '').replace(',', '.');
                gunlukKazanc += parseFloat(temizTutar) || 0;
            } else if (typeof siparis.toplamTutar === 'number') {
                gunlukKazanc += siparis.toplamTutar;
            }
        }
    });

    // Bugünkü tamamlanan siparişler
    const bugunTamamlanan = bugunSiparisler.filter(s => s.durum === 'teslim-edildi').length;
    
    // Yoldaki siparişler
    const yoldaki = siparisler.filter(s => s.durum === 'yolda').length;
    
    // En çok satan ürün
    const urunSayilari = {};
    bugunSiparisler.forEach(siparis => {
        if (siparis.urunler && Array.isArray(siparis.urunler)) {
            siparis.urunler.forEach(urun => {
                if (!urunSayilari[urun.ad]) {
                    urunSayilari[urun.ad] = 0;
                }
                urunSayilari[urun.ad] += urun.adet;
            });
        }
    });
    
    let enCokSatan = '-';
    let enYuksekSayi = 0;
    
    Object.entries(urunSayilari).forEach(([urun, sayi]) => {
        if (sayi > enYuksekSayi) {
            enYuksekSayi = sayi;
            enCokSatan = `${urun} (${sayi} adet)`;
        }
    });

    // İstatistikleri güncelle
    document.getElementById('bugunSiparis').textContent = bugunSiparisler.length;
    document.getElementById('bugunTamamlanan').textContent = bugunTamamlanan;
    document.getElementById('yoldakiSiparisler').textContent = yoldaki;
    document.getElementById('enCokSatanUrun').textContent = enCokSatan;
    document.getElementById('gunlukKazanc').textContent = gunlukKazanc.toFixed(2) + ' ₺';

    // Debug için konsola yazdır
    console.log('Bugünkü Siparişler:', bugunSiparisler);
    console.log('Günlük Kazanç:', gunlukKazanc);
}

// Takvimi oluştur
function takvimOlustur() {
    const takvimGrid = document.getElementById('takvimGrid');
    const ayYilBaslik = document.getElementById('takvimAyYil');
    
    // Ay ve yıl başlığını güncelle
    const aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 
                   'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    ayYilBaslik.textContent = `${aylar[aktifTarih.getMonth()]} ${aktifTarih.getFullYear()}`;
    
    // Ayın ilk gününü ve toplam gün sayısını hesapla
    const ilkGun = new Date(aktifTarih.getFullYear(), aktifTarih.getMonth(), 1);
    const sonGun = new Date(aktifTarih.getFullYear(), aktifTarih.getMonth() + 1, 0);
    
    // Takvim gridini temizle
    takvimGrid.innerHTML = '';
    
    // Haftanın günlerini ekle
    const haftaninGunleri = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    haftaninGunleri.forEach(gun => {
        const gunDiv = document.createElement('div');
        gunDiv.className = 'takvim-gun haftanin-gunu';
        gunDiv.textContent = gun;
        takvimGrid.appendChild(gunDiv);
    });
    
    // Boş günleri ekle (ayın ilk gününden önceki)
    let ilkGunIndex = ilkGun.getDay();
    ilkGunIndex = ilkGunIndex === 0 ? 6 : ilkGunIndex - 1; // Pazartesi'den başla
    
    for (let i = 0; i < ilkGunIndex; i++) {
        takvimGrid.appendChild(document.createElement('div'));
    }
    
    // Günleri ekle
    const siparisler = siparisleriGetir();
    const bugun = new Date();
    
    for (let gun = 1; gun <= sonGun.getDate(); gun++) {
        const gunDiv = document.createElement('div');
        gunDiv.className = 'takvim-gun';
        
        // Bugünü işaretle
        if (aktifTarih.getMonth() === bugun.getMonth() && 
            aktifTarih.getFullYear() === bugun.getFullYear() && 
            gun === bugun.getDate()) {
            gunDiv.classList.add('bugun');
        }
        
        // O güne ait siparişleri say
        const gunTarih = new Date(aktifTarih.getFullYear(), aktifTarih.getMonth(), gun);
        const gunSiparisler = siparisler.filter(siparis => {
            try {
                const siparisTarihi = new Date(siparis.tarih);
                siparisTarihi.setHours(0, 0, 0, 0);
                gunTarih.setHours(0, 0, 0, 0);
                return siparisTarihi.getTime() === gunTarih.getTime();
            } catch (e) {
                console.error('Tarih dönüştürme hatası:', e);
                return false;
            }
        });
        
        // Sipariş sayısına göre renk sınıfı ekle
        if (gunSiparisler.length > 0) {
            if (gunSiparisler.length <= 3) {
                gunDiv.classList.add('aktif', 'az-siparis');
            } else if (gunSiparisler.length <= 7) {
                gunDiv.classList.add('aktif', 'orta-siparis');
            } else {
                gunDiv.classList.add('aktif', 'cok-siparis');
            }
        }
        
        // Gün içeriğini oluştur
        gunDiv.innerHTML = `
            <span class="gun-sayi">${gun}</span>
            ${gunSiparisler.length > 0 ? `
                <span class="siparis-sayi">${gunSiparisler.length}</span>
                <div class="gun-detay">
                    <div class="gun-kazanc">${gunSiparisler.reduce((toplam, siparis) => {
                        let tutar = 0;
                        if (typeof siparis.toplamTutar === 'string') {
                            tutar = parseFloat(siparis.toplamTutar.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
                        } else if (typeof siparis.toplamTutar === 'number') {
                            tutar = siparis.toplamTutar;
                        }
                        return toplam + tutar;
                    }, 0).toFixed(2)} ₺</div>
                </div>
            ` : ''}
        `;
        
        takvimGrid.appendChild(gunDiv);
    }
}

// Önceki ay
function oncekiAy() {
    aktifTarih.setMonth(aktifTarih.getMonth() - 1);
    takvimOlustur();
}

// Sonraki ay
function sonrakiAy() {
    aktifTarih.setMonth(aktifTarih.getMonth() + 1);
    takvimOlustur();
}

// Çıkış Yap Fonksiyonu
function cikisYap() {
    // Kullanıcı oturumunu temizle
    localStorage.removeItem('adminGiris');
    
    // Bildirim göster
    bildirimGoster('Çıkış yapılıyor...', 'info');
    
    // 1 saniye sonra ana sayfaya yönlendir
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
} 