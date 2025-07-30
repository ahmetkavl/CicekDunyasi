 // Sayfa yüklendiğinde basit bir hoşgeldin mesajı atar
window.addEventListener('load', function () {
    alert("Çiçek Dünyası'na Hoş Geldiniz!");
  });
  
  // Bir ürünü sepete ekleyince bildirim veriyor
  document.querySelectorAll('.sepete-ekle').forEach(function(button) {
    button.addEventListener('click', function(e) {
      alert("Ürün sepete eklendi!");
    });
  });
  
  
  // Eğer sağ üstte arama yaparken orayı boş bırakırsanız arama kutusuna bişey yazmanız gerektiğini söylüyor
  document.querySelector('form').addEventListener('submit', function(e) {
    const input = document.querySelector('input[type="search"]');
    if (input.value.trim() === "") {
      alert("Lütfen arama kutusuna bir şey yazın.");
    }
  });
  
  // Buna basınca mevcut yıl ile beraber tüm hakları saklıdır yazısı çıkıyor
  document.querySelector('footer').addEventListener('click', function() {
    const year = new Date().getFullYear();
    alert(`Telif Hakkı © Çiçek Dünyası ${year}, tüm hakları saklıdır.`);
  });
  
  // Bu butona bastıktan sonra çiçekleri görmeniz için sayfayı aşağı kaydırıyor
  const gozatBtn = document.querySelector('.btn-primary');
  if (gozatBtn) {
    gozatBtn.addEventListener('click', function() {
      const urunBaslik = document.querySelector('.urun-baslik');
      if (urunBaslik) urunBaslik.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
    // Çiçeğin üstüne geldiğinizde arkaplan rengini değiştiriyor cssteki hover gibi
    document.querySelectorAll('.card').forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        card.style.backgroundColor = '#ffa8a8';
      });
      card.addEventListener('mouseleave', function() {
        card.style.backgroundColor = 'white';
      });
    });
    
  // Ürünlerin üstüne geldiğinzde ürünlerin boyunu büyütür
  document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('mouseover', function() {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener('mouseout', function() {
      card.style.transform = "scale(1)";
    });
  });
  
  // instagram linkine tıklayınca onaylamak için soru sorar
  const instaLink = document.querySelector('.btn-outline-secondary a');
  if (instaLink) {
    instaLink.addEventListener('click', function(e) {
      if (!confirm("Instagram sayfamıza gitmek istediğinize emin misiniz?")) {
      }
    });
  }
  
    // Sağ üstten butona basıldığında gece modunu açar kapatır
const geceModuBtn = document.getElementById('geceModuBtn');
if (geceModuBtn) {
    geceModuBtn.addEventListener('click', function () {
    document.body.classList.toggle('gece-modu');
});
}

    // Ürüne çift tıkladığında favoriye ekleme
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('dblclick', function() {
      alert("Bu ürün favorilere eklendi!");
    });
});