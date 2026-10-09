const publications = [
  {
    year: '2024', journal: 'GIScience & Remote Sensing',
    title: 'Mapping recent timber harvest activity in a temperate forest using single date airborne LiDAR surveys and machine learning: lessons for conservation planning',
    authors: 'G. Burch Fisher, A. J. Elmore, M. C. Fitzpatrick, D. J. McNeil, J. W. Atkins & J. L. Larkin',
    link: 'https://www.tandfonline.com/doi/full/10.1080/15481603.2024.2379198',
    pdf: 'https://www.burchfisher.com/uploads/3/8/8/3/38838315/fisher_etal_giscirs_2024.pdf',
    topic: 'remote', access: 'Open access'
  },
  {
    year: '2024', journal: 'Avian Conservation and Ecology',
    title: 'Breeding season space use and habitat selection by Blue-winged Warblers in managed shrublands',
    authors: 'K. B. Fuoco, D. J. McNeil, C. J. Fiss, C. I. Bocetti, G. Burch Fisher & J. L. Larkin',
    link: 'https://ace-eco.org/vol19/iss1/art6/',
    pdf: 'https://www.ace-eco.org/vol19/iss1/art6/ACE-ECO-2024-2587.pdf',
    topic: 'remote', access: 'Open access'
  },
  {
    year: '2023', journal: 'Nature Communications',
    title: 'Milankovitch-paced erosion in the southern Central Andes',
    authors: 'G. Burch Fisher, L. V. Luna, W. H. Amidon, D. W. Burbank and colleagues',
    link: 'https://www.nature.com/articles/s41467-023-36022-0',
    pdf: 'https://www.nature.com/articles/s41467-023-36022-0.pdf',
    topic: 'earth', access: 'Open access'
  },
  {
    year: '2023', journal: 'Forest Ecology and Management',
    title: 'Using aerial LiDAR to assess regional availability of potential habitat for a conservation dependent forest bird',
    authors: 'D. J. McNeil, G. Fisher, C. J. Fiss, A. J. Elmore, M. C. Fitzpatrick, J. W. Atkins, J. Cohen & J. L. Larkin',
    link: 'https://www.sciencedirect.com/science/article/pii/S0378112723002360',
    pdf: 'https://www.burchfisher.com/uploads/3/8/8/3/38838315/mcneil_etal_fem_2023.pdf',
    topic: 'remote', access: 'PDF available'
  },
  {
    year: '2017', journal: 'Proceedings of the National Academy of Sciences',
    title: 'Persistence and biodegradation of oil at the ocean floor following Deepwater Horizon',
    authors: 'S. C. Bagby, C. M. Reddy, C. Aeppli, G. Burch Fisher & D. L. Valentine',
    link: 'https://www.pnas.org/doi/10.1073/pnas.1610110114',
    pdf: 'https://www.burchfisher.com/uploads/3/8/8/3/38838315/pnas-2017-bagby-e9-e18.pdf',
    topic: 'marine', access: 'Open access'
  }
];

const nav = `<a href="#research">Research</a><a href="#publications">Publications</a><a href="#resources">Data & code</a><a href="#contact">Contact</a>`;
const themes = [
  ['01', 'Earth surface processes', 'How rivers, erosion, tectonics, and climate interact to shape landscapes over time.'],
  ['02', 'Remote sensing & conservation', 'Using LiDAR, high-resolution imagery, and spatial analysis to study forests and habitat.'],
  ['03', 'Marine biogeochemistry', 'Investigating the transport, fate, and degradation of hydrocarbons in marine environments.']
];
const style = document.body.dataset.style;
const heroIntro = style === 'field'
  ? 'From mountain rivers to the ocean floor.'
  : style === 'editorial' ? 'Landscapes. Climate. Connections.' : 'Earth science, across scales.';

