# Tasarım Dokümantasyonu

---

## 1. Genel Bakış

**Proje Türü:** Kişisel portfolyo / CV web sitesi  
**Hedef Kitle:** İşverenler, iş ortakları, veri bilimi alanındaki profesyoneller  
**Tasarım Dili:** Modern, minimal, teknik/profesyonel  
**Stil:** Koyu tema (dark mode), kurumsal ve güvenilir his veren bir görünüm

---

## 2. Renk Paleti

### Ana Renkler

| Renk | Hex | Kullanım Alanı |
|------|-----|----------------|
| **Primary (Mavi)** | `#0d9af2` | CTA butonları, vurgular, ikonlar, aktif durumlar |
| **Background Dark** | `#101b22` | Ana arka plan, koyu bölümler |

### Yardımcı Renkler

| Renk | Tailwind Sınıfı | Kullanım |
|------|-----------------|----------|
| Beyaz | `text-white` | Başlıklar, önemli metinler |
| Slate 100 | `text-slate-100` | Ana metin rengi |
| Slate 300 | `text-slate-300` | İkincil metin |
| Slate 400 | `text-slate-400` | Açıklama metinleri |
| Slate 500 | `text-slate-500` | Etiketler, alt bilgiler |
| Slate 600 | `text-slate-600` | Çok soluk metin |
| Slate 700 | `bg-slate-700` | Badge arka planları |
| Slate 800 | `bg-slate-800` | Kart arka planları, timeline çizgisi |
| Slate 900 | `bg-slate-900` | Derin gölgeler, overlay'ler |
| Emerald 500 | `text-emerald-500` | Başarı göstergeleri, "Business Impact" vurgusu |

### Opaklık Kullanımı

- `border-white/5` — İnce ayırıcı çizgiler
- `bg-primary/10`, `bg-primary/20` — Hafif vurgu arka planları
- `border-primary/20`, `border-primary/30` — Vurgulu kenarlıklar

---

## 3. Tipografi

### Font Ailesi

- **Ana Font:** Inter (Google Fonts)
- **Yedek:** `ui-sans-serif`, `system-ui`, `sans-serif`
- **Özellik:** `antialiased` — Yumuşak kenar yumuşatma

### Font Ağırlıkları

| Ağırlık | Tailwind | Kullanım |
|---------|----------|----------|
| Light (300) | `font-light` | Alt başlıklar |
| Medium (500) | `font-medium` | Normal vurgu |
| Semibold (600) | `font-semibold` | Önemli kelimeler |
| Bold (700) | `font-bold` | Etiketler, butonlar |
| Extrabold (800) | `font-extrabold` | Logo, bölüm başlıkları |
| Black (900) | `font-black` | Ana başlıklar |

### Tipografik Ölçek

| Element | Boyut | Sınıf |
|---------|-------|-------|
| Hero başlık | 6xl–8xl (60–96px) | `text-6xl md:text-8xl` |
| Bölüm başlıkları | 4xl–5xl (36–48px) | `text-4xl`, `text-5xl` |
| Alt başlık | xl–3xl (20–30px) | `text-xl md:text-3xl` |
| Gövde metni | base–lg (16–18px) | `text-base`, `text-lg` |
| Küçük metin | sm–xs (12–14px) | `text-sm`, `text-xs` |
| Mikro metin | 10px | `text-[10px]` |

### Letter Spacing

- `tracking-tighter` — Hero başlık
- `tracking-tight` — Ana başlıklar
- `tracking-wide` — Alt başlıklar
- `tracking-widest` — Etiketler, uppercase metinler
- `tracking-[0.2em]`, `tracking-[0.3em]` — Özel geniş aralık

---

## 4. Layout & Grid Sistemi

### Genel Yapı

- **Container:** `max-w-4xl` (Hero), `max-w-[1100px]` (Bölümler)
- **Padding:** `px-6 md:px-20 lg:px-40` — Responsive yatay boşluk
- **Section Spacing:** `py-24` — Dikey bölüm aralıkları

### Bento Grid (İlgi Alanları)

- **Mobil:** 1 sütun
- **Desktop:** 4 sütun × 2 satır
- **Sabit Yükseklik:** `md:h-[500px]`
- **Özel Span:** `md:col-span-2`, `md:row-span-2` ile asimetrik kartlar

### Experience Bölümü

- **Sidebar:** `lg:w-72` — Sabit genişlik
- **Timeline:** `lg:w-80` — Sabit genişlik
- **Ana İçerik:** `flex-1` — Esnek alan

---

## 5. Bileşenler & Bölümler

### 5.1 Navigation

- **Konum:** Fixed, üstte
- **Arka plan:** `bg-background-dark/80 backdrop-blur-md`
- **Kenarlık:** `border-b border-white/5`

### 5.2 Hero Section

- **Yükseklik:** Tam ekran (`h-screen`)
- **Arka plan:** Nokta desenli neural grid (`neural-bg`)
- **Gradient Overlay:** Yukarıdan aşağı transparan → koyu geçiş
- **Öğeler:**
  - Durum badge'i (Available for new projects) — Ping animasyonlu nokta
  - Ana isim başlığı
  - Rol alt başlığı
  - Skill pill'leri (NLP, Deep Learning, MLOps) — Glow efekti
  - Scroll indicator — Bounce animasyonlu ok
- **Kenar Öğeleri:**
  - Sol: Sosyal/araç ikonları (Share2, GitBranch, Code2)
  - Sağ alt: Sayfa göstergesi (01/04)

### 5.3 Experience Section

