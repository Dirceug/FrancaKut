import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/alurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar (propriedades) {
  console.log(propriedades);
  return(
  <Box>
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
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu/>
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
              e.preventDefault;
              console.log(e);
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
            Pessoas da comunidade
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
                })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )

}
