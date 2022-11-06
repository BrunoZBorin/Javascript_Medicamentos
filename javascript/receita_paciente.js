function handleInsereMedicamento(){
    var p = document.getElementById('listaRemedio');
    var li = document.createElement('li');
    li.innerHTML = document.getElementById('medicamento').value;
    p.appendChild(li);
    let total = Number(document.getElementById('totalRemedios').innerHTML);
       
    let valor = Number(document.getElementById('valor').value);
   
    total += valor;
    
    document.getElementById('totalRemedios').innerHTML = total;
}