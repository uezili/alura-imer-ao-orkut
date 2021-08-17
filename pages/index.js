import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/ConponentsAlura';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations"

const ProfileSidebar = (props) => {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'uezili'

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div classNAme="welcomeArea" style={{ gridArea: "welcomeArea"}}>
          <Box>
            <h1>
              Bem vindo 
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div calssName="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <h2 classNAme="smallTitle">
              Pessoas da comunidades ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((current) => {
                return (
                  <li>
                    <a href={`/users/${current}`} key={current}>
                      <img src={`https://github.com/${current}.png`} />
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
