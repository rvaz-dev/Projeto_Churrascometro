/*
Carnes
Homens cerca de 400g  - 5+hrs = 800g
Mulheres Cerca de 300g - 5+hrs = 600g
Criancas valem por 0.5 adultos Carne
Picanha - P1 
Fraldinha - P1 
Maminha - P1 
Costela Bovina - P1 
Contra File - P1 
Alcatra - P2 
File Mignon - P2
Linguica - P1
Asa - P1
Coxa - P2

200g de acompanhamento PP Igual todos = 50% Carne =  2x 5+horas
Arroz - 18g - 100g Carne 
Pao de Alho - 22.5g - 100g Carne
Vinagrete - 7.5g - 100g
Quijo Coalho - 13.5g - 100g Carne
Farofa - 11.5g - 100g Carne
Maionese - 27g - 100g Carne

Vegetal True - 50% do valor carne
Vegetariano - 100% Vegetal
Abobrinha - 65g - 100g Carne - P1
Cebola - 100g - 150g Carne - P1
Tomate - 75g - 150g Carne - P2
Beringela - 50g - 150g Carne - P3
Cogumelo - 75g - 150g Carne - P2
Pimentao - 100g - 150g Carne - P1
Cenoura - 25g - 150g Carne - P4
Brocolis - 25g - 150g Carne - P4

Cerveja - 1200ml por pessoa - 6+hrs = 2000ml
Artesanal 50% - Normal - 50%

Refrigerante/Agua/Suco - 1000ml por pessoa - 6+hrs = 1500ml
Refrigerante 50% / Suco 30% / Agua 20
400ml Agua -> 1L Refrigerante
600ml Suco -> 1L Refrigerante
*/

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputVegetarianos = document.getElementById("vegetarianos");
let inputDuracao = document.getElementById("duracao");

// calculo da Quantidade necessaria para o churrasco 
function calcular(){
    console.log("Calculando...")

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let vegetarianos = inputVegetarianos.value;
    let duracao = inputDuracao.value;
    
    // calculo do total dos itens
    // calculo do total de carne
    let totalCarne = (carnePP(duracao) * homens) +
                    (((carnePP(duracao) * mulheres) * 3) / 4) + 
                    ((carnePP(duracao) / 2) * criancas) - 
                    (carnePP(duracao) * vegetarianos);
    // calculo do total de acompanhamento
    let totalAcompanhamento = (acompanhamentoPP(duracao) * homens) +
                            (acompanhamentoPP(duracao) * mulheres) +
                            (acompanhamentoPP(duracao) * criancas) +
                            (acompanhamentoPP(duracao) * vegetarianos) ;
    //calculo do total de vegetal
    let totalVegetal = (vegetalPP(duracao) * homens) +
                        (vegetalPP(duracao) * mulheres) +
                        (vegetalPP(duracao) * criancas) +
                        (vegetalPP(duracao) * 2 * vegetarianos);
    // calculo do total de cerveja
    let totalCerveja = (cervejaPP(duracao) * homens) +
                        (cervejaPP(duracao) * mulheres);
    // calculo do total de bebidas
    let totalBebida = (bebidaPP(duracao) * homens) +
                        (bebidaPP(duracao) * mulheres) +
                        (bebidaPP(duracao) * criancas);

    // distribui itens em suas subcategorias de acordo com as checkboxes
    let carnes = distribuiCarne(totalCarne);
    let acompanhamentos = distribuiAcompanhamento(totalAcompanhamento);
    let vegetais = distribuiVegetal(totalVegetal);
    let cervejas = distribuiCerveja(totalCerveja);
    let bebidas = distribuiBebida(totalBebida);
     // imprime resultado
     resultado.innerHTML = ""
     // imprime carnes
    for(carne of carnes){
        if(carne.quantidade <= 1000){
            resultado.innerHTML += `<p>${Math.round(carne.quantidade)}g de ${carne.nome}</p>`;
        }
        else{
            resultado.innerHTML += `<p>${parseFloat(carne.quantidade/1000).toFixed(1)}kg de ${carne.nome}</p>`;
        }
    }
    // imprime acompanhamentos
    for(acompanhamento of acompanhamentos){
        if(acompanhamento.quantidade <= 1000){
            resultado.innerHTML += `<p>${Math.round(acompanhamento.quantidade)}g de ${acompanhamento.nome}</p>`
        }
        else{
            resultado.innerHTML += `<p>${parseFloat(acompanhamento.quantidade/1000).toFixed(1)}kg de ${acompanhamento.nome}</p>`
        }
    }
    // imprime vegetais
    for(vegetal of vegetais){
        if(vegetal.quantidade <= 1000){
            resultado.innerHTML += `<p>${Math.round(vegetal.quantidade)}g de ${vegetal.nome}</p>`
        }
        else{
            resultado.innerHTML += `<p>${parseFloat(vegetal.quantidade/1000).toFixed(1)}kg de ${vegetal.nome}</p>`
        }
    }
    // imprime cervejas
    for(cerveja of cervejas){
        if(cerveja.quantidade <= 1000){
            resultado.innerHTML += `<p>${Math.round(cerveja.quantidade)}ml de ${cerveja.nome}</p>`
        }
        else{
            resultado.innerHTML += `<p>${parseFloat(cerveja.quantidade/1000).toFixed(1)}L de ${cerveja.nome}</p>`
        }
    }
    // imprime bebidas
    for(bebida of bebidas){
        if(bebida.quantidade <= 1000){
            resultado.innerHTML += `<p>${Math.round(bebida.quantidade)}ml de ${bebida.nome}</p>`
        }
        else{
            resultado.innerHTML += `<p>${parseFloat(bebida.quantidade/1000).toFixed(1)}L de ${bebida.nome}</p>`
        }
    }
}

