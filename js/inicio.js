(function () {
  // Transição dos cards da página inicial: o card cresce até cobrir a tela, o desenho vai para o centro,
  // a cor se dissolve no fundo da página e só então o navegador troca de página (que entra com fade, ver pageIn no CSS).
  // Roda mesmo com "reduzir movimento" ligado: dura um segundo e só acontece com o clique. O que fica em loop é desligado no CSS.
  let busy = false;

  document.querySelectorAll('.door').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (busy || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
      e.preventDefault();
      busy = true;

      const r = card.getBoundingClientRect(), cs = getComputedStyle(card);
      const svg = card.querySelector('.door-art svg'), ar = svg.getBoundingClientRect();
      const W = innerWidth, H = innerHeight, bg = getComputedStyle(document.body).backgroundColor;

      const veil = document.createElement('div');
      veil.className = 'veil';
      const art = svg.cloneNode(true);
      art.classList.add('veil-art');
      Object.assign(art.style, { left: ar.left + 'px', top: ar.top + 'px', width: ar.width + 'px', height: ar.height + 'px' });
      document.body.append(veil, art);
      card.classList.add('going');
      document.body.classList.add('leaving');

      const from = { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', borderRadius: cs.borderTopLeftRadius, backgroundColor: cs.backgroundColor };
      const full = { left: '0px', top: '0px', width: W + 'px', height: H + 'px', borderRadius: '0px' };
      const ease = 'cubic-bezier(.7,0,.2,1)';
      veil.animate([
        { ...from, easing: ease },
        { ...full, backgroundColor: cs.backgroundColor, offset: 0.62, easing: 'ease-in' },
        { ...full, backgroundColor: bg }
      ], { duration: 1000, fill: 'forwards' });

      const dx = W / 2 - (ar.left + ar.width / 2), dy = H / 2 - (ar.top + ar.height / 2);
      const s = Math.min(1.6, (Math.min(W, H) * 0.62) / ar.width);
      art.animate([
        { transform: 'none', opacity: 1, easing: ease },
        { transform: `translate(${dx}px,${dy}px) scale(${s})`, opacity: 1, offset: 0.62, easing: 'ease-in' },
        { transform: `translate(${dx}px,${dy - 14}px) scale(${s * 1.06})`, opacity: 0 }
      ], { duration: 1000, fill: 'forwards' }).finished.then(() => { location.href = card.href; });
    });
  });

  // Ao voltar pelo botão do navegador, a página pode vir do cache já com a animação no fim: desfaz.
  addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    document.querySelectorAll('.veil, .veil-art').forEach((el) => el.remove());
    document.querySelectorAll('.door.going').forEach((el) => el.classList.remove('going'));
    document.body.classList.remove('leaving');
    busy = false;
  });
})();