- **Layout:** 3 sütunlu (Sidebar | Timeline | Detay)
- **Sidebar:** Profil fotoğrafı, Download CV butonu, durum göstergesi
- **Timeline:** Dikey çizgi, yıllara göre kariyer adımları
- **Aktif Öğe:** Primary renk, glow, büyük nokta
- **Proje Kartı:** Business Impact badge, teknoloji ikonları, CTA butonları

### 5.4 Interests (Bento) Section

- **Başlık:** "Personal Odyssey" — "Interests & Beyond"
- **Kartlar:** Hover'da border-primary geçişi
- **Özel Kart:** Mountain Biking — Arka plan görseli (Unsplash)
- **Badge:** ELO 1800+ gibi küçük etiketler

### 5.5 Contact Section

- **Grid:** 4 sütunlu sosyal kartlar
- **Kartlar:** LinkedIn, GitHub, Kaggle, Email
- **Hover:** `hover:bg-primary/5 hover:border-primary`

### 5.6 Footer

- **Layout:** Flex, justify-between
- **Öğeler:** Logo, telif, linkler (Privacy, Cookies, Colophon), versiyon numarası

---

## 6. Görsel Efektler & Animasyonlar

### Arka Plan Desenleri

```css
/* Neural grid — 40×40px nokta deseni */
.neural-bg: radial-gradient(circle at 2px 2px, rgba(13,154,242,0.05) 1px, transparent 0);

/* Data viz — 32×32px nokta deseni */
.data-viz-bg: Aynı mantık, daha sık grid
```

### Glow Efektleri

- **Pill:** `box-shadow: 0 0 15px rgba(13, 154, 242, 0.3)`
- **Timeline aktif nokta:** `shadow-[0_0_15px_rgba(13,154,242,0.4)]`
- **Buton:** `shadow-lg shadow-primary/20`

### Motion (Framer Motion) Animasyonları

| Element | Giriş | Gecikme |
|---------|-------|---------|
| Hero içerik | opacity 0→1, y 20→0 | 0–0.8s kademeli |
| Badge | scale 0.9→1 | 0.2s |
| Skill pill'leri | opacity, y | 0.8s |
| Scroll indicator | opacity | 1.2s |
| Timeline öğeleri | opacity, x -20→0 | index × 0.1s |
| Bento kartları | opacity, scale 0.9→1 | index × 0.1s |

### Mikro Animasyonlar

- `animate-ping` — Durum noktası
- `animate-bounce` — Scroll ok
- `animate-pulse` — Emerald durum göstergesi

---

## 7. Responsive Tasarım

### Breakpoint Stratejisi

| Breakpoint | Özellikler |
|------------|------------|
| **Mobil** | Tek sütun, gizli sidebar ikonları, küçük tipografi |
| **md (768px)** | 2–4 sütun grid, daha geniş padding |
| **lg (1024px)** | 3 sütunlu experience, kenar öğeleri görünür |

### Gizlenen Öğeler

- `hidden md:flex` — RESUME butonu
- `hidden lg:flex` — Sol sosyal ikonlar
- `hidden lg:block` — Sağ sayfa göstergesi

### Esnek Layout

- `flex-col lg:flex-row` — Experience bölümü
- `grid-cols-1 md:grid-cols-4` — Bento grid

---

## 8. Etkileşim & Hover Durumları

| Element | Hover Efekti |
|---------|--------------|
| Butonlar | `hover:bg-primary/90` |
| Sosyal ikonlar | `hover:text-primary` |
| Bento kartları | `hover:border-primary/50` |
| Contact kartları | `hover:bg-primary/5 hover:border-primary` |
| Tech stack ikonları | `hover:scale-110 hover:border-primary/30` |
| Timeline (pasif) | `hover:opacity-100` |

### Seçim (Selection)

- `selection:bg-primary selection:text-white` — Metin seçiminde primary renk

---

## 9. Kenarlıklar & Köşeler

- **Butonlar:** `rounded-full` (pill) veya `rounded-lg`
- **Kartlar:** `rounded-xl`
- **Badge:** `rounded-full`
- **Genel border:** `border-white/5` — Çok ince, düşük kontrast

---

## 10. İkonografi

- **Kütüphane:** Lucide React
- **Boyutlar:** 14px, 18px, 20px, 32px
- **Renk:** `text-primary` veya `text-slate-500` (hover'da primary)

### Kullanılan İkonlar

- Network, Brain, Layers, Cpu, ChevronDown
- Share2, GitBranch, Code2, Download, Eye
- Terminal, Cloud, Database, Target, Bike
- Image, Sparkles, Mail, Home, Briefcase
- BarChart3, Linkedin, Github, ArrowLeft, ArrowRight

---

## 11. Erişilebilirlik Notları

- **Kontrast:** Koyu arka plan üzerinde açık metin — iyi okunabilirlik
- **Focus:** Varsayılan focus stilleri kontrol edilmeli
- **Alt metin:** Görsellerde `alt` kullanımı mevcut
- **Semantik:** `nav`, `section`, `aside`, `footer` kullanımı uygun

---

## 12. Öneriler & İyileştirme Alanları

1. **Başlık:** `index.html` içindeki "My Google AI Studio App" → "Alex Veri | Senior Data Scientist" olarak güncellenmeli
2. **Focus states:** Klavye navigasyonu için `focus:ring` vb. eklenebilir
3. **Loading:** Sayfa yüklenirken skeleton veya loading state düşünülebilir
4. **Dark/Light:** Şu an sadece dark mode; tercihe bağlı light mode eklenebilir
