// Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

// Desafio:
// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//      receitas: [] 
//      despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128,45, 176.87, 1450.00]
}

function sum(arr){
    let total = 0;

    for(let value of arr){
        total += value
    }
    return total
}



const calcBalance=()=>{
    const calcIncomes = sum(family.incomes);
    const calcExpenses = sum(family.expenses);

    const result= calcIncomes - calcExpenses;

    let balanceInfo = 'negativo'
    if(result>=0){
        balanceInfo = 'positivo'
    }

    console.log(`Seu saldo está ${balanceInfo}: ${result.toFixed(2)}R$`);
}
calcBalance()