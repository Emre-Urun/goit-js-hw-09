const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// LocalStorage için kullanılacak anahtar
const STORAGE_KEY = 'feedback-form-state';

// Formdaki verileri saklayacağımız obje
let formData = {
  email: '',
  message: '',
};

// --- 1) Sayfa açıldığında localStorage'dan verileri geri yükle ---
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  // JSON formatındaki string'i parse ediyoruz
  formData = JSON.parse(savedData);

  // Eğer kaydedilmiş email varsa input'a yazdır
  if (formData.email) {
    emailInput.value = formData.email;
  }

  // Eğer kaydedilmiş message varsa textarea'ya yazdır
  if (formData.message) {
    messageInput.value = formData.message;
  }
}

// --- 2) Form üzerinde delegasyon kullanarak input event'ini dinle ---
form.addEventListener('input', e => {
  // Hangi input değiştiyse onun name değerine göre kaydediyoruz
  formData[e.target.name] = e.target.value.trim();

  // Objenin güncel halini localStorage'a yazıyoruz
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// --- 3) Submit event'inde verileri kontrol et, console.log yap ve temizle ---
form.addEventListener('submit', e => {
  e.preventDefault();

  // Eğer email veya message boşsa uyarı ver ve devam etme
  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    alert('Lütfen tüm alanları doldurun!');
    return;
  }

  // Konsola form verilerini yazdır
  console.log({
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  });

  // LocalStorage'dan temizle
  localStorage.removeItem(STORAGE_KEY);

  // formData objesini sıfırla
  formData = { email: '', message: '' };

  // Formu sıfırla
  form.reset();
});
