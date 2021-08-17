import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu } from '../src/lib/ConponentsAlura';

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
            Bem vindo 
          </Box>
        </div>
        <div calssName="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          <Box clan>
            <h2>
              Pessoas da comunidades
            </h2>
            <ul>
              {pessoasFavoritas.map((current) => {
                return (
                  <a href={`/users/${current}`}>
                      <img src={`https://github.com/${current}.png`} />
                      <span>{current}</span>
                    </a>
                )
              })};
            </ul>
          </Box>
        </div>

      </MainGrid>
    </>
  )
}
