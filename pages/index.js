import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/alurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar (propriedades) {
  console.log(propriedades);
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

export default function Home() {
  const usuarioAleatorio = 'Dirceug';
  const [comunidades, setComunidades] = React.useState([{
        id: `325143654354321321321`,
        title: 'Eu odeia acordar cedo',
        image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  console.log(`Nosso teste`, comunidades);
  //const comunidades = ['Alurakut',];
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev',
    'felipefialho', 
    'guilhermesilveira',
  ]

  return (
    <>
      <AlurakutMenu />
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

              console.log(`Campos: `, dadosForm.get(`Title`));
              console.log(`Campos: `, dadosForm.get(`image`));

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosForm.get(`title`),
                image: dadosForm.get(`image`),                
              }
              const comunidadesAtualizadas = [...comunidades, comunidade ];
              setComunidades(comunidadesAtualizadas)
              console.log(comunidades)
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
                placeholder="Coloque uma URL para usarmos de capa" 
                name="image" 
                area-aria-label="Coloque uma URL para usarmos de capa" />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
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
              {comunidades.slice(comunidades.length-6, comunidades.length).map((itemAtual) => {
                    return (
                      <li key={itemAtual.id}>
                        <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                          <img src={itemAtual.image} />
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

}