document.getElementById('site').innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="preview-bar" aria-label="Design previews">
    <a class="preview-home" href="index.html">Designs</a>
    <nav aria-label="Choose a design">
      <a href="academic.html" ${style === 'academic' ? 'aria-current="page"' : ''}>01 Academic</a>
      <a href="field.html" ${style === 'field' ? 'aria-current="page"' : ''}>02 Field</a>
      <a href="editorial.html" ${style === 'editorial' ? 'aria-current="page"' : ''}>03 Editorial</a>
    </nav>
  </div>
  <header class="site-header">
    <a class="brand" href="#main"><span class="brand-mark">BF</span><span>G. Burch Fisher</span></a>
    <nav class="desktop-nav" aria-label="Main navigation">${nav}</nav>
    <details class="mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation">${nav}</nav></details>
    <a class="cv-link" href="https://www.burchfisher.com/uploads/3/8/8/3/38838315/cvburch.pdf" target="_blank" rel="noopener">CV</a>
  </header>
  <main id="main">
    <section class="hero" aria-labelledby="name">
      <div class="hero-copy">
        <p class="eyebrow">G. Burch Fisher <span>/</span> Earth scientist</p>
        <h1 id="name">G. Burch <br>Fisher<span class="name-dot">.</span></h1>
        <p class="hero-statement">${heroIntro}</p>
        <p class="hero-description">Research at the intersection of geomorphology, remote sensing, and environmental change.</p>
        <div class="hero-links"><a class="primary-link" href="#publications">Selected publications</a><a href="https://scholar.google.com/citations?user=iGCJ1WwAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></div>
      </div>
      <figure class="hero-image"><img src="assets/andes.jpg" alt="Snow-capped mountain peaks above a river valley and grassy alpine terraces"><figcaption>Landscapes in focus</figcaption></figure>
      <div class="hero-footer"><span>Earth surface processes</span><span>Remote sensing</span><span>Environmental change</span></div>
    </section>
    <section class="research-section section" id="research" aria-labelledby="research-title">
      <div class="section-heading"><p class="eyebrow">01 / Research</p><h2 id="research-title">A connected view<br>of a changing Earth.</h2></div>
      <div class="topics">${themes.map(([number,title,description]) => `<article class="topic"><span class="topic-number">${number}</span><h3>${title}</h3><p>${description}</p></article>`).join('')}</div>
    </section>
    <section class="publications-section section" id="publications" aria-labelledby="publications-title">
      <div class="section-heading"><div><p class="eyebrow">02 / Publications</p><h2 id="publications-title">Selected work</h2></div><a class="text-link" href="https://www.burchfisher.com/pubs.html" target="_blank" rel="noopener">Complete publication list</a></div>
      <div class="publication-tools"><div class="filters" role="group" aria-label="Filter publications"><button type="button" data-filter="all" aria-pressed="true">All</button><button type="button" data-filter="earth" aria-pressed="false">Earth surface</button><button type="button" data-filter="remote" aria-pressed="false">Remote sensing</button><button type="button" data-filter="marine" aria-pressed="false">Marine</button></div><span class="publication-count" aria-live="polite">5 papers</span></div>
      <div class="publication-list">${publications.map(p => `<article class="publication" data-topic="${p.topic}"><div class="pub-year">${p.year}</div><div class="pub-content"><p class="journal">${p.journal}</p><h3><a href="${p.link}" target="_blank" rel="noopener">${p.title}</a></h3><p class="authors">${p.authors}</p><span class="access">${p.access}</span></div><div class="pub-links"><a href="${p.link}" target="_blank" rel="noopener" aria-label="Journal article: ${p.title}">Article</a><a href="${p.pdf}" target="_blank" rel="noopener" aria-label="Download PDF: ${p.title}">PDF</a></div></article>`).join('')}</div>
    </section>
    <section class="resources-section section" id="resources" aria-labelledby="resources-title">
      <div class="section-heading"><p class="eyebrow">03 / Data & code</p><h2 id="resources-title">Beyond the paper.</h2></div>
      <div class="resources"><article><span class="resource-type">MATLAB / Geomorphology</span><h3>ChanGeom</h3><p>Channel width and centerline extraction from high-resolution imagery.</p><a href="https://www.burchfisher.com/uploads/3/8/8/3/38838315/changeom_v0.3.zip">Download code (.zip)</a></article><article><span class="resource-type">Dataset / Marine science</span><h3>Deepwater Horizon</h3><p>Data accompanying the study of the fallout plume of submerged oil.</p><a href="https://www.burchfisher.com/uploads/3/8/8/3/38838315/valentine_etal_pnas_2014_data.zip">Download data (.zip)</a></article></div>
    </section>
    <section class="contact-section section" id="contact" aria-labelledby="contact-title"><p class="eyebrow">04 / Contact</p><h2 id="contact-title">Let's connect.</h2><p>Questions, ideas, or conversations about the research.</p><div class="contact-links"><a href="https://scholar.google.com/citations?user=iGCJ1WwAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a><a href="https://www.burchfisher.com/uploads/3/8/8/3/38838315/cvburch.pdf" target="_blank" rel="noopener">Curriculum vitae</a></div></section>
  </main>
  <footer class="site-footer"><span>G. Burch Fisher</span><span>Earth science & environmental research</span><a href="#main">Back to top</a></footer>
`;

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    let count = 0;
    document.querySelectorAll('.publication').forEach(paper => {
      paper.hidden = button.dataset.filter !== 'all' && paper.dataset.topic !== button.dataset.filter;
      if (!paper.hidden) count++;
    });
    document.querySelector('.publication-count').textContent = `${count} ${count === 1 ? 'paper' : 'papers'}`;
  });
});
document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.mobile-nav').open = false;
}));
