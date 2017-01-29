# dojos

Fazer uma função que converta números compostos de algarismos indo-arábicos em números compostos por algarismos romanos. Utilizar TDD para a tarefa.
Fazer o HTML invocar a função para atualizar a tela.
A função deverá aceitar números inteiros entre 1 e 3999. Para um parâmetro com quaisquer valores diferentes disso, a função deverá retornar uma exceção.

<table>
  <tr><th>Romanos</th><th>Indo-arábicos</th></tr>
  <tr><td>I</td><td>1</td></tr>
  <tr><td>V</td><td>5</td></tr>
  <tr><td>X</td><td>10</td></tr>
  <tr><td>L</td><td>50</td></tr>
  <tr><td>C</td><td>100</td></tr>
  <tr><td>D</td><td>500</td></tr>
  <tr><td>M</td><td>1000</td></tr>
</table>

Bônus: se sobrar tempo, fazer a função que faça a conversão inversa.

# EDIT

Para executar os testes da solução:

<ol>
  <li>Instalar o <a href="https://mochajs.org/">Mocha</a> em sua máquina</li>
  <li>Acessar a pasta <strong>spec</strong> do projeto e executar o comando: <pre>mocha conversor.spec.js</pre></li>
</ol>
