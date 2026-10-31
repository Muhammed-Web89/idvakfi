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
    id: 1,
    slug: 'islam-ve-modernite-uzlasma-mi-catisma-mi',
    title: 'İslam ve Modernite: Uzlaşma mı, Çatışma mı?',
    date: '12 Temmuz 2026',
    author: 'Prof. Dr. Orhan Çeker',
    readTime: '8 dk',
    category: 'KELAM',
    excerpt: 'Çağdaş dünyada İslami değerlerin yeri ve önemi üzerine kapsamlı bir inceleme. Ümmetin birliği için entelektüel bir çerçeve önerisi.',
    toc: [
      { label: '1. Giriş ve Kavramsal Çerçeve', id: 'giris' },
      { label: '2. Modernitenin Meydan Okumaları', id: 'meydan-okuma' },
      { label: '3. İslami Düşüncede Metodolojik Denge', id: 'metodoloji' },
      { label: '4. Sonuç ve Öneriler', id: 'sonuc' }
    ],
    content: `
### 1. Giriş ve Kavramsal Çerçeve
İslam düşüncesi tarih boyunca karşılaştığı farklı medeniyet ve düşünce sistemleriyle derinlikli bir diyalog ve eleştirel bir temas içerisinde olmuştur. Modern dönemde de vahyin rehberliğinde aklın ve ilmin imkanlarını kullanarak insanlığa huzur ve adalet reçetesi sunma misyonunu sürdürmektedir.

### 2. Modernitenin Meydan Okumaları
- Modernite, bireyi merkeze alırken manevi derinliği ve aşkın hakikatleri göz ardı etme riski taşır.
- İslami davet ise adaleti, ahlakı ve tevhidi insanın fıtratıyla buluşturmayı hedefler.
- Bu çerçevede çatışmacı bir reddediş veya edilgen bir teslimiyet yerine, köklü ilkeler doğrultusunda inşa edici bir duruş sergilenmelidir.

### 3. İslami Düşüncede Metodolojik Denge
Akademik birikimimiz ve köklü usul mirasımız, çağın sorularına sarih ve tutarlı cevaplar üretmemize zemin hazırlamaktadır. Kelam ve usul-i fıkıh disiplinleri, çağdaş problemlere ilmi çözümler üretmekte en güçlü rehberimizdir.

### 4. Sonuç ve Öneriler
Ümmetin birliği ve insanlığın hidayeti için ilmi çalışmaları geniş kitlelere ulaştırmak, davet şuurunu çağın diliyle tahkim etmek en öncelikli vazifemizdir.
`
  },
  {
    id: 2,
    slug: 'kuran-yorumlamada-cagdas-metodoloji-yaklasimlari',
    title: 'Kur\'an Yorumlamada Çağdaş Metodoloji Yaklaşımları',
    date: '08 Temmuz 2026',
    author: 'Prof. Dr. Saim Ayaz',
    readTime: '12 dk',
    category: 'TEFSİR',
    excerpt: 'Tefsir ilminde modern dönemde ortaya çıkan yeni yöntemler ve geleneksel anlayışla ilişkisi üzerine bir değerlendirme.',
    toc: [
      { label: '1. Tefsir İlminin Tarihsel Derinliği', id: 'tarihce' },
      { label: '2. Çağdaş Yorum Metotları', id: 'metotlar' },
      { label: '3. Metin ve Bağlam Uyumu', id: 'metin-baglam' },
      { label: '4. Davet Dilinde Kur\'an Anlayışı', id: 'davet-dili' }
    ],
    content: `
### 1. Tefsir İlminin Tarihsel Derinliği
Kur'an-ı Kerim, kıyamete kadar insanlığın yolunu aydınlatan evrensel bir hitaptır. Sahabe ve tabiun döneminden itibaren gelişen tefsir geleneği, metnin lafız ve mana zenginliğini koruyarak çağlara taşımıştır.

### 2. Çağdaş Yorum Metotları
Günümüz dünyasında ortaya çıkan sosyal ve entelektüel dinamikler, Kur'an'ın mesajının çağın insanına doğru aktarılmasında yeni metodolojik imkanlar sunmaktadır. Ancak bu yaklaşımlar, sahih rivayet ve lügavi derinlikten kopmadan yürütülmelidir.

### 3. Metin ve Bağlam Uyumu
Ayetlerin nüzul ortamı ile günümüz meseleleri arasında kurulan rabıta, davetçilerin muhatap kitleye hitabında hikmet ve basiret kazandırmaktadır.

### 4. Davet Dilinde Kur'an Anlayışı
Uluslararası İslami Davet Vakfı olarak, tefsir ilmini sadece akademik bir alan değil, yeryüzündeki tüm gönüllere hakikati ulaştıran canlı bir rehber olarak görüyoruz.
`
  },
  {
    id: 3,
    slug: 'kore-yarimadasinda-islamin-tarihsel-izleri',
    title: 'Kore Yarımadası\'nda İslam\'ın Tarihsel İzleri',
    date: '14 Şubat 2026',
    author: 'Doç. Dr. Abdulkadir Turan',
    readTime: '10 dk',
    category: 'DAVET',
    excerpt: '1952\'den günümüze Türk askerinin manevi duruşuyla başlayan ve bugün 21 camiye ulaşan Kore\'deki davet serüvenimiz.',
    toc: [
      { label: '1. Ertuğrul Gemisi ve İlk Temaslar', id: 'ertugrul' },
      { label: '2. 1952 Kore Savaşı ve Kitlesel İhtida', id: 'kore-savasi' },
      { label: '3. Kurumsal Gelişim ve Seul Camii', id: 'kurumsal-seul' },
      { label: '4. Gelecek Vizyonu ve Stratejik Hedefler', id: 'vizyon' }
    ],
    content: `
### 1. Ertuğrul Gemisi ve İlk Temaslar
İslam'ın Doğu Asya ve Kore Yarımadası'ndaki varlığı, Osmanlı döneminde Ertuğrul Fırkateyni'nin kutlu seferi ve fedakar davet öncülerinin çalışmalarıyla başlamıştır.

### 2. 1952 Kore Savaşı ve Kitlesel İhtida
1952 Kore Savaşı sırasında bölgeye intikal eden Türk tugayındaki kahraman askerlerimizin samimi ahlakı, kurdukları yetimhaneler ve tebliğ gayretleri neticesinde savaşın ortasında 11.000 Koreli Müslüman olmuştur. Bu tarihi olay, Asya davet vizyonumuzun en köklü ve parlak sayfalarından biridir.

### 3. Kurumsal Gelişim ve Seul Camii
Kore'de bugün 250.000 Müslüman bulunmakta, 21 büyük cami ve 300 mescit faaliyet göstermektedir. Seul Merkez Camii bu yapının kalbi konumundadır.

### 4. Gelecek Vizyonu ve Stratejik Hedefler
Vakfımız, Asya'nın kalbinde kök salmış bu manevi mirası eğitim kampları, öğrenci bursları ve davetçi yetiştirme programlarıyla geleceğe taşımaktadır.
`
  },
  {
    id: 4,
    slug: 'besinci-genisletilmis-istisare-toplantisi',
    title: '5. Genişletilmiş İstişare Toplantısı Sonuç Raporu',
    date: '04 Temmuz 2026',
    author: 'İSDAV Heyeti',
    readTime: '7 dk',
    category: 'İstişare Toplantısı',
    excerpt: 'Gaye Vakfı ev sahipliğinde, Dünya İlme Destek Vakfı ile birlikte "Ümmetin Birliği ve Davetin Önemi" gündemiyle 70\'in üzerinde katılımcıyla gerçekleştirildi.',
    toc: [
      { label: '1. Toplantı Gündemi ve Katılımcılar', id: 'gundem' },
      { label: '2. Ümmetin Birliği ve İttifak İlkeleri', id: 'ummet-birligi' },
      { label: '3. Alınan Kararlar ve Eylem Planı', id: 'kararlar' }
    ],
    content: `
### 1. Toplantı Gündemi ve Katılımcılar
04 Temmuz 2026 tarihinde Gaye Vakfı merkezinde gerçekleştirilen 5. Genişletilmiş İstişare Toplantısı'nda, Türkiye genelinden ve Asya coğrafyasından 70'in üzerinde akademisyen, alim ve STK temsilcisi bir araya gelmiştir.

### 2. Ümmetin Birliği ve İttifak İlkeleri
Toplantıda, davet faaliyetlerinin parçalanmışlığı gideren en önemli birleştirici harç olduğu vurgulanmış; ortak hizmet protokollerinin kapsamı genişletilmiştir.

### 3. Alınan Kararlar ve Eylem Planı
- 15 dilde dijital davet platformunun kurulması.
- Genç davetçiler için orman eğitim kampı tahsisi çalışmalarının hızlandırılması.
- Uluslararası kardeş kuruluşlarla periyodik istişare mekanizmasının işletilmesi kararlaştırılmıştır.
`
  },
  {
    id: 5,
    slug: 'orman-egitim-kampi-calismalari',
    title: 'Orman Eğitim Kampı Tahsisi ve Gelişim Çalışmaları',
    date: '27 Haziran 2026',
    author: 'Ahmet Eroğlu (Yönetim Kurulu Üyesi)',
    readTime: '5 dk',
    category: 'Yönetim Kurulu',
    excerpt: 'Yönetim Kurulu Üyemiz Ahmet Eroğlu, Orman Genel Müdürlüğü ile görüşerek vakfımız için eğitim kampı yeri tahsisi çalışmalarına başladı.',
    toc: [
      { label: '1. Kamp Projesinin Amacı', id: 'amac' },
      { label: '2. Görüşmeler ve Tahsis Süreci', id: 'gorusmeler' },
      { label: '3. Eğitim Müfredatı ve Kapasite', id: 'mufredat' }
    ],
    content: `
### 1. Kamp Projesinin Amacı
Gençlerin doğayla iç içe, manevi ve stratejik derinlik kazandığı yoğunlaştırılmış eğitim ortamlarının oluşturulması vakfımızın öncelikli hedefleri arasındadır.

### 2. Görüşmeler ve Tahsis Süreci
Orman Genel Müdürlüğü ile yapılan resmi temaslar neticesinde, doğaya uyumlu, çevre dostu ve gençlerin her türlü sosyal-kültürel ihtiyacını karşılayacak eğitim kampı yerleşkesi için uygun sahalar belirlenmiştir.

### 3. Eğitim Müfredatı ve Kapasite
Kampta ilim, ahlak, dil eğitimi, liderlik ve davet şuuru alanlarında uzman hocalarımız tarafından periyodik eğitim modülleri uygulanacaktır.
`
  },
  {
    id: 101,
    slug: 'kim-vakfi-ortak-istisare-kararlari',
    title: 'Kim Vakfı ve İslami Davet Vakfı Ortak İstişare Toplantısı Kararları',
    date: '17 Ocak 2026',
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
- KİM Vakfı Gayrimüslimlere yönelik İslami davet yapıyor. Çalışmalarımızda 15 dilde davet şu anda yapılıyor, ekseri İngilizce olarak yapılan davet, içerde ve dışarıda çok önemi var.

### 2. İlim ve Davetçi Yetiştirme Çalışmaları
- Bu davet işinde gönüllü çalışan gençler var ve bunlar eğitilmeli ve çoğaltılmalıdır.
- İman, ibadet, ihsan, ikram, irfan sahibi genç davetçileri çoğaltmak için çalışmalar yapalım, daveti görev bilen bir gençlik inşa edelim istiyoruz.
- Üniversite gençliğini önemseyelim, davet ile ilgili eğitimler yaparak gençleri davet şuurunda yetiştirelim istiyoruz.

### 3. Kurumsal Teşkilatlanma ve Medya Stratejisi
- Bu davet çalışmaları teşkilatlı olmalı, kurumsal hale gelip daveti yaygın şekilde yapmamız lazımdır.
- Güven tesis eden bir kurum ve kurumun yöneticileri stratejik öneme sahiptir.
`
  },
  {
    id: 102,
    slug: 'ikinci-istisare-toplantisi-raporu',
    title: 'U. İslami Davet Vakfı 2. İstişare Toplantısı: Stratejik Değerlendirme ve Özet Raporu',
    date: '14 Şubat 2026',
    author: 'Ömer Faruk OCAKZADE',
    readTime: '9 dk',
    category: 'Stratejik Raporlar',
    excerpt: 'İstanbul Fatih\'te gerçekleştirilen 2. İstişare Toplantısı\'nda ele alınan Güney Kore özelindeki dini diplomasi, tarihsel kazanımlar ve kurumsal vizyon analizi.',
    toc: [
      { label: '1. Giriş ve Kurumsal Vizyon', id: 'giris-vizyon' },
      { label: '2. Güney Kore\'de İslam\'ın Gelişimi', id: 'kore-gelisim' },
      { label: '3. Stratejik Yol Haritası ve Hedefler', id: 'yol-haritasi' }
    ],
    content: `
### 1. Giriş ve Kurumsal Vizyon
Uluslararası İslami Davet Vakfı, 14 Şubat 2026 tarihinde İstanbul Fatih'te 2. İstişare Toplantısını gerçekleştirmiştir. Oturumun ana konuşmacısı, Seul'de görev yapmış eski Dini Ataşe Süleyman Elik olmuş; toplantıda ümmetin birliği için davet çalışmalarının stratejik önemi masaya yatırılmıştır.

### 2. Güney Kore'de İslam'ın Gelişimi
- 1952 Kore Savaşı sırasında Türk tugayının örnek ahlakı ve fedakarlığı vesilesiyle 11.000 kişi Müslüman olmuştur.
- Günümüzde Kore'de 250.000 Müslüman yaşamakta ve 21 cami bulunmaktadır.

### 3. Stratejik Yol Haritası ve Hedefler
Vakfın davet metodolojisi, dil bilen, yüksek şuurlu ve ehil kadrolarla Asya ve dünya genelinde tebliğ faaliyetlerini kurumsallaştırmayı hedeflemektedir.
`
  }
]
