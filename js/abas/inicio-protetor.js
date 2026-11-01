const TABS = [];

TABS.push({
  id: 'inicio', label: 'Comece aqui', custom: true,
  html: `
  <h2>Antes de comprar qualquer coisa</h2>
  <p class="lead">Skincare é um conjunto pequeno de hábitos repetidos por meses. Os produtos entram para facilitar isso. Esta página explica a base, e as outras abas entram em cada queixa.</p>

  <div class="sec">Rotina básica</div>
  <div class="steps">
    <div class="card"><h3>Manhã</h3><ol>
      <li><b>Limpar</b> com sabonete facial suave (ou só água, se a pele for seca).</li>
      <li><b>Antioxidante</b>, como a vitamina C (opcional).</li>
      <li><b>Hidratar</b> com gel ou creme.</li>
      <li><b>Protetor solar</b>, sempre por último e todos os dias.</li>
    </ol></div>
    <div class="card"><h3>Noite</h3><ol>
      <li><b>Limpar</b> (duas vezes se usou protetor ou maquiagem).</li>
      <li><b>Tratamento</b>: retinoide, ácido ou clareador, conforme a queixa.</li>
      <li><b>Hidratar</b> com creme, que ajuda a pele a tolerar o tratamento.</li>
    </ol></div>
  </div>

  <div class="sec">Cinco regras de ouro</div>
  <div class="rules">
    <div class="rule"><b>1. Protetor solar vem primeiro</b><span>Sol é a principal causa de manchas e de rugas. Nenhum ativo compensa a falta dele.</span></div>
    <div class="rule"><b>2. Um ativo novo por vez</b><span>Se irritar, você saberá quem foi. Espere pelo menos duas semanas antes de entrar com o próximo.</span></div>
    <div class="rule"><b>3. Teste antes</b><span>Passe um pouco no antebraço ou atrás da orelha por 24 a 48 horas antes de usar no rosto.</span></div>
    <div class="rule"><b>4. Comece devagar</b><span>Ativos fortes (retinoides, ácidos) entram 2 vezes por semana e sobem aos poucos.</span></div>
    <div class="rule"><b>5. Dê tempo</b><span>Manchas e rugas pedem de 8 a 12 semanas de uso regular para mostrar diferença. Oleosidade e hidratação respondem antes.</span></div>
  </div>

  <div class="sec">Como ler este guia</div>
  <div class="card">
    <p><b>Faixa de preço:</b> três pontinhos mostram se o produto é barato (1), intermediário (2) ou caro (3). Os filtros no topo escondem o que está fora da faixa escolhida.</p>
    <div class="legend" style="margin-bottom:10px">
      <span><span class="dots"><i class="on"></i><i></i><i></i></span> até R$ 70</span>
      <span><span class="dots"><i class="on"></i><i class="on"></i><i></i></span> R$ 70 a R$ 200</span>
      <span><span class="dots"><i class="on"></i><i class="on"></i><i class="on"></i></span> acima de R$ 200</span>
    </div>
    <p><b>Evidência:</b> indica quanto estudo clínico sustenta o efeito do ativo. <i>Forte</i> quer dizer muitos estudos consistentes. <i>Moderada</i> quer dizer bons indícios, com menos estudos. <i>Limitada</i> quer dizer resultado possível, porém pouco comprovado.</p>
    <p style="margin:0"><b>Concentração no nome:</b> várias marcas escrevem a porcentagem no rótulo, e algumas colocam no código do produto. Por exemplo, "VC-10" é vitamina C a 10%, e "RN-0,3" é retinol a 0,3%. Compare sempre a porcentagem, e não só o nome do ativo. Para conferir o que de fato está na fórmula, veja a aba <button class="linkbtn" data-go="rotulo">Ler o rótulo</button>.</p>
  </div>

  <div class="sec">Vocabulário</div>
  <dl class="gloss">
    <div><dt>Ativo</dt><dd>Ingrediente que faz algo específico na pele (clarear, renovar, hidratar). O resto da fórmula só carrega e estabiliza o ativo.</dd></div>
    <div><dt>Sérum</dt><dd>Produto líquido ou em gel, concentrado em ativos. Vai depois da limpeza e antes do creme.</dd></div>
    <div><dt>FPS</dt><dd>Fator de proteção contra raios UVB, os que queimam. Para o rosto, use 30 ou mais.</dd></div>
    <div><dt>PPD / FP-UVA</dt><dd>Mede a proteção contra raios UVA, os que envelhecem e mancham. Quanto maior, melhor.</dd></div>
    <div><dt>Barreira cutânea</dt><dd>A camada mais externa da pele, que segura água e barra irritantes. Quando enfraquece, a pele arde, descama e fica sensível.</dd></div>
    <div><dt>Hiperpigmentação</dt><dd>Excesso de melanina em uma área, que aparece como mancha escura.</dd></div>
    <div><dt>Comedogênico</dt><dd>Que pode entupir poros e provocar cravos. "Não comedogênico" é o ideal para pele com acne.</dd></div>
    <div><dt>Esfoliar</dt><dd>Soltar células mortas da superfície. Pode ser física (esfoliante com grãos) ou química (ácidos).</dd></div>
    <div><dt>Retinoide</dt><dd>Família da vitamina A: retinol, retinal (retinaldeído), tretinoína e adapaleno. É a mais estudada contra rugas e acne.</dd></div>
    <div><dt>Fotossensibilizante</dt><dd>Que deixa a pele mais sensível ao sol. Retinoides e ácidos entram aqui, por isso pedem protetor no dia seguinte.</dd></div>
  </dl>

  <div class="note"><b>Quando procurar um dermatologista</b><p>Mancha que cresce, muda de cor, tem bordas irregulares, coça ou sangra. Acne com nódulos doloridos ou que deixa cicatriz. Melasma. Pele que arde ou descasca mesmo com produtos suaves. Gravidez ou amamentação. Essas situações pedem avaliação, e alguns tratamentos pedem acompanhamento médico.</p></div>
  `
});

