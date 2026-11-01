TABS.splice(TABS.findIndex((t) => t.id === 'combinar'), 0, {
  id: 'estudo', label: 'Em estudo',
  title: 'Ativos em estudo (a moda do K-beauty)',
  lead: 'Estes ativos aparecem muito em redes sociais e em lançamentos de K-beauty, mas têm bem menos estudo que os das outras abas. Esta aba resume o que cada um faz na versão original (injetável ou com microagulhamento) e o que se sabe, e o que não se sabe, sobre a versão em sérum e creme.',
  banner: { t: 'Como ler esta aba', x: '"Pouco dado" quer dizer que ninguém sabe ao certo, e isso inclui a possibilidade de funcionar. A biologia de vários desses ativos é real em laboratório. O que decide o resultado na pele inteira é a molécula chegar até onde age, e o creme enfrenta justamente essa barreira.' },
  types: [
    ['Em células (in vitro)', 'Teste em placa de laboratório. Mostra que uma molécula faz algo em células isoladas, e não que o mesmo ocorra numa pele inteira, com todas as suas camadas.'],
    ['Em animais', 'Mostra efeito num organismo vivo, mas a pele de um camundongo e a humana respondem de formas diferentes.'],
    ['Em poucos humanos', 'Estudos com dezenas de pessoas, muitas vezes pagos pela própria marca. Indicam uma direção, e não uma conclusão.'],
    ['Em muitos humanos, contra placebo', 'É o que sustenta protetor solar e retinoides. Os ativos desta aba ainda não chegaram aqui.'],
    ['A barreira da pele', 'A camada superficial segura moléculas grandes. Uma substância que age quando é injetada na derme pode não passar da superfície quando vem em creme.']
  ],
  actives: [
    { n: 'GHK-Cu (peptídeo de cobre)', tag: 'Peptídeo', ev: 'Limitada',
      what: 'Tripeptídeo (glicina, histidina e lisina) ligado a um átomo de cobre. Existe naturalmente no corpo humano e foi descrito nos anos 1970. Voltou à moda nas redes sociais.',
      how: 'Em experimentos com células e animais, aceleraria a cicatrização, estimularia colágeno e reduziria inflamação.',
      inj: 'É oferecido em injeções e em clínicas, inclusive junto de microagulhamento, com promessa de firmeza, cicatrização e cabelo. Segundo uma reportagem de setembro de 2026, não há dados publicados de estudos em humanos que comprovem segurança ou eficácia da forma injetável, e o GHK-Cu não é medicamento aprovado. Há relatos de infecção no local e de enzimas do fígado e cobre elevados em quem se injetou em excesso. O produto vendido no mercado paralelo tem origem, pureza e dose incertas.',
      top: 'Está há décadas em cremes e séruns. Os estudos em humanos são pequenos e, em boa parte, financiados pela indústria cosmética, e associam o uso a mais firmeza, espessura da pele e menos linhas finas. Um dermatologista ouvido pela reportagem o compara a vitamina C e antioxidantes. Há mais dados para o tópico do que para o injetável, e menos do que para retinoides.',
      who: 'Vendido como anti-idade geral (firmeza, textura e recuperação da pele). Não há indicação clínica estabelecida.',
      use: 'Séruns de 1 a 2 vezes ao dia. Os estudos tópicos citados usam concentrações baixas. Existem séruns vendidos como 10%, e não há evidência de que mais concentrado dê mais resultado.',
      care: 'Cobre em excesso pode irritar. Muitos fabricantes orientam não usar junto de vitamina C pura e ácidos fortes no mesmo horário, embora haja pouco estudo sobre isso. Gestantes devem consultar o médico. Uma especialista alerta que nem sempre se sabe se o produto contém mesmo o peptídeo.',
      prods: [
        { b: 'Hidrabene', n: 'Sérum GHK-Cu Peptídeo de Cobre', c: 'GHK-Cu + outros peptídeos + ácido hialurônico · 30 ml', pl: '~R$ 100–200', p: 100,
          pros: ['Opção mais barata para testar o peptídeo de cobre, sobretudo em promoção', 'Vem com hialurônico, então também hidrata'],
          cons: ['Não informa a concentração de GHK-Cu', 'O preço cheio (~R$ 200) é próximo do da COSRX, que traz mais ativos e um frasco bem maior', 'Promessas de firmeza são da marca, sem estudo próprio publicado'] },
        { b: 'COSRX', n: 'The 6 Peptide Skin Booster Serum', c: '6 peptídeos (inclui peptídeo de cobre) + niacinamida + hialurônico · 150 ml', pl: '~R$ 165–323', p: 165,
          pros: ['Marca coreana conhecida, vendida na Sephora Brasil', 'O peptídeo de cobre vem junto de outros 5 peptídeos, niacinamida e hialurônico, então é um bom sérum de hidratação mesmo que o cobre faça pouco', 'Frasco de 150 ml dura muitos meses'],
          cons: ['Peptídeo de cobre em dose baixa (a marca informa de 0,05% a 0,3%), então não é um sérum "só de GHK-Cu"', 'O preço muda muito entre lojas: da Sephora (~R$ 323) às lojas de importação (~R$ 165–220)', 'Algumas lojas vendem por importação, com taxa e prazo maiores'] }
      ]
    },
    { n: 'PDRN e polinucleotídeos ("DNA de salmão")', tag: 'Fragmentos de DNA', ev: 'Limitada',
      what: 'PDRN (polidesoxirribonucleotídeo) é uma mistura de fragmentos de DNA, tradicionalmente extraída de esperma de salmão ou truta. Há versões mais novas feitas de plantas ou por fermentação. Os polinucleotídeos (PN) são parentes próximos.',
      how: 'Em laboratório, ativaria o receptor de adenosina A2A e a via de reaproveitamento de nucleotídeos, o que reduziria inflamação e favoreceria o reparo do tecido. Também é estudado em úlceras de pele e enxertos.',
      inj: 'É a forma com mais dados. Na Coreia do Sul é muito usado como "skin booster" (como o Rejuran), injetado na derme ou aplicado com microagulhamento, com promessa de textura, hidratação, viço, cicatrizes e rugas finas. Um estudo split-face com 27 participantes viu notas maiores que as do preenchedor de ácido hialurônico na semana 16, e ainda assim é um estudo pequeno. Nos EUA não é aprovado pela FDA para uso estético. No Brasil, um parecer do CRM-PR de 2025 diz que os produtos com PDRN regularizados na Anvisa são cosméticos de uso tópico e que o uso injetável não tem regulamentação.',
      top: 'Os fragmentos de PDRN medem de 50 a 1.500 kDa, muito acima do tamanho (cerca de 500 Da) que costuma atravessar a pele intacta, então é difícil que cheguem à derme. Existe um estudo pequeno de 2025, com PDRN vegetal, que mostrou melhora da elasticidade ao redor dos olhos em 4 semanas, e é um resultado único e modesto. A maioria das marcas não informa peso molecular nem dados de penetração. Dermatologistas ouvidos pela Dermatology Times falam em "incerteza honesta" e dizem que o benefício de um sérum provavelmente vem de outros ingredientes, como hialurônico, niacinamida e peptídeos.',
      who: 'Vendido como anti-idade e "pele de vidro". Não há indicação clínica definida para a versão tópica.',
      use: 'Sérum ou ampola, de manhã e à noite. Quase nenhuma marca informa quanto PDRN há na fórmula.',
      care: 'A origem é animal (salmão), então quem tem alergia a peixe deve conversar com o médico antes. Ampolas e cremes caros com PDRN podem ser desnecessários, então compare o resto da fórmula.',
      prods: [
        { b: 'Medicube', n: 'PDRN Pink Peptide Serum', c: 'PDRN + peptídeos (inclui peptídeo de cobre) + niacinamida · 30 ml', pl: '~R$ 136–225', p: 136,
          pros: ['Reúne PDRN, vários peptídeos (um deles é o peptídeo de cobre) e niacinamida, então é um sérum de peptídeos razoável mesmo que o PDRN faça pouco', 'Marca popular e vendida em redes de farmácia no Brasil'],
          cons: ['Não informa a concentração de PDRN', 'Preço alto para uma fórmula cujo benefício provável vem de ingredientes mais baratos', 'As promessas (colágeno, firmeza, poros) são da marca, e a página não traz evidência clínica'] },
        { b: 'Anua', n: 'PDRN Hyaluronic Acid Capsule 100 Serum', c: 'PDRN + 11 tipos de ácido hialurônico + colágeno · 30 ml', pl: '~R$ 186–210', p: 186,
          pros: ['Marca coreana conhecida, famosa pelo tônico de heartleaf', 'Base com vários tipos de hialurônico, então hidrata bem mesmo que o PDRN faça pouco', 'Textura leve, boa para usar por baixo do hidratante'],
          cons: ['Não informa a concentração de PDRN', 'No Brasil aparece sobretudo em lojas de importação, às vezes sem as taxas no preço', 'Pelo preço, um sérum de hialurônico comum entrega quase o mesmo'] }
      ]
    },
    { n: 'Exossomos', tag: 'Vesículas de células', ev: 'Limitada',
      what: 'Vesículas minúsculas que as células liberam, carregando proteínas, lipídios, fatores de crescimento e RNA, e que funcionam como mensageiros entre células. Em cosméticos, a origem varia (células-tronco, plantas ou micróbios) e os métodos de isolamento não são padronizados.',
      how: 'Em laboratório, podem modular inflamação, formação de matriz e de vasos e a multiplicação de células. A promessa é regeneração e rejuvenescimento.',
      inj: 'Em clínicas aparecem com microagulhamento, laser ou injeção, para textura, hidratação, elasticidade e cicatrização. Uma revisão de 2026 fala em "resultados iniciais favoráveis", mas pede estudos clínicos mais robustos e acompanhamento de longo prazo. Aponta grande variação entre estudos (origem, isolamento, concentração, protocolo) e dúvidas de segurança, estabilidade e controle de qualidade. A regulamentação aparece como um dos desafios.',
      top: 'Existem séruns com "exossomos" no rótulo, mas a revisão de 2026 citada acima não avalia séruns, e o dado tópico é ainda mais escasso. Como são estruturas grandes e frágeis, a dúvida sobre chegarem inteiras à derme numa pele íntegra é a mesma do PDRN. O rótulo também não diz de onde veio o exossomo nem quanto há na fórmula.',
      who: 'Vendido como regenerador e anti-idade premium. Não há indicação clínica definida para a versão tópica.',
      use: 'Séruns de uso diário ou aplicação em clínica. O protocolo muda muito de um produto para outro.',
      care: 'Um produto biológico aplicado sem controle de origem e de esterilidade traz risco de infecção e de reação. O nome "exossomos" no rótulo não garante que existam exossomos de fato.',
      nop: 'Sem exemplos de produto aqui. A origem e a qualidade variam demais sob o mesmo nome para uma comparação de preços fazer sentido.' },
    { n: 'Fatores de crescimento (EGF e similares)', tag: 'Proteínas sinalizadoras', ev: 'Limitada',
      what: 'Proteínas que dizem às células para se multiplicar e reparar o tecido, como o EGF. Em cosméticos, vêm de cultura de células ou de biotecnologia.',
      how: 'Em laboratório, estimulam a multiplicação de células da pele e a cicatrização.',
      inj: 'A versão mais conhecida em clínica é o PRP, plasma rico em plaquetas do próprio sangue, que concentra fatores de crescimento e costuma ser aplicado com microagulhamento. Os estudos são pequenos, com protocolos diferentes entre si, e os resultados mais citados são em cicatrizes de acne.',
      top: 'São proteínas grandes, e a penetração em pele íntegra é questionada. Os estudos tópicos são pequenos e muitas vezes feitos pelos próprios fabricantes. Há pouco dado para dizer se o sérum faz o mesmo que o PRP.',
      who: 'Vendido como regenerador e anti-idade. Não há indicação clínica definida para a versão tópica.',
      use: 'Séruns de uso diário, em geral à noite.',
      care: 'Nem sempre se sabe a origem nem a quantidade do ativo na fórmula. Na gravidez, converse com o médico antes de usar.',
      nop: 'Sem exemplos de produto aqui, porque a quantidade de fator de crescimento quase nunca é informada.' }
  ],
  alert: { t: 'Microagulhamento com sérum comum', x: 'Cosméticos não são estéreis nem são feitos para chegar à derme. Aplicar um sérum de prateleira sobre a pele perfurada por microagulhas ou dermaroller aumenta o risco de infecção e de reações inflamatórias persistentes. Em clínica, a pergunta certa ao profissional é qual produto vai ser usado, se ele é próprio para uso na derme e qual é o registro dele na Anvisa.' },
  sources: [
    ['The copper peptide trend has gone from creams to injections ahead of the science (WYPR, 07/09/2026)', 'https://www.wypr.org/2026-09-07/the-copper-peptide-trend-has-gone-from-creams-to-injections-ahead-of-the-science'],
    ['Social media mythbusters: PDRN serums (Dermatology Times)', 'https://www.dermatologytimes.com/view/social-media-mythbusters-pdrn-serums'],
    ['Parecer CRM-PR nº 2936/2025 sobre PDRN (PDF)', 'https://sistemas.cfm.org.br/normas/arquivos/pareceres/PR/2025/2936_2025.pdf'],
    ['Exossomos na dermatologia estética: aplicações no rejuvenescimento e regeneração cutânea (BJIHS, 2026)', 'https://bjihs.emnuvens.com.br/bjihs/article/view/7943']
  ]
});