// calculo de carne por pessoa
function carnePP(duracao){
    if(duracao >= 5){
        return 800;
    }
    else{
        return 400;
    }
}

// calculo de acompanhamento por pessoa
function acompanhamentoPP(duracao){
    if(duracao >= 5){
        return 400;
    }
    else{
        return 200;
    }
}

// calculo de vegetal por pessoa
function vegetalPP(duracao){
    if(duracao >= 5){
        return 400;
    }
    else{
        return 200;
    }
}

// calculo de cerveja por pessoa
function cervejaPP(duracao){
    if(duracao >= 5){
        return 2000;
    }
    else{
        return 1200;
    }
}

// calculo de bebida por pessoa 
function bebidaPP(duracao){
    if(duracao >= 5){
        return 1500;
    }
    else{
        return 1000;
    }
}

// cria um objeto para retornar um nome e sua quantidade
function criarItem(nome, quantidade){
    let item = {
        nome: nome,
        quantidade: quantidade,
    }
    return item;
}

// distribui a quantidade de carne entre os tipos de carne selecionados
function distribuiCarne(totalCarne){
    let carnes = document.getElementsByName("carne");
    let carneSelecionada = [];
    let totalP1 = 0;
    let totalP2 = 0;
    let unidades = 0;
    let unidade = 0;
    let qtdCarne = 0;
    // checa quais carnes foram selecionadas
    for(carne of carnes){
        if(carne.checked == true && (carne.value == "picanha" ||
                                    carne.value == "fraldinha" ||
                                    carne.value == "maminha" ||
                                    carne.value == "costelaBovina" ||
                                    carne.value == "contraFile" ||
                                    carne.value == "linguica" ||
                                    carne.value == "asa")){
            carneSelecionada.push(carne.value);
            totalP1++;
        }
        if(carne.checked == true && (carne.value == "alcatra" ||
                            carne.value == "fileMignon" ||
                            carne.value == "coxa")){
            carneSelecionada.push(carne.value);
            totalP2++;
        }
    }
    // Soma o total de carnes de Prioridade 1 com o de Prioridade 2
    unidades = (totalP1 * 2) + totalP2;
    // O valor da quantidade de P2
    unidade = totalCarne / unidades;
    // coloca em um array a quantidade de carne e o nome correspondente
    let distribuicao = [];
    for(let i = 0; i < carneSelecionada.length; i++){
        if(carneSelecionada[i] == "picanha"){
            qtdCarne = unidade * 2;
            distribuicao.push(criarItem("Picanha", qtdCarne));
        }
        else if(carneSelecionada[i] == "fraldinha"){
            qtdCarne = unidade * 2;
            distribuicao.push(criarItem("Fraldinha", qtdCarne));
        }
        else if(carneSelecionada[i] == "maminha"){
            qtdCarne = unidade * 2;
            distribuicao.push(criarItem("Maminha", qtdCarne));
        }
        else if(carneSelecionada[i] == "costelaBovina"){
            qtdCarne = unidade * 2;
            distribuicao.push(criarItem("Costela Bovina", qtdCarne));
        }
        else if(carneSelecionada[i] == "contraFile"){
            qtdCarne = unidade * 2;
            distribuicao.push(criarItem("Contra File", qtdCarne));
        }
        else if(carneSelecionada[i] == "alcatra"){
            qtdCarne = unidade;
            distribuicao.push(criarItem("Alcatra", qtdCarne));
        }
        else if(carneSelecionada[i] == "fileMignon"){
            qtdCarne = unidade;
            distribuicao.push(criarItem("File Mignon", qtdCarne));
        }
        else if(carneSelecionada[i] == "linguica"){
            qtdCarne = unidade * 2;
            distribuicao.push(criarItem("Linguica Suina", qtdCarne));
        }
        else if(carneSelecionada[i] == "asa"){
            qtdCarne = unidade * 2;
            distribuicao.push(criarItem("Asa de Frango", qtdCarne));
        }
        else if(carneSelecionada[i] == "coxa"){
            qtdCarne = unidade * 2;
            distribuicao.push(criarItem("Coxa de Frango", qtdCarne));
        }
        else{
        }
    }
    return distribuicao;
}

