const selectedPapers = [
  { year: '2024', area: 'Remote sensing', title: 'Mapping recent timber harvest activity in a temperate forest using single date airborne LiDAR surveys and machine learning: lessons for conservation planning', journal: 'GIScience & Remote Sensing', authors: 'Fisher, Elmore, Fitzpatrick, McNeil, Atkins & Larkin', article: 'https://www.tandfonline.com/doi/full/10.1080/15481603.2024.2379198', pdf: 'downloads/fisher_etal_giscirs_2024.pdf' },
  { year: '2024', area: 'Remote sensing', title: 'Breeding season space use and habitat selection by Blue-winged Warblers in managed shrublands', journal: 'Avian Conservation and Ecology', authors: 'Fuoco, McNeil, Fiss, Bocetti, Fisher & Larkin', article: 'https://ace-eco.org/vol19/iss1/art6/', pdf: 'https://www.ace-eco.org/vol19/iss1/art6/ACE-ECO-2024-2587.pdf' },
  { year: '2023', area: 'Earth surface', title: 'Milankovitch-paced erosion in the southern Central Andes', journal: 'Nature Communications', authors: 'Fisher, Luna, Amidon, Burbank and colleagues', article: 'https://www.nature.com/articles/s41467-023-36022-0', pdf: 'https://www.nature.com/articles/s41467-023-36022-0.pdf' },
  { year: '2023', area: 'Remote sensing', title: 'Using aerial LiDAR to assess regional availability of potential habitat for a conservation dependent forest bird', journal: 'Forest Ecology and Management', authors: 'McNeil, Fisher, Fiss, Elmore, Fitzpatrick, Atkins, Cohen & Larkin', article: 'https://www.sciencedirect.com/science/article/pii/S0378112723002360', pdf: 'downloads/mcneil_etal_fem_2023.pdf' },
  { year: '2017', area: 'Marine', title: 'Persistence and biodegradation of oil at the ocean floor following Deepwater Horizon', journal: 'PNAS', authors: 'Bagby, Reddy, Aeppli, Fisher & Valentine', article: 'https://www.pnas.org/doi/10.1073/pnas.1610110114', pdf: 'downloads/pnas-2017-bagby-e9-e18.pdf' }
];
const publicationTitle = paper => paper.article ? `<a href="${paper.article}" target="_blank" rel="noopener">${paper.title}</a>` : paper.title;
const readingLinks = paper => `${paper.article ? `<a href="${paper.article}" target="_blank" rel="noopener" aria-label="Article: ${paper.title}">Article</a>` : ''}${paper.pdf ? `<a href="${paper.pdf}" target="_blank" rel="noopener" aria-label="PDF: ${paper.title}">PDF</a>` : ''}${(paper.supplements || []).map(supplement => `<a href="${supplement.url}" target="_blank" rel="noopener" aria-label="Supplement: ${paper.title}">${supplement.label}</a>`).join('')}`;


