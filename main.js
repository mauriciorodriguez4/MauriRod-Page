function nComentario(){
    let li = document.createElement("li");
    let comenIngresado = document.getElementById("nuevoComentario").value;
    let texto = document.createTextNode(comenIngresado);
    li.appendChild(texto);

    if(comenIngresado === ''){
        alert("Ingrese un comentario")
    }else{
        document.getElementById("comentarios").appendChild(li);
    }

    document.getElementById("nuevoComentario").value="";
    li.className="comentario";

    //Borrar comentario
    let borrar = document.createElement("p");
    borrar.innerHTML=("Borrar");
    borrar.className="close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    let i;
    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display="none";
        }
    }
}