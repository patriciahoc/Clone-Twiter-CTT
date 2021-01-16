// cria classe followers
class Followers{
  // cria método para buscar pessoas para seguir no json
  buscaFollow() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch("./follow.json")
   
  }
}