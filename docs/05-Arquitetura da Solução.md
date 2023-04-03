# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Indicadores de Desempenho

![Dashboard](img/INDICADORES%20DE%20%20DESEMPENHO%20PUCAST.png)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

VISUAL STUDIO CODE
O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft. Ele é gratuito e de código aberto, o que significa que os usuários podem personalizar e estender suas funcionalidades por meio de extensões. O VS Code é compatível com diversas linguagens de programação, incluindo C++, C#, Java, JavaScript, Python e muitas outras.
O editor tem uma interface de usuário intuitiva e fácil de usar, que inclui recursos como realce de sintaxe, preenchimento automático de código, sugestões de código, depuração integrada e controle de versionamento. Além disso, o VS Code também tem uma série de recursos de produtividade, como o terminal integrado, que permite executar comandos diretamente no editor.
O VS Code é altamente personalizável, permitindo que os usuários escolham entre uma variedade de temas, extensões e configurações para adaptar o editor às suas necessidades e preferências. Por fim, o VS Code é uma ferramenta poderosa para programadores e desenvolvedores que procuram um editor de código-fonte flexível e eficiente.

SEQUELIZE
O Sequelize é uma biblioteca de ORM (Object-Relational Mapping) para Node.js que permite aos desenvolvedores interagir com bancos de dados relacionais de forma mais fácil e eficiente. Com o Sequelize, é possível criar, consultar, atualizar e excluir registros do banco de dados usando objetos JavaScript em vez de escrever código SQL manualmente.
O Sequelize suporta vários bancos de dados relacionais populares, como MySQL, PostgreSQL, SQLite e Microsoft SQL Server, tornando-o uma escolha flexível para muitos projetos.
Além disso, o Sequelize também oferece recursos avançados, como migrações de banco de dados para gerenciamento de esquemas, relacionamentos entre tabelas, consultas complexas e transações de banco de dados. Ele também suporta a sincronização de modelos com o banco de dados, tornando o processo de criação de tabelas e campos no banco de dados muito mais fácil.
No geral, o Sequelize é uma biblioteca poderosa e eficiente para Node.js que simplifica a interação com bancos de dados relacionais e ajuda a acelerar o desenvolvimento de aplicativos web.

NODE JS
Node.js é uma plataforma de desenvolvimento de aplicativos baseada em JavaScript que permite aos desenvolvedores criar aplicativos de servidor altamente escaláveis e eficientes. O Node.js é construído em cima do motor JavaScript V8 do Google Chrome, o que o torna extremamente rápido e eficiente.
O Node.js é usado principalmente para criar aplicativos web em tempo real, como chatbots, jogos multiplayer, aplicativos de streaming, entre outros. Ele também é amplamente utilizado para criar APIs (Application Programming Interfaces) e para processar grandes volumes de dados em tempo real.
A principal característica do Node.js é a sua capacidade de executar operações de entrada e saída de forma não bloqueante e assíncrona, o que significa que ele pode lidar com várias solicitações simultaneamente sem bloquear o thread de execução. Isso o torna altamente escalável e capaz de lidar com grandes volumes de tráfego da web.
O Node.js é suportado por uma ampla comunidade de desenvolvedores, que contribuem com uma grande variedade de pacotes de código-fonte aberto (módulos) que podem ser facilmente integrados aos aplicativos Node.js. Além disso, o Node.js também possui uma ampla variedade de ferramentas e frameworks para ajudar os desenvolvedores a criar aplicativos de maneira rápida e eficiente.
No geral, o Node.js é uma plataforma poderosa e flexível para desenvolvimento de aplicativos de servidor que oferece alta escalabilidade, eficiência e uma ampla variedade de recursos e ferramentas.

