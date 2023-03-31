//Criando função que verifica a posição do usuário na pagina, para utilizar o botão de volta ao topo

const btnTop = document.querySelector('.btn-topo')

window.onscroll = function(){
        if(document.body.scrollTop>300||document.documentElement.scrollTop>300){
            btnTop.style.display = 'block'
        }
        else{
            btnTop.style.display = 'none'
        }
}

//Função que volta pro topo da página

btnTop.addEventListener('click', function(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})