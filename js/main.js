// El código va aquí -> 

let txtNombre= document.getElementById("Name");
let txtNumber= document.getElementById("Number");

let btnAgregar=document.getElementById("btnAgregar");
let btnClear= document.getElementById("btnClear");

let alertValidaciones= document.getElementById("alertValidaciones");
let alertValidacionesTexto= document.getElementById("alertValidacionesTexto");

//Limpiar campos
btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
});

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    let lista="Los siguiente campos deben ser llenados correctamente: <ul>";
    //console.log("borde:", txtNombre.style.border);//sirve para saber las características de estilo
    //txtNombre.value=txt-txtNombre.value.trim();
    
    if(txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        lista +="<li> Se debe escribir un nombre válido.</li>";
        //alertValidacionesTexto.innerHTML="Se de escribir un nombre válido";
        alertValidaciones.style.display="block";
    } else{
        txtNombre.style.border="";
    }// if nombre
    
    if(txtNumber.value.length==0){
        txtNumber.style.border="solid thin red";
        lista +="<li> Se debe escribir una cantidad válida.</li>";
        //alertValidacionesTexto.innerHTML+="Se de escribir una cantidad válida";
        alertValidaciones.style.display="block";
    } else{
        txtNumber.style.border="";
    }//if numero
    lista+="</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
});//btnAgregar.click

txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value=txtNombre.value.trim();
}); //txtNombre.blur

txtNumber.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumber.value=txtNumber.value.trim();
}); //txtNumber.blur



