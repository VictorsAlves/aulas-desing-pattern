## Exercício 1: Singleton
### Cenário: Gerenciador de Log de Erros (ErrorLogger)

Em uma aplicação, você precisa de um sistema centralizado para armazenar mensagens de log.
Não importa em qual parte do código você esteja (autenticação, banco de dados ou UI),
todos os logs devem ser salvos em uma única lista dentro de uma única instância.

### Objetivo:
Crie uma classe ErrorLogger.
Impeça que a classe seja instanciada com new.
Crie um método log(message: string) que adiciona a mensagem a um array privado, prefixando-a com o timestamp atual.
Crie um método showLogs() que exibe todas as mensagens armazenadas.

### Desafio de Validação:
No seu arquivo principal, tente criar duas variáveis chamadas loggerA e loggerB chamando o método de instância. 
Adicione um log no loggerA e verifique se ele aparece ao chamar showLogs() no loggerB.

## Exercício 2: Composite
### Cenário: Sistema de Calculo de Salários (Estrutura Organizacional)

Uma empresa é composta por funcionários individuais e departamentos. 
Um departamento pode conter vários funcionários e também outros departamentos (sub-departamentos). 
Você precisa calcular o custo total de salários de qualquer nível da hierarquia.

### Objetivo:
Crie uma interface chamada EmployeeComponent com o método getSalary(): number.
Crie a classe Folha (Leaf) chamada Employee, que recebe nome e salário no construtor e implementa a interface.
Crie a classe Composta (Composite) chamada Department, que possui uma lista de EmployeeComponent.
A classe Department deve ter um método add(component: EmployeeComponent) para adicionar funcionários ou sub-departamentos.
O método getSalary() do Department deve retornar a soma dos salários de todos os seus membros (recursivamente).
### Cenário de Teste:
Crie 2 programadores (salário 5000 cada).
Crie 1 gerente de projeto (salário 8000).
Crie um departamento chamado "Desenvolvimento" e adicione os 3 membros.
Crie um departamento "TI" (raiz) e adicione o departamento "Desenvolvimento" dentro dele.
Chame ti.getSalary() e veja se o resultado é 18000.

### Dica para o Sucesso:
No Singleton: Lembre-se que o segredo está no private constructor e no atributo static.
No Composite: O segredo está no reduce ou em um for dentro do método do departamento, que chama o mesmo método nos seus 
filhos, sem se importar se o filho é uma pessoa ou outro departamento.