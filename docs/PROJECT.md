# Project Brief – Animated Single Page Slide CV

## 🎯 Proje Amacı

Bu proje, **Kıdemli Veri Bilimci** rolü için hazırlanmış, tamamen animasyonlu ve scroll tabanlı bir **tek sayfa (single page) slide CV web sitesi** geliştirmeyi amaçlamaktadır.

Deneyim, projeler ve kişisel bilgiler klasik bir CV formatı yerine, etkileyici ve modern bir hikâye anlatımı (storytelling) yaklaşımıyla sunulacaktır.

---

## 👤 Model Rolü

Bu proje üzerinde çalışacak model:

* **Senior Frontend Engineer**
* **UI/UX Designer**

Teknik olarak güçlü, animasyon sistemleri konusunda deneyimli ve kullanıcı deneyimi odaklı düşünmelidir.

---

## 🚨 Önceliklendirme

Model özellikle aşağıdaki konulara odaklanmalıdır:

1. **Scroll tabanlı slide mimarisi**
2. **Slide geçiş animasyonları**
3. **Timeline animasyonları (kritik önemde)**
4. **Zoom-in / Zoom-out geçiş efektleri (Timeline için özellikle)**

Navigation bar, buton veya manuel geçiş mekanizması **olmamalıdır**.
Tüm geçişler yalnızca scroll ile yapılmalıdır.

---

## 🧱 Genel Yapı

Web sitesi tam ekran (100vh) slide’lardan oluşacaktır.

* Her slide viewport yüksekliğinde olacaktır.
* Scroll snap veya custom scroll engine kullanılabilir.
* Sağ alt köşede aktif slide numarasını gösteren minimal bir gösterge olacaktır.
* Navigation bar veya buton bulunmayacaktır.

---

# 📑 Sayfa Akışı

---

## 1️⃣ Landing Page (Slide 1)

### İçerik:

* İsim Soyisim
* Kısa başlık (örneğin: Senior Data Scientist)
* 3–5 kısa tanımlayıcı özellik (örn: Machine Learning, NLP, MLOps, Data Strategy)

### Tasarım:

* Minimal
* Güçlü tipografi
* Giriş animasyonu olmalı (fade + slight upward motion)
* Scroll başladığında dramatik bir geçiş ile timeline’a bağlanmalı

---

## 2️⃣ Timeline (Slide 2)

### Yerleşim:

* Soldan sağa (eskiden → yeniye)
* Horizontal timeline
* Yıllar ve şirketler timeline üstünde konumlanacak

### İçerik:

* Çalışılan şirketler
* Yıl aralıkları
* Pozisyon bilgisi

### Animasyon (ÇOK KRİTİK):

* Landing’den timeline’a geçişte **zoom-out efekti**
* Timeline ilk açıldığında progressive reveal animasyonu
* Scroll ile timeline üzerinde yatay hareket hissi
* Timeline’dan proje slide’ına geçerken:

  * İlgili şirket noktasına **zoom-in**
  * Ardından proje detay slide’ına morph geçiş

Bu bölüm projenin en önemli animasyon alanıdır.

---

## 3️⃣ Projeler – Şirket 1

Timeline’daki ilk şirkete zoom-in yapıldıktan sonra:

* Her proje ayrı bir slide
* Dikey scroll ile projeler arasında geçiş
* Proje içeriği:

  * Proje adı
  * Problem tanımı
  * Kullanılan teknolojiler
  * Etki / sonuç
  * Görsel veya grafik alanı

### Geçiş:

* Projeler bittikten sonra:

  * Zoom-out animasyonu
  * Timeline görünümüne geri dönüş

---

## 4️⃣ Projeler – Şirket 2

* Timeline üzerinde ikinci şirkete zoom-in
* Aynı proje slide mantığı
* Projeler bittikten sonra tekrar timeline’a zoom-out

Bu yapı tüm şirketler için tekrar eder.

---

## 5️⃣ Hobi Bölümü

* Daha kişisel ve hafif bir atmosfer
* Daha yumuşak animasyonlar
* Grid veya kart yapısı olabilir
* Hover animasyonları eklenebilir

---

## 6️⃣ İletişim Bölümü (Final Slide)

* Email
* LinkedIn
* GitHub
* Diğer iletişim bilgileri

Final slide’da:

* Yumuşak fade-in
* Minimal ama güçlü kapanış hissi

---

# 🎞 Animasyon Sistemi

## Scroll Davranışı

* Scroll = slide transition
* Smooth scroll zorunlu
* Snap veya custom scroll controller tercih edilebilir
* Momentum kontrollü olmalı
* Scroll hijacking yapılacaksa dikkatli UX uygulanmalı

---

## Slide Geçişleri

* Fade + translate kombinasyonu
* Scale efektleri
* Timeline için özel zoom animasyonları
* Morphing transition düşünülebilir

---

## Timeline Animasyon Detayı

Timeline:

* Zoom-out ile genel kariyer görünümü
* Zoom-in ile şirket odaklı görünüm
* Aktif şirket highlight edilmeli
* Timeline node’ları animasyonlu olarak aktifleşmeli
* Zoom seviyeleri arasında sinematik geçiş olmalı

Bu bölüm sıradan bir timeline değil, interaktif bir deneyim olmalıdır.

---

# 🎨 Tasarım Sistemi

Font, renk paleti ve tasarım token’ları ayrı bir `design.md` dosyasında tanımlanmıştır.

Bu dosyaya uyulmalıdır.

---

# 🧠 UX Prensipleri

* Storytelling akışı
* Minimal bilişsel yük
* Yüksek görsel kalite
* Performans optimizasyonu (60fps animasyon)
* Mobile responsive düşünülmeli
* Desktop öncelikli tasarım

---

# 🛠 Teknik Beklentiler

* Modern frontend stack (React / Next / Vue vs. seçilebilir)

* Animasyon için:

  * GSAP veya
  * Framer Motion veya
  * Motion One veya
  * Custom animation engine

* Component bazlı mimari

* Reusable slide wrapper yapısı

* Timeline için ayrı animasyon controller

---

# 📌 Özet

Bu proje klasik bir CV sitesi değildir.

Bu proje:

* Scroll driven
* Animasyon merkezli
* Timeline odaklı
* Sinematik geçişlere sahip
* Hikâye anlatan bir deneyimdir

En kritik bölüm:
👉 Timeline zoom-in / zoom-out animasyon sistemi
👉 Slide geçiş akıcılığı