// distribui a quantidade de acompanhamento entre os tipos de acompanhamento selecionados
function distribuiAcompanhamento(totalAcompanhamento){
    let acompanhamentos = document.getElementsByName("acompanhamento");
    let acompanhamentoSelecionado = [];
    let unidades = 0;
    let unidade = 0;
    let qtdAcompanhamento = 0;

    let arroz = 0;
    let paoDeAlho = 0;
    let vinagrete = 0;
    let queijoCoalho = 0;
    let farofa = 0;
    let maionese = 0;
    
    // checa quais acompanhamentos foram selecionaldos
    for(acompanhamento of acompanhamentos){
        if(acompanhamento.checked == true && acompanhamento.value == "arroz"){
            arroz = 1;
            acompanhamentoSelecionado.push(acompanhamento.value)
        }
        else if(acompanhamento.checked == true && acompanhamento.value == "paoDeAlho"){
            paoDeAlho = 1;
            acompanhamentoSelecionado.push(acompanhamento.value);
        }
        else if(acompanhamento.checked == true && acompanhamento.value == "vinagrete"){
            vinagrete = 1;
            acompanhamentoSelecionado.push(acompanhamento.value)
        }
        else if(acompanhamento.checked == true && acompanhamento.value == "queijoCoalho"){
            queijoCoalho = 1;
            acompanhamentoSelecionado.push(acompanhamento.value)
        }
        else if(acompanhamento.checked == true && acompanhamento.value == "farofa"){
            farofa = 1;
            acompanhamentoSelecionado.push(acompanhamento.value)
        }
        else if(acompanhamento.checked == true && acompanhamento.value == "maionese"){
            maionese = 1;
            acompanhamentoSelecionado.push(acompanhamento.value)
        }
        else{

        }
    }
    // soma o total de acompanhamentos de acordo com as suas percentagens
    unidades = (arroz * 18) + 
                (paoDeAlho * 22.5) +
                (vinagrete * 7.5) +
                (queijoCoalho * 13.5) +
                (farofa * 11.5) +
                (maionese * 27);
    // o valor da quantidade da unidade
    unidade = totalAcompanhamento / unidades;
    // coloca em um array a quantidade de acompanhamento e o nome correspondente
    let distribuicao = [];
    for(i = 0; i < acompanhamentoSelecionado.length; i++){
        if(acompanhamentoSelecionado[i] == "arroz"){
            qtdAcompanhamento = unidade * 18;
            distribuicao.push(criarItem("Arroz", qtdAcompanhamento));
        }
        else if(acompanhamentoSelecionado[i] == "paoDeAlho"){
            qtdAcompanhamento = unidade * 22.5;
            distribuicao.push(criarItem("Pao de Alho", qtdAcompanhamento));
        }
        else if(acompanhamentoSelecionado[i] == "vinagrete"){
            qtdAcompanhamento = unidade * 7.5;
            distribuicao.push(criarItem("Vinagrete", qtdAcompanhamento));
        }
        else if(acompanhamentoSelecionado[i] == "queijoCoalho"){
            qtdAcompanhamento = unidade * 13.5;
            distribuicao.push(criarItem("Queijo Coalho", qtdAcompanhamento));
        }
        else if(acompanhamentoSelecionado[i] == "farofa"){
            qtdAcompanhamento = unidade * 11.5;
            distribuicao.push(criarItem("Farofa", qtdAcompanhamento));
        }
        else if(acompanhamentoSelecionado[i] == "maionese"){
            qtdAcompanhamento = unidade * 27;
            distribuicao.push(criarItem("Maionese", qtdAcompanhamento));
        }
        else{
        }
    }
    return distribuicao;
}

