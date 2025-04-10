function calcular(){
    let pesoEmKg = parseFloat(document.getElementById("peso").value);
    let alturaEmM = parseFloat(document.getElementById("metros").value)/100;

    if (alturaEmM<=0 || pesoEmKg <=0){
        document.getElementById("resultado");
        innerText= "a altura deve ser maior que zero.";
        return;
    }
    
       let imc = pesoEmKg/ (alturaEmM*alturaEmM);
    document.getElementById("resultado").
    innerText="seu imc é:" + imc.toFixed(2); 
}