TABS.push({
  id: 'protetor', label: 'Protetor solar',
  title: 'Protetor solar',
  lead: 'É o produto mais importante deste guia. Ele previne manchas, rugas, flacidez e, principalmente, câncer de pele. Todos os outros ativos funcionam melhor com ele.',
  types: [
    ['FPS e UVB', 'Os raios UVB queimam a pele (vermelhidão, descamação). O FPS mede essa proteção. FPS 30 bloqueia cerca de 97% do UVB e FPS 50 cerca de 98%, então a diferença maior está em usar a quantidade certa e reaplicar.'],
    ['UVA e PPD', 'Os raios UVA atravessam vidro e nuvens, envelhecem e mancham a pele. A proteção aparece como PPD, FP-UVA ou selo UVA. Procure um produto que informe isso.'],
    ['Filtro químico', 'Absorve a radiação e a transforma em calor. Textura geralmente leve e transparente, e costuma ser o mais agradável sob maquiagem. Pode arder em peles muito sensíveis.'],
    ['Filtro físico (mineral)', 'Óxido de zinco e dióxido de titânio refletem a luz. Costumam ser mais tolerados por peles sensíveis, mas podem deixar um tom esbranquiçado em peles escuras.'],
    ['Protetor com cor', 'Tem pigmentos (óxidos de ferro) que também bloqueiam a luz visível. Isso importa para quem tem melasma, que piora com luz visível e calor.']
  ],
  actives: [
    { n: 'Protetor com FPS 30 a 50', tag: 'Todos os dias', ev: 'Forte',
      what: 'Produto com filtros UVA e UVB para o rosto.',
      how: 'Forma uma película que absorve ou reflete a radiação antes que ela atinja a pele.',
      who: 'Todas as pessoas, em todos os tons de pele, mesmo em dias nublados ou dentro de casa perto de janelas.',
      use: 'Quantidade de cerca de dois dedos (indicador e médio) para rosto e pescoço. Aplique 15 minutos antes de sair e reaplique a cada 2 a 3 horas se estiver ao sol, ou após suar ou nadar.',
      care: 'Protetor corporal tende a ser mais pesado e pode entupir poros no rosto. Prefira um facial.',
      prods: [
        { b: 'Nivea Sun', n: 'Toque Seco Antissinais FPS 30', c: 'FPS 30 · 40 ml', pl: '~R$ 23', p: 23,
          pros: ['Um dos mais baratos do mercado', 'Acabamento seco, bom para pele mista', 'Fácil de encontrar em supermercado'],
          cons: ['FPS 30 exige capricho na quantidade e na reaplicação', 'Frasco pequeno acaba rápido se você usar a quantidade correta'] },
        { b: 'Principia', n: 'PS-01 FPS 40', c: 'FPS 40 · 40 ml', pl: '~R$ 38', p: 38,
          pros: ['Preço baixo com FPS mais alto', 'Linha simples, pensada para uso diário'],
          cons: ['Marca de farmácia e internet, mais difícil de achar em supermercado'] },
        { b: 'Neutrogena', n: 'Sun Fresh FPS 30', c: 'FPS 30 · 40 g', pl: '~R$ 44', p: 44,
          pros: ['Textura leve e fresca', 'Marca conhecida e encontrada em qualquer farmácia', 'Avaliações altas em lojas online'],
          cons: ['FPS 30, menor que as opções FPS 50 ou 60', 'Versão sem cor pode deixar um brilho em peles oleosas'] },
        { b: "L'Oréal Paris", n: 'UV Defender FPS 60', c: 'FPS 60 · 40 g', pl: '~R$ 56', p: 56,
          pros: ['FPS alto com preço moderado', 'Versão antioleosidade disponível', 'Linha com opções de cor'],
          cons: ['Fórmulas com acabamento matte podem ressecar peles secas', 'Confira o selo UVA antes de comprar, pois varia por versão'] },
        { b: 'Neutrogena', n: 'Sun Fresh FPS 70 com Cor', c: 'FPS 70 · com cor', pl: '~R$ 58', p: 58,
          pros: ['A cor disfarça levemente imperfeições e ajuda contra luz visível', 'FPS 70 com preço acessível', 'Útil para quem tem manchas'],
          cons: ['Confira se o tom disponível combina com a sua pele', 'Pode manchar a gola da roupa'] },
        { b: 'Bioré', n: 'UV Aqua Rich Watery Essence', c: 'FPS 50+ · PA++++', pl: '~R$ 80', p: 80,
          pros: ['Textura de essência, quase sem sensação de produto', 'PA++++ indica proteção UVA muito alta', 'Muito usado por quem não gosta de protetor pesado'],
          cons: ['Preço maior que os nacionais', 'Ao suar muito pode precisar de reaplicação mais frequente'] },
        { b: 'ISDIN', n: 'Fotoprotetor Fusion Water', c: 'FPS 50 · textura aquosa', pl: '~R$ 94', p: 94,
          pros: ['Textura aquosa e leve, boa para pele oleosa', 'Marca de origem dermatológica', 'Boa aceitação sob maquiagem'],
          cons: ['Preço de produto importado', 'Custa bem mais por mililitro que os nacionais'] },
        { b: 'La Roche-Posay', n: 'Anthelios UVmune 400', c: 'FPS 50+ · UVA longo', pl: '~R$ 110', p: 110,
          pros: ['Foco em proteção UVA de espectro longo', 'Fluido leve para o dia a dia', 'Indicado por muitos dermatologistas'],
          cons: ['Um dos mais caros da lista', 'Preço varia bastante entre lojas'] },
        { b: 'Eucerin', n: 'Sun Pigment Control Tinted FPS 70', c: 'FPS 70 · com cor · antimanchas', pl: '~R$ 111', p: 111,
          pros: ['Pensado para quem tem manchas e melasma', 'Cor ajuda a bloquear luz visível', 'FPS alto'],
          cons: ['Preço elevado', 'Confira se existe tom para a sua pele antes de comprar'] }
      ]
    }
  ],
  alert: { t: 'Atenção', x: 'Quantidade é o ponto em que a maioria erra. A proteção descrita na embalagem vale para uma camada generosa, bem mais do que as pessoas costumam passar. Protetor não substitui sombra, chapéu e roupa em exposição longa.' }
});
