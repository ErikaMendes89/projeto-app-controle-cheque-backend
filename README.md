# Projeto Controle de Cheque - Backend 🚀
<h2>Descrição</h2>
O projeto Controle de Cheque - Backend é uma aplicação desenvolvida em Node.js com Express e Sequelize para gerenciar o cadastro de cheques, clientes, cálculos financeiros e fornecer um dashboard com informações resumidas. O backend está estruturado para realizar operações de CRUD (Create, Read, Update, Delete) e se comunica com um banco de dados MySQL.

<h2>Funcionalidades</h2>
<b>Gerenciamento de Clientes:</b>
<ul>
  <li>Cadastro de clientes com informações como nome, e-mail e telefone.</li>
  <li>Listagem de todos os clientes cadastrados.</li>  
</ul>
<br>
<b>Gerenciamento de Cheques:</b>
<ul>
  <li>Cadastro de cheques associados a clientes</li>
  <li>Listagem de todos os cheques cadastrados.</li>
  <li>Remoção de cheques por ID.</li>
</ul>
<br>
<b>Cálculo de Juros:</b>
<ul>
  <li>Cálculo do valor de juros com base em percentual informado, data de emissão e vencimento do cheque.</li>
  <li>Armazenamento dos cálculos realizados.</li>
</ul>
<br>
<b>Dashboard:</b>
<ul>
  <li>Total de valores de cheques cadastrados.</li>
  <li>Valores vencendo hoje.</li>
  <li>Valores vencendo no mês atual.</li>
</ul>

# Estrutura do Projeto
<h3>Diretório <b>config</b> </h3>
<br>
database.js: Configuração do Sequelize para conexão com o banco de dados MySQL utilizando variáveis de ambiente.
<br>
<h3>Diretório <b>controllers</b></h3>
<ul>
  <li>calculoController.js: Controlador para operações relacionadas ao cálculo de juros e valor líquido dos cheques.</li>
  <li>chequeController.js: Controlador para operações de cadastro, listagem e remoção de cheques.</li>
  <li>clienteController.js: Controlador para cadastro e listagem de clientes.</li>
  <li>dashboardController.js: Controlador para exibição de informações resumidas no dashboard.</li>  
</ul>
<h3>Diretório <b>models</b></h3>
<ul>
  <li>calculoModel.js: Modelo Sequelize para a tabela de cálculos.</li>
  <li>chequeModel.js: Modelo Sequelize para a tabela de cheques com relação a clientes.</li>
  <li>clienteModel.js: Modelo Sequelize para a tabela de clientes.</li>
</ul>
<h3>Diretório <b>routes</b></h3>
<ul>
  <li>calculoRoutes.js: Rota para operações de cálculo.</li>
  <li>chequeRoutes.js: Rotas para operações de cheques.</li>
  <li>clientesRoutes.js: Rotas para operações de clientes.</li>
  <li>clientesRoutes.js: Rotas para operações de clientes</li>
  <li>dashboardRoutes.js: Rota para exibição do resumo no dashboard.</li>
</ul>
<h3>Arquivo <b>index.js</b></h3>
Responsável por sincronizar as tabelas do banco de dados e estabelecer a conexão.
<h2>Requisitos</h2>
<ul>
  <li>Node.js (versão 14 ou superior)</li>
  <li>MySQL (versão 5.7 ou superior)</li>
  <li>Sequelize</li>
  <li>Express</li>
  <li>dotenv</li>
</ul>
<h3>Endpoints</h3>
<b>Clientes</b>
<ul>
  <li>POST /clientes: Cadastra um novo cliente.</li>
  <li>GET /clientes: Lista todos os clientes.</li>
</ul>
<b>Cheques</b>
<ul>
  <li>POST /cheques: Cadastra um novo cheque.</li>
  <li>GET /cheques: Lista todos os cheques cadastrados.
  <li>DELETE /cheques/:id: Remove um</li>
</li>
</ul>
<b>Cálculos</b>
<ul>
  <li>POST /calculos: Salva um novo cálculo de juros.</li>
</ul>
<b>Dashboard</b>
<ul>
<li>GET /dashboard/resumo: Exibe o resumo dos cheques.</li>
</ul>
<h3>Estrutura do Banco de Dados</h3>
<b>Tabela clientes</b>
<br>
<table>
  <tr>
    <th>Campo</th>
    <th>Tipo</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>id</td>
    <td>INTEGER</td>
    <td>Chave primária</td>
  </tr>
  <tr>
    <td>nome</td>
    <td>STRING</td>
    <td>Nome do cliente</td>
  </tr>
  <tr>
    <td>email</td>
    <td>STRING</td>
    <td>E-mail do cliente (único)</td>
  </tr>
  <tr>
    <td>telefone</td>
    <td>STRING</td>
    <td>Telefone do cliente</td>
  </tr>
</table>
<b>Tabela cheques</b>
<br>
<table>
  <tr>
    <th>Campo</th>
    <th>Tipo</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>id</td>
    <td>INTEGER</td>
    <td>Chave primária</td>
  </tr>
  <tr>
    <td>numero</td>
    <td>STRING</td>
    <td>Número do cheque</td>
  </tr>
  <tr>
    <td>valor</td>
    <td>FLOAT</td>
    <td>Valor do cheque</td>
  </tr>
  <tr>
    <td>vencimento</td>
    <td>DATE</td>
    <td>Data de vencimento do cheque</td>
  </tr>
  <tr>
    <td>foto</td>
    <td>STRING</td>
    <td>Caminho ou URL da foto</td>
  </tr>
    <tr>
    <td>clienteId</td>
    <td>INTEGER</td>
    <td>Chave estrangeira (Cliente)</td>
  </tr>
</table>

<b>Tabela calculos</b>
<br>
<table>
  <tr>
    <th>Campo</th>
    <th>Tipo</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>id</td>
    <td>INTEGER</td>
    <td>Chave primária</td>
  </tr>
  <tr>
    <td>dataCheque</td>
    <td>DATE</td>
    <td>Data de emissão do cheque</td>
  </tr>
  <tr>
    <td>dataVencimento</td>
    <td>DATE</td>
    <td>Data de vencimento do cheque</td>
  </tr>
  <tr>
    <td>valorCheque</td>
    <td>FLOAT</td>
    <td>Valor do cheque</td>
  </tr>
  <tr>
    <td>percentualJuros</td>
    <td>FLOAT</td>
    <td>Percentual de juros aplicado</td>
  </tr>
  <tr>
    <td>valorJuros</td>
    <td>FLOAT</td>
    <td>Valor calculado de juros</td>
  </tr>
  <tr>
    <td>valorLiquido</td>
    <td>FLOAT</td>
    <td>Valor líquido após cálculo</td>
  </tr>
</table>

<br>
<h3>Contribuição</h3>
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests com sugestões de melhorias ou correções.
