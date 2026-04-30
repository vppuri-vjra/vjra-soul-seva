function buildNav(activePage) {
  const links = QUALITIES.map(q => `
    <a class="nav-q${activePage === q.id ? ' active' : ''}"
       href="quality.html?q=${q.id}"
       data-id="${q.id}">
      <span class="icon">${q.icon}</span>${q.name.replace('Greatest ', '')}
    </a>
  `).join('');

  return `
    <nav class="site-nav">
      <div class="nav-inner">
        <a class="nav-logo" href="index.html">Source Nature <span>10 Greatest Qualities</span></a>
        <div class="nav-qualities">${links}</div>
      </div>
    </nav>
  `;
}
