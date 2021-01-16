const objetoFollow = new Followers()
const objetoCard = new CardFollow()


objetoFollow.buscaFollow()
  .then(function(resposta){
    
     return resposta.json()

    .then(function(dados){
      objetoCard.mostraFollow(dados)
      console.log(dados)
    })
  })