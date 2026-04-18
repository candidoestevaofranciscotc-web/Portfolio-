// =============================================
// script.js — Cândido Estêvão Portfolio
// =============================================


// ——— DADOS DOS PROJETOS ———
// Estrutura de pastas:
//   portfolio/
//   └── images/
//       ├── SM01/ → 01.png, 02.png, 03.png, 04.png
//       ├── SM02/ → 01.png, 02.png, 03.png, 04.png
//       ├── SM03/ → 01.png, 02.png, 03.png, 04.png
//       ├── SM04/ → 01.png, 02.png, 03.png, 04.png
//       └── SM05/ → 01.png ... 08.png
//
// A capa de cada projecto é a primeira imagem (01.png).
// Todas as imagens são formato 1:1 (quadrado).
//
// Para adicionar um novo projecto, copia um bloco,
// atribui o próximo id, actualiza o título e a pasta.

const projects = [
  {
    id: 0,
    type: { pt: 'Design Gráfico', en: 'Graphic Design' },
    title: { pt: 'Social Media flyers', en: 'Social Media flyers' },
    year: '2024 - 2025 - 2026',
    client: { pt: 'Bc Studius agencia', en: 'Bc Studius agencia' },
    tools: ['Ibis Paint X', 'Photoshop'],
    description: {
      pt: 'Aqui você encontrara uma série de flyers para social media.',
      en: 'Here you’ll find a series of social media flyers.'
    },
    cover: { src: 'images/1-SM/00.jpg', ratio: '1/1' },
    gallery: [
      { type: 'image', src: 'images/1-SM/SM01/01.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM01/02.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM01/03.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM01/04.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM02/01.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM02/02.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM02/03.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM02/04.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM03/01.jpg', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM03/02.jpg', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM03/03.jpg', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM03/04.jpg', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM04/01.jpg', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM04/02.jpg', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM04/03.jpg', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM04/04.jpg', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/01.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/02.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/03.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/04.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/05.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/06.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/07.png', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/08.png', ratio: '1/1' },
    ],
    icon: 'images/icon-grafico.png'
  },
  {
    id: 1,
    type: { pt: 'Branding', en: 'Branding' },
    title: { pt: 'Identidade Visual', en: 'Visual Identity' },
    year: '2026',
    client: { pt: 'Bc Studius agencia', en: 'Bc Studius agencia' },
    tools: ['Google Fx', 'Illustrator'],
    description: {
      pt: 'Aqui você encontrara tudo sobre identidade visual e Branding.',
      en: 'Here you’ll find everything about visual identity and branding.'
    },
    cover: { src: 'images/2-BD/00.png', ratio: '1/1' },
    gallery: [
      { type: 'image', src: 'images/2-BD/BD01/01.png', ratio: '1/1' },
    ],
    icon: 'images/icon-grafico.png'
  },
  {
    id: 2,
    type: { pt: 'Thumbnail', en: 'Thumbnail' },
    title: { pt: 'Thumbnail', en: 'Thumbnail' },
    year: '2024',
    client: { pt: 'Bc Studius agencia', en: 'Bc Studius agencia' },
    tools: ['Ibis Paint X', 'Photoshop'],
    description: {
      pt: 'Aqui você encontrara uma série de thumbnails para o Youtube.',
      en: 'Here you’ll find a series of YouTube thumbnails.'
    },
    cover: { src: 'images/3-TB/00.png', ratio: '16/9' },
    gallery: [
      { type: 'image', src: 'images/3-TB/TB01/01.png', ratio: '16/9' },
      { type: 'image', src: 'images/3-TB/TB01/02.png', ratio: '16/9' },
      { type: 'image', src: 'images/3-TB/TB01/03.png', ratio: '16/9' },
      { type: 'image', src: 'images/3-TB/TB01/04.jpg', ratio: '16/9' },
    ],
    icon: 'images/icon-grafico.png'
  },
  {
    id: 3,
    type: { pt: 'Modelagem 3D', en: '3D Modeling' },
    title: { pt: 'Modelagem 3D', en: '3D Modeling' },
    client: { pt: 'Nenhum', en: 'None' },
    year: '2025',
    tools: ['Nomade Sculpt', 'Blender'],
    description: {
      pt: 'Aqui você encontrará um pouco do meu trabalho como artista 3D.',
      en: 'Here you’ll find some of my work as a 3D artist.'
    },
     cover: { src: 'images/4-3D/00.jpg', ratio: '1/1' },
    gallery: [
      { type: 'image', src: 'images/4-3D/3D01/01.png', ratio: '1/1' },
      { type: 'image', src: 'images/4-3D/3D01/02.png', ratio: '1/1' },
      { type: 'image', src: 'images/4-3D/3D01/03.png', ratio: '1/1' },
      { type: 'image', src: 'images/4-3D/3D01/04.png', ratio: '1/1' },
    ],
    icon: 'images/icon-grafico.png'
  },
];


// =============================================
// INDEX.HTML
// =============================================
if (document.getElementById('projects-grid')) {
  initIndex();
}

function initIndex() {

  // ——— CURSOR ———
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      follower.style.width = '60px';
      follower.style.height = '60px';
      follower.style.borderColor = 'rgba(200,184,154,0.6)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.width = '36px';
      follower.style.height = '36px';
      follower.style.borderColor = 'rgba(200,184,154,0.4)';
    });
  });

  // ——— NAVBAR ———
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ——— MENU HAMBURGUER ———
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ——— SCROLL REVEAL ———
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ——— TROCA DE IDIOMA ———
  window.currentLang = 'pt';

  window.setLang = function(lang) {
    window.currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-pt]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (text) {
        if (text.includes('<')) el.innerHTML = text;
        else el.textContent = text;
      }
    });
  };

  // ——— CARDS DE PROJETOS ———
  const grid = document.getElementById('projects-grid');

  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = `project-card reveal${index > 0 ? ' reveal-delay-' + index : ''}`;

    card.innerHTML = `
      <a href="project.html?id=${project.id}" class="card-link" aria-label="${project.title.pt}">
        <div class="placeholder">
          ${project.cover.src
            ? `<img src="${project.cover.src}" alt="${project.title.pt}" class="card-cover">`
            : project.icon
              ? `<img src="${project.icon}" alt="${project.title.pt}" class="card-icon">`
              : ''
          }
        </div>
        <div class="project-overlay">
          <span class="project-type">${project.type.pt}</span>
          <p class="project-title">${project.title.pt}</p>
        </div>
        <div class="project-arrow">↗</div>
      </a>
    `;

    grid.appendChild(card);
    observer.observe(card);
  });
}


