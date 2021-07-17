import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/alurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar (propriedades) {
  //console.log(propriedades);
  return(
  <Box as="aside">
    <img src={`https://github.com/${propriedades.githubUser}.png`} style= {{borderRadius: '8px'}}/>
    <hr />

    <p>
      <a className="boxLink" href={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} >
        @{propriedades.githubUser}
      </a>
    </p>

    <hr />

    <AlurakutProfileSidebarMenuDefault />
  </Box>)
}

function ProfileRelationsBox (propriedades) {
  return (
  <ProfileRelationsBoxWrapper>
    <h2 className="smallTitle">
      {propriedades.title} ({propriedades.itens.length})
    </h2>
    <ul>
      {/*seguidores.slice(seguidores.length-6, seguidores.length).map((itemAtual) => {
        return (
          <li key={itemAtual}>
            <a href={`https://github.com/${itemAtual}.png`} >
              <img src={itemAtual.image} />
              <span>{itemAtual.title}</span>
            </a>
          </li>
        )
        })*/}
    </ul>
  </ProfileRelationsBoxWrapper>)
}

export default function Home(props) {
  const usuarioAleatorio = props.githubUser;
  const [comunidades, setComunidades] = React.useState([]);
  //console.log(`Nosso teste`, comunidades);
  //const comunidades = ['Alurakut',];
  const pessoasFavoritas = [
    'marcobrunodev',
    'omariosouto', 
    'juunegreiros',
    'peas', 
    'rafaballerini', 
    'felipefialho', 
    'guilhermesilveira',
  ]
  const [seguidores, setSeguidores] = React.useState([]);
  // o - Pegar o array de dados do GitHub  
    React.useEffect(function () {
      // GET
      fetch('https://api.github.com/users/peas/followers')
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();      
      })
      .then(function (respostaCompleta) {
        setSeguidores(respostaCompleta);
      })

      //API GraphQL
      fetch(`https://graphql.datocms.com/`, {
        method: `POST`,
        headers: {
          'Authorization': '15bf4926a3a0a90925f497d7ee8b5f',
          'Content-Type': 'application/json', 
          'Accept': 'application/json',
        }, 
        body: JSON.stringify({ "query": `query {
          allCommunities {
            title
            id
            imageUrl
            creatorSlug
          }
        }` })
      })
      .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
      .then((respostaCompleta) => {
        const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
        //console.log(comunidadesVindasDoDato)
        setComunidades(comunidadesVindasDoDato)
      })
    }, [])

    //console.log('seguidores antes do return', seguidores)

  // 1 - Criar um box que vai ter um map baseado nos itens do array que pegamos do GitHub

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet>
              
            </OrkutNostalgicIconSet>
          </Box>
          <Box>
            <h2 className="subTitle" >O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e){
              e.preventDefault();
              const dadosForm = new FormData(e.target);

              //console.log(`Campos: `, dadosForm.get(`Title`));
              //console.log(`Campos: `, dadosForm.get(`image`));

              const comunidade = {
                title: dadosForm.get(`title`),
                imageUrl: dadosForm.get(`imagem`),
                creatorSlug: usuarioAleatorio ,
                //id: new Date().toISOString(),
                //image: dadosForm.get(`image`),                
              }

              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(comunidade)
              })
              .then(async (response) => {
                  const dados = await response.json();
                  //console.log(dados.registroCriado);
                  const comunidade = dados.registroCriado;
                  const comunidadesAtualizadas = [...comunidades, comunidade ];
                  setComunidades(comunidadesAtualizadas)
                })


              //console.log(comunidades)
            }}>
              <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                area-aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
                />
                
              </div>
              <div>
              <input 
                placeholder="Coloque a URL de uma imagem, para usarmos de capa" 
                name="imagem" 
                area-aria-label="Coloque a URL de uma imagem, para usarmos de capa" />
              </div>
              
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBox title="Seguidores no GitHub" itens={seguidores}/>

        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Meus amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.slice(pessoasFavoritas.length-6, pessoasFavoritas.length).map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
                })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                //console.log(itemAtual)
                    return (
                      <li key={itemAtual.id}>
                        <a href={`/communities/${itemAtual.id}`}>
                          <img src={itemAtual.imageUrl} />
                          <span>{itemAtual.title}</span>
                        </a>
                      </li>
                    )
                    })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
/*.slice(comunidades.length-6, comunidades.length)*/
}

export async function getServerSideProps (context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch ('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
  .then((resposta) => resposta.json())
  /*.then((resultado) => {
    console.log(resultado)
  })*/

  console.log (`isAuthenticated`, isAuthenticated)

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }


  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, //will be passed to the page component as props
  }
}