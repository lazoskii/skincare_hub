TABS.push({
  id: 'flacidez', label: 'Flacidez',
  title: 'Flacidez no rosto',
  lead: 'Flacidez é a perda de firmeza. A pele fica mais fina e menos elástica, a gordura e o osso do rosto mudam de lugar, e o contorno perde definição. Cosméticos agem na camada de cima, então o que eles entregam é limitado.',
  types: [
    ['Flacidez da pele', 'A pele perde colágeno e elastina e fica fina, com aspecto "solto", principalmente em bochechas, pescoço e pálpebras.'],
    ['Perda de volume', 'O rosto parece "esvaziado" porque o preenchimento natural de gordura e osso diminui com a idade. Também acontece após emagrecimento rápido.'],
    ['Queda do contorno', 'Linha do maxilar menos definida, bochechas que descem e papada. Vem das estruturas mais profundas, fora do alcance de qualquer creme.'],
    ['Pescoço e colo', 'Região de pele fina e com poucas glândulas, que costuma mostrar a flacidez e o fotoenvelhecimento antes do rosto.']
  ],
  actives: [
    { n: 'Peptídeos', tag: 'Firmeza', ev: 'Limitada',
      what: 'Pedaços pequenos de proteína que funcionam como "mensageiros" para a pele. Há muitos tipos, e cada fórmula usa os seus.',
      how: 'Em teoria, sinalizam à pele para produzir mais colágeno e elastina. Os estudos são menores que os dos retinoides, e o efeito é discreto e gradual.',
      who: 'Quem quer um ativo muito bem tolerado, inclusive pele sensível, ou não tolera retinoide.',
      use: 'Manhã e noite, depois da limpeza e antes do hidratante. Costuma combinar com a maioria dos outros ativos.',
      care: 'Não espere efeito parecido com procedimento. Resultados aparecem em 2 a 3 meses de uso regular. O "efeito lifting imediato" da embalagem vem de uma película que estica a pele por algumas horas.',
      prods: [
        { b: 'Ricca', n: 'Sérum Facial Firmador Peptídeos', c: 'Peptídeos + carnosina + vit. E · 15 ml', pl: '~R$ 60', p: 60,
          pros: ['Um dos mais baratos para testar peptídeos', 'Textura leve, que não deixa a pele oleosa'],
          cons: ['Frasco de 15 ml acaba em poucas semanas', 'Fórmula com poucos dados públicos sobre concentração'] },
        { b: 'Principia', n: 'PM-10 Peptídeos Matrixyl', c: 'Peptídeos Matrixyl · 30 ml', pl: '~R$ 89', p: 89,
          pros: ['Usa o Matrixyl, peptídeo bem conhecido em cosméticos', 'Frasco de 30 ml', 'Marca que informa os ativos no nome'],
          cons: ['Efeito moderado, e não substitui retinoide', 'Resultados exigem meses de uso'] },
        { b: 'Creamy', n: 'Anti-Aging Peptide Cream', c: '10 peptídeos + acetil-glucosamina · 30 g', pl: '~R$ 192–220', p: 192,
          pros: ['Fórmula livre de ácidos, o que a torna suave para uso diário', 'Pode ser usada de dia e à noite', 'Boa para pele sensível'],
          cons: ['Preço alto para o que é um hidratante com peptídeos', 'Preço varia muito entre farmácias'] },
        { b: 'O Boticário (Botik)', n: 'Peptídeos Pró-Elastina Sérum Lifting Firmador', c: 'Peptídeos · 30 ml · lançamento 2026', pl: 'preço não confirmado', p: null,
          pros: ['Lançado em 2026 com foco em flacidez após emagrecimento rápido', 'A marca anuncia "3x mais elastina", dado do próprio fabricante', 'Marca brasileira de fácil acesso'],
          cons: ['É novo, e há poucas avaliações independentes', 'O "efeito lifting imediato" é de uma película que dura poucas horas', 'Não substitui avaliação médica de perda de gordura facial'] },
        { b: 'Vichy', n: 'Liftactiv Peptide-AHA', c: 'Peptídeos + AHA · 30 ml', pl: '~R$ 295–312', p: 295,
          pros: ['Une peptídeos e um ácido esfoliante suave', 'Marca dermatológica'],
          cons: ['Caro', 'O AHA pode sensibilizar ao sol e irritar pele fina'] }
      ]
    },
    { n: 'Cremes firmadores com ácido hialurônico', tag: 'Preenchimento superficial', ev: 'Limitada',
      what: 'Hidratantes que combinam ácido hialurônico, às vezes em tamanhos diferentes de molécula, com outros ativos de firmeza.',
      how: 'Enchem de água a camada superficial, o que dá a sensação de pele mais "cheia" e suaviza linhas finas por algumas horas.',
      who: 'Pele madura e seca que quer conforto e uma aparência mais firme no dia a dia.',
      use: 'Manhã e noite, como último passo antes do protetor. A versão de dia traz FPS, mas o ideal é passar um protetor por cima.',
      care: 'O efeito é de hidratação e some quando você para de usar. Creme com FPS sozinho em geral não dá a quantidade de proteção que um protetor próprio dá.',
      prods: [
        { b: 'Eucerin', n: 'Hyaluron-Filler Elasticity Creme Dia FPS 30', c: 'Ác. hialurônico + FPS 30 · 50 ml', pl: '~R$ 254–320', p: 254,
          pros: ['Combina hidratação e FPS 30', 'Desenhado para pele madura', 'Textura confortável, segundo as avaliações'],
          cons: ['Caro', 'O FPS 30 do creme exige quantidade generosa para valer'] },
        { b: 'Lancôme', n: 'Rénergie H.P.N. 300 Peptide Cream', c: 'Creme com peptídeos · 50 ml', pl: '~R$ 799', p: 799,
          pros: ['Textura leve, segundo análises de especialistas', 'Pensado para rugas, flacidez e manchas a partir dos 35'],
          cons: ['Custa cerca de dez vezes o de um sérum com peptídeos nacional', 'Não há evidência de que o resultado seja proporcional ao preço'] }
      ]
    },
    { n: 'Retinoides', tag: 'Vitamina A', ev: 'Forte', see: 'rugas',
      what: 'Retinol, retinal e tretinoína, os ativos com mais estudo para rugas e firmeza.',
      how: 'Estimulam colágeno e espessam a pele ao longo de meses.',
      who: 'Adultos que querem o melhor custo-benefício contra flacidez leve e rugas.',
      use: 'À noite, aumentando a frequência aos poucos.',
      care: 'Evite na gravidez e amamentação sem orientação. Use protetor todo dia.' },
    { n: 'Vitamina C', tag: 'Antioxidante', ev: 'Moderada', see: 'rugas',
      what: 'Antioxidante que participa da produção de colágeno.',
      how: 'Protege e ajuda a manter o colágeno que a pele já tem.',
      who: 'Quase todo mundo, de manhã.',
      use: 'Antes do hidratante e do protetor.',
      care: 'Guarde bem fechada, longe da luz.' }
  ],
  alert: { t: 'O que realmente muda o contorno', x: 'Flacidez moderada ou intensa melhora com procedimentos feitos por médico, como ultrassom microfocado, radiofrequência, bioestimuladores de colágeno e fios. Creme ajuda a manter e a melhorar a qualidade da pele, e não age no contorno. Se a flacidez veio de emagrecimento rápido, vale conversar com seu médico sobre a perda de volume.' }
});

