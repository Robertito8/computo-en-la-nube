/* imprimir lista de nombres
crea un programa en java scrip que cumpla 
con lo siguiente:

1. Define un objeto llamado grupo.
Este objeto debe tener una lista de 10 nombres.
2.Crea una funcion llamada imprimirNombres.
Esta funcion debe recorrer la lista de nombres 
y mostrarlos en la consola yuno a uno.
3.Llama a la funcion imprimirNombres para mostrar
todos los nombres.*/
let grupo = [{nombre:"roberto",apellido:"gutierrez"}, 
             {nombre:"luis",apellido:"garcia"}, 
             {nombre:"alberto",apellido:"velarde"}, 
             {nombre:"gillermo",apellido:"hernandez"}, 
             {nombre:"paulina",apellido:"sanchez"}, 
             {nombre:"alejandra",apellido:"ramos"}, 
             {nombre:"leslie",apellido:"r"}, 
             {nombre:"danna",apellido:"roberto"}, 
             {nombre:"renee",apellido:"roberto"}, 
             {nombre:"ian",apellido:"roberto"}, ]

function listaNombres() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for(let l = 0; 1 < grupo.lengeth; l++){
        let ll = Document.createElement("l1");
        ll.textContent = grupo[l].nombre + " "+ grupo[l].apellido;
        lista.appendchild(li);

}        
}  
