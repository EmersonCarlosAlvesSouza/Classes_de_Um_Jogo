// Definindo a classe Hero
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome; // Propriedade nome
        this.idade = idade; // Propriedade idade
        this.tipo = tipo; // Propriedade tipo
    }

    // Método para realizar o ataque
    atacar() {
        let ataque;
        
        // Determinando o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido"; // Caso o tipo não esteja na lista
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso
let heroi1 = new Hero("Aragorn", 30, "guerreiro");
heroi1.atacar(); // Saída: O guerreiro atacou usando espada.

let heroi2 = new Hero("Gandalf", 150, "mago");
heroi2.atacar(); // Saída: O mago atacou usando magia.

let heroi3 = new Hero("Li", 25, "monge");
heroi3.atacar(); // Saída: O monge atacou usando artes marciais.

let heroi4 = new Hero("Naruto", 20, "ninja");
heroi4.atacar(); // Saída: O ninja atacou usando shuriken.
