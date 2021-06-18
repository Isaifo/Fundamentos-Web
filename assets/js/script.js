

/*
Formas de acessar o dom 
Case Sensitive = reconhece letras maiusculas e minusculas
por tag: getElementByTagName()
por id: getElementByid()
por nome: getElementbyName()
por Classe: getElementbyClassName()
por seletor: querySelector();
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') // chamando pelo seletor
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

// validacao do campo apenas por função

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){

        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'

    } else{
            txt.innerHTML = "Nome válido"
            txt.style.color = 'green'
            nomeOK = true
    }

    

    function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail')

        if (email.value.indexOf('@' == -1 || email.value.indexOf('.'))) {
            
            txtEmail.innerHTML='E-mail Inválido'
            txtEmail.style.color = 'red'

        } else {
            txtEmail.innerHTML='E-mail Válido'
            txtEmail.style.color = 'green'
            emailOk = true
        }

    }

        function validaAssunto(){
            let txtAssunto = document.querySelector('#txtAssunto')

            if (assunto.value.length >=100) {
                txtAssunto.innerHTML='Texto muito grande, ultrapassa 100 caracteres'
                txtAssunto.style.color='red'
                txtAssunto.style.displar = 'block'
            
        } else {
            txtAssunto.style.displar = 'none'
            assuntoOk = true
        }

    }

    function enviar(){

        if (nomeOK == true && emailOK == truev && asuntoOK == true) {
            
        }
    }

    function mapaZoom(){
            mapa.style.windth = '800px'
            mapa.style.height = '600px'
    }

    function mapaNormal(){

        mapa.style.windth = '600px'
            mapa.style.height = '450px'
    }
}
