import styled from 'styled-components'


import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/alurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


export default function PaginaComunidade () {
  return (
    <MainGrid>
      <div style={{gridArea: 'profileArea'}}>
        <Box>
          Foto + detalhes
        </Box>
      </div>

      <div style={{gridArea: 'welcomeArea'}}>
        <Box>
          <div>
            Descrição
          </div>
        </Box>

        <Box>
          <div>
            Tópicos
          </div>
        </Box>
      </div>  

      <div style={{gridArea: 'profileRelationsArea'}}>
        <Box>
          Membros
        </Box>
      </div>
        </MainGrid>
  )
}