REACT JS
React.js é uma biblioteca de JavaScript de código aberto para a criação de interfaces de usuário (UI) interativas e dinâmicas. Ele é mantido pelo Facebook e é uma das ferramentas mais populares para desenvolvimento front-end de aplicativos web.
A principal característica do React.js é o uso de um modelo de programação baseado em componentes, que permite que os desenvolvedores dividam o código em pequenos blocos independentes e reutilizáveis. Isso torna mais fácil a criação de interfaces complexas, com um alto grau de modularidade e flexibilidade.
Além disso, o React.js usa o Virtual DOM (DOM Virtual), uma representação em memória do DOM (Document Object Model), que permite que o React atualize apenas as partes da interface que foram modificadas, em vez de atualizar a página inteira. Isso torna o React.js muito mais rápido e eficiente do que outras bibliotecas de JavaScript.
O React.js também é altamente extensível, permitindo que os desenvolvedores criem suas próprias bibliotecas e plugins para estender suas funcionalidades. Ele também é compatível com uma ampla variedade de ferramentas e frameworks, como o Redux para gerenciamento de estado e o Next.js para desenvolvimento de aplicativos web do lado do servidor.
Em resumo, o React.js é uma biblioteca poderosa e flexível para criação de interfaces de usuário dinâmicas e interativas, que usa um modelo de programação baseado em componentes e o Virtual DOM para fornecer uma experiência de desenvolvimento ágil e eficiente.

POSTGRE SQL
O PostgreSQL (ou simplesmente Postgres) é um sistema de gerenciamento de banco de dados relacional de código aberto e gratuito. Ele é conhecido por ser uma das soluções mais avançadas e seguras para armazenamento e gerenciamento de dados.
O PostgreSQL é compatível com uma ampla variedade de plataformas, incluindo Windows, Linux e macOS, e é usado em vários tipos de aplicativos, desde pequenos sites da web até grandes empresas e organizações governamentais.
Algumas das principais características do PostgreSQL incluem suporte para tipos de dados avançados, como arrays, JSON e dados geoespaciais, bem como a capacidade de executar funções armazenadas em várias linguagens de programação, incluindo Python, Java e C/C++.
Além disso, o PostgreSQL é altamente escalável e oferece recursos avançados de replicação e recuperação de desastres, o que o torna uma opção popular para aplicativos críticos e de alta disponibilidade.
O PostgreSQL também é conhecido por sua segurança avançada, com suporte para autenticação e autorização avançadas, criptografia de dados e auditoria de logs.
Em resumo, o PostgreSQL é um sistema de gerenciamento de banco de dados relacional altamente avançado, seguro e escalável, que é amplamente utilizado em aplicativos web, corporativos e governamentais.

LUCIDCHART
Lucidchart é uma plataforma de software de diagramação e visualização de ideias baseada em nuvem. Ele permite que os usuários criem diagramas e fluxogramas facilmente, além de apresentações, mapas mentais, wireframes e muito mais.
O Lucidchart é fácil de usar e possui uma ampla variedade de modelos e formas para ajudar os usuários a criar rapidamente seus diagramas e fluxogramas. Ele também permite a colaboração em tempo real, permitindo que várias pessoas trabalhem em um diagrama simultaneamente, o que o torna ideal para equipes distribuídas.
Uma das principais características do Lucidchart é a sua integração com outras ferramentas populares de software, como o Google Drive, o Microsoft Office e o Salesforce. Ele também pode ser integrado a outras ferramentas de colaboração, como o Slack, o JIRA e o Confluence.
Além disso, o Lucidchart é altamente personalizável, permitindo que os usuários criem seus próprios modelos e formas, além de importar e exportar facilmente seus diagramas para outros formatos, como PDF, JPG e PNG.
Em resumo, o Lucidchart é uma plataforma poderosa e flexível para criação de diagramas e fluxogramas, que oferece colaboração em tempo real, integração com outras ferramentas populares de software e alta personalização. Ele é usado em uma ampla variedade de setores e é adequado para equipes de todos os tamanhos.

