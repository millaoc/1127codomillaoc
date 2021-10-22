const nombre = document.getElementById("fname")
const apellido = document.getElementById("lname")
const email = document.getElementById("email")
const telefono = document.getElementById("phone")
const mensaje = document.getElementById("message")
const form = document.getElementById("form")



form.addEventListener("submit",e=>{
    e.preventDefault()
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    let regexTelefono=/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/
    
    if(nombre.value.length <4){
        alert("El nombre no es valido, es muy corto")
    }

    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        alert("mail no valido")

    }


    console.log(regexTelefono.test(telefono.value))
    if(!regexTelefono.test(telefono.value)){
        alert("telefono no valido")


    
        
    }
    




})