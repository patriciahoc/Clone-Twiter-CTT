const objetoFollow = new Followers()
const objetoCard = new CardFollow()
const objetoTweets= new Tweets()
const objetoCardTweet = new CardTweet()


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