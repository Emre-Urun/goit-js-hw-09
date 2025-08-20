# JavaScript Practice Projects

This repository contains two small projects built during my JavaScript learning
journey:  
📌 **Image Gallery with SimpleLightbox**  
📌 **Feedback Form with LocalStorage**

---

# 🇹🇷 Türkçe

## 📌 Projeler

### 1. Image Gallery with SimpleLightbox

- **Amaç:**  
  Kullanıcıya tıklanabilir küçük görsellerden oluşan bir galeri sunmak.  
  Tıklanan görsel büyük boyutta açılır ve açıklama metni (`alt`) 250ms
  gecikmeyle gösterilir.

- **Teknolojiler:**

  - JavaScript (ES6)
  - [SimpleLightbox](https://simplelightbox.com/) kütüphanesi

- **Özellikler:**
  - Resimler `alt` attribute ile açıklama alır.
  - Açıklama metni, büyük görsel açıldığında 250ms gecikmeyle görünür.
  - Responsive yapı.

---

### 2. Feedback Form with LocalStorage

- **Amaç:**  
  Kullanıcının form alanlarına girdiği verileri kaybetmeden saklamak.  
  Sayfa yenilense bile veriler localStorage’dan geri yüklenir.

- **Teknolojiler:**

  - JavaScript (ES6)
  - LocalStorage API

- **Özellikler:**
  - Form üzerinde delegasyon ile `input` event’i dinlenir.
  - Kullanıcı her veri girdiğinde, email ve message alanları
    `feedback-form-state` anahtarı altında localStorage’da saklanır.
  - Sayfa yenilendiğinde veriler geri yüklenir.
  - Submit edildiğinde:
    - Email ve message boş değilse konsola yazdırılır.
    - LocalStorage temizlenir.
    - Form sıfırlanır.

---

## 🚀 Nasıl Çalıştırılır?

1. Bu projeyi klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/proje-adi.git
   ```
