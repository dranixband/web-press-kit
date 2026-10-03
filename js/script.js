// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Language switcher
const translations = {
  pl: {
    'nav.bio': 'Bio',
    'nav.photos': 'Zdjęcia',
    'nav.music': 'Muzyka',
    'nav.press': 'Prasa',
    'nav.download': 'Pobierz EPK',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Elektroniczny Press Kit',
    'hero.tagline': 'Najlepszy zespół metalowy na świecie - Modern Metal / Warszawa, Polska',
    'hero.listen': 'Słuchaj teraz',
    'hero.epk': 'Pobierz EPK',
    'bio.title': 'Biografia',
    'bio.p1': 'Powstały w Warszawie w 2025 roku zespół DRANIX, mający białoruskie korzenie, tworzy modern metal i metalcore łączący miażdżące breakdowny z elektronicznymi wpływami. Ich brzmienie z założenia łączy dwa światy - zwrotki po angielsku, a growle i krzyki po białorusku, co stanowi świadomą fuzję przenikającą tożsamość zespołu w każdym utworze.',
    'bio.p2': 'Już w pierwszym roku istnienia DRANIX wydał kilka singli i teledysk, tworząc brzmienie, które nie mieści się w jednym gatunku. Zespół pracuje teraz nad debiutanckim albumem, którego premiera planowana jest jeszcze w tym roku.',
    'bio.p3': 'DRANIX to Mikhail Shyrakou (gitara), Nikita Ivanov (wokal), Egor Sorokin (perkusja) i Alexander Razhechkin (bas) - czterech muzyków przekładających białoruskie dziedzictwo na język nowoczesnego metalu.',
    'bio.fact.formed': 'Powstanie',
    'bio.fact.genre': 'Gatunek',
    'bio.fact.languages': 'Języki',
    'bio.fact.languages.val': 'Wokal angielski, growle i krzyki po białorusku',
    'bio.fact.members': 'Skład',
    'bio.fact.releases': 'Wydawnictwa',
    'bio.fact.upcoming': 'Nadchodzi',
    'bio.fact.upcoming.val': 'Debiutancki album, koniec 2026',
    'bio.fact.based': 'Siedziba',
    'instrument.guitar': 'Gitara',
    'instrument.vocals': 'Wokal',
    'instrument.drums': 'Perkusja',
    'instrument.bass': 'Bas',
    'photos.title': 'Zdjęcia prasowe',
    'photos.hint': 'Zdjęcia w wysokiej rozdzielczości dostępne w pełnym pakiecie EPK poniżej.',
    'photos.band': 'Dranix - zdjęcie zespołu',
    'music.title': 'Muzyka',
    'music.live': 'Live',
    'music.video': 'Teledysk',
    'press.title': 'Prasa',
    'press.quote': '"iNTEGRAL łączy miażdżące riffy, zaawansowane technicznie melodyjne aranżacje i elementy elektroniczne w dystopijnej narracji o inteligencji, kontroli i tym, co się dzieje, gdy system przestaje być ludzki."',
    'press.about': 'o utworze',
    'press.readMore': 'przeczytaj pełną recenzję',
    'download.title': 'Pobierz Press Kit',
    'download.hint': 'Wszystko w jednym miejscu - dla promotorów, prasy i klubów.',
    'download.logo': 'Pakiet logo',
    'download.photos': 'Zdjęcia prasowe',
    'download.bio': 'Biografia zespołu',
    'download.rider': 'Rider techniczny',
    'download.drive': 'Google Drive',
    'rider.title': 'Rider techniczny Dranix',
    'rider.mics': 'Mikrofony',
    'rider.mics.val': 'Zestaw mikrofonów perkusyjnych',
    'rider.stands': 'Statywy',
    'rider.stands.val': '2 statywy gitarowe<br>1 statyw mikrofonowy',
    'rider.di': 'Gitara, bas, playback',
    'rider.di.val': 'Wszystko wpięte liniowo (DI)',
    'rider.monitors': 'Monitory',
    'rider.monitors.val': '2 monitory (dla gitarzysty i basisty z przodu sceny)',
    'contact.title': 'Kontakt i booking',
    'contact.text': 'W sprawach bookingu, prasy i pozostałych zapytań:',
    'contact.copied': 'Skopiowano!',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'lightbox.download': 'Pobierz',
    'pageTitle': 'DRANIX - Oficjalny Press Kit',
    'pageDescription': 'Oficjalny press kit zespołu metalowego Dranix. Biografia, zdjęcia, muzyka i kontakt.',
  },
  en: {
    'nav.bio': 'Bio',
    'nav.photos': 'Photos',
    'nav.music': 'Music',
    'nav.press': 'Press',
    'nav.download': 'EPK Download',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Electronic Press Kit',
    'hero.tagline': 'The Best Metal Band In The World - Modern Metal / Warsaw, Poland',
    'hero.listen': 'Listen Now',
    'hero.epk': 'Download EPK',
    'bio.title': 'Biography',
    'bio.p1': 'Formed in Warsaw, Poland in 2025, DRANIX is a band of Belarusian roots forging modern metal and metalcore that swings from crushing breakdowns to electronic dance influences. Their sound bridges two worlds by design - verses in English paired with growls and screams delivered in Belarusian, a deliberate fusion that carries the band\'s identity in every track.',
    'bio.p2': 'In their first year alone, DRANIX released several singles and a music video, building a sound that refuses to sit still inside one genre. The band is now deep in the studio, finishing a debut album due before the end of the year.',
    'bio.p3': 'DRANIX is Mikhail Shyrakou (guitar), Nikita Ivanov (vocals), Egor Sorokin (drums), and Alexander Razhechkin (bass) - four musicians channeling a Belarusian heritage through a modern metal lens.',
    'bio.fact.formed': 'Formed',
    'bio.fact.genre': 'Genre',
    'bio.fact.languages': 'Languages',
    'bio.fact.languages.val': 'English vocals, Belarusian growls & screams',
    'bio.fact.members': 'Members',
    'bio.fact.releases': 'Releases',
    'bio.fact.upcoming': 'Upcoming',
    'bio.fact.upcoming.val': 'Debut album, late 2026',
    'bio.fact.based': 'Based In',
    'instrument.guitar': 'Guitar',
    'instrument.vocals': 'Vocals',
    'instrument.drums': 'Drums',
    'instrument.bass': 'Bass',
    'photos.title': 'Press Photos',
    'photos.hint': 'High-resolution images available in the full EPK download below.',
    'photos.band': 'Dranix - band photo',
    'music.title': 'Music',
    'music.live': 'Live',
    'music.video': 'Music Video',
    'press.title': 'Press',
    'press.quote': '"iNTEGRAL fuses crushing riffs, highly technical melodic arrangements and electronic elements into a dystopian narrative about intelligence, control and what happens when a system stops being human."',
    'press.about': 'on',
    'press.readMore': 'read the full review',
    'download.title': 'Download Press Kit',
    'download.hint': 'Everything you need in one place - for promoters, press and venues.',
    'download.logo': 'Logo Pack',
    'download.photos': 'Press Photos',
    'download.bio': 'Band Bio',
    'download.rider': 'Technical Rider',
    'download.drive': 'Google Drive',
    'rider.title': 'Dranix Technical Rider',
    'rider.mics': 'Microphones',
    'rider.mics.val': 'Full drum microphone set',
    'rider.stands': 'Stands',
    'rider.stands.val': '2 guitar stands<br>1 microphone stand',
    'rider.di': 'Guitar, bass, playback',
    'rider.di.val': 'All signals run direct (DI)',
    'rider.monitors': 'Monitors',
    'rider.monitors.val': '2 monitors (for guitarist and bassist at the front of the stage)',
    'contact.title': 'Contact & Booking',
    'contact.text': 'For booking, press and all other inquiries:',
    'contact.copied': 'Copied!',
    'footer.rights': 'All rights reserved.',
    'lightbox.download': 'Download',
    'pageTitle': 'DRANIX - Official Press Kit',
    'pageDescription': 'Official electronic press kit for the metal band Dranix. Bio, photos, music and contact.',
  },
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.getElementById('pageTitle').textContent = dict.pageTitle;
  document.getElementById('pageDescription').setAttribute('content', dict.pageDescription);
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  localStorage.setItem('dranix-lang', lang);
}