// distribui a quantidade de vegetal entre os tipos de vegetal selecionados
function distribuiVegetal(totalVegetal){
    vegetais = document.getElementsByName("vegetal");
    vegetalSelecionado = [];
    unidade = 0;
    unidades = 0;
    qtdVegetal = 0;
    // variaveis da prioridade dos vegetais para calculo da unidade
    let totalP1 = 0;
    let totalP2 = 0;
    let totalP3 = 0;
    let totalP4 = 0;
    // checa quais vegetais foram selecionados
    for(vegetal of vegetais){
        if(vegetal.checked == true && (vegetal.value == "abobrinha" ||
                                        vegetal.value == "cebola" || 
                                        vegetal.value == "pimentao")){
            vegetalSelecionado.push(vegetal.value);
            totalP1++;
        }
        else if(vegetal.checked == true && (vegetal.value == "tomate" ||
                                        vegetal.value == "cogumelo")){
            vegetalSelecionado.push(vegetal.value);
            totalP2++;
        }
        else if(vegetal.checked == true && (vegetal.value == "beringela")){
            vegetalSelecionado.push(vegetal.value);
            totalP3++;
        }
        else if(vegetal.checked == true && (vegetal.value == "cenoura" ||
                                        vegetal.value == "brocolis")){
            vegetalSelecionado.push(vegetal.value);
            totalP4++;
        }
        else{

        }
    }
    // soma total de vegetais de acordo com suas prioridades
    unidades = (totalP1 * 4) + (totalP2 * 3) + (totalP3 * 2) + (totalP4);
    // o valor da quantidade da unidade
    unidade = totalVegetal / unidades;
    // coloca em um arry a quantidade de carne e o nome correspondente
    let distribuicao = [];
    for(let i = 0; i < vegetalSelecionado.length; i++){
        if(vegetalSelecionado[i] == "abobrinha"){
            qtdVegetal = unidade * 4;
            distribuicao.push(criarItem("Abobrinha", qtdVegetal));
        }
        else if(vegetalSelecionado[i] == "cebola"){
            qtdVegetal = unidade * 4;
            distribuicao.push(criarItem("Cebola", qtdVegetal));
        }
        else if(vegetalSelecionado[i] == "pimentao"){
            qtdVegetal = unidade * 4;
            distribuicao.push(criarItem("Pimentao", qtdVegetal));
        }
        else if(vegetalSelecionado[i] == "tomate"){
            qtdVegetal = unidade * 3;
            distribuicao.push(criarItem("Tomate", qtdVegetal));
        }
        else if(vegetalSelecionado[i] == "cogumelo"){
            qtdVegetal = unidade * 3;
            distribuicao.push(criarItem("Cogumelo", qtdVegetal));
        }
        else if(vegetalSelecionado[i] == "beringela"){
            qtdVegetal = unidade * 2;
            distribuicao.push(criarItem("Beringela", qtdVegetal));
        }
        else if(vegetalSelecionado[i] == "cenoura"){
            qtdVegetal = unidade;
            distribuicao.push(criarItem("Cenoura", qtdVegetal)); 
        }
        else if(vegetalSelecionado[i] == "brocolis"){
            qtdVegetal = unidade;
            distribuicao.push(criarItem("Brocolis", qtdVegetal));
        }
        else{

        }
    }
    return distribuicao;
}

