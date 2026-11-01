(function () {
  // Página "Monte sua rotina": as queixas marcadas já selecionam os ativos mais indicados, as cores mostram o quanto
  // cada ativo ajuda, e os ativos marcados entram na manhã e/ou na noite, na ordem de aplicação.
  // [id, rótulo do checkbox, nome curto para as etiquetas]
  const PROBS = [
    ['rugas', 'Rugas e linhas finas', 'rugas'], ['manchas', 'Manchas', 'manchas'], ['flacidez', 'Flacidez', 'flacidez'],
    ['acne', 'Acne e cravos', 'acne'], ['oleosidade', 'Oleosidade', 'oleosidade'], ['olheiras', 'Olheiras', 'olheiras'],
    ['seca', 'Pele seca ou desidratada', 'pele seca'], ['sensivel', 'Pele sensível ou irritada', 'pele sensível']
  ];
  const SHORT = Object.fromEntries(PROBS.map((p) => [p[0], p[2]]));

  // when = horário em que o ativo costuma ser indicado: m = manhã, n = noite (mn só para os hidratantes, que entram nos dois).
  // w = por que esse horário. ord = posição na rotina (menor vai antes). tab = aba com os produtos, ai = posição do ativo nessa aba.
  // buy = [mais econômico, melhor custo-benefício], pelo nome do produto no guia (os dois podem ser o mesmo).
  // lv = o quanto ajuda em cada queixa, segundo as abas do guia: 3 muito indicado (marcado sozinho), 2 indicado, 1 pode ajudar.
  // kind agrupa para os avisos de combinação: ret = retinoide, acid = ácido esfoliante. est = ativo da aba "Em estudo".
  const ACTS = [
    // Manhã
    { id: 'vitc', n: 'Vitamina C', s: 'vitamina C', when: 'm', ord: 2, tab: 'rugas', ai: 2, buy: ['VC-10 Vitamina C + Ácido Ferúlico', 'Sérum Vitamina C 10%'], lv: { rugas: 2, manchas: 2, flacidez: 2 },
      d: 'Antioxidante que ilumina o tom e reforça o protetor.', u: 'Em pele limpa e seca, antes dos outros séruns.',
      w: 'De manhã porque protege contra o dano do sol e da poluição e reforça o protetor.' },
    { id: 'niacin', n: 'Niacinamida', s: 'niacinamida', when: 'm', ord: 3, tab: 'manchas', ai: 1, buy: ['NC-10 Niacinamida + Zinco PCA', 'Niacinamide 10% + Zinc 1%'], lv: { oleosidade: 3, manchas: 2, acne: 2, sensivel: 1 },
      d: 'Vitamina B3. Controla a oleosidade, ajuda em manchas leves e reforça a barreira.', u: 'Algumas gotas no rosto todo.',
      w: 'De manhã porque segura a oleosidade ao longo do dia e combina com vitamina C. Também pode ir à noite.' },
    { id: 'azelaico', n: 'Ácido azelaico', s: 'ácido azelaico', when: 'm', ord: 3, tab: 'manchas', ai: 3, buy: ['Azelan Creme 20%', 'Azelan Creme 20%'], lv: { acne: 3, manchas: 2 },
      d: 'Trata acne e vermelhidão e clareia as marcas que ficam.', u: 'Pouca quantidade. Ardência no começo é comum.',
      w: 'De manhã porque combina com niacinamida e vitamina C e deixa a noite livre para retinoide ou ácido.' },
    { id: 'arbutin', n: 'Alfa-arbutin', s: 'alfa-arbutin', when: 'm', ord: 3, tab: 'manchas', ai: 4, buy: ['aA-2 Alfa-Arbutin 2% + Gluconolactona 10%', 'aA-2 Alfa-Arbutin 2% + Gluconolactona 10%'], lv: { manchas: 2 },
      d: 'Clareador derivado de planta, que reduz a enzima que produz o pigmento.', u: 'Nas áreas com mancha ou no rosto todo.',
      w: 'De manhã porque é suave e combina com vitamina C, e a noite fica livre para os ácidos. Também pode ir à noite.' },
    { id: 'cafeina', n: 'Cafeína (em mix para olheiras)', s: 'mix com cafeína', when: 'm', ord: 5, tab: 'olheiras', ai: 0, buy: ['Mix-02 Anti Olheiras e Manchas', 'Mix-02 Anti Olheiras e Manchas'], lv: { olheiras: 3 },
      d: 'Quase nunca vem sozinha: aparece em séruns e cremes para olheiras, junto de outros ativos como o tranexâmico. Contrai os vasos e reduz o inchaço, de forma passageira.', u: 'Um sérum ou creme para olheiras com cafeína. Pouca quantidade sob os olhos, sem chegar à pálpebra.',
      w: 'De manhã porque age sobre o inchaço com que se acorda.' },
    { id: 'peptideos', n: 'Peptídeos', s: 'peptídeos', when: 'm', ord: 3, tab: 'flacidez', ai: 0, buy: ['Sérum Facial Firmador Peptídeos', 'PM-10 Peptídeos Matrixyl'], lv: { flacidez: 1, rugas: 1, olheiras: 1 },
      d: 'Ativo suave para firmeza, que combina com quase tudo.', u: 'Depois dos outros séruns.',
      w: 'De manhã para ficar longe dos ácidos fortes da noite, que podem atrapalhar o efeito.' },
    { id: 'pdrn', n: 'PDRN ("DNA de salmão")', s: 'PDRN', when: 'm', ord: 3, tab: 'estudo', ai: 1, buy: ['PDRN Pink Peptide Serum', 'PDRN Pink Peptide Serum'], est: true, lv: { rugas: 1 },
      d: 'Fragmentos de DNA usados em K-beauty. Em sérum, há pouca prova de que chegue onde age.', u: 'Sérum ou ampola, como os outros séruns.',
      w: 'De manhã, junto dos outros séruns suaves. Quem tem alergia a peixe deve falar com o médico antes.' },
    // Noite
    { id: 'retinol', n: 'Retinol', s: 'retinol', when: 'n', ord: 3, tab: 'rugas', ai: 0, buy: ['RN-0,3 Retinol e Vitamina E', 'Gel Creme Retinol'], kind: 'ret', lv: { rugas: 3, flacidez: 3, manchas: 1 },
      d: 'Vitamina A. O ativo de farmácia mais estudado contra rugas.', u: 'Uma ervilha para o rosto todo, em pele seca. Comece 2 noites por semana.',
      w: 'Só à noite: a luz degrada o retinol, e ele deixa a pele mais sensível ao sol.' },
    { id: 'retinal', n: 'Retinal (retinaldeído)', s: 'retinal', when: 'n', ord: 3, tab: 'rugas', ai: 0, buy: ['Retrinal 0,1 Creme', 'Retrinal 0,1 Creme'], kind: 'ret', lv: { rugas: 2, flacidez: 2, manchas: 1 },
      d: 'Um passo mais perto do ácido retinoico que o retinol. Age mais rápido e pode irritar mais.', u: 'Pouca quantidade, em pele seca. Comece 2 noites por semana.',
      w: 'Só à noite, pelos mesmos motivos do retinol: a luz o degrada e ele sensibiliza a pele ao sol.' },
    { id: 'adapaleno', n: 'Adapaleno e tretinoína', s: 'adapaleno ou tretinoína', when: 'n', ord: 3, tab: 'acne', ai: 3, kind: 'ret', lv: { acne: 2, rugas: 2, manchas: 1 },
      d: 'Retinoides mais fortes que o retinol, a base do tratamento da acne. O adapaleno é o mais suave para começar.', u: 'Pouca quantidade, aumentando aos poucos. Comece em noites alternadas.',
      w: 'Só à noite: como todo retinoide, deixa a pele mais sensível ao sol.' },
    { id: 'salicilico', n: 'Ácido salicílico', s: 'ácido salicílico', when: 'n', ord: 3, tab: 'acne', ai: 0, buy: ['Gel Hidratante Antiacne Salicílico', 'Gel Hidratante Antiacne Salicílico'], kind: 'acid', lv: { acne: 3, oleosidade: 3 },
      d: 'BHA. Dissolve-se em óleo, entra no poro e desentope cravos.', u: 'Em sérum, comece em noites alternadas. Em gel de limpeza, pode ser diário.',
      w: 'À noite porque deixa a pele mais sensível ao sol.' },
    { id: 'glicolico', n: 'Ácido glicólico', s: 'ácido glicólico', when: 'n', ord: 3, tab: 'manchas', ai: 4, buy: ['AG-10 Ácido Glicólico', 'AG-10 Ácido Glicólico'], kind: 'acid', lv: { manchas: 2, rugas: 1, acne: 1 },
      d: 'AHA. Esfolia a superfície, uniformiza o tom e melhora a textura.', u: 'Comece 2 a 3 noites por semana.',
      w: 'À noite porque deixa a pele mais sensível ao sol.' },
    { id: 'mandelico', n: 'Ácido mandélico', s: 'ácido mandélico', when: 'n', ord: 3, tab: 'manchas', ai: 4, buy: ['Gel Ácido Mandélico 7%', 'AM-10 Ácido Mandélico + Alfa-Arbutin'], kind: 'acid', lv: { manchas: 2, acne: 1 },
      d: 'AHA mais suave que o glicólico, boa opção para peles sensíveis e escuras.', u: 'Comece 2 a 3 noites por semana.',
      w: 'À noite porque, como todo ácido esfoliante, deixa a pele mais sensível ao sol.' },
    { id: 'tranex', n: 'Ácido tranexâmico', s: 'ácido tranexâmico', when: 'n', ord: 3, tab: 'manchas', ai: 2, buy: ['Mix-02', 'Mix-02'], lv: { manchas: 3, olheiras: 2 },
      d: 'Clareador bem tolerado, estudado no melasma.', u: 'Nas áreas com mancha ou no rosto todo.',
      w: 'À noite, no passo de tratamento. Por ser bem tolerado, também pode ir de manhã.' },
    { id: 'ghk', n: 'Peptídeo de cobre (GHK-Cu)', s: 'peptídeo de cobre', when: 'n', ord: 3, tab: 'estudo', ai: 0, buy: ['Sérum GHK-Cu Peptídeo de Cobre', 'The 6 Peptide Skin Booster Serum'], est: true, lv: { rugas: 1, flacidez: 1 },
      d: 'Peptídeo da moda. Estudos tópicos pequenos, muitos pagos pela indústria.', u: 'Sérum, em concentração baixa.',
      w: 'À noite para ficar longe da vitamina C da manhã, que muitos fabricantes pedem para não usar junto.' },
    { id: 'exossomos', n: 'Exossomos', s: 'exossomos', when: 'n', ord: 3, tab: 'estudo', ai: 2, est: true, lv: { rugas: 1 },
      d: 'Vesículas que as células liberam. O rótulo não diz a origem nem quanto há na fórmula.', u: 'Sérum, como os outros séruns.',
      w: 'À noite, no passo de tratamento, junto dos outros séruns regeneradores.' },
    { id: 'egf', n: 'Fatores de crescimento (EGF)', s: 'fatores de crescimento', when: 'n', ord: 3, tab: 'estudo', ai: 3, est: true, lv: { rugas: 1, flacidez: 1 },
      d: 'Proteínas que sinalizam reparo. São grandes, e a penetração em pele íntegra é questionada.', u: 'Sérum, como os outros séruns.',
      w: 'À noite, como costuma vir indicado nos próprios séruns.' },
    { id: 'pantenol', n: 'Pantenol (vitamina B5)', s: 'pantenol', when: 'n', ord: 5, tab: 'hidratacao', ai: 2, buy: ['Derma Loção Facial', 'Calm B5'], lv: { sensivel: 2, seca: 1 },
      d: 'Acalma e ajuda a barreira a se recompor depois de irritação.', u: 'Antes do hidratante, ou no lugar dele enquanto a pele se recupera.',
      w: 'À noite porque ajuda a pele a se recuperar dos tratamentos enquanto você dorme.' },
    // Hidratantes: entram de manhã e à noite
    { id: 'hialu', n: 'Ácido hialurônico e glicerina', s: 'ácido hialurônico', when: 'mn', ord: 4, tab: 'hidratacao', ai: 1, buy: ['AH-2 Ácidos Hialurônicos + Vit. B5', 'Hydro Boost Water Gel'], lv: { seca: 3, rugas: 1, olheiras: 1 },
      d: 'Humectantes que seguram água na pele e suavizam linhas de ressecamento.', u: 'Com a pele levemente úmida, e o hidratante logo em seguida.',
      w: 'De manhã e à noite, porque hidratam sem interferir nos outros ativos.' },
    { id: 'ceramidas', n: 'Hidratante com ceramidas', s: 'hidratante com ceramidas', when: 'mn', ord: 6, tab: 'hidratacao', ai: 0, buy: ['Loção Facial Hidratante PM', 'Creme Hidratante'], lv: { sensivel: 3 },
      d: 'Repara a barreira e ajuda a pele a tolerar os outros ativos.', u: 'No lugar do hidratante comum.',
      w: 'De manhã e à noite, porque substitui o hidratante, que entra nas duas rotinas.' }
  ];
  const SLOT = { m: 'Manhã', n: 'Noite', mn: 'Manhã e noite' };
  const I_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
  const I_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>';
  const ICON = { m: I_SUN, n: I_MOON, mn: I_SUN + I_MOON };
  const I_INFO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6v.1"/></svg>';
  const I_CART = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2.2l2.3 10.6a1.6 1.6 0 0 0 1.6 1.3h8.1a1.6 1.6 0 0 0 1.6-1.2L20.5 8H6.1"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>';
  // Produtos vêm das abas do guia (carregadas antes deste arquivo), para os preços ficarem num lugar só.
  const PROD = {};
  (typeof TABS === 'undefined' ? [] : TABS).forEach((t) => (t.actives || []).forEach((x) => (x.prods || []).forEach((p) => { PROD[p.n] = p; })));
  function buyHTML(a) {
    const [eco, cb] = (a.buy || []).map((n) => PROD[n]);
    if (!eco || !cb) return '';
    const row = (lbl, p) => `<li><em>${lbl}</em><span><b>${p.b}</b> ${p.n}</span><i>${p.pl}</i></li>`;
    const rows = eco === cb ? row('Econômico e custo-benefício', eco) : row('Mais econômico', eco) + row('Melhor custo-benefício', cb);
    return `<details class="buy"><summary>${I_CART}<span>Onde começar</span></summary><ul>${rows}</ul></details>`;
  }
  const guide = (a) => `guia.html#${a.tab}/${a.ai}`; // abre a aba e já expande o ativo (ver openAct em app.js)
  const byId = Object.fromEntries(ACTS.map((a) => [a.id, a]));
  const LV = { 3: 'Muito indicado', 2: 'Indicado', 1: 'Pode ajudar' };
  const KEY = 'rotina';
  const DAYS = [['Seg', 'segunda'], ['Ter', 'terça'], ['Qua', 'quarta'], ['Qui', 'quinta'], ['Sex', 'sexta'], ['Sáb', 'sábado'], ['Dom', 'domingo']];
  const cap = (t) => t.replace(/^./, (c) => c.toUpperCase());
  const joinPt = (arr) => (arr.length < 2 ? arr.join('') : arr.slice(0, -1).join(', ') + ' e ' + arr[arr.length - 1]);

  const SUN = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>';

  const html = `
  <section class="blk step">
    <div class="step-n">1</div>
    <div class="sec">O que te incomoda</div>
    <div class="chks" id="rt-probs">${PROBS.map((p) => `<label class="chk"><input type="checkbox" name="p" value="${p[0]}"> ${p[1]}</label>`).join('')}</div>
  </section>

  <section class="blk step">
    <div class="step-n">2</div>
    <div class="sec">Escolha os ativos</div>
    <p class="rt-hint" id="rt-hint"></p>
    <div class="lv-legend" id="rt-legend" hidden><span class="l3"><i></i>Muito indicado</span><span class="l2"><i></i>Indicado</span><span class="l1"><i></i>Pode ajudar</span></div>
    <div class="picks" id="rt-acts">${ACTS.map((a) => `<label class="pick" data-id="${a.id}">
      <input type="checkbox" name="a" value="${a.id}">
      <span class="pick-top"><span class="slot ${a.when}">${ICON[a.when]}${SLOT[a.when]}</span><span class="pick-r"><a class="more" href="${guide(a)}" title="Mais informações no guia" aria-label="Mais informações sobre ${a.s} no guia">${I_INFO}</a><span class="tick" aria-hidden="true"></span></span></span>
      <b>${a.n}</b>
      <small>${a.d}</small>
      <span class="whys"></span>
    </label>`).join('')}</div>
  </section>

  <section class="blk step">
    <div class="step-n">3</div>
    <div class="sec">Sua rotina</div>
    <div class="week" id="rt-week" hidden></div>
    <p class="rt-subt" id="rt-steps-t" hidden>Passo a passo de cada horário</p>
    <div class="routine">
      <div class="rcol am"><h3>${SUN} Manhã</h3><ol class="rsteps" id="rt-m"></ol></div>
      <div class="rcol"><h3>${MOON} Noite</h3><ol class="rsteps" id="rt-n"></ol></div>
    </div>
    <div id="rt-warn"></div>
    <div class="rt-bar" style="margin:18px 0 0"><p>As marcações ficam salvas só neste navegador.</p><button class="pbtn" id="rt-clear" type="button">Limpar tudo</button></div>
  </section>`;

  function init(root) {
    const $ = (s) => root.querySelector(s);
    const boxes = (name) => [...root.querySelectorAll(`input[name="${name}"]`)];
    const box = (id) => root.querySelector(`input[name="a"][value="${id}"]`);
    const hint = $('#rt-hint'), warn = $('#rt-warn'), list = $('#rt-acts');
    const checkedProbs = () => boxes('p').filter((b) => b.checked).map((b) => b.value);
    const level = (a, probs) => Math.max(0, ...probs.map((p) => a.lv[p] || 0));

    let st = {};
    try { st = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
    boxes('p').forEach((b) => { b.checked = (st.p || []).includes(b.value); });
    boxes('a').forEach((b) => { b.checked = (st.a || []).includes(b.value); });
    // Ativos marcados sozinhos pelas queixas. Os que a pessoa marca ou desmarca à mão saem daqui e ficam como ela deixou.
    const auto = new Set((st.auto || []).filter((id) => byId[id])); // ignora ids de versões antigas da lista

    // Marca os "muito indicados" das queixas atuais e desmarca os automáticos que deixaram de ser.
    function autoSelect() {
      const probs = checkedProbs();
      const want = new Set(ACTS.filter((a) => level(a, probs) === 3).map((a) => a.id));
      auto.forEach((id) => { if (!want.has(id)) { box(id).checked = false; auto.delete(id); } });
      want.forEach((id) => { const b = box(id); if (!b.checked) { b.checked = true; auto.add(id); } });
    }

    function update() {
      const probs = checkedProbs();
      const sel = new Set(boxes('a').filter((b) => b.checked).map((b) => b.value));
      try { localStorage.setItem(KEY, JSON.stringify({ p: probs, a: [...sel], auto: [...auto] })); } catch (e) {}

      // Cor e etiquetas de cada ativo, e os mais indicados primeiro na lista.
      const order = ACTS.map((a, i) => ({ a, i, l: level(a, probs) }));
      order.forEach(({ a, l }) => {
        const card = list.querySelector(`[data-id="${a.id}"]`);
        card.classList.remove('l1', 'l2', 'l3');
        if (l) card.classList.add('l' + l);
        const chips = [3, 2, 1].map((n) => {
          const ps = probs.filter((p) => a.lv[p] === n);
          return ps.length ? `<span class="why l${n}">${LV[n]}: ${joinPt(ps.map((p) => SHORT[p]))}</span>` : '';
        }).join('');
        card.querySelector('.whys').innerHTML = chips + (a.est ? '<span class="why l1">Em estudo, pouca evidência</span>' : '');
      });
      order.sort((x, y) => y.l - x.l || x.i - y.i).forEach(({ a }) => list.appendChild(list.querySelector(`[data-id="${a.id}"]`)));
      $('#rt-legend').hidden = !probs.length;
      hint.textContent = !probs.length
        ? 'Marque acima o que te incomoda e os ativos mais indicados já entram selecionados. Ou escolha direto na lista.'
        : 'Os mais indicados para o que você marcou já estão selecionados, e as cores mostram o quanto cada ativo ajuda. Você pode desmarcar ou incluir outros.';

      // Rotina: limpeza, ativos na ordem, hidratante e, de manhã, protetor por último.
      const of = (kind) => [...sel].filter((id) => byId[id].kind === kind);
      const rets = of('ret'), acids = of('acid');
      const both = rets.length > 0 && acids.length > 0;

      // Plano da semana. Noite: retinoides e ácidos não dividem a noite; cada um ganha a sua, seguida de duas noites leves
      // (a ideia do "skin cycling"), ácido antes e retinoide depois. Manhã: para quem está começando, um ativo por dia,
      // mesmo os que combinam. O que é só hidratação (when 'mn') e os suaves da noite entram todos os dias.
      const strong = [...acids, ...rets];
      const nightPlan = strong.length > 1 || (sel.has('ghk') && acids.length > 0);
      const am = ACTS.filter((a) => sel.has(a.id) && a.when === 'm').map((a) => a.id);
      const plan = nightPlan || am.length > 1;
      const cycle = [...strong, null, null];
      const nights = DAYS.map((d, i) => ({ d, a: plan && strong.length ? cycle[i % cycle.length] : null }));
      const mornings = DAYS.map((d, i) => ({ d, a: am.length ? am[i % am.length] : null }));
      const daysOf = (id, list) => list.filter((x) => x.a === id).map((x) => x.d[1]);
      const when = (id, list, word) => { const ds = daysOf(id, list); return ` Só ${ds.length > 1 ? 'nas ' + word + 's' : 'na ' + word} de ${joinPt(ds)} (veja a semana acima).`; };
      function steps(time) {
        const out = [{ n: 'Limpeza', d: time === 'm' ? 'Sabonete facial suave, ou só água se a pele for seca.' : 'Duas vezes se usou protetor ou maquiagem durante o dia.', ord: 0 }];
        ACTS.forEach((a) => {
          if (!sel.has(a.id) || !a.when.includes(time)) return;
          let d = a.u;
          if (plan && strong.includes(a.id)) d += when(a.id, nights, 'noite');
          if (plan && am.length > 1 && am.includes(a.id)) d += when(a.id, mornings, 'manhã');
          if (nightPlan && a.id === 'ghk') d += ' Só nas noites sem ácido.';
          out.push({ n: a.n, d, w: a.w, ord: a.ord, href: guide(a), buy: buyHTML(a) });
        });
        if (!sel.has('ceramidas')) out.push({ n: 'Hidratante', d: time === 'm' ? 'Gel ou creme, conforme a sua pele.' : 'Creme, que ajuda a pele a tolerar o tratamento.', ord: 6 });
        if (time === 'm') out.push({ n: 'Protetor solar', d: 'Sempre o último passo, todos os dias. Reaplique se ficar no sol.', ord: 7 });
        return out.sort((x, y) => x.ord - y.ord).map((s) => `<li${s.href ? ' class="act"' : ''}><div><b>${s.n}</b><span>${s.d}</span>${s.buy || ''}${s.w ? `<small class="whyslot">${s.w}</small>` : ''}</div>${s.href ? `<a class="more-t" href="${s.href}">Mais info <span aria-hidden="true">↗</span></a>` : ''}</li>`).join('');
      }
      $('#rt-m').innerHTML = steps('m');
      $('#rt-n').innerHTML = steps('n');

      const wk = $('#rt-week');
      wk.hidden = $('#rt-steps-t').hidden = !plan;
      if (plan) {
        const chip = (t) => `<span class="wk-chip">${cap(t)}</span>`;
        const hyd = ACTS.filter((a) => sel.has(a.id) && a.when === 'mn').map((a) => chip(a.s));
        const daily = ACTS.filter((a) => sel.has(a.id) && a.when === 'n' && !strong.includes(a.id) && a.id !== 'ghk').map((a) => chip(a.s));
        if (sel.has('ghk')) daily.push(chip(nightPlan ? 'peptídeo de cobre <small>(noites sem ácido)</small>' : 'peptídeo de cobre'));
        // Dica pequena: um par da manhã que pode ir junto depois que a pele se acostumar (fora os que podem arder juntos).
        const IRR = [['vitc', 'azelaico']];
        let pair = null;
        am.forEach((x, i) => am.slice(i + 1).forEach((y) => { if (!pair && !IRR.some((r) => r.includes(x) && r.includes(y))) pair = [x, y]; }));
        const KIND = { ret: 'Retinoide', acid: 'Ácido' };
        const why = [
          am.length > 1 ? 'Para começar com calma, a manhã alterna um ativo por dia.' : '',
          nightPlan ? 'À noite, os ativos fortes não dividem a mesma noite: o plano alterna um por vez e deixa noites leves para a pele se recuperar.'
            : strong.length ? `À noite, ${byId[strong[0]].s} entra em noites espaçadas, com noites leves no meio.` : ''
        ].filter(Boolean).join(' ');
        const day = (cls, d, small, name) => `<div class="wk-d ${cls}"><b>${d[0]}</b>${small ? `<small>${small}</small>` : ''}<span>${name}</span></div>`;
        wk.innerHTML = `<h3>Sua semana</h3>
          <p class="week-sub">${why}</p>
          <div class="wk">
            ${am.length ? `<div class="wk-l am">${I_SUN}<span>Manhã<small>${am.length > 1 ? 'um ativo por dia' : 'todos os dias'}</small></span></div>
            <div class="wk-days">${mornings.map(({ d, a }) => day('am', d, '', cap(byId[a].s))).join('')}</div>` : ''}
            <div class="wk-l am">${I_SUN}<span>Toda manhã</span></div>
            <div class="wk-span am">${hyd.join('')}<em>${hyd.length ? '+ limpeza' : 'Limpeza'}, hidratante e protetor</em></div>
            ${strong.length ? `<div class="wk-l">${I_MOON}<span>Noite<small>um ativo forte por vez</small></span></div>
            <div class="wk-days">${nights.map(({ d, a }) => a ? day(byId[a].kind, d, KIND[byId[a].kind], cap(byId[a].s)) : day('rest', d, 'Descanso', 'Noite leve')).join('')}</div>` : ''}
            ${daily.length ? `<div class="wk-l">${I_MOON}<span>Toda noite${strong.length ? '<small>junto com o plano</small>' : ''}</span></div>
            <div class="wk-span">${daily.join('')}</div>` : ''}
          </div>
          ${pair ? `<p class="wk-tip">Dica: depois de umas 4 semanas, se a pele estiver tranquila, dá para usar ${byId[pair[0]].s} e ${byId[pair[1]].s} na mesma manhã.</p>` : ''}`;
      }

      const w = [];
      const n = [...sel].filter((id) => byId[id].when !== 'mn').length;
      const names = (ids) => joinPt(ids.map((id) => byId[id].s));
      if (!sel.size) w.push(['Rotina básica', 'Sem ativos marcados, esta é a base: limpar, hidratar e proteger. Ela sozinha já previne boa parte das manchas e rugas.']);
      if (n >= 2) w.push(['Um ativo novo por vez', `Você marcou ${n} ativos. Comece por um, espere pelo menos duas semanas e só então inclua o próximo. Assim, se algo irritar, você sabe qual foi.`]);
      if (rets.length > 1) w.push(['Escolha um retinoide só', 'Retinol e retinal fazem a mesma coisa. Usar os dois só aumenta a irritação. Quem está começando costuma ir de retinol e passar para o retinal depois, se tolerar bem.']);
      if (acids.length > 1) w.push(['Evite empilhar ácidos', `Você marcou ${names(acids)}. Escolha um e use com moderação. Juntos, eles fragilizam a barreira e podem piorar manchas e acne.`]);
      if (both) w.push(['Retinoide e ácido esfoliante', `Na mesma noite, ${names(rets)} e ${names(acids)} aumentam muito o risco de irritação e descamação. Por isso o plano da semana separa os dois.`]);
      if (sel.has('ghk') && acids.length) w.push(['Peptídeo de cobre e ácido', 'Muitos fabricantes orientam não usar o peptídeo de cobre junto de ácidos fortes. No plano da semana, ele fica nas noites sem ácido.']);
      const est = [...sel].filter((id) => byId[id].est);
      if (est.length) w.push(['Ativos em estudo', `${names(est).replace(/^./, (c) => c.toUpperCase())} ${est.length > 1 ? 'têm' : 'tem'} bem menos evidência que os outros ativos desta lista. Vale testar sabendo disso, e sem deixar de lado o que tem mais estudo.`]);
      if (probs.includes('sensivel') && (rets.length || acids.length)) w.push(['Pele sensível', 'Comece pelo hidratante com ceramidas e deixe retinoides e ácidos para quando a pele estiver calma, com uso bem espaçado.']);
      if (probs.includes('manchas')) w.push(['Manchas', 'O protetor solar diário, de preferência com cor, faz parte do tratamento. Se a mancha for melasma ou estiver mudando de tamanho ou cor, procure um dermatologista.']);
      // Todos os avisos numa caixa só, sempre aberta.
      warn.innerHTML = !w.length ? '' : `<div class="warns"><p class="warns-t">${w.length} ${w.length === 1 ? 'cuidado' : 'cuidados'} para a sua rotina</p>
        <ul>${w.map(([t, x]) => `<li><b>${t}.</b> ${x}</li>`).join('')}</ul></div>`;
    }

    $('#rt-probs').addEventListener('change', () => { autoSelect(); update(); });
    list.addEventListener('change', (e) => { auto.delete(e.target.value); update(); });    $('#rt-clear').addEventListener('click', () => {
      boxes('p').concat(boxes('a')).forEach((b) => { b.checked = false; });
      auto.clear();
      update();
    });
    update();
  }

  const root = document.getElementById('rotina');
  root.innerHTML = html;
  init(root);
})();