TABS.push({
  id: 'acne', label: 'Acne e oleosidade',
  title: 'Acne, cravos e oleosidade',
  lead: 'Acne nasce quando o poro entope com óleo e células mortas, e uma bactéria comum da pele se multiplica ali, causando inflamação. Por isso o tratamento junta controle de oleosidade, esfoliação e, às vezes, antibiótico ou retinoide.',
  types: [
    ['Cravos (acne comedoniana)', 'Pontos pretos (abertos) e brancos (fechados). Não há inflamação forte. É o grau mais leve e o que mais responde a produtos de farmácia.'],
    ['Acne inflamatória', 'Espinhas vermelhas, com ou sem pus. Doem e podem deixar mancha ou cicatriz. Pede tratamento consistente, e às vezes acompanhamento médico.'],
    ['Acne nódulo-cística', 'Nódulos profundos, grandes e doloridos, com risco alto de cicatriz. Precisa de dermatologista. Não trate por conta própria.'],
    ['Oleosidade e poros', 'Poros não abrem nem fecham. Parecem maiores quando estão cheios de óleo e células. Controlar óleo e renovar a pele os deixa menos visíveis.']
  ],
  actives: [
    { n: 'Ácido salicílico', tag: 'BHA · desentope poros', ev: 'Forte',
      what: 'Ácido que se dissolve em óleo e por isso entra dentro do poro.',
      how: 'Solta a mistura de óleo e células que forma os cravos, e tem ação anti-inflamatória leve.',
      who: 'Cravos, pele oleosa e acne leve a moderada.',
      use: 'Em gel de limpeza, o contato é curto e tolera-se uso diário. Em sérum, comece em noites alternadas.',
      care: 'Pode ressecar e descamar, e deixa a pele sensível ao sol. Peles muito secas devem evitar. Na gravidez, converse com o médico antes de usar em concentração alta.',
      prods: [
        { b: 'Garnier', n: 'Gel Hidratante Antiacne Salicílico', c: 'Ác. salicílico · gel hidratante', pl: '~R$ 36', p: 36,
          pros: ['Muito barato', 'É hidratante e já traz o ativo, então simplifica a rotina', 'Fácil de achar'],
          cons: ['Ação mais leve, adequada a cravos e acne leve', 'Pode ressecar quem já usa outros ácidos'] },
        { b: 'Principia', n: 'GL-01 Gel de Limpeza', c: 'Salicílico 2% + glicerina · 350 ml', pl: 'consulte o preço', p: null,
          pros: ['Ativo em um produto de limpeza, com contato curto e menos irritação', 'Frasco grande, de 350 ml, que rende meses', 'Glicerina compensa um pouco o ressecamento'],
          cons: ['Preço varia entre lojas', 'Não substitui um tratamento para acne inflamatória'] },
        { b: 'Principia', n: 'Mix-01 Anti-acne', c: 'Niacinamida 5% + glicólico 4% + tranexâmico 3% + salicílico 2%', pl: '~R$ 74–134', p: 74,
          pros: ['Quatro ativos que atacam acne, oleosidade e marcas', 'Preço baixo em lojas com desconto'],
          cons: ['Preço muda muito entre lojas', 'Tem dois ácidos (glicólico e salicílico), então comece em noites alternadas', 'Evite com retinoide na mesma noite'] },
        { b: 'La Roche-Posay', n: 'Effaclar Sérum Ultra Concentrado', c: 'Salicílico + glicólico + LHA + niacinamida · 30 ml', pl: '~R$ 192–266', p: 192,
          pros: ['Combina três ácidos esfoliantes com niacinamida calmante', 'Não comedogênico, segundo o fabricante', 'Esfoliação química suave e diária'],
          cons: ['Caro', 'Tem três ácidos, então comece com poucas gotas à noite', 'Aumenta a sensibilidade ao sol'] }
      ]
    },
    { n: 'Niacinamida', tag: 'Controle de óleo', ev: 'Moderada', see: 'manchas',
      what: 'Vitamina B3, que regula a oleosidade e reforça a barreira.',
      how: 'Reduz a produção de sebo e acalma a vermelhidão. Serve de apoio ao tratamento principal.',
      who: 'Pele oleosa com ou sem acne, e quem tem marcas.',
      use: 'Manhã e noite.',
      care: 'Concentrações muito altas podem irritar.' },
    { n: 'Ácido azelaico', tag: 'Antibacteriano', ev: 'Forte', see: 'manchas',
      what: 'Ácido que combate bactérias, inflamação e marcas ao mesmo tempo.',
      how: 'Reduz a inflamação da acne e clareia as marcas que ficam.',
      who: 'Acne com marcas ou com vermelhidão, e peles sensíveis.',
      use: 'Duas vezes ao dia, em pouca quantidade.',
      care: 'Ardência no início. Orientação médica na gravidez.' },
    { n: 'Adapaleno e tretinoína', tag: 'Retinoide forte', ev: 'Forte',
      what: 'Retinoides de uso tópico que são a base do tratamento da acne.',
      how: 'Renovam a pele, desentopem poros e previnem novas lesões.',
      who: 'Acne persistente ou inflamatória. Vale ter acompanhamento do dermatologista.',
      use: 'À noite, em pouca quantidade e aumentando aos poucos. O adapaleno é o mais suave para começar.',
      care: 'A pele costuma "piorar antes de melhorar" nas primeiras semanas, e ficar mais sensível ao sol. A tretinoína é proibida na gravidez.',
      rx: 'Sem exemplos de produto aqui, porque o ativo e a concentração certos mudam muito de caso para caso, e o dermatologista ajuda a escolher. O mesmo vale para o peróxido de benzoíla. A isotretinoína oral é outra história: só é vendida com receita especial e exige acompanhamento.' }
  ],
  alert: { t: 'Não espremer', x: 'Espremer espinha empurra a inflamação para dentro e deixa mancha e cicatriz. Se a acne é dolorida, deixa cicatriz, afeta seu humor ou não melhora em 2 a 3 meses de produtos de farmácia, procure um dermatologista, pois há tratamentos que mudam o quadro.' }
});
