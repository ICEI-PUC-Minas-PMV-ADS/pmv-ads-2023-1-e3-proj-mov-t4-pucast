# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Testes realizados conforme **registro no itens 1,2,3,4,5,8**. Os testes de interface de Cadastro de usuário e Login fora realizados e estão evidenciados no vídeo guardados em:
> - [Teste de Login e cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-pucast/tree/main/presentation/Videos)
> - [Link do vídeo no youtube](https://youtube.com/shorts/7om_FK76gQM?feature=share.) 

De acordo com os ítens descritos em Plano de Testes de software , segue os registros abaixo : 
- **1- Teste de unidade** :*o objetivo do teste de unidade é garantir que o código esteja funcionando corretamente e que esteja fazendo o que é esperado dele;* É notório no vídeo que o sistema responde bem aos comandos dos botões e não realiza o salvamento de nenhuma informação por não tem banco de dados . 

- **2-Teste de sistema** : *Realizar a navegação pelo sistema com usuário final;* o sistema aceita a digitação de dados e obedece ao comando de inserir email e senha e logo em seguida (ao clicar no botão )o nome de usuário para cadastro. Os dois botões de login e cadastrar na página inicial separa as funcionalidades do sistema para redirecionamento do usuário . O teste  foi realizado com o  Aplicativo Expo Go e não foi hospedado , estando no localhost quando inserido *npx expo init* no terminal do projeto. Osistema ainda não apresenta o sistema de esconder a senha pois será implementado posteriormente, com um ícone  de olho clicável no input password para o usuário visualizar ou esconder a senha, a fim de incrementar a Integridade de Dados e Banco de Dados do item 4 do Plano de Teste de Software.

- **3-Teste de Aceitação**: *Realizar o login/cadastro de um usuário;*
- **4-Teste de Integridade de Dados e Banco de Dados**:*verificar o funcionamento do banco de dados a fim de identificar possíveis erros ou dados e comando corrompidos;*
- **5-Teste de interface de usuário**: *Verificar a navegabilidade pelo aplicativo*;O sistema , inicialmente , responde aos comando de seta para voltar a página inicial. Os comando de compartilhar , favoritar e selecionar serão implementados posteriormente na página do Podcast .
- **6-Testar o aplicativo na carga de trabalho para armazenamento dos podcasts favoritos selecionados pelo cliente e o desempenho de dos dados no sistema** : *O aplicativo foi desenvolvido a fim de não ter armazenamento , fazendo com que seus usuários acessem podcasts direto do Youtube , através de links recomendados*
- **7-Verificar a segurança no aplicativo para o acesso ao login e ao inserir dados de cadastro , Respeitando a lei de Proteção Geral de Dados** : *Foi desenvolvida uma API para testar a verificação de dados da plataforma, que responde bem a inserção de dados do Banco de Dados Fictício. Por ser um aplicativo não hospedado, não há usuários na plataforma verdadeiros*
- **8-Teste de Instalação**: *Verificar se o sistema funciona em outras máquinas que nunca receberam ou acessaram o aplicativo;* o arquivo do sistema quando enviado a outros colegas abre com o Expo Go localmente. Para este projeto , não será necessário a hospedagem . 



> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