FIGMA
O Figma é uma plataforma de design de interface de usuário baseada em nuvem que permite aos designers criar, colaborar e compartilhar projetos de design de forma eficiente. Ele é amplamente usado por equipes de design e desenvolvimento para criar interfaces de usuário para aplicativos, sites e outras plataformas.
Uma das principais características do Figma é a sua facilidade de uso e interface intuitiva, que torna a criação de projetos de design de interface de usuário acessível a todos, independentemente do nível de habilidade técnica. Ele também permite que várias pessoas trabalhem em um projeto de design simultaneamente, tornando a colaboração e o feedback em tempo real mais fáceis e eficientes.
O Figma também possui recursos avançados de design, incluindo suporte para animações, prototipagem interativa e bibliotecas de componentes compartilháveis, o que torna mais fácil para os designers manter a consistência de design e facilita a criação de projetos de design mais complexos.
Além disso, o Figma é altamente integrado com outras ferramentas de design e desenvolvimento, como o Sketch e o Adobe Creative Suite, o que permite uma maior flexibilidade para os designers em suas escolhas de ferramentas.
Em resumo, o Figma é uma plataforma de design de interface de usuário baseada em nuvem, que oferece recursos avançados de design, colaboração em tempo real e integração com outras ferramentas populares de design e desenvolvimento. Ele é amplamente usado por equipes de design e desenvolvimento em todo o mundo.

TRELLO
O Trello é uma plataforma de gerenciamento de projetos baseada em nuvem que permite que indivíduos e equipes organizem, planejem e monitorem projetos de maneira fácil e eficiente. Ele é amplamente usado por empresas, equipes e indivíduos em uma ampla variedade de setores, incluindo marketing, desenvolvimento de software, educação e muito mais.
O Trello é baseado em um sistema de quadros, listas e cartões, onde os usuários podem criar diferentes quadros para diferentes projetos, listas dentro desses quadros para organizar tarefas e cartões para representar tarefas individuais ou itens a serem completados.
Uma das principais características do Trello é a sua facilidade de uso e flexibilidade, permitindo que os usuários personalizem o sistema de quadros, listas e cartões para atender às suas necessidades específicas. Ele também permite que os usuários adicionem membros da equipe a um quadro, atribuam tarefas a pessoas específicas e adicionem prazos para manter o projeto em andamento.
O Trello também possui integrações com outras ferramentas populares, como o Google Drive, Slack e JIRA, além de um conjunto de aplicativos móveis para dispositivos iOS e Android, o que permite que os usuários acessem e gerenciem projetos de qualquer lugar.
Em resumo, o Trello é uma plataforma de gerenciamento de projetos baseada em nuvem, que oferece um sistema flexível de quadros, listas e cartões para organização de projetos, colaboração em equipe e gerenciamento de tarefas. Ele é amplamente usado por indivíduos e equipes em todo o mundo.

DRAW.IO
O Draw.io é uma plataforma de diagramação e fluxograma baseada em nuvem que permite que indivíduos e equipes criem diagramas, gráficos e fluxogramas facilmente. Ele é amplamente usado por empresas, equipes e indivíduos em uma ampla variedade de setores, incluindo engenharia, educação, desenvolvimento de software e muito mais.
O Draw.io possui uma interface intuitiva e fácil de usar, que permite que os usuários criem diagramas e fluxogramas arrastando e soltando elementos pré-fabricados. Ele também oferece uma ampla variedade de modelos pré-construídos para vários tipos de diagramas, incluindo organogramas, diagramas de rede, fluxogramas de processo e muito mais.
Uma das principais características do Draw.io é a sua flexibilidade, permitindo que os usuários personalizem facilmente os elementos de diagramas e fluxogramas para atender às suas necessidades específicas. Além disso, o Draw.io possui integrações com outras ferramentas populares, como o Google Drive, o Dropbox e o JIRA, o que permite que os usuários acessem e gerenciem facilmente seus diagramas e fluxogramas.
O Draw.io também oferece uma opção gratuita e de código aberto, além de um conjunto de recursos premium que incluem suporte aprimorado, recursos de colaboração em tempo real e muito mais.
Em resumo, o Draw.io é uma plataforma de diagramação e fluxograma baseada em nuvem, que oferece uma interface intuitiva e fácil de usar, uma ampla variedade de modelos e recursos de personalização, além de integrações com outras ferramentas populares. Ele é amplamente usado por indivíduos e equipes em todo o mundo.

