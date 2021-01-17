const objetoFollow = new Followers()
const objetoCard = new CardFollow()

const objetoTweets= new Tweets()
const objetoCardTweet = new CardTweet()

const objetoUsuarioItens = new UsuarioItens()
const objetoCardUsuarioItens = new CardUsuarioItens()

objetoUsuarioItens.buscaUsuarioItens()
  .then(function(resposta){    
     return resposta.json()

    .then(function(dados){
      objetoCardUsuarioItens.mostraUsuarioItens(dados)
      
    })
  })

objetoFollow.buscaFollow()
  .then(function(resposta){
    
     return resposta.json()

    .then(function(dados){
      objetoCard.mostraFollow(dados)
      
    })
  })


objetoTweets.buscaTweets()
  .then(function(resposta){    
     return resposta.json()

    .then(function(dados){
      objetoCardTweet.mostraTweets(dados)
     
    })
  })