// questions.js - Contract Law Quiz Questions
const questions = [
    {
        question: "Qual é a forma normal e ideal de extinguir as obrigações?",
        options: ["Novação", "Cumprimento", "Compensação", "Remissão"],
        correct: 2,
        explanation: "O cumprimento é a forma normal e ideal de extinguir as obrigações, quando o devedor 'faz aquilo a que está obrigado' (art. 762.º)."
    },
    {
        question: "Segundo o princípio da pontualidade (art. 406.º), as obrigações devem ser:",
        options: ["Cumpridas na medida do possível", "Cumpridas de forma a corresponder integralmente ao seu conteúdo", "Cumpridas de boa fé", "Cumpridas integralmente"],
        correct: 2,
        explanation: "O princípio da pontualidade estabelece que as obrigações devem ser pontualmente cumpridas, 'ponto por ponto', exactamente de acordo com o combinado."
    },
    {
        question: "A dação em cumprimento (art. 837.º) é:",
        options: ["Prestação da mesma coisa devida", "Prestação de coisa diversa daquela que é objeto da obrigação", "Pagamento em prestações", "Cumprimento por terceiro"],
        correct: 2,
        explanation: "A dação em cumprimento é 'pagar com coisa diferente', prestando coisa diversa daquela que é objeto da obrigação, dependendo do assentimento do credor."
    },
    {
        question: "A consignação em depósito (art. 841.º) pressupõe:",
        options: ["Apenas mora do credor", "Mora do credor ou impossibilidade da prestação", "Incumprimento definitivo", "Declaração de nulidade"],
        correct: 1,
        explanation: "A consignação em depósito pressupõe mora do credor (art. 813.º e ss.) ou impossibilidade da prestação (art. 841.º/1)."
    },
    {
        question: "Na compensação, pressupõe-se a existência de:",
        options: ["Créditos do mesmo valor", "Créditos recíprocos, fungíveis e homogéneos", "Créditos vencidos", "Créditos com garantias"],
        correct: 2,
        explanation: "A compensação pressupõe: i) créditos recíprocos ii) fungibilidade e homogeneidade das coisas iii) exigibilidade do contra-crédito."
    },
    {
        question: "A novação distingue-se da dação em cumprimento porque:",
        options: ["Exige consentimento do credor", "Não extingue a obrigação primitiva", "Extingue a obrigação primitiva e cria uma nova", "Pode ser parcial"],
        correct: 2,
        explanation: "A diferença é que na novação não ocorre apenas extinção mas há uma nova obrigação que 'substitui' a anterior, envolvendo extinção da primitiva e criação de nova obrigação."
    },
    {
        question: "A remissão da dívida é:",
        options: ["Por vezez gratuita", "Um contrato que exige aceitação", "Um ato unilateral do credor", "Automática, quando há perdão"],
        correct: 2,
        explanation: "A remissão é o perdão da dívida, mas exige-se aceitação (expressa ou tácita) por ser um contrato (art. 863.º/1)."
    },
    {
        question: "A confusão consiste em:",
        options: ["Mistura de obrigações", "Reunião na mesma pessoa da qualidade de credor e devedor", "Dúvida sobre a prestação", "Erro na constituição da obrigação"],
        correct: 2,
        explanation: "Confusão consiste na extinção por via da reunião na mesma pessoa da qualidade de credor e devedor (art. 868.º)."
    },
    {
        question: "O prazo geral de prescrição é de:",
        options: ["5 anos", "10 anos", "15 anos", "20 anos"],
        correct: 4,
        explanation: "O prazo geral de prescrição é de 20 anos (art. 309.º), havendo prazos especiais mais curtos para certos tipos de obrigações."
    },
    {
        question: "O princípio da boa fé no cumprimento (art. 762.º/2) afeta:",
        options: ["Apenas o devedor", "Apenas o credor", "Tanto o credor como o devedor", "Apenas terceiros"],
        correct: 3,
        explanation: "O princípio da boa fé afeta tanto o credor como o devedor, sendo bilateral e exigindo-se de ambos durante todo o ciclo obrigacional."
    },
    {
        question: "Para a validade do cumprimento, exige-se capacidade do devedor em:",
        options: ["Qualquer cumprimento", "Atos de disposição", "Prestações pecuniárias", "Obrigações naturais"],
        correct: 2,
        explanation: "A capacidade do devedor (art. 764.º/1) só se exige no caso de 'atos de disposição', que incidem sobre um direito existente para transmiti-lo, revogá-lo ou alterar o seu conteúdo."
    },
    {
        question: "Quem pode fazer o cumprimento (legitimidade passiva)?",
        options: ["Apenas o devedor", "O devedor ou terceiro com seu consentimento", "O devedor ou qualquer terceiro", "Apenas representantes legais"],
        correct: 3,
        explanation: "Art. 767.º: não só o devedor como também qualquer terceiro pode cumprir (mesmo sem conhecimento ou consentimento do devedor), havendo legitimidade genérica."
    },
    {
        question: "Em relação a coisas móveis determinadas, o lugar do cumprimento é, supletivamente, o lugar d(o/a):",
        options: ["Domicílio do devedor", "Domicílio do credor", "Onde a coisa se encontrava no momento da conclusão do negócio", "Tribunal da comarca do domícilio do devedor"],
        correct: 3,
        explanation: "Para coisas móveis determinadas cumpre-se, supletivamente, no lugar onde elas se encontravam no momento da conclusão do negócio (art. 773.º)."
    },
    {
        question: "Para quantias em dinheiro, o lugar de cumprimento supletivo é:",
        options: ["Domicílio do devedor", "Domicílio do credor ao tempo do cumprimento", "Onde foi celebrado o contrato", "Qualquer banco"],
        correct: 2,
        explanation: "Se for quantia em dinheiro, cumpre-se no domicílio do credor ao tempo do cumprimento (art. 774.º) - obrigação de entrega."
    },
    {
        question: "Nas obrigações puras, o cumprimento:",
        options: ["Tem prazo fixo", "Pode ser exigido e oferecido a todo tempo", "Só pode ser exigido após interpelação", "Depende de autorização judicial"],
        correct: 2,
        explanation: "Nas obrigações puras, o cumprimento pode ser exigido e pode ser oferecido a todo o tempo, sendo o regime supletivo (art. 777.º/1)."
    },
    {
        question: "O benefício do prazo é, à partida:",
        options: ["Do credor", "Do devedor", "De ambos", "De terceiros"],
        correct: 2,
        explanation: "O benefício do prazo é, à partida, do devedor (art. 779.º), ou seja, a dívida é pagável logo mas só é exigível após o decurso do prazo."
    },
    {
        question: "As obrigações naturais caracterizam-se por:",
        options: ["Serem judicialmente exigíveis", "Não serem judicialmente exigiveis mas existir preclusão da repetição", "Poderem ser executadas", "Necessitarem de garantias"],
        correct: 2,
        explanation: "As obrigações naturais têm incoercibilidade estrutural (não são judicialmente exigíveis) e preclusão da repetição do cumprimento espontâneo."
    },
    {
        question: "Nas obrigações solidárias passivas, qualquer um dos devedores:",
        options: ["Responde apenas pela sua parte", "Pode ser demandado pela totalidade da dívida", "Precisa de autorização dos outros", "Só responde subsidiariamente"],
        correct: 2,
        explanation: "Na solidariedade passiva, qualquer devedor pode ser demandado pela totalidade da dívida (art. 512.º), podendo o credor exigir tudo de qualquer um."
    },
    {
        question: "Nas obrigações genéricas, o género:",
        options: ["É sempre ilimitado e pode perecer", "É sempre limitado, e não perece", "Desaparece com a concentração", "Perece ou não dependendo da vontade das partes"],
        correct: 3,
        explanation: "O género não perece (*genus nunquam perit*) (art. 540.º), significando que o devedor continua obrigado mesmo que não tenha os bens específicos. No entanto, com a concentração a obrigação deixa de ser genérica e, nesse sentdio, o género desaparece."
    },
    {
        question: "A concentração nas obrigações genéricas cabe, supletivamente:",
        options: ["Ao credor", "Ao devedor", "Ao tribunal", "A terceiro"],
        correct: 2,
        explanation: "A concentração, isto é, a determinação do objeto concreto da prestação cabe, supletivamente, ao devedor (art. 539.º)."
    },
    {
        question: "Nas obrigações alternativas, a escolha pertence, à partida:",
        options: ["Ao credor", "Ao devedor", "Ao tribunal", "A ambos conjuntamente"],
        correct: 2,
        explanation: "Nas obrigações alternativas, à partida a escolha pertence ao devedor (art. 543.º/2) e pode ser expressa ou tácita."
    },
    {
        question: "O princípio nominalista nas obrigações pecuniárias significa que:",
        options: ["O valor da dívida varia com a inflação", "As oscilações do valor da moeda não afetam o montanten a dívida", "Só se aceita dinheiro específico", "O pagamento deve ser feito à pessoa cujo nome consta do contrato],
        correct: 2,
        explanation: "O princípio nominalista (art. 550.º) estabelece que as oscilações do valor da moeda (inflação/deflação) em princípio não afetam o valor da dívida."
    },
    {
        question: "O anatocismo consiste em:",
        options: ["Pagamento de juros antecipados", "Vencimento de juros pelo atraso de juros", "Capitalização automática", "Redução de juros"],
        correct: 2,
        explanation: "Anatocismo é o vencimento de juros pelo atraso de pagamento de juros (art. 560.º), sendo à partida proibido para evitar taxas exorbitantes."
    },
    {
        question: "Na cessão de créditos, à partida o cedente garante:",
        options: ["A solvabilidade do devedor", "Apenas a existência do crédito", "A existência e exigibilidade do crédito", "Todo o risco de cobrança"],
        correct: 3,
        explanation: "Na cessão de créditos, o cedente garante a existência e exigibilidade (mas não a boa cobrança) do crédito (art. 587.º)."
    },
    {
        question: "A sub-rogação resulta do cumprimento feito por:",
        options: ["Qualquer terceiro", "Terceiro que adquire o crédito em virtude do cumprimento", "Representante legal", "Devedor solidário"],
        correct: 2,
        explanation: "Sub-rogação ocorre quando alguém que não o devedor adquire o crédito em virtude do seu cumprimento, tornando-se o *solvens* sub-rogado."
    },
    {
        question: "Na assunção de dívidas, o antigo devedor:",
        options: ["Fica sempre liberado", "Continua devedor solidário salvo declaração expressa", "Nunca fica liberado", "Só responde subsidiariamente"],
        correct: 2,
        explanation: "O antigo devedor continua devedor solidário com o novo, salvo declaração expressa do credor (art. 595.º/2) de exoneração."
    },
    {
        question: "O incumprimento definitivo diferencia-se da mora porque:",
        options: ["Envolve sempre dolo", "A prestação ainda é possível na mora", "Só existe em contratos", "Exige maior culpa"],
        correct: 2,
        explanation: "Na mora há simples retardamento (art. 804.º/2) e a prestação ainda é possível, enquanto no incumprimento definitivo desapareceu a possibilidade de cumprimento."
    },
    {
        question: "A excepção de não cumprimento pressupõe:",
        options: ["Culpa do devedor", "Um contrato sinalagmático", "Autorização judicial", "Prestação de garantias"],
        correct: 2,
        explanation: "A excepção de não cumprimento (arts. 428.º-431.º) pressupõe um contrato (sinalagma), sendo uma excepção material dilatória defensiva."
    },
    {
        question: "Na impossibilidade superveniente não imputável ao devedor:",
        options: ["Há sempre indemnização", "O devedor responde objetivamente", "A obrigação extingue-se sem indemnização", "Aplica-se o regime da mora"],
        correct: 3,
        explanation: "A impossibilidade superveniente não imputável ao devedor (art. 790.º) consagra a extinção sem direito a indemnização - o risco corre por conta do credor."
    },
    {
        question: "Nos contratos bilaterais com efeitos reais, em princípio, o risco corre por conta:",
        options: ["Do alienante", "Do adquirente a contar da aquisição", "De quem tem a posse", "Do contratante mais forte"],
        correct: 2,
        explanation: "Quando há transferência de propriedade, o risco corre por conta do adquirente a contar do momento da aquisição (art. 796.º/1), sem prejuízo de existerem algumas exceções."
    },
    {
        question: "A mora do credor pressupõe:",
        options: ["Culpa do credor", "Recusa sem motivo justificado", "Impossibilidade de cumprimento", "Autorização judicial"],
        correct: 2,
        explanation: "A mora do credor pressupõe recusa sem motivo justificado (art. 813.º), não se exigindo culpa."
    },
    {
        question: "Durante a mora do credor, o devedor responde apenas por:",
        options: ["Culpa leve", "Dolo", "Caso fortuito", "Qualquer dano"],
        correct: 2,
        explanation: "Durante a mora do credor, diminui-se o grau de exigência - o devedor só responde pelo dolo (art. 814.º/1), entendendo-se incluir também culpa grave."
    },
    {
        question: "A inversão do ónus da prova na responsabilidade contratual (art. 799.º/1) significa que:",
        options: ["O credor tem de provar a culpa para obter uma indemnização", "O devedor deve provar ausência de culpa para evitar ter de pagar uma indemnização", "Não há necessidade de prova", "A culpa é irrelevante para a condenação no pagamento de uma indemnização"],
        correct: 2,
        explanation: "O art. 799.º/1 atribui ao devedor o ónus de demonstrar que o não cumprimento não procede de culpa sua."
    },
    {
        question: "O devedor responde pelos atos dos auxiliares casusadores de dannos quando estes",
        options: ["Sejam causados por culpa do devedor", "Estejam relacionados com a execução, mesmo que não haja culpa", "Estejam relacionados com a execução e sejam culposos", "Não estejam relacionados com a execução da obrigação"],
        correct: 3,
        explanation: "O art. 800.º estabelece responsabilidade objetiva do devedor pelos atos dos auxiliares, mas apenas condutas culposas relacionadas com a execução da tarefa."
    },
    {
        question: "A declaração antecipada de não cumprimento:",
        options: ["É sempre irrelevante", "Pode constituir justa causa de resolução", "Só vale se for escrita", "Exige forma notarial"],
        correct: 2,
        explanation: "A declaração antecipada de não cumprimento pode constituir justa causa para resolução do contrato, afetando a substância da obrigação."
    },
    {
        question: "No incumprimento definitivo, o credor pode:",
        options: ["optar entre indemnização pelo interesse contratual positivo e interesse contratual negativa", "Apenas obter a resolução", "Obter indemnização e exercer o diretio de resolução", "Execução específica obrigatória"],
        correct: 3,
        explanation: "No incumprimento definitivo (art. 801.º), o credor pode optar entre indemnização compensatória (pelo interesse contratual positivo - <D-i>grande indemnizaão) ou resolução do contrato (com indemnização, calculada pela diferença)."
    },
    {
        question: "A resolução do contrato tem eficácia:",
        options: ["Apenas para o futuro", "Retroativa", "Imediata", "Dependente de registo"],
        correct: 2,
        explanation: "A resolução tem eficácia retroativa (art. 433.º), destruindo retroativamente os efeitos produzidos, embora seja uma ficção dogmática."
    },
    {
        question: "Na mora do devedor, a indemnização em obrigações pecuniárias corresponde:",
        options: ["Sempre aos danos efetivos", "Aos juros legais ou convencionais", "Ao dobro do valor em dívida", "Ao que for fixado pelo credor"],
        correct: 2,
        explanation: "Na mora de obrigações pecuniárias há indemnização abstrata através dos juros legais ou convencionai (art. 806.º/1), não podendo o credor alegar danos superiores."
    },
    {
        question: "A interpelação admonitória (art. 808.º) serve para:",
        options: ["Constituir em mora", "Converter mora em incumprimento definitivo", "Exigir garantias", "Suspender a prescrição"],
        correct: 2,
        explanation: "A interpelação admonitória (art. 808.º) permite converter a mora em incumprimento definitivo, fixando prazo razoável sob pena de considerar definitivamente não cumprida."
    },
    {
        question: "No contrato-promessa, a execução específica (art. 830.º):",
        options: ["É sempre possível", "Pode ser excluída convencionalmente", "Só vale para móveis", "Exige autorização judicial"],
        correct: 2,
        explanation: "A execução específica pode ser excluída convencionalmente (art. 830.º/1), sendo o sinal interpretado como norma excludente (art. 830.º/2)."
    },
    {
        question: "Na compra e venda a prestações (art. 934.º), só há resolução quando:",
        options: ["Falha qualquer prestação", "Faltam duas prestações ou uma >1/8 do preço", "Há mora de 30 dias", "O comprador requer"],
        correct: 2,
        explanation: "Art. 934.º: só pode haver resolução quando falhem duas prestações (qualquer montante) ou uma que exceda 1/8 do preço total - tutela especial do comprador."
    },
    {
        question: "As cláusulas de exclusão de responsabilidade (art. 809.º):",
        options: ["São sempre nulas", "São válidas exceto para dolo/culpa grave", "Dependem de registo", "Só valem entre comerciantes"],
        correct: 2,
        explanation: "A maioria da doutrina lê o art. 809.º restritivamente, limitando a inadmissibilidade aos casos de dolo ou culpa grave (tese de Pinto Monteiro)."
    },
    {
        question: "A cláusula penal (art. 810.º) pode ter função:",
        options: ["Apenas indemnizatória", "Apenas compulsória", "Indemnizatória, punitiva ou compulsória", "Apenas punitiva"],
        correct: 3,
        explanation: "A cláusula penal pode ter função indemnizatória (fixação antecipada do dano), punitiva (verdadeira pena) ou compulsória (pressionar o devedor), sendo criticada a definição 'comprometida' do art. 810.º."
    },
    {
        question: "A garantia geral das obrigações é:",
        options: ["Apenas bens móveis", "Todo o patrimônio do devedor", "Apenas bens registados", "Só bens penhoráveis, excluindo bens comuns do casal"],
        correct: 2,
        explanation: "O patrimônio do devedor é garantia geral do cumprimento (arts. 601.º e 817.º), respondendo todo o patrimônio por cada dívida - responsabilidade ilimitada."
    },
    {
        question: "A impugnação pauliana visa:",
        options: ["Anular contratos", "Declarar ineficácia relativa de atos prejudiciais", "Resolver obrigações", "Suspender execuções"],
        correct: 2,
        explanation: "A impugnação pauliana (art. 610.º e ss.) visa a ineficácia relativa de atos do devedor que prejudiquem a garantia geral dos credores."
    },
    {
        question: "Para atos onerosos na impugnação pauliana exige-se:",
        options: ["Apenas anterioridade do crédito", "Má fé bilateral", "Autorização judicial", "Registo do ato"],
        correct: 2,
        explanation: "Para atos onerosos, a impugnação pauliana exige má fé bilateral (art. 612.º/1) - consciência de que o ato causa prejuízo ao credor."
    },
    {
        question: "A fiança é, por regra:",
        options: ["Solidária", "Subsidiária com benefício de excussão", "Autônoma", "Limitada no tempo"],
        correct: 2,
        explanation: "A fiança é normalmente subsidiária, ou seja, o fiador tem o benefício da excussão prévia (art. 638.º) - só responde após esgotados os bens do devedor."
    },
    {
        question: "O direito de retenção pode ser afastado mediante:",
        options: ["Pagamento integral", "Prestação de garantias", "Autorização judicial", "Registo predial"],
        correct: 2,
        explanation: "O direito de retenção pode ser afastado mediante a prestação de garantias [art. 756.º, al. d)], constituindo uma das formas de cessação deste direito."
    },
    {
        question: "O penhor difere da hipoteca porque:",
        options: ["Incide sobre bens imóveis", "Incide sobre bens móveis ou direitos", "Não precisa de registo", "É sempre voluntário"],
        correct: 1,
        explanation: "O penhor incide sobre bens móveis ou direitos, enquanto a hipoteca incide sobre bens imóveis ou equiparados (arts. 666.º e 686.º)."
    },
    {
        question: "Os privilégios creditórios são garantias que:",
        options: ["Dependem sempre de registo", "Permitem pagamento preferencial independente de registo", "Só existem em contratos", "Exigem caução"],
        correct: 2,
        explanation: "Os privilégios creditórios (art. 733.º) constituem garantias especiais que permitem, pela relação especial do crédito com um bem, pagamento com preferência independentemente de registo."
    }
];