GOOGLE DATA STUDIO
O Google Data Studio é uma ferramenta de visualização de dados gratuita que permite aos usuários criar e compartilhar relatórios interativos e personalizados. Ele é amplamente usado por empresas e profissionais de marketing para criar relatórios visuais e fáceis de entender sobre as métricas de desempenho do site, campanhas de marketing e muito mais.
O Google Data Studio oferece uma ampla variedade de recursos, incluindo a capacidade de se conectar a diferentes fontes de dados, como o Google Analytics, o Google Ads, o YouTube e muito mais. Ele também possui uma ampla variedade de modelos pré-construídos e personalizáveis que permitem que os usuários criem relatórios rapidamente, além de recursos avançados de personalização, como gráficos interativos, tabelas, mapas e muito mais.
Uma das principais características do Google Data Studio é a sua integração perfeita com outras ferramentas do Google, como o Google Drive, o Google Sheets e o Google BigQuery, o que permite que os usuários importem dados de várias fontes e as visualizem em um único painel.
O Google Data Studio também permite que os usuários compartilhem seus relatórios de forma fácil e segura, permitindo que as equipes colaborem e trabalhem juntas de maneira mais eficiente.
Em resumo, o Google Data Studio é uma ferramenta de visualização de dados gratuita e poderosa, que oferece recursos avançados de personalização, integrações com outras ferramentas do Google e a capacidade de criar e compartilhar relatórios interativos e personalizados. Ele é amplamente usado por empresas e profissionais de marketing em todo o mundo.

CANVA DESIGN
O Canva Design é uma plataforma de design gráfico baseada em nuvem que permite que os usuários criem facilmente designs gráficos profissionais sem ter conhecimentos avançados em design. Ele é amplamente usado por empresas, profissionais de marketing, designers gráficos e indivíduos que desejam criar designs atraentes e envolventes para suas necessidades pessoais e de negócios.
O Canva Design oferece uma ampla variedade de recursos e ferramentas, incluindo modelos pré-construídos, imagens, gráficos, fontes e muito mais. Ele também possui uma interface fácil de usar e intuitiva, permitindo que os usuários criem designs gráficos atraentes em apenas alguns minutos.
Uma das principais características do Canva Design é a sua flexibilidade, permitindo que os usuários personalizem facilmente os elementos de design para atender às suas necessidades específicas. Ele também possui recursos avançados, como a capacidade de adicionar elementos interativos aos designs, como links e animações, o que ajuda a tornar os designs mais dinâmicos e envolventes.
O Canva Design oferece uma opção gratuita e de código aberto, além de um conjunto de recursos premium que incluem suporte aprimorado, recursos avançados de personalização, armazenamento de arquivos adicionais e muito mais.
Em resumo, o Canva Design é uma plataforma de design gráfico baseada em nuvem que oferece uma ampla variedade de recursos e ferramentas, uma interface fácil de usar e recursos avançados de personalização. Ele é amplamente usado por empresas, profissionais de marketing, designers gráficos e indivíduos em todo o mundo para criar designs atraentes e profissionais para suas necessidades pessoais e de negócios.

REACT NATIVE
React Native é uma estrutura de desenvolvimento de aplicativos móveis que permite aos desenvolvedores criar aplicativos nativos para iOS e Android usando a linguagem JavaScript e a biblioteca React. É uma versão móvel da popular biblioteca React do Facebook.
A principal vantagem do React Native é que ele permite que os desenvolvedores criem aplicativos móveis com uma única base de código, que podem ser executados tanto em dispositivos iOS quanto em Android. Isso ajuda a reduzir o tempo e o custo de desenvolvimento, além de permitir que os desenvolvedores mantenham um código mais limpo e organizado.
React Native também oferece a capacidade de criar interfaces de usuário nativas, o que significa que os aplicativos têm a mesma aparência e desempenho de aplicativos nativos desenvolvidos com as linguagens de programação nativas de cada plataforma. Isso ajuda a criar aplicativos mais rápidos, suaves e responsivos.
Além disso, React Native possui uma grande comunidade de desenvolvedores e uma ampla variedade de bibliotecas de terceiros, que ajudam a simplificar o processo de desenvolvimento de aplicativos móveis e a expandir suas funcionalidades.
Em resumo, o React Native é uma estrutura de desenvolvimento de aplicativos móveis que permite que os desenvolvedores criem aplicativos nativos para iOS e Android usando a linguagem JavaScript e a biblioteca React. Ele oferece a capacidade de criar aplicativos com uma única base de código, interfaces de usuário nativas e uma ampla variedade de recursos e bibliotecas de terceiros.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
