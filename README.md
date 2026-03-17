<div align="center">
  <h1>🚐 Servis Aracım</h1>
  <p><b>Kurumsal ve Bireysel Ulaşım Çözümleri Platformu</b></p>
</div>

---

**Servis Aracım**, güvenli, konforlu ve zamanında ulaşım hizmetlerini en modern standartlarla sunmayı amaçlayan kapsamlı bir web platformudur. Çeşitli kapasitelere ve yolcu profillerine hitap eden, farklı ihtiyaçlara anında yanıt verebilen bir taşımacılık yönetim sistemidir. Kullanıcı dostu arayüzü sayesinde, hizmet türleri kolayca incelenebilir, detaylı bilgi alınabilir ve rezervasyon işlemleri için altyapı oluşturulabilir.

## 🚀 Proje Hakkında

Bu proje, müşteri taleplerine göre şekillenen profesyonel ulaşım kiralama süreçlerini yöneten kurumsal bir web sitesidir. İster şirket personellerinin düzenli taşınması, ister özel bir gün için tek seferlik lüks araç tahsisi olsun, her ihtiyaca yönelik çözümleri barındırır.

### Temel Hizmetlerimiz
- 🚐 **Servis Kiralama:** Şehir içi ve şehirler arası güvenli servis hizmetleri.
- 🚌 **Otobüs Kiralama:** Geniş yolcu grupları, turlar veya organizasyonlar için otobüs temini.
- 🏢 **Personel Taşımacılığı:** Şirket çalışanlarının işe gidiş-dönüş rotaları için dakik ulaşım imkanı.
- 🚐 **Minibüs Kiralama:** Şehir içi etkinlikler ve orta ölçekli gruplar için pratik seçenekler.
- 💎 **VIP Taşımacılık:** Özel misafirler, yöneticiler ve diplomatik konuklar için üst düzey lüks araçlar.
- 🎉 **Özel Etkinlik (Düğün, Piknik, Gezi):** Özel günlerinizin ulaşım stresinden arındırılması için özel şoförlü araç filoları.

## 🛠️ Mimari ve Teknolojiler

Proje, sağlamlığı, güvenliği ve genişletilebilirliği ile bilinen aşağıdaki teknolojiler kullanılarak geliştirilmiştir:

- **Backend / Sunucu Tarafı:** C# / .NET Runtime üzerinden ASP.NET MVC Mimarisi (Model-View-Controller)
- **Frontend / Kullanıcı Arayüzü:** HTML5, CSS3, JavaScript ile zenginleştirilmiş, Razor (`.cshtml`) tabanlı View katmanı
- **Veritabanı (Opsiyonel):** İhtiyaca göre Entitiy Framework teknolojisine uygun MS SQL / veya benzer bir ilişkisel veritabanı altyapısı
- **Geliştirme Ortamı:** Microsoft Visual Studio 2022

## 🌐 Altyapı ve Hosting Bilgileri

Kullanıcılarımıza kesintisiz, hızlı ve güvenli bir deneyim sunabilmek çok önemlidir. Bu nedenle projemizin tüm web altyapısı ve barındırma (hosting) işlemleri **Natro Sunucuları** üzerinden gerçekleştirilmektedir. 

Natro'nun kurumsal ve optimizasyonlu altyapısı sayesinde:
- Yüksek sayfa yüklenme hızı ve SEO avantajı sağlanır.
- Yoğun ziyaretçi trafiğinde bile web sitemiz stabil kalır.

## 📁 Proje Yapılandırması

Proje C# MVC kurallarına tam uyumlu olarak modüler bir düzende inşa edilmiştir:

- `/Controllers`: İstekleri karşılayan ve iş kurallarına yönlendiren kontrol sınıfları (Örn: `AraclarController`, `HizmetlerimizController`).
- `/Views`: Kullanıcı arayüzünü (HTML/CSS) oluşturan modüller (`Home`, `Hizmetlerimiz` vb. görünümler).
- `/Models`: Sistem verilerini (Araç özellikleri, vb.) modelleyen sınıflar.
- `/Scripts & /Content`: Projeye özgü stil şablonları, fontlar ve istemci tarafı kodları.

## ⚙️ Yerel Ortamda Kurulum

Projeyi kendi bilgisayarınızda çalıştırmak veya incelemek isterseniz aşağıdaki adımları kullanabilirsiniz:

1. Proje dosyalarını bilgisayarınıza indirin (ZIP veya Git vb. ile).
2. Ana dizindeki `Servisaracim.sln` dosyasını **Visual Studio 2022** ile açın.
3. Solution Explorer penceresinden projenize sağ tıklayın ve gereken üçüncü parti NuGet paketlerini tamamlamak için `Restore NuGet Packages` (Paketleri Geri Yükle) seçeneğini seçin.
4. Klavyenizden `F5` tuşuna basarak (veya Visual Studio menüsünden "Start Debugging") projeyi dahili IIS Express sunucusunda başlatın.
5. Tarayıcınızda açılan sayfada projenizi test etmeye başlayabilirsiniz.

## 🤝 Katkıda Bulunma

Bu bir kapalı kaynak kodlu ticari/kurumsal web projesidir. Proje ile ilgili güncelleme ve modifikasyon talepleri geliştirici ekibi tarafınca yürütülmektedir.

---

> 💡 **Geliştirici Notu:** Bu proje, kullanıcı sadakatini hedefleyen mükemmel bir kullanıcı deneyimi (UX) için tasarlanmıştır. Gelecekte sisteme rezervasyon takibi, online ödeme altyapısı veya araç takip (GPS) entegrasyonları gibi modüller ekleyerek projeyi daha da ileri taşıma vizyonumuz devam edecektir. 
