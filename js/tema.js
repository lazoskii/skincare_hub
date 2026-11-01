(function () {
  // Botão de tema, usado nas duas páginas: claro por padrão (definido no <head>); alterna e grava a escolha.
  const root = document.documentElement, btn = document.getElementById('theme');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = t;
    try { localStorage.setItem('tema', t); } catch (e) {}
  });
})();
