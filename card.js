class CardFollow{
  constructor(){
    this.follow = document.getElementById("listaUsuario")
  }        

  mostraFollow(dados){
    let cardFollowUsers = dados.followers.map((elemento, i)=> {
      return `
      <li class="tweet-card">
      <div class="tweet-content">
        <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/${i}.jpg" alt="">
        <div class="tweet-header">
          <span class="fullname">
            <strong>${elemento.nome}</strong>
          </span>
          <span class="username">${elemento.usuario}</span>
        </div>

        <button class="btn btn-follow">Follow</button>
      </div>
    </li>  
    `
    
    })
    this.follow.innerHTML = cardFollowUsers.join("")
  }  
}

class CardTweet{
  constructor(){
    this.tweets = document.getElementById("listaTweetUser")
  } 

  mostraTweets(dados){
    
    let cardTweetsUsers = dados.tweets.map((elemento, i)=> {
      return `<li class="tweet-card">
        <div class="tweet-content">
          <div class="tweet-header">
            <span class="fullname">
              <strong>${elemento.nome}</strong>
            </span>
            <span class="username">${elemento.usuario}</span>
            <span class="tweet-time">- ${elemento.data}</span>
          </div>
          <a>
            <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/${i}.jpg" alt="">
          </a>
          <div class="tweet-text">
            <p class="" lang="es" data-aria-label-part="0">${elemento.mensagem}
              <a href="https://t.co/dqg5hVQXA0" class="twitter-timeline-link" target="_blank">
              <span class="">https://www.mozilla-hispano.org/</span>
              </a> 
              <a href="" class="twitter-hashtag"><s>#</s><b>firefox</b></a> 
              <a href="" class="twitter-hashtag"><s>#</s><b>comunidad</b></a>
              <a href="" class="twitter-hashtag" dir="ltr"></a>
            </p>
          </div>
          <div class="tweet-footer">
            <a class="tweet-footer-btn">
              <i class="octicon octicon-comment" aria-hidden="true"></i><span>${elemento.comentarios}</span>
            </a>
            <a class="tweet-footer-btn">
              <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${elemento.compartilhamentos}</span>
            </a>
            <a class="tweet-footer-btn">
              <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${elemento.likes}</span>
            </a>
          </div>
        </div>
      </li>`
    
    })
    
    this.tweets.innerHTML = cardTweetsUsers.join("")
    
  }  
}



