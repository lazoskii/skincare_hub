TABS.push({
  id: 'olheiras', label: 'Olheiras',
  title: 'Olheiras e área dos olhos',
  lead: 'A pele das pálpebras é a mais fina do rosto, por isso mostra cansaço, vasos e perda de volume antes das outras áreas. Descobrir o tipo de olheira é o primeiro passo, porque cada uma responde a algo diferente.',
  types: [
    ['Pigmentar', 'Cor acastanhada, por excesso de melanina. Mais comum em peles morenas e pretas, e piora com sol e alergia que faz coçar. Responde a clareadores e protetor solar.'],
    ['Vascular', 'Cor azulada, arroxeada ou rosada, porque os vasos aparecem através da pele fina. Piora com sono ruim, cansaço e alergia. Melhora com cafeína, frio e cuidado com o sono.'],
    ['Estrutural', 'Uma sombra causada pelo sulco entre pálpebra e bochecha ou por bolsas. Não é cor da pele. Cremes ajudam pouco, e o tratamento costuma ser procedimento médico.'],
    ['Mista', 'A maioria das pessoas tem uma mistura de dois ou três tipos. Um teste simples: estique a pele com o dedo. Se a cor continua, é mais pigmentar. Se some, é mais vascular.']
  ],
  actives: [
    { n: 'Cafeína e ácido tranexâmico', tag: 'Pigmentar e vascular', ev: 'Limitada',
      what: 'A cafeína contrai vasos e reduz o inchaço de forma passageira. O ácido tranexâmico age no pigmento.',
      how: 'Juntos mexem nos dois mecanismos de olheira, o vaso e a melanina. O efeito é gradual.',
      who: 'Olheiras mistas ou pigmentares, com ou sem bolsas leves.',
      use: 'Pequena quantidade sob e ao redor dos olhos, de manhã e à noite, sem entrar na pálpebra.',
      care: 'Evite contato com o olho. Se arder, suspenda. Protetor solar no rosto todo é parte do tratamento.',
      prods: [
        { b: 'Principia', n: 'Mix-02 Anti Olheiras e Manchas', c: 'Cafeína 5% + TXA 3% + ferúlico 0,5% · 30 ml', pl: '~R$ 79', p: 79,
          pros: ['Reúne cafeína, tranexâmico e antioxidante num só frasco', 'Pode ser usado manhã e noite, segundo o fabricante', 'A marca afirma que não causa acne, cravos ou descamação'],
          cons: ['Não é específico para olhos, e o rosto todo recebe os ativos', 'Não age em olheira estrutural'] }
      ]
    },
    { n: 'Cremes para os olhos com peptídeos e hialurônico', tag: 'Hidratação e firmeza', ev: 'Limitada',
      what: 'Cremes ou séruns feitos para a área dos olhos, com menos fragrância e textura mais fluida.',
      how: 'Hidratam e preenchem de forma superficial, o que suaviza linhas finas e pode fazer a olheira aparecer menos.',
      who: 'Quem tem pele seca ao redor dos olhos, linhas finas e olheira leve.',
      use: 'Uma quantidade do tamanho de um grão de arroz para cada olho, batendo com o dedo anelar.',
      care: 'Cremes ricos demais podem causar milium (bolinhas brancas) ou inchaço em quem tem a pele propensa.',
      prods: [
        { b: 'Principia', n: 'CO-01 Creme para Área dos Olhos', c: 'Peptídeos 5% + vitaminas 3% + hialurônico 0,5% · 15 g', pl: '~R$ 67–80', p: 67,
          pros: ['O mais barato da lista', 'Sem fragrância, parabenos, silicones ou petrolatos, segundo a marca', 'Combina peptídeos, vitaminas e hialurônico'],
          cons: ['Efeito é de hidratação e firmeza superficial', 'Não trata olheira pigmentar forte'] },
        { b: 'Eucerin', n: 'Hyaluron-Filler Elasticity Olhos FPS 20', c: 'Ác. hialurônico + FPS 20 · 15 ml', pl: '~R$ 228–280', p: 228,
          pros: ['Traz FPS 20 para a área dos olhos', 'Linha pensada para pele madura'],
          cons: ['Caro para 15 ml', 'FPS 20 sozinho não basta, então use protetor no rosto todo'] },
        { b: 'Vichy', n: 'Liftactiv Supreme Olhos', c: 'Creme antirrugas · 15 ml', pl: '~R$ 244', p: 244,
          pros: ['Marca dermatológica', 'Voltado a linhas finas e firmeza'],
          cons: ['Caro', 'Sem evidência de resultado superior ao de opções bem mais baratas'] },
        { b: 'La Roche-Posay', n: 'Hyalu B5 Olhos Sérum', c: 'Ác. hialurônico + vit. B5 · 15 ml', pl: '~R$ 289–305', p: 289,
          pros: ['Sérum leve, que cai bem em pele que não tolera creme pesado', 'Vitamina B5 acalma'],
          cons: ['Um dos mais caros', 'Hidrata e suaviza, e não clareia'] }
      ]
    },
    { n: 'Retinol para os olhos', tag: 'Linhas finas', ev: 'Forte',
      what: 'Versões de retinol com concentração e base pensadas para a pele fina das pálpebras.',
      how: 'Renova a pele, e com meses de uso suaviza linhas finas ao redor dos olhos.',
      who: 'Adultos com linhas finas e que já toleram retinol no rosto.',
      use: 'À noite, 2 vezes por semana no início. Pouquíssima quantidade e longe da borda do olho.',
      care: 'A pele aqui irrita fácil, então comece devagar. Evite na gravidez e amamentação sem orientação.',
      prods: [
        { b: 'La Roche-Posay', n: 'Redermic R Olhos', c: 'Retinol · 15 ml', pl: '~R$ 322–334', p: 322,
          pros: ['Retinol em uma fórmula própria para a área dos olhos', 'Marca dermatológica'],
          cons: ['Preço alto para 15 ml', 'Pode ressecar e irritar no início'] }
      ]
    },
    { n: 'Vitamina C', tag: 'Antioxidante', ev: 'Moderada', see: 'rugas',
      what: 'Antioxidante que ilumina e ajuda a uniformizar o tom.',
      how: 'Ajuda em olheira pigmentar leve.',
      who: 'Olheira acastanhada leve.',
      use: 'De manhã, em quantidade pequena, longe da borda do olho.',
      care: 'Pode arder na pele fina das pálpebras.' }
  ],
  alert: { t: 'Olheira que muda de repente', x: 'Se a olheira apareceu de uma hora para outra, é muito escura de um lado só ou vem junto de inchaço, coceira forte ou sinais de alergia, vale uma consulta. Alergia, rinite e falta de ferro podem estar por trás.' }
});

