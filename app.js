function gerarRecibo(){

    document.getElementById('recibo_nome').innerHTML = document.getElementById('recebe').value;
    document.getElementById('recibo_valor').innerHTML = parseFloat(document.getElementById('valor').value).toLocaleString('pt-br', {minimumFractionDigits: 2});
    document.getElementById('recibo_quant').innerHTML = document.getElementById('quant').value;
    document.getElementById('recibo_data').innerHTML = dataAtual(); //arrumar isso
    document.getElementById('recibo_pag').innerHTML = document.getElementById('pag').value;

    window.print();
}
function dataAtual(){
    let data = new Date;
    return data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear()+" ás "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();
}