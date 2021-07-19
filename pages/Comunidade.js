import styled from 'styled-components'


import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import TopicGrid from '../src/components/Topicos';
import DescritionGrid from '../src/components/Descrition';
import DescritionGridB from '../src/components/DescritionB';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/alurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


   const comunity = {
    name: 'Eu odeio acordar cedo',
    image: 'peas',
    url: "Endereço auto gerado da comunidade",
    id: "537435436543654",
    title: "Comunidades destinada a pessoas que odeiam acordar cedo",
    descrition: "Nós que odiamos acordar cedo no reunimos virtualmente aqui (nunca antes do meio dia)",
    idioma: "Português",
    categoria: "Pública",
    privacidade: "Aberta para não membros",
    date: "17/07/2020",
    administrador: "Dirceug",
    moderadores: [
      'marcobrunodev',
    ],
    membros: [
      'marcobrunodev',
      'omariosouto', 
      'juunegreiros',
      'peas', 
      'rafaballerini', 
      'felipefialho', 
      'guilhermesilveira',
    ],
    members: 7,
    foruns: [],
    arquivo: 'em uso',
  }

  const pessoasFavoritas = [
    'marcobrunodev',
    'omariosouto', 
    'juunegreiros',
    'peas', 
    'rafaballerini', 
    'felipefialho', 
    'guilhermesilveira',
  ]

  const moderadores = [
    'marcobrunodev',
    'omariosouto', 
    'juunegreiros',
    'peas', 
  ]

function ComunitySideBar(propriedades) { //Função que exporta o box de imagem e descrição "ComunitySideBar"
  return (
    <Box as="aside">
      <img src={`https://alurakut.vercel.app/capa-comunidade-01.jpg`} style={{ borderRadius: `8px`}} />
      <hr />
      
      <p>
      <a className="boxLink" style={{ borderRadius: '8px' }} >
        {comunity.name}
      </a>
      </p>
      <p>
       <a className="discreto">
         ({comunity.members} membros)
        </a> 
      </p>
      <hr />
      <p>
        <a className="status" style={{ borderRadius: '8px' }} >
          Participar da Comunidade
        </a>
      </p>
    </Box>
  )
}

function DescritionSideBar(propriedades) { //Função que exporta o box de imagem e descrição "ComunitySideBar"
  return (
    <Box>
      <h1>
        {comunity.name}
      </h1>

      <h2 className="smallTitle">
        {comunity.title}
      </h2>

      <DescritionGrid>
        <div>
          <p>
            Idioma: {comunity.idioma}
          </p>
        </div>
      </DescritionGrid>
      <DescritionGridB>
        <div>
            <p>
              Categoria: {comunity.categoria}
            </p>
          </div>
      </DescritionGridB>
      <DescritionGrid>
        <div>
          <p>
            Administrador: {comunity.administrador}
          </p>
        </div>
      </DescritionGrid>
      <DescritionGridB>
        <div>
            <p>
              Privacidade: {comunity.privacidade} 
            </p>
          </div>
      </DescritionGridB>
      <DescritionGrid>
        <div>
          <p>
            Tipo: {comunity.categoria}
          </p>
        </div>
      </DescritionGrid>
      <DescritionGridB>
        <div>
            <p>
              Criado em: {comunity.date} 
            </p>
          </div>
      </DescritionGridB>
      <DescritionGrid>
        <div>
          <p>
            Membros: {comunity.members}
          </p>
        </div>
      </DescritionGrid>

      

    </Box>
  )
}

export default function PaginaComunidade (props) {

  const usuarioAleatorio = props.githubUser;

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio}/>
      <MainGrid>
        <div calssName="profileArea" style={{gridArea: 'profileArea'}}>
          <ComunitySideBar comunity={comunity} /> {/*Componente que chama afunção que cria o bom "ComunitySideBar"*/}
        </div>

        <div calssName="welcomeArea"  style={{gridArea: 'welcomeArea'}}>
          <Box>
            <DescritionSideBar />
          </Box>

          <TopicGrid>
            <div>
              Tópicos
            </div>
          </TopicGrid>
        </div>  

        <div calssName="profileRelationsArea"  style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Moderadores ({moderadores.length})
            </h2>
            <ul>
              {moderadores.slice(moderadores.length-4, moderadores.length).map((itemAtual) => {
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
            Membros ({pessoasFavoritas.length})
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
        </div>

      </MainGrid>
    </>
  )
}