TABS.push({
  id: 'hidratacao', label: 'Hidratação',
  title: 'Hidratação e barreira da pele',
  lead: 'Quase todo ativo deste guia depende de uma pele hidratada para funcionar sem irritar. Hidratante é o passo que sustenta o resto da rotina, e vale para pele oleosa também.',
  types: [
    ['Pele seca', 'Produz pouco óleo. Fica áspera, descama e repuxa. Precisa de cremes mais ricos, com lipídios que seguram a água.'],
    ['Pele desidratada', 'Falta água, e não óleo, e pode ser até oleosa. Fica opaca e com linhas finas. Responde a ácido hialurônico e géis.'],
    ['Barreira comprometida', 'Esfoliação em excesso, sol, clima seco ou muitos ativos. A pele arde, fica vermelha e descama. Pause os ativos e invista em ceramidas e calmantes.'],
    ['Pele sensível', 'Reage com facilidade a produto, calor ou fragrância. Menos ingredientes na fórmula e sem perfume costuma ser melhor.']
  ],
  actives: [
    { n: 'Ceramidas', tag: 'Reparam a barreira', ev: 'Moderada',
      what: 'Lipídios que existem naturalmente na camada superficial da pele e funcionam como o "cimento" entre as células.',
      how: 'Repõem o que falta na barreira, reduzem a perda de água e deixam a pele menos reativa.',
      who: 'Pele seca, sensível, com dermatite ou que usa retinoide e ácidos.',
      use: 'Manhã e noite, como hidratante. Aplique nos primeiros minutos após o banho ou a limpeza.',
      care: 'Em peles muito oleosas, prefira texturas em loção ou gel.',
      prods: [
        { b: 'CeraVe', n: 'Loção Facial Hidratante PM', c: 'Ceramidas + niacinamida · 52 ml', pl: '~R$ 89–118', p: 89,
          pros: ['Ceramidas essenciais e niacinamida na mesma fórmula', 'Sem perfume', 'Loção leve, que não pesa'],
          cons: ['Frasco pequeno, de 52 ml', 'Preço muda muito entre lojas'] },
        { b: 'CeraVe', n: 'Loção Facial Hidratante AM FPS 50', c: 'Ceramidas + niacinamida + FPS 50 · 52 ml', pl: '~R$ 110', p: 110,
          pros: ['Hidratante e protetor num só produto, prático', 'Textura de loção'],
          cons: ['Mais caro que passar hidratante e protetor separados', 'Exige a quantidade certa para o FPS valer, e muita gente passa pouco'] },
        { b: 'Cetaphil', n: 'Creme Hidratante', c: 'Pele seca e sensível · 453 g', pl: '~R$ 94–121', p: 94,
          pros: ['Pote grande e rende muito', 'Indicado para pele seca e sensível', 'Serve para rosto e corpo'],
          cons: ['Textura densa, que pesa em pele oleosa', 'Em pote, o dedo contamina o produto'] }
      ]
    },
    { n: 'Ácido hialurônico e glicerina', tag: 'Atraem água', ev: 'Forte',
      what: 'Humectantes: substâncias que seguram muita água na pele.',
      how: 'Aumentam a água da camada superficial. Funcionam melhor com um creme por cima que impeça a água de evaporar.',
      who: 'Pele desidratada, oleosa ou mista que quer algo leve.',
      use: 'Em pele levemente úmida, manhã e noite.',
      care: 'Sozinhos em ar muito seco podem dar sensação de repuxar.',
      prods: [
        { b: 'Neutrogena', n: 'Hydro Boost Water Gel', c: 'Ác. hialurônico · gel 50 g', pl: '~R$ 55–69', p: 55,
          pros: ['Gel leve e sem óleo, adequado a pele oleosa e mista', 'Preço acessível', 'Refil mais barato disponível'],
          cons: ['Para pele seca, é pouco, e pede um creme por cima', 'Textura de gel pode parecer fria e pegajosa'] },
        { b: 'Cetaphil', n: 'Optimal Hydration Sérum', c: 'Hidratação 48 h · 30 ml', pl: '~R$ 110', p: 110,
          pros: ['Sérum de hidratação com duração anunciada de 48 h', 'Marca focada em pele sensível'],
          cons: ['Mais caro que géis hidratantes simples', 'Resultado depende do creme usado depois'] }
      ]
    },
    { n: 'Pantenol (vitamina B5) e calmantes', tag: 'Acalmam', ev: 'Moderada',
      what: 'O pantenol vira vitamina B5 na pele, um ingrediente tradicional de cremes calmantes e cicatrizantes.',
      how: 'Hidrata, acalma e ajuda a barreira a se recompor depois de irritação.',
      who: 'Pele irritada por ativos, sol ou clima seco.',
      use: 'No lugar do hidratante habitual enquanto a pele se recupera, ou como complemento.',
      care: 'Se a pele não melhora em alguns dias, procure um dermatologista.',
      prods: [
        { b: 'Bayer (Bepantol)', n: 'Derma Loção Facial', c: 'Pantenol · loção facial', pl: '~R$ 85', p: 85,
          pros: ['Pantenol é um ingrediente conhecido e bem tolerado', 'Textura de loção, fácil de espalhar'],
          cons: ['Mais caro que cremes simples com o mesmo tipo de ativo'] },
        { b: 'Epidrat', n: 'Calm B5', c: 'Hidratante calmante · 50 ml', pl: '~R$ 97', p: 97,
          pros: ['Linha "Calm" com vitamina B5, pensada para acalmar a pele'],
          cons: ['Preço intermediário para 50 ml'] }
      ]
    }
  ],
  alert: { t: 'Pele que arde ao passar qualquer coisa', x: 'Quando até hidratante arde, a barreira provavelmente está agredida. Pare ácidos e retinoides por uma ou duas semanas, mantenha só limpeza suave, hidratante simples e protetor, e volte aos poucos. Se não melhorar, procure um dermatologista.' }
});

