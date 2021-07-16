import React from 'react';

//API que vamos bater é essa: https://api.github.com/users/omariosouto/followers
// - Precisamos armazenar os seguidores em algum lugar
// - Precisamos bater na URL
// - Carregar eles na tela

const dados = [
  [
    {login: '0 - pagina - omariosouto'},
    {login: '0 - pagina - juunegreiros'},
    {login: '0 - pagina - omariosouto'},
    {login: '0 - pagina - juunegreiros'},
    {login: '0 - pagina - omariosouto'},
    {login: '0 - pagina - juunegreiros'},
    {login: '0 - pagina - omariosouto'},
    {login: '0 - pagina - juunegreiros'},
    {login: '0 - pagina - omariosouto'},
    {login: '0 - pagina - juunegreiros'},
  ],
  [
    {login: '1 - pagina - omariosouto'},
    {login: '1 - pagina - juunegreiros'},
    {login: '1 - pagina - omariosouto'},
    {login: '1 - pagina - juunegreiros'},
    {login: '1 - pagina - omariosouto'},
    {login: '1 - pagina - juunegreiros'},
    {login: '1 - pagina - omariosouto'},
    {login: '1 - pagina - juunegreiros'},
    {login: '1 - pagina - omariosouto'},
    {login: '1 - pagina - juunegreiros'},
  ],
  [
    {login: '2 - pagina - omariosouto'},
    {login: '2 - pagina - juunegreiros'},
    {login: '2 - pagina - omariosouto'},
    {login: '2 - pagina - juunegreiros'},
    {login: '2 - pagina - omariosouto'},
    {login: '2 - pagina - juunegreiros'},
    {login: '2 - pagina - omariosouto'},
    {login: '2 - pagina - juunegreiros'},
    {login: '2 - pagina - omariosouto'},
    {login: '2 - pagina - juunegreiros'}
  ],
  [
    {login: '3 - pagina - omariosouto'},
    {login: '3 - pagina - juunegreiros'},
    {login: '3 - pagina - omariosouto'},
    {login: '3 - pagina - juunegreiros'},
    {login: '3 - pagina - omariosouto'},
    {login: '3 - pagina - juunegreiros'},
    {login: '3 - pagina - omariosouto'},
    {login: '3 - pagina - juunegreiros'},
    {login: '3 - pagina - omariosouto'},
    {login: '3 - pagina - juunegreiros'},
  ],
]

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [followers, setFollowers] = React.useState(dados[currentPage]);

  useEffect(() => {
    const PER_PAGE = 10;
    const ENDPOINT = `https://api.github.com/users/omariosouto/followers`
    //const URL_CONFIG = `?per_page=${PER_PAGE}&page=${currentPage}&order=desc`;
    const URL = `${ENDPOINT}?per_page=${PER_PAGE}&page=${currentPage}&order=DESC`;
    fetch(URL)
      .then((response) => response.json())
      .then((newFollowers) => setFollowers((prevFollowers) => [...prevFollowers, ...newFollowers]))
    }, [currentPage]);
    
    useEffect(() =>{
    const intersectionObserver = new intersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersection)) {
        console.log(`Sentinela appears`, currentPage + 1)
        setCurrentPage((currentValue) => currentValue + 1)
      }
    })

    insersectionObserver.observe(document.querySelector('#sentinela'));

    return () => intersectionObserver.disconnect();
    //return () => intersectionObserver.disconnect();

}, []);

  return (
    <main>
      <GlobalStyle />
      <h1>Poke API: Infinit Scroller</h1>
      <h2>Página atual ${currentPage}:</h2>

      <ul>
        {followers.map((followers, index) => (
          <li key={followers.key + index}>
            <div>
              <img src={`https://github.com/${followers.login}.png`} />
              <p>
                github.com/<strong>${followers.login}</strong>
              </p>
            </div>
          </li>
        ))}
        <li id="sentinela" />
      </ul>
    </main>
  )
}