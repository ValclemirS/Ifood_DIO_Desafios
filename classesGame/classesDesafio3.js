/**Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/
  class hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack() {
      let _types = '';
  
      switch (this.type) {
        case 'mago':
          _types = 'magia';
          break;
        case 'guerreiro':
          _types = 'espada';
          break;
        case 'monge':
          _types = 'artes marciais';
          break;
        case 'ninja':
          _types = 'shuriken';
          break;
        default:
          _types = 'desconhecido';
          break;
      }
  
      console.log(`O ${this.type} cujo nome é ${this.name} atacou usando ${_types}`);
    }
  }
  
  let mago = new hero("Marcos", 21, "mago");
  mago.attack(); 
  