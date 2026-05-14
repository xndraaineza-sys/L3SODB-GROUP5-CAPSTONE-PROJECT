// ========= DATA =========
const books = [
  { id:1, title:"One Hundred Years of Solitude", author:"Gabriel García Márquez", genre:"fiction", year:1967, pages:417, rating:"4.9", color:["#1a3a6b","#c9503a"], tags:["Magical Realism","Latin America","Epic"], desc:"The Buendía family's multi-generational saga unfolds in the mythical town of Macondo, weaving together reality and fantasy in this landmark of world literature. A profound meditation on time, memory, and the cyclical nature of history." },
  { id:2, title:"Crime and Punishment", author:"Fyodor Dostoevsky", genre:"fiction", year:1866, pages:551, rating:"4.8", color:["#2d0a0a","#8b2020"], tags:["Psychological","Russian","Classic"], desc:"A destitute student commits a terrible crime and grapples with the psychological aftermath. Dostoevsky's masterpiece explores guilt, redemption, and the nature of morality with unparalleled depth." },
  { id:3, title:"Meditations", author:"Marcus Aurelius", genre:"philosophy", year:180, pages:254, rating:"4.7", color:["#2a3a1a","#4a6a2a"], tags:["Stoicism","Self-Help","Roman"], desc:"Private notes of the Roman Emperor Marcus Aurelius, offering timeless Stoic wisdom on virtue, resilience, and the conduct of a good life. Written for himself, gifted to the world." },
  { id:4, title:"Sapiens", author:"Yuval Noah Harari", genre:"history", year:2011, pages:443, rating:"4.6", color:["#3a1a00","#9b4a10"], tags:["History","Anthropology","Evolution"], desc:"A sweeping narrative of human history from the Stone Age to the present day, examining how biology and history have defined us. A bold, provocative exploration of what it means to be human." },
  { id:5, title:"A Brief History of Time", author:"Stephen Hawking", genre:"science", year:1988, pages:212, rating:"4.5", color:["#0a1a3a","#1a4a8a"], tags:["Physics","Cosmology","Space"], desc:"Hawking's groundbreaking exploration of the universe's fundamental questions — the origin of space and time, the nature of black holes, and the ultimate fate of the universe — made accessible to all." },
  { id:6, title:"Leaves of Grass", author:"Walt Whitman", genre:"poetry", year:1855, pages:152, rating:"4.6", color:["#1a3a00","#2a7a10"], tags:["American","Nature","Democracy"], desc:"Whitman's revolutionary collection that celebrates life, nature, and the democratic spirit of America. A joyful, all-encompassing vision of humanity and the cosmos, constantly revised throughout his lifetime." },
  { id:7, title:"To Kill a Mockingbird", author:"Harper Lee", genre:"fiction", year:1960, pages:324, rating:"4.8", color:["#3a2a10","#8a6a30"], tags:["Justice","Race","Coming-of-Age"], desc:"Through the eyes of Scout Finch, a young girl growing up in the American South, this Pulitzer Prize-winning novel confronts racial injustice and moral complexity with grace and power." },
  { id:8, title:"Thus Spoke Zarathustra", author:"Friedrich Nietzsche", genre:"philosophy", year:1883, pages:352, rating:"4.4", color:["#2a0a2a","#6a1a6a"], tags:["Existentialism","Superman","Philosophy"], desc:"Nietzsche's philosophical novel presents his most mature ideas through the prophet Zarathustra, exploring the will to power, eternal recurrence, and the creation of values in a godless world." },
  { id:9, title:"The Name of the Rose", author:"Umberto Eco", genre:"fiction", year:1980, pages:502, rating:"4.5", color:["#1a1a0a","#4a4a1a"], tags:["Mystery","Medieval","Semiotics"], desc:"Set in a 14th-century Italian monastery, a Franciscan friar investigates a series of mysterious deaths. A brilliant labyrinth of mystery, history, philosophy, and literary theory." },
  { id:10, title:"Cosmos", author:"Carl Sagan", genre:"science", year:1980, pages:365, rating:"4.8", color:["#0a0a2a","#1a1a6a"], tags:["Astronomy","Wonder","Philosophy"], desc:"Sagan's timeless exploration of the universe and humanity's place within it. With lyrical prose and profound insight, Cosmos connects the scientific, philosophical, and spiritual dimensions of existence." },
  { id:11, title:"The Iliad", author:"Homer", genre:"poetry", year:-750, pages:683, rating:"4.7", color:["#3a1a00","#c9973a"], tags:["Epic","Ancient Greek","War"], desc:"The foundational epic of Western literature, depicting the final weeks of the Trojan War with magnificent poetry, complex characters, and profound meditations on honor, mortality, and the nature of heroism." },
  { id:12, title:"Guns, Germs, and Steel", author:"Jared Diamond", genre:"history", year:1997, pages:498, rating:"4.5", color:["#0a2a0a","#1a6a1a"], tags:["Civilization","Geography","Anthropology"], desc:"A landmark exploration of why some civilizations came to dominate others, examining the role of geography, agriculture, and technology in shaping the course of human history." }
];