// distribui a quantidade de cerveja entre os tipos de cerveja
function distribuiCerveja(totalCerveja){
    let cervejas = document.getElementsByName("cerveja");
    let cervejaSelecionada = [];
    let unidades = 0;
    let unidade = 0;
    let qtdCerveja = 0;

    let regular = 0;
    let artesanal = 0;

    // checcc quais cervejas foram selecionadas
    for(cerveja of cervejas){
        if(cerveja.checked && cerveja.value == "regular"){
            regular = 1;
            cervejaSelecionada.push(cerveja.value);
        }
        else if(cerveja.checked && cerveja.value == "artesanal"){
            artesanal = 1;
            cervejaSelecionada.push(cerveja.value);
        }
        else{   
        }
    }
    // soma o total de cerveja de acordo com suas percentagens
    unidades = regular + artesanal;
    // o valor da quantidade da unidade
    unidade = totalCerveja / unidades;
    // coloca em um array a quantidade de cerveja e o nome correspondente
    let distribuicao = [];
    for(i = 0; i < cervejaSelecionada.length; i++){
        if(cervejaSelecionada[i] == "regular"){
            qtdCerveja = unidade;
            distribuicao.push(criarItem("Regular", qtdCerveja));
        }
        else if(cervejaSelecionada[i] == "artesanal"){
            qtdCerveja = unidade;
            distribuicao.push(criarItem("Artesanal", qtdCerveja));
        }
        else{
        }
    }
    return distribuicao;
}

// distribui a quantidade de bebidas entre suas subcategorias
function distribuiBebida(totalBebida){
    let bebidas = document.getElementsByName("bebida");
    let bebidaSelecionada = [];
    let unidades = 0;
    let unidade = 0;
    let qtdBebida = 0

    let refrigerante = 0;
    let suco = 0;
    let agua = 0;

    // checa quais bebidas foram selecionadas
    for(bebida of bebidas){
        if(bebida.checked == true && bebida.value == "refrigerante"){
            refrigerante = 1;
            bebidaSelecionada.push(bebida.value);
        }
        else if(bebida.checked == true && bebida.value == "suco"){
            suco = 1;
            bebidaSelecionada.push(bebida.value);
        }
        else if(bebida.checked == true && bebida.value == "agua"){
            agua = 1;
            bebidaSelecionada.push(bebida.value);
        }
        else{
        }
    }
    // soma o total de bebidas de acordo com suas percentagens
    unidades = (refrigerante * 50) +
                (suco * 30) + (agua * 20);
    // o valor da quantidade da unidade
    unidade = totalBebida / unidades;
    // coloca em um array a quantidade dddeompanhamento e o nome correspondente
    let distribuicao = [];
    for(i = 0; i < bebidaSelecionada.length; i++){
        if(bebidaSelecionada[i] == "refrigerante"){
            qtdBebida = unidade * 50;
            distribuicao.push(criarItem("Refrigerante", qtdBebida));
        }
        else if(bebidaSelecionada[i] == "suco"){
            qtdBebida = unidade * 30;
            distribuicao.push(criarItem("Suco", qtdBebida));
        }
        else if(bebidaSelecionada[i] == "agua"){
            qtdBebida = unidade * 20;
            distribuicao.push(criarItem("Agua", qtdBebida));
        }
        else{
        }
    }
    return distribuicao;
}
