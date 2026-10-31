(function () {
  // Lista INCI do Creme Retexturizador Noturno Sallve, conforme Skinsort e Skincarisma (30/10/2026).
  const L = ['Water','Glycolic Acid','C10-18 Triglycerides','Coco-Caprylate','Glycerin','Sodium Hydroxide','Butyrospermum Parkii Butter','Polyacrylate Crosspolymer-11','Dimethicone','Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer','Diisostearyl Malate','Vitis Vinifera Seed Oil','Panthenol','Cetyl Alcohol','Glyceryl Stearate','Squalane','Phenoxyethanol','PEG-75 Stearate','Divinyldimethicone/Dimethicone Crosspolymer','Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate','Polysorbate 60','Ceteth-20','Steareth-20','Retinol','Sodium Gluconate','Citric Acid','Caprylic/Capric Triglyceride','Linoleic Acid','Oleic Acid','Polysorbate 80','Polysorbate 20','Ethylhexylglycerin','Sorbitan Isostearate','PPG-15 Stearyl Ether','Steareth-2','Steareth-21','Caprylyl Glycol','Tocopherol'];
  const M = { 2: ['hi', 'ácido glicólico'], 13: ['ne', 'pantenol'], 17: ['mk', 'conservante · limite 1%'], 24: ['lo', 'retinol'], 28: ['lo', 'ômega 6'], 29: ['lo', 'ômega 9'] };
  const inci = '<ol class="inci">' + L.map((n, i) => {
    const m = M[i + 1];
    return '<li' + (m ? ' class="' + m[0] + '"' : '') + '><i>' + (i + 1) + '</i><span>' + n + '</span>' + (m ? '<em>' + m[1] + '</em>' : '') + '</li>';
  }).join('') + '</ol>';
  const IMG = 'img/sallve-creme-retexturizador.webp';
  const row = (a, front, st, cls, txt) => '<div class="pair"><div><b>' + a + '</b><br><span style="color:var(--muted);font-size:14px">' + front + '</span></div><span class="st ' + cls + '">' + st + '</span><p>' + txt + '</p></div>';

  const html = `
  <h2>Ler além do marketing</h2>
  <p class="lead">A frente da embalagem é propaganda. A lista de ingredientes, no verso, é a parte exigida por lei (a lista INCI é obrigatória no Brasil e, desde novembro de 2023, também deve vir em português). Ela mostra qual é o ativo principal e quanto dele provavelmente existe.</p>

  <div class="sec">Como ler a lista</div>
  <div class="steps">
    <div class="card"><h3>1. A ordem</h3>
      <p style="margin:0">Os ingredientes aparecem do mais abundante para o menos abundante. Essa ordem só é garantida até cerca de 1% da fórmula. Abaixo disso, a ordem é livre. Um ativo entre os primeiros itens existe em quantidade relevante.</p></div>
    <div class="card"><h3>2. A linha de 1%</h3>
      <p style="margin:0">Ache o conservante, em geral <b>Phenoxyethanol</b>, que tem limite de 1%. Tudo o que vem depois dele está em 1% ou menos. Um ativo nessa parte da lista não é o protagonista do produto.</p></div>
  </div>

  <div class="sec">Caso real: Creme Retexturizador Noturno (Sallve)</div>
  <div class="case">
    <img src="${IMG}" width="560" height="560" alt="Pote do Creme Retexturizador Noturno da Sallve, com a frase Nano Retinol mais Ácido Glicólico, pantenol e ômegas 6 e 9" loading="lazy">
    <div>
      <p><b>A frente diz:</b> "Nano retinol + ácido glicólico + pantenol + ômegas 6 e 9". As páginas de varejo trazem "Nano Retinol 1,5%" e "Ácido Glicólico 5%".</p>
      <p><b>A lista mostra:</b> os dois ativos não têm o mesmo peso. O ácido glicólico está no topo, e o retinol está no fim.</p>
    </div>
  </div>
  <details class="det"><summary>Ver a lista completa de ingredientes (38, na ordem do rótulo)</summary>
    ${inci}
    <p class="inci-cap">Conforme Skinsort e Skincarisma. A fórmula pode mudar, então confira o verso da sua embalagem.</p>
  </details>
  <div class="sec">Posição dos ativos na lista</div>
  ${row('Ácido glicólico', 'frente: 5%', '2º lugar', 'ok', 'Logo depois da água. Combina com o número anunciado e é o ingrediente principal do creme.')}
  ${row('Retinol', 'frente: "nano retinol 1,5%"', '24º lugar', 'alt', 'Depois do conservante (17º). Pela regra da ordem, o retinol puro está em 1% ou menos, o que não combina com 1,5%.')}
  ${row('Pantenol', 'frente: citado', '13º lugar', 'ok', 'Vem bem antes do retinol, então provavelmente há mais pantenol do que retinol.')}
  ${row('Ômegas 6 e 9', 'frente: citados', '28º e 29º', 'alt', 'Aparecem como Linoleic Acid e Oleic Acid, perto do fim da lista.')}
  <div class="note" style="margin-top:14px"><b>E o "1,5%"?</b><p>Pode ser o teor da matéria-prima "nano retinol", que já vem pré-misturada e contém só parte de retinol. A embalagem e as páginas de venda não dizem a que o número se refere. Para saber, vale perguntar ao SAC da marca: "1,5% de retinol puro ou da matéria-prima?"</p></div>
  <div class="card" style="margin-top:12px"><p style="margin:0"><b>Pouco retinol não é, por si só, um defeito.</b> Em cosméticos o retinol costuma ficar entre 0,1% e 1%, e doses baixas irritam menos. O caso mostra a distância entre o que a frente sugere (dois ativos em dose alta) e o que a lista indica (um ácido em quantidade clara e retinol em quantidade menor).</p></div>

  <div class="sec">Passo a passo para qualquer creme</div>
  <div class="card"><ol>
    <li><b>Ignore a frente</b> e ache a lista de ingredientes no verso.</li>
    <li><b>Procure o nome técnico do ativo</b> (tabela abaixo). Se ele não aparece na lista, desconfie.</li>
    <li><b>Veja a posição.</b> Entre os 5 a 10 primeiros, há bastante. Depois do conservante, há 1% ou menos.</li>
    <li><b>Se há porcentagem na embalagem</b>, veja se é do ativo puro ou de uma matéria-prima ou mix.</li>
    <li><b>Compare com a faixa usual</b> do ativo, indicada na aba de cada queixa.</li>
  </ol></div>

  <div class="sec">Nome do ativo na lista</div>
  <dl class="gloss">
    <div><dt>Retinol e derivados</dt><dd><b>Retinol</b>, Retinal ou Retinaldehyde, Hydroxypinacolone Retinoate. Em geral mais fracos: Retinyl Palmitate e Retinyl Acetate.</dd></div>
    <div><dt>Vitamina C</dt><dd><b>Ascorbic Acid</b> (pura). Derivados: Ascorbyl Glucoside, Sodium Ascorbyl Phosphate, Magnesium Ascorbyl Phosphate.</dd></div>
    <div><dt>Niacinamida</dt><dd><b>Niacinamide</b>.</dd></div>
    <div><dt>Ácido hialurônico</dt><dd><b>Sodium Hyaluronate</b> ou Hyaluronic Acid.</dd></div>
    <div><dt>Ácidos esfoliantes</dt><dd><b>Glycolic Acid</b>, Lactic Acid, Mandelic Acid, Salicylic Acid.</dd></div>
    <div><dt>Azelaico e tranexâmico</dt><dd><b>Azelaic Acid</b> e <b>Tranexamic Acid</b>.</dd></div>
    <div><dt>Peptídeos</dt><dd>Nomes que começam com "Palmitoyl" ou "Acetyl", ou terminam em "-peptide".</dd></div>
    <div><dt>Ceramidas</dt><dd><b>Ceramide NP</b>, Ceramide AP, Ceramide EOP.</dd></div>
    <div><dt>Pantenol</dt><dd><b>Panthenol</b>.</dd></div>
    <div><dt>Ômegas 6 e 9</dt><dd><b>Linoleic Acid</b> (ômega 6) e <b>Oleic Acid</b> (ômega 9), ou óleos vegetais que os contêm.</dd></div>
  </dl>

  <div class="sec">Termos que não dizem a quantidade</div>
  <div class="rules">
    <div class="rule"><b>"Com retinol", "contém vitamina C"</b><span>Basta uma pequena parte para a frase ser verdadeira.</span></div>
    <div class="rule"><b>"Nano", "encapsulado", "lipossomal"</b><span>Descrevem como o ativo é entregue, e não quanto há dele.</span></div>
    <div class="rule"><b>"Complexo", "mix", "blend", "tecnologia"</b><span>O nome comercial agrupa vários componentes e esconde o teor de cada um.</span></div>
    <div class="rule"><b>"Pró-colágeno", "retexturizador", "anti-idade"</b><span>São promessas de efeito, e não ingredientes. Procure qual substância da lista deveria causar o efeito.</span></div>
    <div class="rule"><b>Porcentagem sem dizer de quê</b><span>Pode ser do ativo puro ou da matéria-prima. Confirme com a marca ou veja a posição na lista.</span></div>
  </div>

  <div class="note"><b>Limite desta leitura</b><p>A posição indica uma faixa de quantidade, e não o valor exato. Ativos potentes funcionam em doses pequenas, e a lista não mostra pH, estabilidade nem tecnologia de entrega. Use o método para comparar a promessa com o conteúdo, e não para dar nota ao produto.</p></div>

  <div class="sec">Fontes desta aba</div>
  <ol class="srcs">
    <li><a href="https://skinsort.com/products/sallve/creme-retexturizador-noturno" target="_blank" rel="noopener">Skinsort: Sallve Creme Retexturizador Noturno (lista INCI)</a></li>
    <li><a href="https://www.skincarisma.com/products/sallve/creme-retexturizador-noturno" target="_blank" rel="noopener">Skincarisma: Sallve Creme Retexturizador Noturno (lista INCI)</a></li>
    <li><a href="https://www.drogariasaopaulo.com.br/creme-retexturizador-noturno-sallve-com-nano-retinol-30g/p" target="_blank" rel="noopener">Drogaria São Paulo: descrição do produto (1,5% e 5%)</a></li>
    <li><a href="https://acontecefrangipani.substack.com/p/sallve-une-retinol-e-acido-glicolico" target="_blank" rel="noopener">Frangipani: lançamento do produto, com fala atribuída à marca</a></li>
    <li><a href="https://www.gov.br/anvisa/pt-br/acessoainformacao/perguntasfrequentes/cosmeticos/rdc-no-646-2022" target="_blank" rel="noopener">Anvisa: perguntas e respostas sobre INCI e composição em português</a></li>
  </ol>`;

  TABS.splice(1, 0, { id: 'rotulo', label: 'Ler o rótulo', custom: true, html });
})();
