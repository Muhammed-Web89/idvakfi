export interface StaticArticle {
  id: number
  slug: string
  title: string
  date: string
  author: string
  readTime: string
  excerpt: string
  category: string
  content: string // Markdown or HTML representation
  toc: { label: string; id: string }[]
}

export const staticArticles: StaticArticle[] = [
  {
    id: 101,
    slug: 'kim-vakfi-ortak-istisare-kararlari',
    title: 'Kim Vakfı ve İslami Davet Vakfı Ortak İstişare Toplantısı Kararları',
    date: '17.01.2026',
    author: 'İSDAV & KİM Vakfı',
    readTime: '6 dk',
    category: 'İstişare Kararları',
    excerpt: 'KİM Vakfı ile İslami Davet Vakfı ortak istişare toplantısında alınan 15 dilde davet, alim yetiştirme ve iş birliği kararlarının stratejik değerlendirmesi.',
    toc: [
      { label: '1. Giriş ve İş Birliği Kararları', id: 'giris-is-birligi' },
      { label: '2. İlim ve Davetçi Yetiştirme Çalışmaları', id: 'ilim-davetci' },
      { label: '3. Kurumsal Teşkilatlanma ve Medya Stratejisi', id: 'kurumsal-medya' },
      { label: '4. Sonuç ve Gelecek Projeksiyonu', id: 'sonuc-projeksiyon' }
    ],
    content: `
### 1. Giriş ve İş Birliği Kararları
- KİM Vakfı ve İslami Davet Vakfı her konuda iş birliği içinde çalışalım, imkanlarımızı birlikte kullanıp daveti hızlandırıp yaygınlaştıralım diye düşündüğümüzü belirledik.
- Hedefimiz ümmetin uyanmasını ve birliğini sağlamak, insanlarımızın davet şuuru kazanmasına çalışmak olsun diye karar verdik.
- KİM Vakfı Gayrimüslimlere yönelik İslami davet yapıyor. Çalışmalarımızda 15 dilde davet şu anda yapılıyor, ekseri İngilizce olarak yapılan davet, içerde ve dışarıda çok önemi var. Bu yol güzel ama riskleri de var tabi ki olacak.
- Davetçi samimi olunca Allah ummadığı yerden yardım gönderir, yardımcı insanlar da verir. Peygamberimiz (s.a.v) *"Sizin vasıtanızla bir kişinin hidayete kavuşması sizin için şu dünya ve içindeki her şeyin sizin olmasından daha hayırlıdır."* buyurmuştur.
- Ehli sünnet ana çizgisine bağlı olmamız önemli, Hanefi fıkhının dahi bugün güncellenmesi gerektiğini düşünüyoruz.
- Birçok dernek ve vakıf bu işe destek veriyor ve iş birliği protokolü imzalıyoruz. Bunun sonunda birçok kurum ile (dernek ve vakıf ile) bu hizmeti yapacağız.
- İslami Davet Vakfı ile iş birliği yapan vakıflar ve dernekler çoğaldı, çoğalmaya da devam ediyor. Bu çalışma her türlü İslami çalışma yapanları ümmetin birliği amacında olduğu için kucaklıyor ve birlikte çalışmaya davet ediyor.
- Vakıflardan istediğimiz Zal Mahmut Paşa Külliyesi Eyüp'te bu teşkilatın merkezi olacak ve Eyüp Camii ise Anadolu'dan gelen Müslümanlar için çalışma zemini olsun istiyoruz.

### 2. İlim ve Davetçi Yetiştirme Çalışmaları
- İslam ülkelerinde nüfusa oranla alim sayısına bakılmalı. Alim, ümmetin bir konusunu çözüme kavuşturan muhlis bir insan demektir. Bugün İslam coğrafyasında bu konuda yetişkin insan (alim diyebileceğimiz) sayısı çok azdır. Adeta ümmet-i Muhammed birçok konuda sahipsiz vaziyettedir. Bizim ülkemizde verilere göre ümmetin derdi ile ilgilenen Alim sayısı 1/10.000 kişi bile değildir deniyor. Alim sınıfı günlük basit meseleler ile ilgilenir halde ve çok küçük konularda bile bir ve beraber olamıyorlar ki çözüm üzerinde çalışsınlar kanaatindeyiz.
- Bu davet işinde gönüllü çalışan gençler var ve bunlar eğitilmeli ve çoğaltılmalıdır. İman, ibadet, ihsan, ikram, irfan sahibi genç davetçileri çoğaltmak için çalışmalar yapalım, daveti görev bilen bir gençlik inşa edelim istiyoruz.
- Kim Vakfı bu konuda bir akademi de kurmak istiyor. İslami Davet Vakfı ile davetçi yetiştirelim diye karar verdik.
- Davet okulu yanında girişimci okulu, düşünce okulu, aile danışmanlığı okulu açılmasını bu çalışmalar için gerekli görüyoruz.
- Üniversite gençliğini önemseyelim, davet ile ilgili eğitimler yaparak gençleri davet şuurunda yetiştirelim istiyoruz.
- Diyanet teşkilatının açtığı İstanbul'da şu anda 90 adet gençlik merkezi vardır. Bunlarla iş birliği kuralım ve daveti gündemlerine getirelim istiyoruz.
- Bu İslami davet çalışmaları için özel bir eğitim kampının (ormanda) kurulması çok iyi olur. Gençlerin eğitilmesine zemin hazırlanmış olur kanaatindeyiz.

### 3. Kurumsal Teşkilatlanma ve Medya Stratejisi
- Bu davet çalışmaları teşkilatlı olmalı, kurumsal hale gelip daveti yaygın şekilde yapmamız lazımdır.
- Ahir zaman dolayısı ile kimse kimseye güvenemez halde olduğundan şimdi güven tesis eden bir kurum ve kurumun yöneticileri önemli oluyor.
- Yabancılardan oluşan davet elemanlarının durumunu özel olarak ele alıp kişisel bilgilerini saklı tutmanın önemli olduğunu anlıyoruz.
- İslami davet işi yapan müesseseler içinde bir manevi danışmanlık bölümü ihdas edilse faydalı olur.
- Davet ile ilgili AR-GE kurulmasını, Davet ile ilgili bilgi bankası kurulmasını öneriyoruz.
- İslami Davet çalışmalarını desteklemek için iktisadi işletmeler kurmamız gerektiğine inanyoruz.
- Davet çalışmalarını yürüten kurumların aylık gelirlerini geniş tabana yayıp öyle alması daha faydalı oluyor.
- Davet ile ilgili çalışmaların mutlaka bir medya bölümü olmalıdır.
- Kim Vakfı ve İslami Davet Vakfı'nın elinde kitaplar vardır. Bunları davet çalışmasında birlikte kullanalım istiyoruz.
- Kim Vakfı fiilen büyük camilerde İslami davet yapıyor, çok güzel bir çalışma. Camiler davet çalışmasının merkezi olmalıdır. (Kim Vakfı'nın yaptığı çalışma doğru ve verimli bir çalışmadır.)

### 4. Sonuç ve Gelecek Projeksiyonu
- Bugün mevcut cemaatler İslami davetin bir ucundan tutmalı ve bir kısmı içerde bir kısmı da dışarıda İslam'ın tebliği ile meşgul olmalıdır diye düşünüyoruz.
- 86 milyon nüfus içinde toplam 2 milyon cemaat ehli insanımız var, 84 milyon bizlerden İslami daveti bekliyor ki uyanalım ve bir ve beraber olalım diye.
- Bugün birçok İslam ülkesinin liderlerini yabancı istihbarat elemanları koruyor. Bu sebeple bu yabancılar yani koruma yapanlar istedikleri an koruyucuları bu liderlerin işlerini bitirebilirler. Kendi milletleri bunlara güvenmiyor, onlar da kendi milletlerine güvenmiyorlar. Yani devlet millet kaynaşması yok.
- Birçok ülkede (60 ülkede) halk bizden ama idareciler; halkına zulmeden kimseler, yani zalim insanlar. Bu sebeple İslam ümmetinde dağınıklık var. Sorunlarımıza ümmet olarak çözüm bulamadığımız için küçücük bir düşman ile bile (İsrail ile) baş edemez durumdayız.
- Her kurumun bir B planı da bulunmalı (Mesela bir savaş anında ne yapabilirizi) düşünmeliyiz.
- İslami Davet Vakfındaki asıl üyelerimizi (yetişkin insanlardan) çoğaltalım diye düşündük. Yurtdışından da onursal üyelerimizi artıralım niyetindeyiz.
- Tasavvuf cemaatleri ile iş birliği yapıyoruz, bu çalışmamızı da önemseyelim ve daveti gündem edelim istiyoruz.
`
  },
  {
    id: 102,
    slug: 'ikinci-istisare-toplantisi-raporu',
    title: 'U. İslami Davet Vakfı 2. İstişare Toplantısı: Stratejik Değerlendirme ve Kapsamlı Özet Raporu',
    date: '14.02.2026',
    author: 'Ömer Faruk OCAKZADE',
    readTime: '9 dk',
    category: 'Stratejik Raporlar',
    excerpt: 'İstanbul Fatih\'te gerçekleştirilen 2. İstişare Toplantısı\'nda ele alınan Güney Kore özelindeki dini diplomasi, tarihsel kazanımlar, ve kurumsal vizyon körlüğü üzerine analitik durum raporu.',
    toc: [
      { label: '1. Giriş ve Kurumsal Vizyon', id: 'giris-vizyon' },
      { label: '2. Güney Kore\'de İslam\'ın Gelişimi', id: 'kore-gelisim' },
      { label: '3. Kurumsal Vizyon Körlüğü ve Diplomatik Atalet', id: 'diplomatik-atalet' },
      { label: '4. Misyonerlik ve Küresel Güç Dengeleri', id: 'kuresel-dengeler' },
      { label: '5. İdeolojik Sabotajın Maliyeti', id: 'ideolojik-sabotaj' },
      { label: '6. Stratejik Yol Haritası ve Hedefler', id: 'yol-haritasi' }
    ],
    content: `
### 1. Giriş ve Kurumsal Vizyon
- Uluslararası İslami Davet Vakfı, 14 Şubat 2026 tarihinde İstanbul Fatih'teki İnsan ve İlim Vakfı merkezinde 2. İstişare Toplantısını gerçekleştirmiştir.
- Oturumun ana konuşmacısı, Seul'de görev yapmış eski Dini Ataşe Süleyman Elik olmuş; toplantıda ümmetin birliği için davet çalışmalarının stratejik önemi masaya yatırılmıştır.
- Vakfın vizyonu, basit bir tebliğ faaliyetinin ötesinde, "medeniyet kurma iddiası" ve küresel ölçekte ümmetin dertleriyle dertlenen proaktif bir yapı üzerine inşa edilmiştir.
- Bu rapor, vakfın küresel hedeflerini Güney Kore özelindeki vaka analizi üzerinden değerlendirerek, tarihsel kazanımların güncel bürokratik zafiyetlerle nasıl gölgelendiğini ve geleceğe dönük hangi stratejik adımların atılması gerektiğini ortaya koymaktadır.

### 2. Güney Kore'de İslam'ın Tarihsel Gelişimi ve Mevcut Durumu
- İslam'ın Kore Yarımadası'ndaki varlığı, Ertuğrul Gemisi'ne kadar uzanan ve savaşın yakıcılığında bile sönmeyen bir manevi mirastır.
- Süreç, dört dil bilen ve halk arasında "General İmam" olarak efsaneleşen İmam Subay'ın öncü faaliyetleriyle başlamıştır.
- Ancak asıl stratejik kırılma, 1952 Kore Savaşı'nda Türk askerinin sergilediği "asimetrik başarı" ve manevi duruşla yaşanmıştır.

**Stratejik Göstergeler:**
- **Askeri Başarı ve Maneviyat:** 5.000 Türk askeri, 30.000 kişilik Kuzey Kore birliğine karşı üstünlük kurmuş; 460 şehidimiz Seul'deki şehitlikte yer almaktadır.
- **Kitlesel İhtida (1952):** Türk askerinin karakteri ve kurduğu yetimhaneler vesilesiyle savaş ortasında 11.000 kişi Müslüman olmuştur.
- **Güncel Demografi:** 250.000 Koreli Müslüman, 100.000 Özbek, 40.000 Kazak ve yaklaşık 500 Türk vatandaşı.
- **Altyapı ve Tesisler:** 21 Büyük Cami, 300 Mescit. Seul Merkez Cami 40 milyon dolara mal olmuştur.
- **Bölgesel Benchmark (Japonya):** Nimetullah Yurt öncülüğünde 2000-2020 arası 100.000 Japon ihtida etmiş, cami sayısı 401'e ulaşmıştır.

### 3. Kurumsal Vizyon Körlüğü ve Diplomatik Atalet
- Dini diplomasi, bir devletin yumuşak güç unsurlarının zirvesidir; ancak Güney Kore sahasında yaşananlar, Türkiye'nin merkez bürokrasisi ile saha gerçekleri arasındaki "stratejik kopukluğu" belgelemektedir.
- **Stratejik Taşınmaz Kaybı:** Kore yönetimi tarafından Türk tarafına hibe edilen 600 dönümlük "Ankara Okulu" arazisi, Dışişleri ve ilgili kurumların takipsizliği nedeniyle Katolik Kilisesi/Park yönetimine kaybedilmiştir. Bu, bir ihmalden ziyade stratejik bir varlık yönetimi zafiyetidir.
- **Kaynak Tahsis Hatası:** 40 milyon dolara mal olan Seul Merkez Camii için Diyanet'in yalnızca 100.000 dolar katkı sunması (İHH gibi STK'ların gerisinde kalması), kurumun küresel vizyon derinliğini sorgulatmaktadır.
- **Personel ve Bütçe Politikası:** Görevlendirilen din görevlilerine öngörülen 2000 dolarlık maaş, Kore hayat standartlarında yaşam mücadelesine dönüşmekte; bu durum "davet" çalışmalarını profesyonellikten uzaklaştırarak kişisel hayatta kalma çabasına indirgemektedir.
- **Model Etkisizliği:** Melih Gökçek desteğiyle yapılan "Türk Evi" modelinin resmi Büyükelçilikten daha efektif çalışması, bürokratik hantallığın yerel/sivil dinamiklerle aşılma zorunluluğunu kanıtlamaktadır.

### 4. Sosyo-Kültürel Tehdit Analizi: Misyonerlik ve Küresel Güç Dengeleri
- Güney Kore, ABD'den sonra dünyanın en agresif ikinci misyonerlik merkezidir. Bugün Kore, sadece teknoloji değil, K-Pop, K-Drama ve burs programları üzerinden sistematik bir inanç ihracı gerçekleştirmektedir.
- **Misyonerlik Operasyonları:** Kore, Türkiye'ye 250 özel misyoner göndermiş olup, ülkemizde toplam 6.000 Hristiyan misyoner aktif faaliyet yürütmektedir. Moğolistan örneğinde Hristiyan nüfusun %3'ten %40'a çıkarılması, tehdidin büyüklüğünü göstermektedir.
- **Gençlik ve Eğitim Tuzağı:** Özellikle İmam Hatip öğrencileri hedef alınarak; müzik ve dizi kültürüyle Koreceye, oradan da burs vaatleriyle inanç değişimine giden bir yol haritası izlenmektedir.
- **"Bait and Switch" (Tuzak Evlilikler):** Makedonya'da üniversite okuyan genç kızımızın 40 yaşındaki bir Koreli ile evlendirilip Seul sokaklarına terk edilmesi vakası, meselenin münferit olmadığını gösterir. "Müslüman oldum" yalanıyla evlenen ve ardından ateist olduğunu açıklayanların mağdur ettiği 900 Türk kızı ve benzeri Arap kökenli kadınlar, demografik bir yaradır.
- **Jeopolitik Baskı:** Bölgede 28.000 ABD askerinin varlığı ve 1.5 milyon askeri kapsayan stratejik anlaşmalar, Kore'nin küresel güçlerin "stabilizatör" alanı olduğunu ve Türkiye'nin buradaki etkisinin neden sistematik olarak baskılandığını açıklamaktadır.

### 5. Ekonomik ve İdari Karşılaştırma: İdeolojik Sabotajın Maliyeti
- Güney Kore'nin 1956'dan bugüne gösterdiği gelişim ile Türkiye'nin 1923'ten bu yana katettiği yol kıyaslandığında ortaya çıkan 30 yıllık fark, bir "zihniyet analizi" gerektirmektedir.
- **Diplomatik Asimetri:** Türkiye'nin en büyük dış ticaret açığı Kore'yedir. Kore bizden mal almamakta, gümrük vergileriyle engel koymakta ancak ülkemize devasa satışlar yapmaktadır. Bu, dini ve ekonomik çıkarların aynı anda kaybedildiği bir asimetridir.
- **İdeolojik Sabotaj:** Kore "Devlet-Millet-Şirket" üçlüsüyle küresel dominasyon hedeflerken; Türkiye'de bürokrasinin (rektörler, profesörler) 30 yıl boyunca milletin inancıyla ve başörtüsüyle kavga etmesi, ülkeye mal olmuş bir "zaman suikastıdır".

### 6. Stratejik Yol Haritası: Hedef 2026 ve Ötesi
- Vakfın davet metodolojisi, savunmacı refleksten çıkıp "Hücumcu Tebliğ" anlayışına geçmeyi şart koşmaktadır. Bu doğrultuda aşağıdaki Stratejik Hedefler (KPI) belirlenmiştir:
  - **İç Uyanış Targeti:** Türkiye'deki 86 milyonun 80 milyonuna (İslam'ı şuurla yaşamayan kesim) STK ve cemaatler aracılığıyla ulaşılması.
  - **Ümmet Birliği (KPI: 86M x 25):** Türkiye'deki her bir birimin küresel ölçekte 25 Müslümanla bağ kurarak 2.15 milyarlık İslam dünyasında tevhid birliğini sağlaması.
  - **Küresel Davet (KPI: 86M x 75):** Türkiye'deki her birimin 75 gayrimüslime ulaşması stratejisiyle, 6.45 milyar insana İslam'ın hakikatlerini taşıma vizyonu.
  - **Operasyonel Dönüşüm:** Dil bilen, yüksek şuurlu ve maddi kaygıları devlet tarafından minimize edilmiş profesyonel kadroların yetiştirilmesi.
- **Acil Çağrı:** Türkiye, kendi iç çekişmelerini bir kenara bırakarak "Devlet-Millet-Şirket-Diyanet" dörtlü sarmal (Quadruple Helix) modeline geçmelidir. Diyanet İşleri Başkanlığı'nın "projesizlik" ataletinden kurtulması ve devletin ekonomik gücüyle inanç değerlerini birleştirmesi hayati önem taşımaktadır.
`
  },
  {
    id: 103,
    slug: 'dorduncu-istisare-toplantisi-raporu',
    title: 'U. İslami Davet Vakfı 4. İstişare Toplantısı: Stratejik Sonuç Raporu',
    date: '17.05.2026',
    author: 'İSDAV Heyeti',
    readTime: '11 dk',
    category: 'Stratejik Raporlar',
    excerpt: '17 Mayıs 2026 tarihinde gerçekleştirilen 4. İstişare Toplantısı\'nda belirlenen küresel davet metodolojisi, eğitim altyapısı reformu ve ümmet birliği eylem maddeleri.',
    toc: [
      { label: '1. Giriş ve Stratejik Çerçeve', id: 'giris-cerceve' },
      { label: '2. Davet Hareketinin Metodolojik Disiplini', id: 'metodoloji' },
      { label: '3. Hilafet Vakumu ve Jeopolitik Zaruretler', id: 'hilafet-vakumu' },
      { label: '4. Küresel Operasyonel Modeller', id: 'kuresel-modeller' },
      { label: '5. Hedef Kitle Matrisi ve Sektörel Entegrasyon', id: 'hedef-kitle' },
      { label: '6. Kurumsal Mimari ve Eğitim Reformu', id: 'egitim-reformu' }
    ],
    content: `
### 1. Giriş ve Stratejik Çerçeve
- İslam dünyasının mevcut jeopolitik ve sosyo-kültürel parçalanmışlığı, "Ümmetin Birliği" vizyonunu romantik bir idealden öte, bir "beka zarureti" haline getirmiştir.
- 17 Mayıs 2026 tarihinde gerçekleştirilen 4. İstişare Toplantısı, davet (tebliğ) faaliyetlerini bu birliğin kurucu unsuru olarak belirlemiş ve metodolojik bir çerçeveye oturtmuştur.
- Bu rapor, Anadolu merkezli bir uyanışın küresel ölçekte nasıl bir kurumsal mimariye dönüştürüleceğini analiz etmektedir.

**Tarihi Referans Noktaları ve Anadolu Liderliği:**
- **Sahabe Mobilizasyonu:** İslami davetin stratejik kökeni Veda Hutbesi'ndeki mobilizasyon kapasitesinde saklıdır. Hutbeyi dinleyen yaklaşık 120.000 sahabeden 110.000'inin, mesajı dünyaya yaymak adına anavatanlarını terk ederek yeryüzüne dağılması, tarihin en büyük "stratejik fedakarlık" ve "küresel dağılım" operasyonudur. Günümüz davet hareketleri, bu kitlesel hareketlilik ruhunu modern teşkilat modelleriyle birleştirmek zorundadır.
- **Anadolu Kutup Yıldızı:** Anadolu, bugün 2 milyar Müslüman için sadece bir coğrafya değil, siyasi ve manevi bir "kutup yıldızıdır". Türkiye'deki İslami çalışmaların ulaştığı seviye, tüm İslam coğrafyası için bir önderlik potansiyeli taşımaktadır. Bu potansiyelin kinetik bir güce dönüşmesi, davet faaliyetlerinin "ilkeli bir hareket" disipliniyle kurumsallaşmasına bağlıdır.

### 2. Davet Hareketinin Metodolojik Disiplini ve Etik Kodları
- Bir hareketin küresel bir aktöre dönüşmesi, iç disiplininin ve etik sınırlarının netliğine bağlıdır. Rastgele yürütülen faaliyetler yerine, ölçülebilir ve denetlenebilir bir metodoloji esas alınmalıdır.

**Ümmetin İç Bütünlüğünü Koruma İlkeleri:**
- **Negatif Söylemin Reddi:** Hiçbir üye, diğer Müslüman grupların veya fertlerin aleyhinde konuşmayacaktır.
- **Çatışmasızlık Prensibi:** Haklı olunan durumlarda dahi Müslüman kardeşlerle münakaşaya girilmeyecektir.
- Bu iki ilke, enerjinin iç çekişmelerde tüketilmesini engelleyerek tüm gücün dışa dönük davet stratejisine kanalize edilmesini sağlar.
- **"A Takımı" Hedefi:** Davet süreci, toplumun her kesimini kucaklamakla birlikte, Müslüman ülkelerdeki karar verici mekanizmaların, entelektüellerin ve nüfuz sahibi lider kadroların (A Takımı) sisteme entegre edilmesine odaklanmalıdır. Nitelikli kadroların kazanılması, hareketin toplumsal kabulünü geometrik olarak artıracaktır.

### 3. Jeopolitik Zaruretler: Merkezi Otoritenin İhyası ve Hilafet Vakumu
- Ümmetin son bir asırdır yaşadığı krizlerin temelinde, 1924 yılında Hilafetin kaldırılmasıyla oluşan stratejik boşluk yer almaktadır. Bu boşluk, küresel güç dengeleri tarafından sistematik olarak sömürülmektedir.
- **Tarihsel Kırılma:** İngilizlerin stratejik dayatmasıyla Hilafetin TBMM'ye devredilmesi ve ardından ilga edilmesi, İslam dünyasının "başının kesilmesi" anlamına gelmektedir. Bu durum, Batılı güçlere "bir asırlık bir imkanlar bahşetmiş", Asya, Afrika ve Anadolu'da on milyonlarca Müslüman'ın savunmasız kalarak şehit edilmesine zemin hazırlamıştır.
- **Kurumsal Merciden Mahrumiyet:** Hristiyan dünyası Papalık, Yahudi dünyası ise Hahamlık kurumlarıyla merkezi otoritelerini korurken, Müslümanların bu merciden mahrum bırakılması planlı bir zayıflatma stratejisidir.
- **60 Ülkelik Parçalanmışlık:** Günümüzde 60 farklı ülkeye dağılmış olan ümmetin tek bir çatı altında toplanması, emperyalist güçler için bir "hayat memat meselesi" olarak görülmektedir. Mısır ve Suudi Arabistan gibi aktörlerin bu liderliği devralma çabaları, İngiliz vesayeti tarafından engellenmiştir. İslami Davet Vakfı'nın öncelikli görevi, bu bilinçsizlik perdesini yırtmak ve halifelik çatısının küresel adaletin yegane teminatı olduğunu kitlelere anlatmaktır.

### 4. Küresel Operasyonel Modeller ve Bölgesel Yaklaşımlar
- **Pakistan (Tebliğ Cemaati):** Kelime-i Tevhid, Namaz, İlmihal, İkram, İhlas ve Sefer (Yeryüzüne dağılma) prensipleriyle milyonları mobilize eden bir güç. Masonik yapılar dahi bu hareketin metodolojik gücünden etkilenerek benzer örgütlenme modellerini incelemeye almıştır.
- **Mısır & Sudan (İhvan-ı Müslimin):** Hasan el-Benna'nın Şazeli tarikatı kökenli tasavvufi derinliği ile toplumsal teşkilatlanmayı birleştiren modeli.
- **Yemen (Zindani Modeli):** Abdulmecid Zindani'nin kurduğu üniversite, medrese eğitimi ile akademik disiplini birleştirerek "tebliğ derslerini" müfredata dahil eden özgün bir "Davet Merkezi" örneğidir.
- **İspanya (Endülüs Mirası):** Avrupa Birliği içerisinde davet için en elverişli zemin olarak tanımlanmıştır. İspanyolların "atalarının Müslüman olduğu" gerçeğiyle kurdukları tarihsel bağ, bölgedeki ihtida oranlarını artıran stratejik bir unsurdur.

**Pakistan Tebliğ Modeli Zaman Çizelgesi:**
- **Kısa Dönem Seferler (3-5-7 Gün):** Yerel farkındalık ve sünneti yaşama.
- **Orta Dönem Seferler (10-15 Gün):** Bölgesel ağ kurma ve eğitim.
- **Uzun Dönem Seferler (30 Gün):** Derinlemesine tebliğ ve kadro yetiştirme.
- **Rutin İstişare (Her Perşembe):** Yerel hücre birliği ve durum analizleri.

### 5. Hedef Kitle Matrisi ve Stratejik İnsan Kaynağı Yönetimi
- **"5 Erkek - 5 Hanım" Formülü:** Asr-ı Saadet'te Mekke'nin en etkili isimlerinin kazanılmasıyla başlayan süreç, günümüze "toplumun en etkili 5 erkek ve 5 hanımı" formülüyle uyarlanmalıdır. İş adamları, alimler ve devlet adamları üzerinden yürütülecek bu süreç, stratejik evliliklerin birleştirici gücüyle de desteklenmelidir.
- **Çift Yönlü Nesil Stratejisi:**
  - *Defansif Strateji:* Kendi "İslam büyüklerimizin" çocuklarını düşman ideolojilere ve küresel akımlara kaptırmamak.
  - *Ofansif Strateji:* Gayrimüslim dünyanın lider kadrolarının ve onların çocuklarının hidayetine vesile olacak projeler geliştirmek.
- **Sektörel Entegrasyon:**
  - *Turizm:* Turist rehberlerinin birer "kültür ve davet elçisi" olarak yetkinleştirilmesi.
  - *Kültür & Sanat:* Sinema, müzik ve sporun davet dilinin estetize edilmesinde araç olarak kullanılması.
  - *Esnaf Teşkilatı:* Ticari ahlakın (Ahilik benzeri) davet sahasında bir "canlı tebliğ" mekanizması haline getirilmesi.
  - *Muhacir Deneyimi:* Son 10-15 yılda Türkiye'de yaşanan Ensar-Muhacir etkileşimi, iki halkın birbirini geliştirdiği ve kaynaştığı başarılı bir laboratuvar olarak tüm İslam dünyasına model olarak sunulmalıdır.

### 6. Kurumsal Mimari ve Eğitim Reformu Projeksiyonu
- Vakfın gelecekteki kurumsal yapısı, Türkiye'nin muazzam öğrenci potansiyelini (18-20 milyon öğrenci) yönetebilecek kapasitede olmalıdır.
- **Eğitim Altyapısında Radikal Dönüşüm:**
  - *Kapasite Artırımı:* Mevcut 210 olan üniversite sayısının, bölgesel etki projeksiyonuna göre 800 ila 1000 bandına çıkarılması hedeflenmelidir.
  - *Dil ve Gaye:* İlahiyat fakültelerinde diller sadece akademik bir araç değil, "davet gayesi" ile öğretilmelidir.
  - *Medrese-Üniversite Entegrasyonu:* Medrese mezunlarının üniversite sistemine master ve doktora ile dahil olduğu model Türkiye'ye uyarlanmalıdır.
- **Organizasyon Yapıları:**
  - *Gençlik ve Hanımlar Koordinatörlüğü:* 18-20 milyonluk öğrenci kitlesine yönelik özel stratejiler.
  - *Kardeş Kuruluşlar ve Medreseler Birimi:* Yerel ve küresel sivil toplum ağlarının entegrasyonu.
  - *Bölgesel Çalışma Grupları:* Her bir İslam ülkesi ve stratejik gayrimüslim bölgeler (özellikle AB ve Rusya) için ayrı masalar.
- **Acil Eylem Maddeleri:**
  - *Orman Eğitim Kampları:* Davetçiler için doğayla iç içe, yoğunlaştırılmış "manevi ve stratejik" kamp programları.
  - *Onursal Üyelik Sistemi:* Küresel çapta etkili isimlerin vakıf bünyesinde onore edilerek etki alanının genişletilmesi.
  - *Mobil Davet Timleri:* Belirlenen hedeflere yönelik düzenli seferler gerçekleştirecek gönüllü grupların teşkili.
`
  }
]