const paintings = [
  { id:1, title:"Starry Night", artist:"Vincent van Gogh", year:1889, style:"Post-Impressionism", emoji:"🌌", bg:["#0a1a3d","#1a3a7a","#c9973a"] },
  { id:2, title:"The Great Wave", artist:"Katsushika Hokusai", year:1831, style:"Ukiyo-e", emoji:"🌊", bg:["#0a2a4a","#1a5a8a","#e8e0d0"] },
  { id:3, title:"Girl with a Pearl Earring", artist:"Johannes Vermeer", year:1665, style:"Baroque", emoji:"👁", bg:["#1a0a00","#3a1a00","#c9973a"] },
  { id:4, title:"The Persistence of Memory", artist:"Salvador Dalí", year:1931, style:"Surrealism", emoji:"⏱", bg:["#8a7a50","#c9b87a","#2a4a6a"] },
  { id:5, title:"Water Lilies", artist:"Claude Monet", year:1906, style:"Impressionism", emoji:"🪷", bg:["#1a3a1a","#3a6a3a","#c9d4c0"] },
  { id:6, title:"The Birth of Venus", artist:"Sandro Botticelli", year:1485, style:"Renaissance", emoji:"🐚", bg:["#4a7a9b","#8abcd0","#f0e8d0"] }
];

const tracks = [
  { id:1, title:"Take Five", artist:"Dave Brubeck Quartet", genre:"Jazz", duration:"5:24", emoji:"🎷", color:["#1a0a2a","#3a1a5a"] },
  { id:2, title:"Clair de Lune", artist:"Claude Debussy", genre:"Classical", duration:"5:00", emoji:"🌙", color:["#0a1a2a","#1a3a5a"] },
  { id:3, title:"Strange Fruit", artist:"Billie Holiday", genre:"Blues", duration:"3:15", emoji:"🎵", color:["#1a0a00","#3a1a00"] },
  { id:4, title:"Bohemian Rhapsody", artist:"Queen", genre:"Rock", duration:"5:55", emoji:"🎸", color:["#1a1a00","#3a3a00"] },
  { id:5, title:"What a Wonderful World", artist:"Louis Armstrong", genre:"Jazz", duration:"2:19", emoji:"🌍", color:["#00101a","#001a3a"] },
  { id:6, title:"Moonlight Sonata", artist:"Ludwig van Beethoven", genre:"Classical", duration:"5:40", emoji:"🎹", color:["#0a0a1a","#1a1a3a"] }
];

const photos = [
  { id:1, title:"Golden Hour, Sahara", photographer:"Amara Diallo", location:"Morocco", height:"tall", emoji:"🏜", color:["#8a5a10","#c9973a"] },
  { id:2, title:"Misty Mountains", photographer:"Yuki Tanaka", location:"Japan", height:"short", emoji:"⛰", color:["#2a3a4a","#4a6a8a"] },
  { id:3, title:"Urban Solitude", photographer:"Léa Marchand", location:"Paris", height:"medium", emoji:"🌆", color:["#1a1a2a","#3a3a5a"] },
  { id:4, title:"Ocean's Breath", photographer:"Carlos Reyes", location:"Portugal", height:"tall", emoji:"🌊", color:["#0a2a4a","#1a5a8a"] },
  { id:5, title:"Monsoon Season", photographer:"Priya Nair", location:"India", height:"short", emoji:"🌧", color:["#1a2a1a","#3a5a3a"] },
  { id:6, title:"Northern Lights", photographer:"Erik Magnusson", location:"Iceland", height:"medium", emoji:"🌌", color:["#0a0a2a","#001a3a"] },
  { id:7, title:"Market at Dawn", photographer:"Fatima Al-Hassan", location:"Morocco", height:"tall", emoji:"🏪", color:["#3a1a00","#8a4a10"] },
  { id:8, title:"Silent Forest", photographer:"Ana Kovač", location:"Slovenia", height:"short", emoji:"🌲", color:["#0a1a0a","#1a3a1a"] }
];

// ========= CURSOR =========
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cursor.style.left=mx+'px'; cursor.style.top=my+'px';
  });
  (function animRing(){
    rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animRing);
  })();
}

// ========= LOADER =========
function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
    }, 2800);
  });
}

