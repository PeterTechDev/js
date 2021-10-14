let nome = ""

try {
    if(nome == ""){
        throw "O nome não pode estar vazio";
    }
    console.log(nome);
} catch (e) {
    console.log('ERROU:', e)
}

    console.log('Boa noite');

