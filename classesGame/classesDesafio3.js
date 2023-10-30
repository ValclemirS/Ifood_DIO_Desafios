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
  
  let mago = new hero("Valclemir", 21, "mago");
  mago.attack(); 
  