(function(){
  const pairs = [
    ['Vitamina C', 'Niacinamida', 'ok', 'Combinam. A ideia de que uma anula a outra vem de estudos antigos e não vale para as fórmulas atuais.'],
    ['Vitamina C (manhã)', 'Retinoide (noite)', 'ok', 'Cada um no seu horário. A vitamina C protege durante o dia, e o retinoide renova à noite.'],
    ['Niacinamida', 'Retinoide', 'ok', 'Costuma ajudar a pele a tolerar o retinoide.'],
    ['Ácido hialurônico', 'Qualquer outro ativo', 'ok', 'É o mais fácil de combinar. Aplique com a pele levemente úmida e feche com um creme.'],
    ['Ácido azelaico', 'Niacinamida ou vitamina C', 'ok', 'Costumam funcionar bem juntos em quem tem acne com marcas.'],
    ['Peptídeos', 'Ativos suaves', 'ok', 'Combinam com hialurônico, niacinamida e hidratantes.'],
    ['Retinoide', 'Ácidos (glicólico, salicílico, mandélico)', 'alt', 'Alterne as noites. Juntos, aumentam muito o risco de irritação e descamação.'],
    ['Vitamina C', 'Retinoide, na mesma hora', 'alt', 'Pode irritar pele sensível. Separe em manhã e noite.'],
    ['Vitamina C', 'Ácidos esfoliantes', 'alt', 'Podem aumentar a ardência. Use em horários ou dias diferentes.'],
    ['Retinoide', 'Peróxido de benzoíla', 'alt', 'Podem se irritar. Use em horários diferentes ou como o dermatologista orientar.'],
    ['Peptídeos', 'Ácidos fortes, na mesma hora', 'alt', 'Há dúvida sobre o efeito de um sobre o outro. Separe os horários.'],
    ['Ácido esfoliante', 'Outro ácido esfoliante', 'no', 'Evite empilhar glicólico, salicílico e mandélico na mesma rotina. Escolha um e use com moderação.'],
    ['Clareador com receita', 'Qualquer ativo', 'alt', 'Siga a orientação do médico sobre horário e combinações.'],
    ['Qualquer ativo', 'Protetor solar', 'ok', 'Protetor solar é sempre o último passo da manhã, e é obrigatório com retinoides e ácidos.']
  ];
  const lab = { ok: 'Combinam', alt: 'Alternar', no: 'Evitar' };
  TABS.push({
    id: 'combinar', label: 'Combinações', custom: true,
    html: `<h2>O que pode ir junto</h2>
    <p class="lead">Misturar ativos sem critério é a principal causa de pele irritada. Use esta lista como guia geral e mude uma coisa de cada vez.</p>
    <div class="sec">Pares de ativos</div>
    ${pairs.map(p => `<div class="pair"><div><b>${p[0]}</b><br><span style="color:var(--muted);font-size:14px">+ ${p[1]}</span></div><span class="st ${p[2]}">${lab[p[2]]}</span><p>${p[3]}</p></div>`).join('')}
    <div class="note"><b>Regra prática</b><p>Se você não consegue dizer qual ativo causou uma irritação, é porque começou vários ao mesmo tempo. Volte ao básico (limpeza, hidratante e protetor), espere a pele se acalmar e reintroduza um de cada vez, com duas semanas de intervalo.</p></div>`
  });
})();
