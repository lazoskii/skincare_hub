(function () {
  const $ = (s) => document.querySelector(s);
  const tabsEl = $('#tabs'), panel = $('#panel'), filterEl = $('#filter'), appbar = $('.appbar'), side = $('.side');
  const narrow = window.matchMedia('(max-width:900px)');
  const nextBtn = $('#next'), nextLbl = $('#next-l');  const FILTERS = [[0, 'Todas'], [1, 'Até R$ 70'], [2, 'R$ 70–200'], [3, 'Acima de R$ 200']];
  let tier = 0, current = 'inicio';

  const tierOf = (p) => (p == null ? 0 : p <= 70 ? 1 : p <= 200 ? 2 : 3);
  const dots = (t) => '<span class="dots" aria-hidden="true">' + [1, 2, 3].map((i) => '<i class="' + (i <= t ? 'on' : '') + '"></i>').join('') + '</span>';
  const li = (arr) => arr.map((x) => '<li>' + x + '</li>').join('');

  function prodHTML(p, key) {
    const t = tierOf(p.p);
    return `<div class="prod" data-tier="${t}">
      <button class="prod-head" aria-expanded="false" aria-controls="pd-${key}">
        <span style="min-width:0"><span class="pb">${p.b}</span><br><span class="pn">${p.n}</span><br><span class="pc">${p.c}</span></span>
        <span class="price">${p.pl}${t ? '<br>' + dots(t) : ''}</span>
      </button>
      <div class="pd" id="pd-${key}" hidden>
        <div class="pros"><h5>Vantagens</h5><ul>${li(p.pros)}</ul></div>
        <div class="cons"><h5>Desvantagens</h5><ul>${li(p.cons)}</ul></div>
      </div>
    </div>`;
  }

  function actHTML(a, ai, tabId, open) {
    const id = tabId + '-' + ai;
    const n = a.prods ? a.prods.length : 0;
    const count = n ? `<span class="tag">${n} ${n === 1 ? 'produto' : 'produtos'}</span>` : a.rx ? '<span class="tag">Só com receita</span>' : a.nop ? '<span class="tag">Sem exemplos</span>' : '';
    let prods = '';
    if (a.prods) {
      prods = `<div class="plabel">Exemplos de produtos · toque para ver vantagens e desvantagens</div>
        <div class="prods">${a.prods.map((p, i) => prodHTML(p, id + '-' + i)).join('')}</div>
        <p class="empty nomatch" hidden>Nenhum exemplo nesta faixa de preço para este ativo. Escolha "Todas" para ver os demais.</p>`;
    } else if (a.see) {
      const t = TABS.find((x) => x.id === a.see);
      prods = `<p class="empty">Os produtos deste ativo estão na aba <button class="linkbtn" data-go="${a.see}">${t.label}</button>.</p>`;
    } else if (a.rx || a.nop) {
      prods = `<p class="empty">${a.rx || a.nop}</p>`;
    }
    const F = (cls, l, v) => `<div${cls ? ' class="' + cls + '"' : ''}><dt>${l}</dt><dd>${v}</dd></div>`;
    const facts = a.inj
      ? `<dl class="facts">${F('', 'O que é', a.what)}${F('', 'Como age (em teoria)', a.how)}</dl>
         <div class="cmp">
           <div class="inj"><h5>Na versão original: injetável ou com microagulhamento</h5><p>${a.inj}</p></div>
           <div class="tpc"><h5>Na versão tópica: o que se sabe</h5><p>${a.top}</p></div>
         </div>
         <dl class="facts">${F('', 'Para quem é vendido', a.who)}${F('', 'Como se usa', a.use)}${F('care', 'Cuidados', a.care)}</dl>`
      : `<dl class="facts">${F('', 'O que é', a.what)}${F('', 'Como age', a.how)}${F('', 'Para quem', a.who)}${F('', 'Como usar', a.use)}${F('care', 'Cuidados', a.care)}</dl>`;
    return `<div class="act">
      <button class="act-head" aria-expanded="${open}" aria-controls="ab-${id}">
        <span class="l"><span class="nm">${a.n}</span>
          <span class="tags"><span class="tag">${a.tag}</span><span class="tag ev${a.ev === 'Limitada' ? ' lim' : ''}">Evidência: ${a.ev.toLowerCase()}</span>${count}</span></span>
        <span class="chev" aria-hidden="true"></span>
      </button>
      <div class="act-body" id="ab-${id}" ${open ? '' : 'hidden'}>
        ${facts}
        ${prods}
      </div>
    </div>`;
  }

  // Cada seção (a partir de cada .sec) vira um cartão; o trecho antes da primeira é o cartão de abertura.
  const blocks = (html) => html.split(/(?=<div class="sec">)/).map((c) => `<section class="blk">${c}</section>`).join('');

  function tabHTML(t) {
    if (t.custom) return blocks(t.html);
    return blocks(`<h2>${t.title}</h2><p class="lead">${t.lead}</p>
      ${t.banner ? `<div class="note"><b>${t.banner.t}</b><p>${t.banner.x}</p></div>` : ''}
      <div class="sec">${t.id === 'estudo' ? 'Como a evidência sobe de nível' : 'O que é'}</div>
      <div class="types">${t.types.map((x) => `<div class="type"><h4>${x[0]}</h4><p>${x[1]}</p></div>`).join('')}</div>
      <div class="sec">Ativos que ajudam</div>
      ${t.actives.map((a, i) => actHTML(a, i, t.id, false)).join('')}
      ${t.alert ? `<div class="note"><b>${t.alert.t}</b><p>${t.alert.x}</p></div>` : ''}
      ${t.sources ? `<div class="sec">Fontes desta aba</div><ol class="srcs">${t.sources.map((s) => `<li><a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a></li>`).join('')}</ol>` : ''}`);
  }

  function applyFilter() {
    panel.querySelectorAll('.prods').forEach((box) => {
      let shown = 0;
      box.querySelectorAll('.prod').forEach((el) => {
        const tt = +el.dataset.tier;
        const ok = !tier || tt === 0 || tt === tier;
        el.hidden = !ok;
        if (ok) shown++;
      });
      const msg = box.parentElement.querySelector('.nomatch');
      if (msg) msg.hidden = shown > 0;
    });
    filterEl.querySelectorAll('.fchip').forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.t === tier)));
  }

  function buildChrome() {
    tabsEl.innerHTML = TABS.map((t, i) => `<button class="tab" role="tab" id="tab-${t.id}" data-id="${t.id}" aria-selected="false" tabindex="-1"><i>${String(i + 1).padStart(2, '0')}</i><span>${t.label}</span></button>`).join('');
    filterEl.innerHTML = '<span class="lbl">Preço</span><div class="seg">' + FILTERS.map((f) => `<button class="fchip" data-t="${f[0]}" aria-pressed="${f[0] === 0}">${f[1]}</button>`).join('') + '</div>';
  }

  function render(id, scroll) {
    const t = TABS.find((x) => x.id === id) || TABS[0];
    current = t.id;
    // Botão do topo leva à aba seguinte; na última, volta ao começo.
    const i = TABS.indexOf(t), last = i === TABS.length - 1, nx = TABS[last ? 0 : i + 1];
    nextBtn.dataset.go = nx.id;
    nextLbl.textContent = last ? 'Voltar ao início' : nx.label;
    nextBtn.setAttribute('aria-label', last ? 'Voltar ao início' : 'Próxima aba: ' + nx.label);
    panel.innerHTML = tabHTML(t);    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', 'tab-' + t.id);
    filterEl.hidden = !!t.custom;
    tabsEl.querySelectorAll('.tab').forEach((b) => {
      const on = b.dataset.id === t.id;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      // Centraliza a aba na faixa horizontal do celular; no menu lateral não há rolagem e isso não faz nada.
      if (on) tabsEl.scrollLeft = b.offsetLeft - (tabsEl.clientWidth - b.offsetWidth) / 2;
    });
    applyFilter();
    if (scroll) {
      const top = t.custom ? panel : filterEl;
      const y = top.getBoundingClientRect().top + window.scrollY - appbar.offsetHeight - (narrow.matches ? side.offsetHeight : 0) - 16;
      if (window.scrollY > y) window.scrollTo(0, Math.max(0, y));
    }
  }

  // Link direto para um ativo: #aba/posição (usado pela página da rotina). Abre o ativo e rola até ele.
  function openAct(ai) {
    const h = panel.querySelector(`[aria-controls="ab-${current}-${ai}"]`);
    if (!h) return;
    h.setAttribute('aria-expanded', 'true');
    document.getElementById(h.getAttribute('aria-controls')).hidden = false;
    const y = h.getBoundingClientRect().top + window.scrollY - appbar.offsetHeight - (narrow.matches ? side.offsetHeight : 0) - 16;
    window.scrollTo(0, Math.max(0, y));
  }
  function route(scroll) {
    const [id, ai] = location.hash.slice(1).split('/');
    render(TABS.some((t) => t.id === id) ? id : 'inicio', scroll);
    if (ai) openAct(ai);
  }

  function go(id) {
    if (location.hash.slice(1) === id) render(id, true);
    else location.hash = id;
  }

  tabsEl.addEventListener('click', (e) => {
    const b = e.target.closest('.tab');
    if (b) go(b.dataset.id);
  });
  tabsEl.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const ids = TABS.map((t) => t.id);
    const i = ids.indexOf(current);
    const n = ids[(i + (e.key === 'ArrowRight' ? 1 : ids.length - 1)) % ids.length];
    go(n);
    const nb = document.getElementById('tab-' + n);
    if (nb) nb.focus();
  });
  filterEl.addEventListener('click', (e) => {
    const b = e.target.closest('.fchip');
    if (!b) return;
    tier = +b.dataset.t;
    applyFilter();
  });
  document.addEventListener('click', (e) => {
    const go1 = e.target.closest('[data-go]');
    if (go1) { go(go1.dataset.go); return; }
    const h = e.target.closest('.act-head, .prod-head');
    if (!h) return;
    const open = h.getAttribute('aria-expanded') === 'true';
    h.setAttribute('aria-expanded', String(!open));
    const body = document.getElementById(h.getAttribute('aria-controls'));
    if (body) body.hidden = open;
  });
  window.addEventListener('hashchange', () => route(true));

  buildChrome();
  route(false);
})();