document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem('dranix-lang');
if (savedLang && translations[savedLang]) {
  applyLanguage(savedLang);
}

// Copy email to clipboard
const emailCopy = document.getElementById('emailCopy');
const emailCopiedMsg = document.getElementById('emailCopiedMsg');
let emailCopiedTimeout;

emailCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(emailCopy.dataset.email).then(() => {
    emailCopiedMsg.classList.add('is-visible');
    clearTimeout(emailCopiedTimeout);
    emailCopiedTimeout = setTimeout(() => {
      emailCopiedMsg.classList.remove('is-visible');
    }, 2000);
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-reveal animations
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// Active nav link highlighting on scroll
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('[data-nav]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`[data-nav][href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  },
  { rootMargin: '-45% 0px -45% 0px' }
);

sections.forEach((section) => navObserver.observe(section));

// Mobile gallery swipe carousel
const galleryEl = document.getElementById('gallery');
const galleryItems = Array.from(document.querySelectorAll('.gallery__item'));
const galleryPrevBtn = document.getElementById('galleryPrev');
const galleryNextBtn = document.getElementById('galleryNext');
const galleryDots = document.getElementById('galleryDots');

galleryItems.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'gallery-dots__dot';
  dot.setAttribute('aria-label', `Photo ${index + 1}`);
  dot.addEventListener('click', () => scrollGalleryTo(index));
  galleryDots.appendChild(dot);
});