if (document.body.dataset.design === 'explorer') {
  const searchText = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const dateLabel = date => new Date(date + 'T12:00:00').toLocaleDateString('en-US', {month:'short',day:'numeric',year:'numeric'});
  const banner = (page, alt) => `<figure class="view-banner"><img src="${siteContent.headers[page]}" alt="${alt}"></figure>`;
  const newsRow = entry => `<article class="news-entry"><time datetime="${entry.date}">${dateLabel(entry.date)}</time><h3><button type="button" data-news="${entry.id}">${entry.title}</button></h3><p>${entry.summary}</p><div class="news-actions">${entry.media ? `<a class="news-external" href="${entry.media.url}" target="_blank" rel="noopener">${entry.media.label}</a>` : ''}<button type="button" class="news-read" data-news="${entry.id}">Read update</button></div></article>`;
  document.getElementById('front-news-list').innerHTML = siteContent.news.slice(0,3).map(newsRow).join('');
  const escapeText = text => text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const researchOverview = banner('research','Satellite view of the Himalaya and Tibetan Plateau');
  const memberPublications = member => {
    const papers = (member.papers || []).map(doi => allPublications.find(paper => paper.doi === doi)).filter(Boolean).sort((a,b) => Number(b.year) - Number(a.year));
    return papers.length ? `<h4 class="team-projects-title">Selected publications</h4><ul class="research-papers">${papers.map(paper => `<li><span>${paper.year}</span>${publicationTitle(paper)}</li>`).join('')}</ul>` : '';
  };
  const researchSections = siteContent.research.map((theme,index) => {
    const papers = theme.papers.map(doi => allPublications.find(paper => paper.doi === doi)).filter(Boolean).sort((a,b) => Number(b.year) - Number(a.year));
    const products = (theme.products || []).map(product => ({...product,entry:siteContent.news.find(entry => entry.id === product.newsId)})).filter(product => product.entry).sort((a,b) => b.entry.date.localeCompare(a.entry.date));
    const productEntries = products.length ? `<div class="research-products"><h4>Podcasts, Webinars & Tutorials</h4><ul class="research-papers">${products.map(product => `<li><span>${product.entry.date.slice(0,4)}</span><a href="${product.entry.media.url}" target="_blank" rel="noopener">(${escapeText(product.type)}) ${escapeText(product.title)}</a></li>`).join('')}</ul></div>` : '';
    return `<section class="research-theme" id="research-${theme.id}"><p class="dialog-label">0${index + 1} / ${escapeText(theme.label)}</p><h3>${escapeText(theme.title)}</h3><p>${escapeText(theme.description)}</p>${theme.detail ? `<p>${escapeText(theme.detail)}</p>` : ''}${papers.length ? `<h4>Selected publications</h4><ul class="research-papers">${papers.map(paper => `<li><span>${paper.year}</span>${publicationTitle(paper)}</li>`).join('')}</ul>` : ''}${productEntries}<div class="research-links">${theme.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${escapeText(link.label)}</a>`).join('')}</div></section>`;
  }).join('');
  const focuses = [
    { title: 'Landscape<br>evolution', description: 'Understanding how climate, tectonics, and surface processes shape landscapes and their environmental histories.', section: 'geomorphology' },
    { title: 'Remote sensing<br>& conservation', description: 'Connecting landscape structure, vegetation dynamics, and biodiversity through geospatial observations and computational analysis.', section: 'remote-sensing' },
    { title: 'Marine processes<br>& biogeochemistry', description: 'Exploring seafloor environments, the fate of hydrocarbons, and the physical and biological processes that connect them.', section: 'marine' },
    { title: 'Research<br>cyberinfrastructure', description: 'Building institutional knowledge and capability in high-performance computing, AI, open science, and data visualization.', section: 'scipe' }
  ];
  document.querySelectorAll('[data-focus]').forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.focus);
    document.querySelectorAll('[data-focus]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    document.getElementById('focus-number').textContent = `0${index + 1} / 0${focuses.length}`;
    document.getElementById('focus-title').innerHTML = focuses[index].title;
    document.getElementById('focus-description').textContent = focuses[index].description;
    document.getElementById('focus-article').dataset.focusArea = String(index);
    document.getElementById('focus-article').href = '#research/' + focuses[index].section;
  }));
  const panels = {
    research: `${researchOverview}<p class="dialog-label">Earth systems / Methods / Collaboration</p><h2 id="dialog-title" tabindex="-1">Research</h2><p class="panel-lead">I study how landscapes and environments change, and develop spatial and computational approaches to understand those changes. My work connects earth surface processes, remote sensing, ecology, and marine science, from individual images to regional systems and from modern observations to geological archives.</p>${researchSections}<button type="button" class="news-read" data-open="papers">All publications</button><button type="button" class="news-read research-tools" data-open="tools">Data, Code, and Visualizations</button>`,
    teaching: `${banner('teaching','A scene of learning and mentorship from The Karate Kid')}<p class="dialog-label">Courses / Tutorials / Workshops</p><h2 id="dialog-title" tabindex="-1">Teaching</h2><h3 class="teaching-section-title">SCIPE / UMCES Tutorials & Workshops</h3><div class="panel-courses">${siteContent.tutorials.map(tutorial => `<article class="panel-course"><figure><img src="${tutorial.image}" alt="${escapeText(tutorial.title)}" loading="lazy"></figure><div><p class="course-code">${escapeText(tutorial.label)}</p><h3>${escapeText(tutorial.title)}</h3><p class="course-description">${escapeText(tutorial.description)}</p><div class="resource-links"><a href="${escapeText(tutorial.url)}" target="_blank" rel="noopener">Tutorial materials on GitHub</a>${tutorial.video ? `<a href="${escapeText(tutorial.video)}" target="_blank" rel="noopener">Watch NAIRR Pilot recording</a>` : ''}</div></div></article>`).join('')}</div><h3 class="teaching-section-title">Courses Taught at UC Santa Barbara</h3><div class="panel-courses">${siteContent.courses.map(course => `<article class="panel-course"><figure><img src="${course.image}" alt="${escapeText(course.code + ': ' + course.title)}" loading="lazy"></figure><div><p class="course-code">${escapeText(course.code)}</p><h3>${escapeText(course.title)}</h3><p class="course-description">${escapeText(course.description)}</p></div></article>`).join('')}</div>`,
    news: `${banner('news','Satellite view of river channels and coastline')}<p class="dialog-label">News & notes / Archive</p><h2 id="dialog-title" tabindex="-1">News</h2><div class="archive-news-list">${siteContent.news.map(newsRow).join('')}</div>`,
    team: `${banner('team','A colorful close-up of marine life')}<p class="dialog-label">People & mentorship</p><h2 id="dialog-title" tabindex="-1">Team</h2>${siteContent.team.map(member => member.text ? `<article class="archive-section team-profile"><figure>${member.image ? `<img src="${member.image}" alt="${escapeText(member.title)}" loading="lazy">` : `<div class="team-photo-placeholder" role="img" aria-label="Photo pending for ${escapeText(member.title)}">${escapeText(member.initials)}</div>`}</figure><div><h3>${escapeText(member.title)}</h3>${member.role ? `<p class="team-role">${escapeText(member.role)}</p>` : ''}<p>${escapeText(member.text)}</p>${memberPublications(member)}${member.links?.length ? `<div class="research-links team-links">${member.links.map(link => `<a href="${escapeText(link.url)}" target="_blank" rel="noopener">${escapeText(link.label)}</a>`).join('')}</div>` : ''}${member.projects?.length ? `<h4 class="team-projects-title">Collaborative projects</h4><ul class="team-projects">${member.projects.map(project => `<li><a href="${escapeText(project.url)}" target="_blank" rel="noopener">${escapeText(project.label)}</a></li>`).join('')}</ul>` : ''}</div></article>` : `<p class="dialog-label">${escapeText(member.title)}</p>`).join('')}`,
    press: `${banner('press','Satellite view of dune patterns')}<p class="dialog-label">Research in the news</p><h2 id="dialog-title" tabindex="-1">Press</h2>${siteContent.press.map(group => { const paper = allPublications.find(p => p.doi === group.publication || p.title === group.publication); return `<section class="archive-section press-group">${paper ? `<div class="press-citation"><div class="paper-meta"><span>${escapeText(paper.year + ' / ' + paper.journal)}${paper.type !== 'Article' ? ' / ' + escapeText(paper.type) : ''}</span></div><h3>${publicationTitle(paper)}</h3><p class="paper-authors">${escapeText(paper.authors)}</p><div class="paper-reading">${readingLinks(paper)}</div></div><h4>Press coverage</h4>` : `<h3>${escapeText(group.title)}</h3>`}<ul class="press-links">${group.links.map(link => `<li><a href="${escapeText(link.url)}" target="_blank" rel="noopener">${escapeText(link.label)}</a></li>`).join('')}</ul></section>`; }).join('')}`,
    papers: `<p class="dialog-label">01 / Publications</p><h2 id="dialog-title" tabindex="-1">Publications</h2><div class="panel-search"><label for="explorer-search">Find a publication<input id="explorer-search" type="search" placeholder="Title, author, journal, year, or DOI"></label><label for="explorer-area">Research area<select id="explorer-area"><option value="all">All areas</option><option value="Earth surface">Earth surface</option><option value="Remote sensing">Remote sensing</option><option value="Marine">Marine</option><option value="Environmental">Environmental</option><option value="Biomedical">Biomedical</option></select></label></div><div class="panel-results"><span id="explorer-count" aria-live="polite">${allPublications.length} publications</span><a href="https://scholar.google.com/citations?user=iGCJ1WwAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></div>${allPublications.map(p => `<article class="dialog-paper" data-paper-area="${p.area}" data-paper-search="${searchText([p.title,p.authors,p.journal,p.year,p.doi,p.note || ''].join(' '))}"><div class="paper-meta"><span>${p.year} / ${p.journal}${p.type !== 'Article' ? ` / ${p.type}` : ''}</span><span class="area-label" data-area="${p.area}">${p.area}</span></div><h3>${publicationTitle(p)}</h3><p class="paper-authors">${p.authors}</p>${p.note ? `<p class="paper-note">${escapeText(p.note)}</p>` : ''}<div class="paper-reading">${readingLinks(p)}</div></article>`).join('')}<p class="panel-empty" id="explorer-empty" hidden>No publications match this search.</p>`,
    tools: `<p class="dialog-label">02 / Data, Code, and Visualizations</p><h2 id="dialog-title" tabindex="-1">Data, Code, and Visualizations</h2><p class="panel-lead">Code, datasets, and interactive visualizations created as part of my research endeavors.</p><div class="resource-filters" role="group" aria-label="Filter resources"><button type="button" data-resource-filter="all" aria-pressed="true">All</button><button type="button" data-resource-filter="code" aria-pressed="false">Code</button><button type="button" data-resource-filter="viz" aria-pressed="false">Visualizations</button><button type="button" data-resource-filter="data" aria-pressed="false">Datasets</button></div><p class="resource-count" aria-live="polite">9 resources</p><article class="dialog-resource" data-resource="code"><div class="resource-meta"><span>01 / Code</span><span>Geomorphology</span></div><h3>ChanGeom</h3><p>MATLAB tools to extract channel widths and centerlines from high-resolution imagery.</p><a href="downloads/changeom_v0.3.zip">Download code (.zip)</a></article><article class="dialog-resource" data-resource="data"><div class="resource-meta"><span>02 / Dataset</span><span>Marine science</span></div><h3>Deepwater Horizon</h3><p>Data accompanying the 2014 PNAS study of the fallout plume of submerged oil.</p><a href="downloads/valentine_etal_pnas_2014_data.zip">Download data (.zip)</a></article><article class="dialog-resource" data-resource="viz"><div class="resource-meta"><span>03 / Visualization</span><span>Remote sensing</span></div><h3>Sentinel-2 orbit & coverage</h3><p>An interactive view of tandem satellite orbits and cumulative swath coverage.</p><div class="resource-links"><a href="https://burchfisher.github.io/Sentinel-2-orbit-viz/" target="_blank" rel="noopener">Open visualization</a><a href="https://github.com/burchfisher/Sentinel-2-orbit-viz" target="_blank" rel="noopener">Source code</a></div></article><article class="dialog-resource" data-resource="code"><div class="resource-meta"><span>04 / Code</span><span>Biomedical</span></div><h3>RpEGEN</h3><p>MATLAB scripts for quantifying and visualizing retinal pigment epithelium regeneration from images and regions of interest, developed for the 2022 JoVE article.</p><div class="resource-links"><a href="https://github.com/burchfisher/RpEGEN" target="_blank" rel="noopener">GitHub repository</a><a href="https://doi.org/10.3791/63658" target="_blank" rel="noopener">JoVE article</a></div></article>${siteContent.software.map((tool,index) => `<article class="dialog-resource" data-resource="${tool.dashboard ? 'viz' : 'code'}"><div class="resource-meta"><span>${String(index + 5).padStart(2,'0')} / ${escapeText(tool.type)}</span><span>${escapeText(tool.area)}</span></div><h3>${escapeText(tool.title)}</h3><p>${escapeText(tool.description)}</p><div class="resource-links">${tool.dashboard ? `<a href="${escapeText(tool.dashboard)}" target="_blank" rel="noopener">Open dashboard</a>` : ''}<a href="${escapeText(tool.url)}" target="_blank" rel="noopener">GitHub repository</a><span class="resource-credit">In collaboration with Stephen Conklin</span></div></article>`).join('')}`,
    contact: `<p class="dialog-label">03 / Contact</p><h2 id="dialog-title" tabindex="-1">Let's connect</h2><p class="panel-lead">Feel free to reach out with questions, ideas, or opportunities to collaborate.</p><div class="contact-channel"><span>Email</span><a class="dialog-email" href="mailto:burch.fisher@umces.edu">burch.fisher@umces.edu</a></div><div class="contact-channel"><span>Publications</span><a href="https://scholar.google.com/citations?user=iGCJ1WwAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></div><div class="contact-channel"><span>Background</span><a href="downloads/cvburch.pdf" target="_blank" rel="noopener">Curriculum vitae</a></div><div class="contact-research"><p class="dialog-label">Research interests</p><span>Earth surface processes</span><span>Remote sensing & conservation</span><span>Marine biogeochemistry</span><span>Cyberinfrastructure &amp; training</span></div>`
  };
  panels.papers = banner('pubs','An archival black-and-white photograph') + panels.papers;
  panels.tools = banner('data','Satellite view of glaciers and mountain lakes') + panels.tools;
  panels.contact = banner('contact','Craters and a winding canyon across planetary terrain') + panels.contact;
  const githubLinks = `<div class="contact-channel"><span>GitHub / Personal</span><a href="https://github.com/burchfisher" target="_blank" rel="noopener">burchfisher</a></div><div class="contact-channel"><span>GitHub / CGC-UMCES</span><a href="https://github.com/CGC-UMCES" target="_blank" rel="noopener">CGC-UMCES</a></div>`;
  panels.contact = panels.contact.replace('<div class="contact-research">', githubLinks + '<div class="contact-research">');
  const dialog = document.getElementById('explorer-dialog');
  const showPanel = panel => {
    document.getElementById('dialog-content').innerHTML = panels[panel];
    dialog.dataset.panel = panel;
    dialog.dataset.newsId = '';
    document.querySelectorAll('.explorer-header [data-open], .panel-nav [data-open]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.open === panel)));
    document.querySelectorAll('[data-home]').forEach(button => button.setAttribute('aria-pressed', 'false'));
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.getElementById('dialog-title').focus({ preventScroll: true });
    const fragment = {research:'research',papers:'publications',tools:'resources',contact:'contact',news:'news-archive',team:'team',press:'press',teaching:'teaching'}[panel];
    if (fragment) history.replaceState(null,'','#'+fragment);
    if (panel === 'tools') {
      const buttons = [...dialog.querySelectorAll('[data-resource-filter]')];
      buttons.forEach(button => button.addEventListener('click', () => {
        const type = button.dataset.resourceFilter;
        buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        let count = 0;
        dialog.querySelectorAll('[data-resource]').forEach(resource => {
          resource.hidden = type !== 'all' && resource.dataset.resource !== type;
          if (!resource.hidden) count++;
        });
        dialog.querySelector('.resource-count').textContent = `${count} ${count === 1 ? 'resource' : 'resources'}`;
      }));
    }
    if (panel === 'papers') {
      const search = document.getElementById('explorer-search');
      const area = document.getElementById('explorer-area');
      const filter = () => {
        let count = 0;
        dialog.querySelectorAll('[data-paper-area]').forEach(paper => {
          const terms = searchText(search.value).trim().split(/\s+/).filter(Boolean);
          paper.hidden = !terms.every(term => paper.dataset.paperSearch.includes(term)) || (area.value !== 'all' && paper.dataset.paperArea !== area.value);
          if (!paper.hidden) count++;
        });
        document.getElementById('explorer-count').textContent = `${count} ${count === 1 ? 'publication' : 'publications'}`;
        document.getElementById('explorer-empty').hidden = count > 0;
      };
      search.addEventListener('input', filter);
      area.addEventListener('change', filter);
    }
  };
  const showResearchSection = id => {
    if (!siteContent.research.some(theme => theme.id === id)) return;
    showPanel('research');
    const section = document.getElementById('research-' + id);
    const heading = section.querySelector('h3');
    heading.tabIndex = -1;
    heading.focus({preventScroll:true});
    dialog.scrollTop += section.getBoundingClientRect().top - dialog.getBoundingClientRect().top - 24;
    history.replaceState(null,'','#research/' + id);
  };
  document.getElementById('focus-article').addEventListener('click', event => {
    event.preventDefault();
    showResearchSection(document.getElementById('focus-article').getAttribute('href').split('/')[1]);
  });
  const showNews = id => {
    const entry = siteContent.news.find(item => item.id === id);
    if (!entry) return;
    showPanel('news');
    document.getElementById('dialog-content').innerHTML = `${banner('news','Satellite view of river channels and coastline')}<button type="button" class="news-back" data-open="news">All news</button><time class="news-date" datetime="${entry.date}">${dateLabel(entry.date)}</time><h2 id="dialog-title" class="news-story-title" tabindex="-1">${entry.title}</h2><div class="news-story">${entry.body}</div>`;
    dialog.dataset.newsId = id;
    document.getElementById('dialog-title').focus({preventScroll:true});
    dialog.querySelectorAll('.news-story a').forEach(link => {
      if (!link.getAttribute('href').startsWith('#')) {link.target='_blank'; link.rel='noopener';}
    });
    history.replaceState(null,'','#news/'+id);
  };
  document.addEventListener('click', event => {
    const news = event.target.closest('[data-news]');
    if (news) {showNews(news.dataset.news); return;}
    const panelLink = event.target.closest('#dialog-content [data-open]');
    if (panelLink) showPanel(panelLink.dataset.open);
  });
  document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => showPanel(button.dataset.open)));
  document.querySelectorAll('[data-home]').forEach(button => button.addEventListener('click', () => { if (dialog.open) dialog.close(); history.replaceState(null,'','#home'); document.querySelector('.earth-stage').scrollIntoView({behavior:'instant'}); }));
  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    document.querySelectorAll('.explorer-header [data-open], .panel-nav [data-open]').forEach(button => button.setAttribute('aria-pressed', 'false'));
    document.querySelectorAll('[data-home]').forEach(button => button.setAttribute('aria-pressed', 'true'));
    history.replaceState(null,'','#home');
  });
  dialog.addEventListener('click', event => { if (event.target !== dialog) return; const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); });
  const followRoute = () => {
    const fragment = decodeURIComponent(location.hash.slice(1));
    if (fragment.startsWith('research/')) showResearchSection(fragment.slice(9));
    else if (fragment.startsWith('news/')) showNews(fragment.slice(5));
    else {
      const panel = {research:'research',publications:'papers',resources:'tools',contact:'contact','news-archive':'news',team:'team',press:'press',teaching:'teaching'}[fragment];
      if (panel) showPanel(panel);
      else if (fragment === 'home' && dialog.open) dialog.close();
    }
  };
  window.addEventListener('hashchange',followRoute);
  followRoute();
}
