/**Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}*/

displayResults("clemir",2,10,);

function displayResults(player,vitorias,derrotas,nivel){
    saldoVitorias=vitorias-derrotas
    if(vitorias >= derrotas){
        estado="vitorias"
        if (saldoVitorias <= 10) {
            nivel = "Ferro";
        } else if (saldoVitorias >= 11 && vitorias <= 20) {
            nivel = "Bronze";
        } else if (saldoVitorias >= 21 && vitorias <= 50) {
            nivel = "Prata";
        } else if (saldoVitorias >= 51 && vitorias <= 80) {
            nivel = "Ouro";
        } else if (saldoVitorias >= 81 && vitorias <= 90) {
            nivel = "Diamante";
        } else if (saldoVitorias >= 91 && vitorias <= 100) {
            nivel = "Lendário";
        } else {
            nivel = "Imortal";
        }       
    } else{
        nivel = "Sem rank"
        saldoVitorias=derrotas-vitorias
        if(saldoVitorias===1){
            estado="Derrota"
        }else{
            estado="Derrotas" 
        }

    }


    console.log(`O Herói ${player} tem de saldo de ${saldoVitorias} ${estado} está no nível de ${nivel}`)
}