// =============================================
// PROJECT.HTML
// =============================================
if (document.getElementById('project-content')) {
  initProjectPage();
}

function initProjectPage() {

  // ——— CURSOR ———
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      follower.style.width = '60px';
      follower.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.width = '36px';
      follower.style.height = '36px';
    });
  });

  // ——— NAVBAR ———
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ——— LÊ O ID DA URL ———
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const project = projects.find(p => p.id === id);

  if (!project) {
    window.location.href = 'index.html';
    return;
  }

  let lang = 'pt';

  // ——— GERA O HTML DE UM ITEM DA GALERIA ———
  // Recebe um objeto { type, src, ratio } e devolve o HTML certo
  function renderMediaItem(item) {
    // ratio ex: '16/9' → transformamos em classe CSS: 'ratio-16-9'
    const ratioClass = 'ratio-' + item.ratio.replace('/', '-');

    if (item.type === 'video') {
      // Vídeo mp4: autoplay silencioso em loop (comportamento de motion reel)
      // controls = barra de play/pause visível
      // muted é obrigatório para autoplay funcionar no browser
      return `
        <div class="gallery-item ${ratioClass}">
          <video
            src="${item.src}"
            autoplay
            muted
            loop
            playsinline
            controls
          ></video>
        </div>
      `;
    } else {
      return `
        <div class="gallery-item ${ratioClass}">
          <img src="${item.src}" alt="${project.title[lang]}">
        </div>
      `;
    }
  }

  // ——— RENDERIZA A PÁGINA COMPLETA ———
  function render() {
    document.title = `${project.title[lang]} — Cândido Estêvão`;

    // Capa do projeto
    const coverRatioClass = 'ratio-' + (project.cover.ratio || '16/9').replace('/', '-');
    const coverHTML = project.cover.src
      ? `<div class="project-hero-cover ${coverRatioClass}">
           <img src="${project.cover.src}" alt="${project.title[lang]}">
         </div>`
      : `<div class="project-hero-cover ratio-16-9 cover-placeholder">
           <span>${project.symbol}</span>
         </div>`;

    // Galeria
    const galleryHTML = project.gallery.length > 0
      ? `<div class="project-gallery">
           ${project.gallery.map(item => renderMediaItem(item)).join('')}
         </div>`
      : '';

    document.getElementById('project-content').innerHTML = `

      <div class="project-hero">
        ${coverHTML}
      </div>

      <div class="project-body">

        <div class="project-header">
          <div class="project-header-left">
            <span class="project-category">${project.type[lang]}</span>
            <h1 class="project-main-title">${project.title[lang]}</h1>
          </div>
          <div class="project-meta">
            <div class="meta-item">
              <span class="meta-label">${lang === 'pt' ? 'Ano' : 'Year'}</span>
              <span class="meta-value">${project.year}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">${lang === 'pt' ? 'Cliente' : 'Client'}</span>
              <span class="meta-value">${project.client[lang]}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">${lang === 'pt' ? 'Ferramentas' : 'Tools'}</span>
              <span class="meta-value">${project.tools.join(', ')}</span>
            </div>
          </div>
        </div>

        <div class="project-divider"></div>

        <div class="project-description">
          <p>${project.description[lang]}</p>
        </div>

        ${galleryHTML}

        <div class="project-nav">
          ${id > 0 ? `
            <a href="project.html?id=${id - 1}" class="project-nav-link prev">
              <span class="nav-arrow">←</span>
              <span>${lang === 'pt' ? 'Projeto anterior' : 'Previous project'}</span>
            </a>
          ` : '<div></div>'}

          <a href="index.html#work" class="project-nav-back">
            ${lang === 'pt' ? 'Ver todos' : 'View all'}
          </a>

          ${id < projects.length - 1 ? `
            <a href="project.html?id=${id + 1}" class="project-nav-link next">
              <span>${lang === 'pt' ? 'Próximo projeto' : 'Next project'}</span>
              <span class="nav-arrow">→</span>
            </a>
          ` : '<div></div>'}
        </div>

      </div>
    `;
  }

  render();

  // ——— TROCA DE IDIOMA ———
  window.setLang = function(langChoice) {
    lang = langChoice;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
    document.documentElement.lang = lang;
    render();
  };
}