function getGalleryIndex() {
  const scrollLeft = galleryEl.scrollLeft;
  const itemWidth = galleryEl.clientWidth;
  return Math.round(scrollLeft / itemWidth);
}

function scrollGalleryTo(index) {
  const clamped = Math.max(0, Math.min(index, galleryItems.length - 1));
  galleryEl.scrollTo({ left: clamped * galleryEl.clientWidth, behavior: 'smooth' });
}

function updateGalleryDots() {
  const active = getGalleryIndex();
  galleryDots.querySelectorAll('.gallery-dots__dot').forEach((dot, i) => {
    dot.classList.toggle('is-active', i === active);
  });
}

galleryPrevBtn.addEventListener('click', () => scrollGalleryTo(getGalleryIndex() - 1));
galleryNextBtn.addEventListener('click', () => scrollGalleryTo(getGalleryIndex() + 1));
galleryEl.addEventListener('scroll', () => {
  clearTimeout(galleryEl._scrollTimeout);
  galleryEl._scrollTimeout = setTimeout(updateGalleryDots, 100);
});
updateGalleryDots();

// Photo lightbox
const galleryFrames = Array.from(document.querySelectorAll('.gallery__frame'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxDownload = document.getElementById('lightboxDownload');
const lightboxCounter = document.getElementById('lightboxCounter');

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

function updateLightbox() {
  const frame = galleryFrames[currentIndex];
  const src = frame.dataset.full;
  lightboxImg.src = src;
  lightboxImg.alt = frame.querySelector('img').alt;
  lightboxDownload.href = src;
  lightboxDownload.setAttribute('download', '');
  lightboxCounter.textContent = `${currentIndex + 1} / ${galleryFrames.length}`;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryFrames.length) % galleryFrames.length;
  updateLightbox();
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryFrames.length;
  updateLightbox();
}

galleryFrames.forEach((frame, index) => {
  frame.addEventListener('click', () => openLightbox(index));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});
