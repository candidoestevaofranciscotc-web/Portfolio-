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
//
// Para adicionar um novo projecto, copia um bloco,
// atribui o próximo id, actualiza o título e a pasta.
//
// ——— CAMPO "ratio" (agora livre, não só 1:1 ou 9:16) ———
// Podes escrever QUALQUER proporção, no formato "largura/altura":
//   '1/1'   → quadrado (post normal)
//   '4/5'   → retrato Instagram
//   '9/16'  → story/reel
//   '3/2'   → foto paisagem
//   '2/3'   → retrato
//   '21/9'  → banner ultra-largo
//   ...ou qualquer outra proporção real da tua imagem.
// Se não souberes a proporção exacta, deixa o campo "ratio" de fora
// (ou como '') que o site deteta automaticamente o tamanho real do
// ficheiro e ajusta a caixa sozinho — sem cortar nada.

const projects = [
  {
    id: 0,
    type: { pt: 'Design Gráfico', en: 'Graphic Design' },
    title: { pt: 'Social Media flyers', en: 'Social Media flyers' },
    year: '2024 - 2025 - 2026',
    client: { pt: 'Bc Studius agencia - Okoku - Rufia - Indrive - KFC', en: 'Bc Studius agencia - Okoku - Rufia - Indrive - KFC' },
    tools: ['Ibis Paint X', 'Photoshop'],
    description: {
      pt: 'Aqui você encontrara uma série de flyers para social media.',
      en: 'Here you’ll find a series of social media flyers.'
    },
    cover: { src: 'images/1-SM/00.webp', ratio: '1/1' },
    gallery: [
      { type: 'image', src: 'images/1-SM/SM00/01.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM00/02.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM00/03.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM00/04.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM01/01.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM01/02.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM01/03.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM01/04.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM02/01.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM02/02.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM02/03.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM02/04.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM03/01.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM03/02.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM03/03.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM03/04.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM04/01.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM04/02.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM04/03.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM04/04.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/01.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/02.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/03.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM05/04.webp', ratio: '1/1' },
      { type: 'image', src: 'images/1-SM/SM06/01.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM06/02.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM06/03.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM06/04.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM07/01.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM07/02.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM07/03.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM07/04.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM08/01.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM08/02.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM08/03.webp', ratio: '2160/2700' },
      { type: 'image', src: 'images/1-SM/SM08/04.webp', ratio: '2160/2700' },
    ],
    icon: 'images/icon-grafico.png'
  },
  {
    id: 1,
    type: { pt: 'Branding', en: 'Branding' },
    title: { pt: 'Identidade Visual', en: 'Visual Identity' },
    year: '2026',
    client: { pt: 'Okoku', en: 'Okoku' },
    tools: ['Ibis Paint X','Google Fx'],
    description: {
      pt: 'Aqui você encontrara tudo sobre identidade visual e Branding.',
      en: 'Here you’ll find everything about visual identity and branding.'
    },
    cover: { src: 'images/2-IDV/00.webp', ratio: '16/9' },
    gallery: [
      { type: 'image', src: 'images/2-IDV/IDV00/01.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/02.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/03.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/04.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/05.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/06.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/07.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/08.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/09.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/10.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/11.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/12.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/13.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/14.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/15.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/16.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/17.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/18.webp', ratio: '1/1' },
      { type: 'image', src: 'images/2-IDV/IDV00/19.webp', ratio: '16/9' },

    ],

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
  let lightboxImages = []; // reconstruída a cada render()

  // ——— RÁCIOS LIVRES ———
  // Aceita '4/5', '4:5' ou um número decimal (ex: '0.8').
  // Devolve null se não houver valor — nesse caso o rácio é
  // detectado automaticamente a partir do ficheiro real.
  function parseRatio(str) {
    if (!str) return null;
    const clean = String(str).replace(':', '/').trim();
    const parts = clean.split('/').map(Number);
    if (parts.length === 2 && parts[0] > 0 && parts[1] > 0) return parts;
    const num = parseFloat(clean);
    return num > 0 ? [num, 1] : null;
  }

  // Aplica o rácio (w/h) a um contentor já inserido no DOM e decide
  // se ele deve ocupar 1 ou 2 colunas da grelha (largo → 2 colunas).
  function applyRatioValues(container, w, h) {
    container.style.aspectRatio = `${w} / ${h}`;
    const wide = (w / h) >= 1.15;
    container.classList.remove('span-1', 'span-2', 'cover-wide', 'cover-narrow');
    if (container.classList.contains('gallery-item')) {
      container.classList.add(wide ? 'span-2' : 'span-1');
    } else {
      container.classList.add(wide ? 'cover-wide' : 'cover-narrow');
    }
  }

  // ——— GERA O HTML DE UMA IMAGEM DA GALERIA ———
  function renderImageItem(item, lightboxIdx) {
    const parsed = parseRatio(item.ratio);
    const styleAttr = parsed ? ` style="aspect-ratio:${parsed[0]}/${parsed[1]}"` : '';
    const spanClass = parsed ? ((parsed[0] / parsed[1]) >= 1.15 ? 'span-2' : 'span-1') : 'span-1';
    const autoAttr = parsed ? '' : ' data-auto-ratio="true"';
    return `
      <div class="gallery-item ${spanClass}"${styleAttr}${autoAttr} data-lightbox-index="${lightboxIdx}">
        <img src="${item.src}" alt="${project.title[lang]}" loading="lazy">
        <span class="expand-hint">⤢</span>
      </div>
    `;
  }

  // ——— GERA O HTML DE UM VÍDEO DA GALERIA ———
  function renderVideoItem(item) {
    const parsed = parseRatio(item.ratio);
    const styleAttr = parsed ? ` style="aspect-ratio:${parsed[0]}/${parsed[1]}"` : '';
    const spanClass = parsed ? ((parsed[0] / parsed[1]) >= 1.15 ? 'span-2' : 'span-1') : 'span-2';
    const autoAttr = parsed ? '' : ' data-auto-ratio="true"';
    // Vídeo mp4: autoplay silencioso em loop (comportamento de motion reel)
    // controls = barra de play/pause visível (inclui ecrã inteiro nativo)
    // muted é obrigatório para autoplay funcionar no browser
    return `
      <div class="gallery-item ${spanClass}"${styleAttr}${autoAttr}>
        <video src="${item.src}" autoplay muted loop playsinline controls></video>
      </div>
    `;
  }

  // ——— LIGHTBOX (visualizador de imagem completa) ———
  // Criado uma única vez; reaproveitado sempre que se clica numa imagem.
  function createLightbox() {
    const el = document.createElement('div');
    el.className = 'lightbox';
    el.innerHTML = `
      <button class="lightbox-close" aria-label="Fechar">✕</button>
      <button class="lightbox-prev" aria-label="Anterior">←</button>
      <img class="lightbox-img" alt="">
      <button class="lightbox-next" aria-label="Próxima">→</button>
      <span class="lightbox-counter"></span>
    `;
    document.body.appendChild(el);

    const imgEl = el.querySelector('.lightbox-img');
    const counterEl = el.querySelector('.lightbox-counter');
    let current = 0;

    function show(index) {
      if (!lightboxImages.length) return;
      current = (index + lightboxImages.length) % lightboxImages.length;
      imgEl.src = lightboxImages[current];
      counterEl.textContent = lightboxImages.length > 1 ? `${current + 1} / ${lightboxImages.length}` : '';
      el.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      el.classList.remove('open');
      document.body.style.overflow = '';
    }

    el.querySelector('.lightbox-close').addEventListener('click', close);
    el.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
    el.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
    el.addEventListener('click', e => { if (e.target === el) close(); });
    document.addEventListener('keydown', e => {
      if (!el.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(current + 1);
      if (e.key === 'ArrowLeft') show(current - 1);
    });

    return { show, close };
  }

  const lightbox = createLightbox();

  // ——— RENDERIZA A PÁGINA COMPLETA ———
  function render() {
    document.title = `${project.title[lang]} — Cândido Estêvão`;

    // Lista de imagens do lightbox (capa + itens de imagem da galeria, por ordem)
    lightboxImages = [];
    if (project.cover.src) lightboxImages.push(project.cover.src);

    // Capa do projeto
    const coverParsed = parseRatio(project.cover.ratio);
    const coverStyleAttr = coverParsed ? ` style="aspect-ratio:${coverParsed[0]}/${coverParsed[1]}"` : ' style="aspect-ratio:16/9"';
    const coverAutoAttr = coverParsed ? '' : ' data-auto-ratio="true"';
    const coverWideClass = coverParsed ? ((coverParsed[0] / coverParsed[1]) >= 1.15 ? 'cover-wide' : 'cover-narrow') : '';
    const coverHTML = project.cover.src
      ? `<div class="project-hero-cover ${coverWideClass}"${coverStyleAttr}${coverAutoAttr} data-lightbox-index="0">
           <img src="${project.cover.src}" alt="${project.title[lang]}">
           <span class="expand-hint">⤢</span>
         </div>`
      : `<div class="project-hero-cover cover-placeholder" style="aspect-ratio:16/9">
           <span>${project.symbol || ''}</span>
         </div>`;

    // Galeria — cada imagem recebe o índice que ocupa no lightbox
    let imgCounter = lightboxImages.length;
    const galleryHTML = project.gallery.length > 0
      ? `<div class="project-gallery">
           ${project.gallery.map(item => {
              if (item.type === 'video') return renderVideoItem(item);
              const idx = imgCounter++;
              lightboxImages.push(item.src);
              return renderImageItem(item, idx);
            }).join('')}
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

    // ——— PÓS-PROCESSAMENTO ———
    const contentEl = document.getElementById('project-content');

    // Deteta automaticamente o rácio de qualquer item sem "ratio" definido
    contentEl.querySelectorAll('[data-auto-ratio="true"]').forEach(container => {
      const media = container.querySelector('img, video');
      if (!media) return;
      const measure = () => {
        const w = media.naturalWidth || media.videoWidth;
        const h = media.naturalHeight || media.videoHeight;
        if (w && h) applyRatioValues(container, w, h);
      };
      if (media.tagName === 'IMG') {
        if (media.complete) measure(); else media.addEventListener('load', measure);
      } else {
        media.addEventListener('loadedmetadata', measure);
      }
    });

    // Clique numa imagem (capa ou galeria) abre o lightbox nessa posição
    contentEl.querySelectorAll('[data-lightbox-index]').forEach(el => {
      el.addEventListener('click', () => {
        lightbox.show(parseInt(el.dataset.lightboxIndex, 10));
      });
    });
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
