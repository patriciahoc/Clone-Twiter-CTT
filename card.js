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
    console.log(cardFollowUsers)
    this.follow.innerHTML = cardFollowUsers.join("")
  }  
}

{/* */}