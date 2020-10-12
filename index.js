function verificar(){
    let agora = new Date()
    let ano = agora.getFullYear()
    let anoNascimento = document.querySelector("#ano")
    let res = document.querySelector('#resultado')

    if(anoNascimento.value.length == 0 || anoNascimento.value > ano) {
        window.alert('Por favor, verifique os dados novamente.')
    }else {
        let checkgen = document.getElementsByName('radsex')
        let idade = ano - Number(anoNascimento.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (checkgen[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                // Criança homem
                img.setAttribute('src', 'images/crianca-menino.png')
            }
            else if (idade > 10 && idade < 18){
                // Adolescente homem
                img.setAttribute('src', 'images/adolescente-homem.png')
            }
            else if (idade >= 18 && idade < 60){
                // Adulto homem
                img.setAttribute('src', 'images/adulto-homem.png')
            }
            else {
                // Idoso homem
                img.setAttribute('src', 'images/idoso-homem.png')
            }
        }else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                // Criança mulher
                img.setAttribute('src', 'images/crianca-menina.png')
            }
            else if (idade > 10 && idade < 18){
                // Adolescente mulher
                img.setAttribute('src', 'images/adolescente-mulher.png')
            }
            else if (idade >= 18 && idade < 60){
                // Adulto mulher
                img.setAttribute('src', 'images/adulto-mulher.png')
            }
            else {
                // Idoso mulher
                img.setAttribute('src', 'images/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.margin = '8px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}