// ========= NAV SCROLL =========
function initNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ========= SCROLL REVEAL =========
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========= RENDER BOOKS =========
function renderBooks(genre) {
  const grid = document.getElementById('booksGrid');
  if (!grid) return;
  const filtered = genre === 'all' ? books : books.filter(b => b.genre === genre);
  grid.innerHTML = filtered.map(b => `
    <div class="book-card" onclick="openBookModal(${b.id})">
      <div class="book-cover">
        <div class="book-cover-inner" style="background: linear-gradient(160deg, ${b.color[0]}, ${b.color[1]})">
          <div class="book-cover-title">${b.title}</div>
          <div class="book-cover-author">${b.author}</div>
        </div>
      </div>
      <div class="book-meta">
        <span class="book-genre-tag">${b.genre}</span>
        <div class="book-name">${b.title}</div>
        <div class="book-author-name">${b.author}</div>
      </div>
    </div>
  `).join('');
}

// ========= BOOK MODAL =========
function openBookModal(id) {
  const b = books.find(x => x.id === id);
  if (!b) return;
  document.getElementById('modalHeader').innerHTML = `
    <div class="modal-cover">
      <div class="modal-cover-inner" style="background: linear-gradient(160deg, ${b.color[0]}, ${b.color[1]})">
        <div class="modal-cover-title">${b.title}</div>
      </div>
    </div>
    <div class="modal-info">
      <div class="modal-genre">${b.genre}</div>
      <h2 class="modal-title">${b.title}</h2>
      <p class="modal-author">by ${b.author}</p>
      <div class="modal-stats">
        <div class="modal-stat"><span class="modal-stat-val">${b.year < 0 ? Math.abs(b.year)+'BC' : b.year}</span><span class="modal-stat-key">Year</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${b.pages}</span><span class="modal-stat-key">Pages</span></div>
        <div class="modal-stat"><span class="modal-stat-val">${b.rating}</span><span class="modal-stat-key">Rating</span></div>
      </div>
    </div>
  `;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-section-title">About this Book</div>
    <p class="modal-description">${b.desc}</p>
    <div class="modal-section-title">Tags</div>
    <div class="modal-tags">${b.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="modal-actions">
      <button class="btn-read">Read Now</button>
      <button class="btn-save">Save to Shelf</button>
    </div>
  `;
  document.getElementById('bookModal').classList.add('open');
}

function initBookModal() {
  const closeBtn = document.getElementById('modalClose');
  const overlay = document.getElementById('bookModal');
  if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  if (overlay) overlay.addEventListener('click', e => { if(e.target.id==='bookModal') overlay.classList.remove('open'); });
}

function initGenreTabs() {
  const tabs = document.getElementById('genreTabs');
  if (!tabs) return;
  tabs.addEventListener('click', e => {
    const tab = e.target.closest('.genre-tab');
    if (!tab) return;
    document.querySelectorAll('.genre-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderBooks(tab.dataset.genre);
  });
}

// ========= RENDER PAINTINGS =========
function renderPaintings() {
  const grid = document.getElementById('paintingsGrid');
  if (!grid) return;
  grid.innerHTML = paintings.map(p => `
    <div class="painting-card" onclick="openLightbox(${p.id})">
      <div class="painting-frame">
        <div class="painting-img" style="background: linear-gradient(135deg, ${p.bg[0]}, ${p.bg[1]}, ${p.bg[2]}); display:flex; align-items:center; justify-content:center; font-size:5rem; height:200px; width:100%;">${p.emoji}</div>
        <div class="painting-overlay">
          <div class="painting-info">
            <div class="painting-title">${p.title}</div>
            <div class="painting-artist">${p.artist}, ${p.year}</div>
          </div>
        </div>
      </div>
      <div class="painting-label">
        <div class="painting-label-title"><strong>${p.title}</strong> · ${p.artist}</div>
      </div>
      <button class="view-btn">↗</button>
    </div>
  `).join('');
}

// ========= LIGHTBOX =========
function openLightbox(id) {
  const p = paintings.find(x=>x.id===id);
  if (!p) return;
  document.getElementById('lightboxImg').innerHTML = `<div style="font-size:8rem">${p.emoji}</div>`;
  document.getElementById('lightboxImg').style.background = `linear-gradient(135deg, ${p.bg[0]}, ${p.bg[1]})`;
  document.getElementById('lightboxTitle').textContent = p.title;
  document.getElementById('lightboxArtist').textContent = `${p.artist} · ${p.style} · ${p.year}`;
  document.getElementById('lightbox').classList.add('open');
}

function initLightbox() {
  const closeBtn = document.getElementById('lightboxClose');
  const lb = document.getElementById('lightbox');
  if (closeBtn) closeBtn.addEventListener('click', () => lb.classList.remove('open'));
  if (lb) lb.addEventListener('click', e => { if(e.target.id==='lightbox') lb.classList.remove('open'); });
}

// ========= RENDER MUSIC =========
let currentPlaying = null;
let progressIntervals = {};

function renderMusic() {
  const grid = document.getElementById('musicGrid');
  if (!grid) return;
  grid.innerHTML = tracks.map(t => `
    <div class="music-card" id="music-${t.id}">
      <div class="music-genre-badge">${t.genre}</div>
      <div class="music-album" style="background: linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})">
        <div class="vinyl-ring"></div>
        <span style="position:relative;z-index:1;font-size:1.8rem">${t.emoji}</span>
      </div>
      <div class="music-track-title">${t.title}</div>
      <div class="music-artist">${t.artist}</div>
      <div class="music-controls">
        <button class="play-btn" onclick="togglePlay(${t.id})">▶</button>
        <div class="music-progress">
          <div class="music-progress-fill" id="prog-${t.id}"></div>
        </div>
        <span class="music-duration">${t.duration}</span>
        <div class="music-visualizer">
          <div class="viz-bar" style="height:4px"></div>
          <div class="viz-bar" style="height:8px"></div>
          <div class="viz-bar" style="height:12px"></div>
          <div class="viz-bar" style="height:6px"></div>
          <div class="viz-bar" style="height:10px"></div>
        </div>
      </div>
    </div>
  `).join('');
}

function togglePlay(id) {
  const card = document.getElementById('music-'+id);
  const btn = card.querySelector('.play-btn');
  const prog = document.getElementById('prog-'+id);
  if (currentPlaying === id) {
    card.classList.remove('playing');
    btn.textContent = '▶';
    clearInterval(progressIntervals[id]);
    currentPlaying = null;
  } else {
    if (currentPlaying !== null) {
      const old = document.getElementById('music-'+currentPlaying);
      if (old) { old.classList.remove('playing'); old.querySelector('.play-btn').textContent='▶'; }
      clearInterval(progressIntervals[currentPlaying]);
      document.getElementById('prog-'+currentPlaying).style.width='0';
    }
    card.classList.add('playing');
    btn.textContent = '⏸';
    currentPlaying = id;
    let pct = parseFloat(prog.style.width)||0;
    progressIntervals[id] = setInterval(() => {
      pct += 0.3;
      prog.style.width = Math.min(pct,100)+'%';
      if (pct >= 100) {
        clearInterval(progressIntervals[id]);
        card.classList.remove('playing');
        btn.textContent='▶';
        prog.style.width='0';
        currentPlaying=null;
      }
    }, 80);
  }
}

// ========= RENDER PHOTOGRAPHY =========
function renderPhotos() {
  const grid = document.getElementById('photoGrid');
  if (!grid) return;
  const heightMap = {tall:'280px', medium:'200px', short:'160px'};
  grid.innerHTML = photos.map(p => `
    <div class="photo-item">
      <div class="photo-img" style="height:${heightMap[p.height]}; background: linear-gradient(160deg, ${p.color[0]}, ${p.color[1]}); display:flex; align-items:center; justify-content:center; font-size:${p.height==='tall'?'4rem':'3rem'}; transition: transform 0.4s ease, filter 0.4s ease;">${p.emoji}</div>
      <div class="photo-caption">
        <div class="photo-cap-title">${p.title}</div>
        <div class="photo-cap-meta">${p.photographer} · ${p.location}</div>
      </div>
    </div>
  `).join('');
}

// ========= ART TABS =========
function initArtTabs() {
  document.querySelectorAll('.art-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.art-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.art-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('panel-'+tab.dataset.art).classList.add('active');
    });
  });
}

// ========= CONTACT FORM =========
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('successMsg');
    if (msg) {
      msg.classList.add('show');
      form.reset();
      setTimeout(() => msg.classList.remove('show'), 5000);
    }
  });
}

// ========= KEYBOARD ESC =========
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key==='Escape') {
      const modal = document.getElementById('bookModal');
      const lb = document.getElementById('lightbox');
      if (modal) modal.classList.remove('open');
      if (lb) lb.classList.remove('open');
    }
  });
}

// ========= INIT ALL =========
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initLoader();
  initNavScroll();
  initReveal();
  initKeyboard();

  // Library
  if (document.getElementById('booksGrid')) {
    renderBooks('all');
    initGenreTabs();
    initBookModal();
  }

  // Art
  if (document.getElementById('paintingsGrid')) renderPaintings();
  if (document.getElementById('musicGrid')) renderMusic();
  if (document.getElementById('photoGrid')) renderPhotos();
  if (document.querySelector('.art-tab')) initArtTabs();
  if (document.getElementById('lightbox')) initLightbox();

  // Contact
  initContactForm();
});