import { useState } from 'react'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/ConponentsAlura';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations"
import React from 'react';

const ProfileSidebar = (props) => {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }}  alt={'user github'}/>
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = useState({
    title: 'Eu odeio acordar cedo',
    image: 'https://alutakut.vercel.app/capa-comunidade-01.jpg'
  });
  const githubUser = 'uezili';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'natysls',
    'rafaballerini',
    'marcobrunodev',
    'alanpbandeira'
  ];

  const handleSubmit = (e) =>{
    e.preventDefault();
    const datesForm = new FormData(e.target);

    const comunidade = {
      title: datesForm.get('title'),
      image: datesForm.get('image')
    }
    const comunidadesAtualizadas = [...comunidades, comunidade]
    setComunidades(comunidadesAtualizadas)
  }

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
          <Box>
            <h1>
              Bem-vindo
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle"> O que você deseja fazer?</h2>
            <div>
              <form onSubmit={handleSubmit}>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"/>
              </form>
            </div>
            <div>
              <form>
                <input 
                  placeholder=""
                  name="title"
                  aria-label="Coloque uma URL para capa"/>
              </form>
            </div>
            <button>
              Criar comunidade
            </button>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <ul>
              {comunidades.map((current) => {
                return (
                    <li>
                      <a href={`/users/${current.title}`} key={current.title}>
                        <img src={'https://placehold.it/300x300'}  alt={'placeHolder'}/>
                        <span>{current.title}</span>
                      </a>
                    </li>
                )
              })};
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidades ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((current) => {
                return (
                  <li>
                    <a href={`/users/${current}`} key={current}>
                      <img src={`https://github.com/${current}.png`}  alt={"User name"}/>
                      <span>{current}</span>
                    </a>
                  </li>
                )
              })};
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>

      </MainGrid>
    </>
  )
}
