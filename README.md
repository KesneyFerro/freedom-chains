# Freedom Chains

⚖️ Promovendo justiça e humanidade no sistema penal brasileiro, Freedom Chain oferece uma visão transparente, segura e anônima do histórico comportamental dos presos, fortalecendo o processo de ressocialização e garantindo os direitos da população carcerária.

⚙️ Solução desenvolvida usando NextJS, ReactJs, Typescript, Scroll

## Índice

- 🌐 [Cenário Geral](#cenarioGeral): Uma perspectiva do cenário geral do sistema carcerário no Brasil.
- 🎯 [Nossa Ideia](#nossaIdeia): A partir da perspectiva geral, como a Freedom Chains pretender garantir um processo penal justo e humanitário.
- 📈 [Análise de Mercado](#analiseDeMercado): Entendendo a extensão do mercado e como podemos, por meio das necessidades desse mercado gerar impacto social.
- 💻 [Detalhamento de Tecnologias](#detalhamentoDeTecnologias): Uma visão mais aprofundada das tecnologias utilizadas no desenvolvimento do projeto
- 👁️ [Onde olhar no código](#ondeOlharNoCodigo): Um guia de inspeção focado em orientar o revisor para cada uma das *bounties*.
- 😎 [Nossa Equipe](#nossaEquipe): Conheça os nossos membros.

</br>
<a name="cenarioGeral"></a>

## 🌐 Cenário Geral

O sistema carcerário brasileiro é um tema complexo e multifacetado, que suscita debates sobre justiça, direitos humanos e eficácia das políticas públicas. Com uma população carcerária que figura entre as maiores do mundo, o Brasil enfrenta desafios significativos relacionados à superlotação, violência, reincidência criminal e acesso adequado a direitos básicos dos detentos.

Neste contexto, é crucial analisar e compreender os dados relacionados aos detentos no país, a fim de identificar tendências, desafios e oportunidades de melhoria no sistema prisional. Dessa forma, é possível apresentar uma visão geral dos números e estatísticas mais recentes sobre a população carcerária brasileira, incluindo informações sobre o perfil demográfico dos detentos, o tempo médio de prisão, a incidência de prisão provisória e outras questões relevantes para o debate sobre o sistema de justiça criminal no Brasil.

Em relação aos detentos, conforme o [Relatório de Informações Penais de 2023.2 (RELIPEN)](https://www.gov.br/senappen/pt-br/servicos/sisdepen/relatorios/relipen/relipen-2-semestre-de-2023.pdf), cerca de 40% de todos os presidiários do Brasil são presos provisórios, ou seja, ainda não foram julgados e sentenciados, logo estão presos de forma provisória e por tempo indeterminado. Quando falamos de detentos condenados, as maiores parcelas de detentos possuem pena total entre 20 e 100 anos de pena, desses, grande parte ainda precisa cumprir mais de 20 anos de cadeia.
Além disso, é válido mencionar que, de acordo com a legislação brasileira, os detentos condenados só podem cumprir no máximo 30 anos de cadeia, independente do tempo de pena a qual eles foram condenados.

É válido pontuar que existem dois [tipos de prisão provisória](https://www.defensoriapublica.pr.def.br/Noticia/Quais-tipos-de-prisao-existem-no-Brasil): a prisão preventiva e a prisão temporária. A prisão preventiva é decretada durante o curso do processo criminal, antes do julgamento final do réu. Ela visa garantir a ordem pública, a conveniência da instrução criminal ou a aplicação da lei penal. Geralmente, é utilizada quando há indícios de que o acusado possa obstruir a investigação, fugir da justiça ou representar um risco à sociedade. Por outro lado, a prisão temporária é uma medida cautelar mais específica, decretada em casos específicos e por um prazo determinado de até 90 dias, prorrogável em casos excepcionais. Ela é aplicada durante a fase de investigação, permitindo que a autoridade policial reúna provas e esclareça os fatos. Ambos os tipos de prisão provisória são regulamentados por leis específicas e devem ser utilizados de forma criteriosa e proporcional, respeitando os direitos fundamentais dos acusados.

Como forma de programas de reabilitação de detentos, existem [3 formas de diminuir a pena](https://www.jusbrasil.com.br/artigos/3-formas-de-diminuir-a-pena-de-quem-esta-preso/1722654342) de um detento através de ações educacionais e benéficas ao detento, primeiramente, caso o detento leia um livro e escreva um relatório sobre, ele recebe uma remição de pena de 3 dias, caso ele estude, a cada 12 horas de estudo ele recebe uma remição de pena de 1 dia, e caso ele trabalhe, a cada 2 dias de trabalho ele recebe uma remição de pena de 1 dia.

No Brasil, o sistema carcerário enfrenta [desafios significativos](https://www.clp.org.br/uma-analise-do-sistema-prisional-brasileiro-problemas-e-solucoes/) que merecem nossa atenção e ação. Em vez de ser um ambiente de reabilitação e justiça, muitas vezes as prisões se tornam locais de privação de direitos e perpetuação de injustiças. É essencial reconhecer que os programas de reabilitação nem sempre estão adequados, priorizando a punição em detrimento do desenvolvimento pessoal do detento e sua preparação para reintegração na sociedade. Isso pode contribuir para um ciclo preocupante de reincidência criminal após a soltura.

Além disso, é crucial abordar fatores como a falta de programas eficazes de reabilitação social, desigualdade e discriminação, que contribuem para o ciclo de criminalidade. Sem ações significativas para reintegrar os detentos na sociedade, é provável que muitos acabem retornando ao crime após a libertação.

Em resumo, é necessário realizar uma revisão abrangente do sistema carcerário brasileiro, com foco na redução da reincidência criminal, na melhoria das condições de vida nas prisões e na promoção da reabilitação e reinserção social dos detentos. Isso inclui medidas como acesso à educação e oportunidades de trabalho, incentivando uma transição bem-sucedida de volta à sociedade.

</br>
<a name="nossaIdeia"></a>

## 🎯 Nossa Ideia

### O Problema

Tendo em vista o contexto geral do sistema carcerário brasileiro, percebe-se que esse enfrenta uma série de desafios que impactam diretamente a vida dos indivíduos em situação de cárcere, muitas vezes resultando em prolongamentos injustificados de suas penas. Estes desafios incluem:

1. **Preconceito**: A população carcerária enfrenta uma significativa estigmatização e discriminação por parte da sociedade em geral, o que pode influenciar negativamente as decisões judiciais e a execução das penas. O preconceito pode levar a tratamentos desiguais perante a lei, prejudicando a busca pela justiça e respeito aos direitos humanos.
2. **Corrupção**: A corrupção dentro do sistema judiciário e carcerário pode distorcer os processos legais, resultando em decisões injustas e favorecendo determinados indivíduos em detrimento de outros. A corrupção pode estar presente desde a fase inicial do processo até a execução das penas, comprometendo a eficácia e a integridade do sistema.
3. **Justiça no julgamento**: A lentidão e a falta de transparência nos processos judiciais muitas vezes resultam em prisões preventivas prolongadas e na demora para a concessão de alvarás de soltura. A morosidade do sistema judiciário pode levar à prisão de indivíduos que, posteriormente, são considerados inocentes ou que têm suas penas superiores ao necessário, violando o princípio da presunção de inocência e da proporcionalidade das penas.
4. **Facilidade no acompanhamento familiar da situação do preso**: A dificuldade de acesso e comunicação entre os presos e seus familiares torna ainda mais desafiador o processo de acompanhamento da situação dos detentos. A falta de canais eficientes de comunicação pode gerar angústia e incerteza entre os familiares, dificultando a assistência e o apoio necessários durante o período de encarceramento.

Em síntese, os desafios apresentados no sistema carcerário brasileiro evidenciam a necessidade urgente de reformas estruturais que garantam a eficácia do sistema judiciário, o respeito aos direitos humanos e a promoção da ressocialização dos detentos. A superação desses obstáculos requer não apenas medidas legislativas e políticas, mas também uma mudança de modelo que valorize a justiça, a transparência e o respeito à dignidade de todas as pessoas, independentemente de sua condição de encarceradas.

### Solução

No contexto do sistema carcerário do Brasil, o Freedom Chains busca assegurar que o processo de ressocialização para presidiários seja mais humanizado e transparente visando remover possívels viéses. Para abordar esses problemas, utiliza-se de tecnologias blockchain como base, possibilitando a criação de um portal transparente para a vizualização de tempo restante de cumprimento de pena, históricos de comportamento e indicadores de reabilitação para futuros audiências. Por meio da criação de smart contracts, o sistema da Freedom Chains, adiciona identificadores únicos para cada preso e associa a eles smart contracts de comportamento que carregam relatórios feitos por agentes carcerários para indicar o bom e mau comportamento de um preso visando construir um relatório que servirá como indicador de aptidão a ressocialização.

Nessa solução, a [utilização de blockchain para a resolução do problema](#detalhamentoBlockchain) se baseia em três pilares dessa tecnologia: transparência, imutabilidade e descentralização. Por meio da blockchain, é possível garantir a integridade dos processos de avaliação do engajamento do preso com o processo de reabilitação, uma vez que, por meio, de relatórios que indicam a vivência no cárcere, permite-se a verificação da validade e congruência do processo avaliativo de pena. Assim, a utilização de uma ferramenta de descentralização favorece a diminuição da corrupção sistemática no cárcere brasileiro, ao passo que garante maior agilidade nos processos de audiência, visto que os relatórios permitem uma análise mais fundamentada do caso em questão.

Para garantir que os relatórios facilitem o processo de análise pelo juizado, utilizam-se [modelos de LLM](#detalhamentoAI) para converter os relatórios de bons e maus comportamentos associados a um preso em um novo relatório que agrupa comentários e sintetiza o progresso de ressocialização do encarcerado por meio de marcadores. Dessa maneira, o modelo de LLM converte dados onchain em marcadores analíticos que facilitam a análise do perfil do preso e compõem um dociê comportamental para diferentes instâncias de julgamento de diminuição ou aumento de pena.

Assim, a solução proposta pelo Freedom Chains emerge como uma resposta poderosa aos [desafios enfrentados pelo sistema carcerário brasileiro](https://www.clp.org.br/uma-analise-do-sistema-prisional-brasileiro-problemas-e-solucoes/). Ao empregar tecnologias blockchain e modelos analíticos avançados, essa plataforma busca não apenas mitigar preconceitos e combater a corrupção, mas também garantir a transparência e a justiça no processo de ressocialização dos detentos. Com essa abordagem inovadora, oferecendo uma ferramenta para acompanhar de forma transparente o cumprimento de penas e o progresso de reabilitação dos presos, o Freedom Chains possibilita uma análise mais embasada e imparcial por parte dos juizados. Isso, por sua vez, reduz as injustiças e assegura que as penas sejam aplicadas de maneira justa e proporcional, fortalecendo os alicerces do sistema judicial.

Portanto, mais do que apenas eficiência técnica, essa solução reflete um compromisso profundo com os princípios de justiça, respeito aos direitos humanos e dignidade de todos os indivíduos, independentemente de sua situação de encarceramento. Ao promover a transparência, a imparcialidade e a eficácia do sistema judiciário, o Freedom Chains contribui de forma significativa para a construção de uma sociedade mais justa e inclusiva. Em seu cerne, está a crença de que cada pessoa merece a oportunidade de buscar sua reintegração à comunidade de forma digna e equitativa.

`<a name="analiseDeMercado"></a>`

## 📈 Análise de Mercado

<br>

1. [Análise SWOT](#analiseSWOT) - Como é o ambiente interno e externo da atuação no sistema carcerário do Brasil.
2. [Canvas de Proposta de Valor](#canvasDePropostaDeValor) - Por que a Freedom Chains é o caminho certo para os processos de ressocialização?

<br>

`<a name="analiseSWOT"></a>`

### Análise SWOT

A análise SWOT é uma ferramenta estratégica utilizada para avaliar os pontos fortes (Strengths), pontos fracos (Weaknesses), oportunidades (Opportunities) e ameaças (Threats) de uma empresa, projeto ou situação específica. Ela serve para fornecer uma visão abrangente do ambiente interno e externo de uma organização, permitindo identificar áreas de melhoria, vantagens competitivas, potenciais riscos e oportunidades de crescimento. A análise SWOT é importante porque ajuda na formulação de estratégias mais eficazes, na tomada de decisões informadas e no desenvolvimento de planos de ação que aproveitem os pontos fortes da organização e minimizem suas fraquezas, ao mesmo tempo em que buscam aproveitar as oportunidades e mitigar as ameaças do ambiente externo. Dado essa importância, segue a análise SWOT da Freedom Chains na Figura 1:

<div align="center">
<sub><a name="f2"></a>Análise SWOT (PT)</sub>
<img src="assets/PT-SWOT.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

<div align="center">
<sub><a name="f2"></a>Análise SWOT (EN)</sub>
<img src="assets/EN-SWOT.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

**Forças:**

- Segurança e Imutabilidade dos Dados: Utilizando a blockchain Scroll, o sistema garante que os dados sejam armazenados de forma segura e permanente, sem possibilidade de alteração ou adulteração.
- Transparência Operacional: A tecnologia blockchain proporciona um alto nível de transparência, permitindo que todas as transações sejam acessíveis e verificáveis por partes autorizadas, fortalecendo a confiança no sistema.
- Fácil Implementação e Usabilidade: A eficiência da blockchain Scroll em termos de taxas de transação muito baixas, facilitando a implementação real do projeto com baixa preocupação com gás fee, comparados com sistemas convencionais.
- Adaptação e Integração Flexíveis: A capacidade de integrar com sistemas existentes e adaptar-se a regulamentos específicos torna o sistema versátil e aplicável em diversas jurisdições.

**Fraquezas:**

- Complexidade Tecnológica: Por mais que a utilização de blockchain seja um avanço ao futuro, a natureza complexa da blockchain pode ser uma barreira no momento atual em que o Brasil se encontra, em especial na adoção por usuários não técnicos, como administradores prisionais que podem ter limitações em compreender e operar a tecnologia.
- Dependência de Adoção Massiva: A eficácia do sistema depende da adoção e da utilização consistentes por todas as partes envolvidas, desde funcionários do sistema prisional até órgãos reguladores. Claramente é uma questão que pode ser contornada ao esclarecer todas as vantagens da plataforma, contudo é um pontudo que não deve ser ignorado.

**Oportunidades:**

- Crescimento da Adoção de Blockchain em Setores Governamentais: Com o aumento do interesse e da confiança em tecnologias blockchain por setores governamentais, há uma oportunidade significativa de expansão e de estabelecimento como líder de mercado em soluções tecnológicas para administração prisional.
- Parcerias Estratégicas: Estabelecer parcerias com agências governamentais e organizações internacionais pode facilitar a implementação e promover normas regulatórias favoráveis.
- Expansão Internacional: Explorar mercados internacionais onde a gestão prisional enfrenta desafios semelhantes pode ampliar o alcance e a aplicabilidade do sistema.

**Ameaças:**

- Resistência ao Mudança: A hesitação ou oposição ao abandono de sistemas tradicionais por parte de instituições estabelecidas pode limitar a adoção da nova tecnologia nessa primeira instância.
- Regulações Governamentais: Mudanças regulatórias inesperadas ou regulamentações rigorosas acerca da blockchain como um todo podem afetar a implementação e a operação do sistema.

Em conclusão, embora haja desafios a serem superados, a FreedomChains está bem posicionada para capitalizar suas forças e oportunidades, enquanto enfrenta de forma proativa suas fraquezas e ameaças. Com uma abordagem estratégica e um foco contínuo na inovação e na adaptação, a aplicação pode se consolidar como o principal meio de gestão justa de presidiários.

`<a name="#canvasDePropostaDeValor"></a>`

### Canvas de Proposta de Valor

O Canva de Proposta de Valor é uma ferramenta visual e estratégica utilizada para o desenvolvimento de produtos, soluções e projetos. Essa utilidade tem foco em garantir que uma solução proposta atenda às necessidades e desejos dos clientes. Ela ajuda a mapear e entender os benefícios que a solução proposta devem oferecer para atender as solicitações do cliente e criar ganhos significativos para eles.

<div align="center">
<sub><a name="f2"></a>Análise SWOT (PT)</sub>
<img src="assets/PT-ValuePropositionCanvas.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

<div align="center">
<sub><a name="f2"></a>Análise SWOT (PT)</sub>
<img src="assets/EN-ValuePropositionCanvas.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

**Na seção "Segmentos de Clientes", os três principais componentes apresentados buscam trazer o papel do cliente no modelo de negócios atual e como a solução pode impacta-lo.**

1. Trabalhos do Cliente:

- Assegurar que todas as operações e procedimentos estejam em conformidade com as leis e regulamentos nacionais e internacionais.

  Atualmente, agentes e administradores prisionais enfrentam o desafio de gerenciar dados sensíveis e confidenciais de maneira segura e eficiente, muitas vezes lidando com sistemas desatualizados que não oferecem garantias de integridade dos dados e sem garantia de transparência ou imutabilidade.

2. Dores:

- Dificuldades em manter processos transparentes e rastreáveis, aumentando o risco de corrupção.
- Preocupações com a integridade dos dados e o risco de manipulação de informações.
- Lentidão no processo de atendimento de solicitações devido a burocracia de analise do processo por diferentes setores.

  A falta de um sistema confiável e transparente pode resultar em ineficiências operacionais e falhas na administração da justiça, além de aumentar o risco de corrupção e manipulação de dados no sistema prisional. Além disso, ter uma plataforma mais fácil, eficiente e transparente pode auxiliar o levantamento de informações para a agilização de processos.

3. Ganhos:

- Aumento da capacidade de gerir detentos de forma mais justa e equitativa.
- Transparência para amigos e familiares poderem acompanhar o histórico do preso
- Melhora na conformidade com as regulamentações e na segurança dos dados gerenciados.

**Na seção "Proposta de Valor", há três componentes principais destacados na figura, que buscam trazer o papel da corporação no modelo de negócios proposto.**

1. Produtos e Serviços:

- Plataforma Baseada em Blockchain para Gestão de Detentos: A plataforma serve como um registro imutável e transparente das informações dos detentos, permitindo o monitoramento consistente e seguro dos registros penitenciários.

  A plataforma funciona como um livro contábil distribuído que armazena dados detalhados sobre os detentos, incluindo histórico de comportamento, progresso de reabilitação e datas importantes de revisão de pena, tudo isso acessível em tempo real para facilitar a administração eficaz do sistema prisional.

2. Criadores de Ganho:

- Fornece acesso seguro e instantâneo às informações dos detentos para agentes autorizados.
- Aumenta a eficácia e a justiça no tratamento dos detentos, influenciando positivamente o sistema penitenciário.
- Facilita a conformidade com regulamentos legais e aumenta a responsabilidade no manejo dos detentos.

  Ao usar uma plataforma baseada em blockchain, o projeto visa fornecer uma maneira confiável e segura de acessar e registrar informações, o que é crucial para o funcionamento justo do sistema prisional. Além disso, ao reduzir a necessidade de interações manuais e processos burocráticos, a plataforma otimiza os recursos e diminui as despesas.

3. Aliviadores de Dor:

- Protege contra manipulações e falsificações nos registros dos detentos.
- Soluciona o problema de falta de transparência nos registros penitenciários.

  A tecnologia blockchain garante que cada transação seja registrada de forma segura e permanente, proporcionando uma fonte de verdade indiscutível.

Ao integrar a plataforma blockchain no sistema prisional, os administradores poderão acessar uma ferramenta que não só facilita a gestão de registros como também reforça a confiança no sistema, fornecendo uma maneira verificável e transparente de acompanhar a trajetória e o comportamento dos detentos, contribuindo significativamente para a reforma e a melhoria contínua das práticas penitenciárias. Além disso, indiscutivelmente a lei deverá ser cumprida, tendo em vista que todos os registros estarão deployados e não podem ser escondidos.

A análise detalhada do Canva de Proposta de Valor revela uma solução robusta e inovadora para os desafios enfrentados pelos sistemas prisionais. Ao integrar tecnologia blockchain, a plataforma proposta busca não apenas modernizar, mas também reformar fundamentalmente a gestão de detentos, oferecendo transparência, segurança e eficiência sem precedentes.Com um foco claro nos benefícios para os clientes, a proposta visa aliviar as dores enfrentadas por agentes e administradores prisionais, proporcionando uma solução confiável e transparente para o gerenciamento de dados sensíveis. Ao mesmo tempo, oferece ganhos tangíveis, como aumento da equidade no tratamento dos detentos, transparência para familiares e amigos, e melhoria da conformidade regulatória.

`<a name="detalhamentoDeTecnologias"></a>`

## 💻 Detalhamento de Tecnologias

<br>

1. [Detalhamento do uso de Blockchain](#detalhamentoBlockchain) - Como a Freedom Chains aplicou blockchain para melhorar a segurança e tranparência do sistema carcerário?
2. [Detalhamento do uso de Inteligência Artificial](#detalhamentoAI) - Como a Freedom Chains utilizou de Inteligência Artificial para facilitar o acompanhamento do processo de ressocialização da pessoa em situação de cárcere?

<br>

`<a name="detalhamentoBlockchain"></a>`

### Blockchain

No contexto do Sistema Nacional de Administração Penitenciária (SNAP), o sistema de cadastro e verificação de presidiários busca enfrentar desafios relacionados à transparência das informações penais de um detento. Para abordar esses problemas, utiliza-se a tecnologia blockchain como base, possibilitando a criação de um portal transparente para a atualização de dados dos detentos. Por meio da utilização de contratos inteligentes, o owner permite que agentes carcerários autorizados e verificados, por meio da confirmação de identidade e credenciais, adicionem aos detentos seus cadastros de ID iniciais e informações comportamentais capazes de alterar o tamanho previsto da pena. Assim, os dados do histórico criminal de cada detento podem ser coletados pelos agentes e adicionados à blockchain por meio de smart contracts, garantindo a imutabilidade daquela informação e a transparência no processo de monitoramento de pena.

Nessa perspectiva, para implementação desse projeto, foi necessário a criação de um contrato inteligente capaz de armazenar informações de ID, datas de prisão e previsão de encerramento da pena, indicadores de bom/mau comportamento junto a comentários justificando-os. Para isso, foi utilizada a linguagem ``Solidity`` como principal tecnologia, além disso, naturalmente foi necessário deployar esse contrato utilizado utilizando a tecnologia de ``EVM`` por meio do [Remix](https://remix.ethereum.org).

O contrato pode ser visualizado abaixo:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title PrisonerManagementSystem
 * @dev This contract manages basic information and behavioral records of prisoners.
 */
contract PrisonerManagementSystem {
    struct PrisonerInfo {
        uint256 id;
        uint256 prisonDate;
        uint256 releaseDate;
    }

    struct BehaviorRecord {
        uint256 date;
        string behavior;
        string comment;
    }

    // Mapping of prisoner ID to their basic information
    mapping(uint256 => PrisonerInfo) public prisonerInfo;

    // Mapping of prisoner ID to the list of behavioral records
    mapping(uint256 => BehaviorRecord[]) public behaviorRecords;

    // Events
    event PrisonerInfoRegistered(uint256 indexed prisonerId, uint256 prisonDate, uint256 releaseDate);
    event BehaviorRecordAdded(uint256 indexed prisonerId, string behavior, string comment);

    /**
     * @notice Records basic information of a prisoner.
     * @param _id Prisoner ID.
     * @param _prisonDate Date of imprisonment as Unix timestamp.
     * @param _releaseDate Release forecast as Unix timestamp.
     */
    function registerPrisonerInfo(uint256 _id, uint256 _prisonDate, uint256 _releaseDate) public {
        require(_id != 0, "ID do presidiario nao pode ser zero.");
        require(_prisonDate != 0 && _releaseDate != 0, "As datas nao podem ser zero.");
        require(_releaseDate > _prisonDate, "A data de soltura deve ser posterior a data da prisao.");
  
        prisonerInfo[_id] = PrisonerInfo({
            id: _id,
            prisonDate: _prisonDate,
            releaseDate: _releaseDate
        });

        emit PrisonerInfoRegistered(_id, _prisonDate, _releaseDate);
    }

    /**
     * @notice Records a new behavior for a prisoner.
     * @param _id Prisoner ID.
     * @param _behavior Description of the behavior ('good behavior' or 'bad behavior').
     * @param _comment Comment on the behavior.
     */
    function addBehaviorRecord(uint256 _id, string memory _behavior, string memory _comment) public {
        behaviorRecords[_id].push(BehaviorRecord({
            date: block.timestamp,
            behavior: _behavior,
            comment: _comment
        }));

        emit BehaviorRecordAdded(_id, _behavior, _comment);
    }

    /**
     * @notice Retrieves basic information of a prisoner.
     * @param _id Prisioner ID.
     * @return Basic prisoner information.
     */
    function getPrisonerInfo(uint256 _id) public view returns (PrisonerInfo memory) {
        return prisonerInfo[_id];
    }

    /**
     * @notice Retrieves all behavior records of a specific prisoner.
     * @param _id Prisioner ID.
     * @return A list of behavior records.
     */
    function getBehaviorRecords(uint256 _id) public view returns (BehaviorRecord[] memory) {
        return behaviorRecords[_id];
    }
}
```

Ademais, foi escolhida a MetaMask como tecnologia de carteira digital, servindo como um meio para o deployment diretamente na [rede de teste da Scroll](https://sepolia.scrollscan.com/address/0xdF0e1E6101ec169Bd9d7D30ADFfB9a28cE6E2B41). Dentro do projeto, atua ainda como um gateway para permitir aos usuários interagir com a Ethereum blockchain diretamente de seus navegadores web. É uma ferramenta essencial para facilitar o acesso seguro, fornecendo uma interface de usuário amigável para autenticar os deploys. Isso simplifica significativamente a interação dos agentes carcerários com o sistema, permitindo que eles realizem transações e consultas sem necessitar de conhecimento técnico profundo sobre smart contracts ou blockchain.

Em suma, a implementação do sistema de cadastro e monitoramento de presidiários dentro do contexto do Sistema Nacional de Administração Penitenciária (SNAP) demonstra como a tecnologia blockchain, aliada a contratos inteligentes e uma interface amigável como a MetaMask, pode revolucionar a transparência e eficiência na gestão penitenciária. Ao fornecer um portal transparente para atualização de dados dos detentos e registrar comportamentos através de smart contracts, o sistema promove a imutabilidade das informações e a integridade do histórico criminal de cada preso. Isso não apenas simplifica o processo de monitoramento de pena, mas também aumenta a confiança na administração prisional ao garantir uma abordagem mais justa e transparente. Em última análise, essa iniciativa representa um avanço significativo na modernização do sistema carcerário, visando uma gestão mais eficaz e humanizada.

`<a name="detalhamentoAI"></a>`

### Inteligência Artificial

O projeto se beneficia da integração com inteligência artificial (IA) em um projeto de aplicação blockchain destinado à geração de relatórios sobre detentos. A IA é utilizada para processar os comentários dos agentes penitenciários e gerar relatórios padronizados, fornecendo insights valiosos sobre o comportamento dos detentos.

O fluxograma demonstra de forma visual como a Inteligência Artificial é utilizada para automatizar processos e auxiliar na geração de relatórios e no cálculo das remições de pena do condenado:

![Fluxograma AI](./assets/PT-FluxogramAI.png)

A IA opera em várias etapas para processar os dados dos comentários e gerar os relatórios finais:

1. **Pré-processamento dos comentários:** Os comentários dos agentes penitenciários são submetidos a um processo de pré-processamento para limpeza e normalização dos dados. Isso inclui a remoção de ruídos, como pontuação desnecessária, letras maiúsculas e minúsculas, e palavras irrelevantes, além da remoção de qualquer menção a nomes de pessoas, visando a privacidade do detento.

   Exemplo de comentário do agente penitenciário:

   ```
   O detento mostrou considerável dedicação aos seus estudos este mês, completando aproximadamente 36 horas em cursos de requalificação profissional. Além disso, ele leu e elaborou relatórios sobre 3 livros diferentes, contribuindo positivamente para sua remição de pena.
   ```
2. **Extração de Informações:** Após o processamento dos comentários enviados pelo agente penitenciário, a IA extrai informações relevantes dos comentários. Isso inclui identificar comportamentos bons e ruins mencionados pelos agentes penitenciários, bem como qualquer ação de ressocialização realizada pelos detentos.

   Exemplo do JSON gerado após a extração das informações:

   ```
   {
       "comentario": "Este mês, o detento completou mais três livros, mostrando uma dedicação contínua aos estudos e conscientização crescente sobre sua reabilitação. Mantém bom comportamento e cooperação.",
       "data_comentario": "12/07/2023",
       "indices_bom_comportamento": [
           "Dedicação contínua aos estudos",
           "Conscientização sobre a importância da reabilitação",
           "Bom comportamento e cooperação constante"
       ],
       "indices_mau_comportamento": [],
       "atividades_ressocializacao": {
           "leitura": {
               "livros_lidos": "3",
               "trecho": "completou mais três livros"
           },
           "estudo": {
               "horas_estudo": "36",
               "trecho": "dedicação contínua aos estudos"
           },
           "trabalho": {
               "dias_trabalhados": "30",
               "trecho": "mostrando uma dedicação contínua"
           }
       }
   }
   ```
3. **Geração de relatórios:** Com base nas informações extraídas, a IA gera relatórios detalhados sobre o comportamento dos detentos. Os relatórios incluem listas de comportamentos bons e ruins, recorrências desses comportamentos, e ações de ressocialização. Cada informação é associada à data do comentário correspondente.
   Exemplo de relatório:

   ```
   ### 1 - Lista de comportamentos ruins, com a data do comentário referente

   | Comportamento Ruim                                      | Data do Comentário |
   |----------------------------------------------------------|--------------------|
   | Envolvimento em uma briga com outro detento              | 18/10/2023         |
   | Não participou de atividades de ressocialização          | 18/10/2023         |
   | Descumpriu as normas do presídio                         | 18/10/2023         |
   | Comportamento agressivo                                  | 22/10/2023         |
   | Falta de colaboração com os guardas                      | 22/10/2023         |
   | Recusou-se a trabalhar na jardinagem                     | 22/10/2023         |
   | Negligenciou responsabilidades educacionais              | 28/10/2023         |
   | Tentativa de contrabando de itens não autorizados        | 28/10/2023         |
   | Desrespeito às regras do presídio                        | 28/10/2023         |

   ### 2 - Lista de recorrências de comportamentos ruins

   | Comportamento Ruim                      | Frequência |
   |-----------------------------------------|------------|
   | Descumpriu as normas do presídio        | 2          |
   | Desrespeito às regras do presídio       | 2          |

   ### 3 - Lista de comportamentos bons, com a data do comentário referente

   | Comportamento Bom                                     | Data do Comentário |
   |-------------------------------------------------------|--------------------|
   | Leu 5 livros em um mês                                | 15/10/2023         |
   | Escreveu relatórios detalhados para cada livro        | 15/10/2023         |
   | Trabalhou todos os dias úteis do mês na oficina       | 15/10/2023         |
   | Leu 4 novos livros                                    | 20/10/2023         |
   | Completou 36 horas de estudo em carpintaria           | 20/10/2023         |
   | Manteve envolvimento constante nas atividades         | 20/10/2023         |
   | Participou ativamente das aulas do ensino médio       | 25/10/2023         |
   | Trabalhou diligentemente na lavanderia                | 25/10/2023         |
   | Demonstrou respeito e cooperação contínuos            | 25/10/2023         |

   ### 4 - Lista de recorrências de comportamentos bons

   | Comportamento Bom                        | Frequência |
   |------------------------------------------|------------|
   | Trabalho constante e diligente           | 2          |
   | Participação ativa nas atividades        | 2          |

   ### 5 - Ações de ressocialização

   - **Leitura:**
     - Total de livros lidos: 9

   - **Estudo:**
     - Total de horas de estudo: 96 horas (36 horas em carpintaria, 60 horas ensino médio)

   - **Trabalho:**
     - Total de dias trabalhados: 44 (22 dias na oficina de lavanderia, 22 dias em outro trabalho)
   ```
4. **Comparação de Relatórios:** Quando um novo relatório é gerado, ele é comparado com o último relatório gerado para o mesmo detento. Isso permite identificar mudanças no comportamento ao longo do tempo. A IA calcula médias e outras métricas para destacar essas mudanças e fornecer insights sobre o progresso do detento, sejam eles positivos ou negativos.

Além disso, é válido mencionar que **o modelo de LLM é instruído a censurar qualquer nome ou qualquer informação que possa comprometer a segurança dos mencionados**, isso é feito para evitar vazamentos de dados e para garantir a segurança e privacidade de todos os envolvidos no processo, assim como para evitar viéses e preconceitos por aqueles que utilizam a plataforma.

Para o desenvolvimento do back-end relacionado ao LLM, foram utilizadas as seguintes tecnologias:

* **Processamento de Linguagem Natural (PLN)**: Utilizado para análise de sentimentos e extração de informações dos comentários.

- **Algoritmos de Aprendizado de Máquina**: Implementados para classificação de texto, geração de relatórios e comparação de dados.
- **Blockchain**: Utilizado para armazenar de forma segura e imutável os comentários dos agentes penitenciários e os relatórios gerados pela IA.
- **Banco de Dados**: Armazena os dados temporários e finais para processamento e consulta.

A integração da inteligência artificial neste projeto de aplicação blockchain traz benefícios significativos ao automatizar o processo de geração de relatórios sobre detentos. Isso não só aumenta a eficiência operacional, mas também fornece insights valiosos para auxiliar nas decisões de gestão penitenciária. A IA contribui para uma abordagem mais proativa e informada no tratamento e acompanhamento dos detentos, promovendo melhores resultados de ressocialização e reintegração social

`<a name="ondeOlharNoCodigo"></a>`

## 👁️ Onde Olhar no Código

### Scroll

Contrato: 0xdF0e1E6101ec169Bd9d7D30ADFfB9a28cE6E2B41 `<br/>`
Link do contrato no [Scroll Etherscan](https://sepolia.scrollscan.com/address/0xdF0e1E6101ec169Bd9d7D30ADFfB9a28cE6E2B41)

A Scroll é uma plataforma blockchain notavelmente eficiente, que se destaca pela sua viabilidade operacional. Optamos pela Scroll como alicerce do nosso projeto devido à sua rede extremamente estável e aos custos de gas fee reduzidos, elementos cruciais para uma implementação viável e prática em cenários da vida real. Esta escolha estratégica assegura que nossa aplicação seja não apenas sustentável, mas também amplamente acessível, democratizando o acesso a tecnologias de ponta em sistemas críticos de administração pública e garantindo uma solução inovadora que promete transformar a maneira como interagimos com infraestruturas estatais vitais.

`<a name="nossaEquipe"></a>`

## 😎 Nossa Equipe

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/gustavo-dacosta/">
        <img src="https://media.licdn.com/dms/image/D4D03AQEafql2JkG4iQ/profile-displayphoto-shrink_800_800/0/1696874768177?e=1717027200&v=beta&t=P4DVd2c779eDlf2AKCTZ3A_lJkFjQ_S3QcDw8SQNrtY" width="100px;" alt="Daniel Augusto profile image"/><br>
        <sub>
          <b>Gustavo Gonçalves</b>
        </sub>
      </a>
    </td>
  <td align="center"> 
      <a href="https://www.linkedin.com/in/joaolimamarinho/">
        <img src="https://media.licdn.com/dms/image/D4D03AQEpKXL2hfWX_w/profile-displayphoto-shrink_800_800/0/1694720169840?e=1720051200&v=beta&t=1hXPRJ2VDCtSkZWCIGdyN-scDbceuA6oQpLurCELA4Q" width="100px;" alt="João Lima profile image"/><br>
        <sub>
          <b>João Lima</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/kesneylucas/">
        <img src="https://media.licdn.com/dms/image/D4D03AQEw5ZsuniNLwQ/profile-displayphoto-shrink_800_800/0/1692393475145?e=1717027200&v=beta&t=UjFlZa4k_PZgxiWy27XckXoRSyBckwNrhPFJVVCj7NE" width="100px;" alt="Kesney Lucas profile image"/><br>
        <sub>
          <b>Kesney Lucas</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/thiagovolcati">
        <img src="https://media.licdn.com/dms/image/D4D03AQFHwAts5UCcaQ/profile-displayphoto-shrink_800_800/0/1707242861857?e=1720051200&v=beta&t=NQy5ublXd2usTpfIKcOqh1OTB5yKx1zHrOdrL0zVncI" width="100px;" alt="Kesney Lucas profile image"/><br>
        <sub>
          <b>Thiago Volcati</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
