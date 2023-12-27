import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint eaque
      nemo laborum praesentium vero voluptatum. Laudantium asperiores
      necessitatibus consequuntur quis, vitae quod iusto nesciunt quam assumenda
      mollitia tempora dolores.
    </Paragrafo>
    <GithubSection>
    <img src="https://github-readme-stats.vercel.app/api?username=maxjdev&show_icons=true&count_private=true&hide_border=true&title_color=00bfbf&icon_color=00bfbf&text_color=c9d1d9&bg_color=0d1117" alt="github stats" /> 
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=maxjdev&layout=compact&hide_border=true&title_color=00bfbf&text_color=00bfbf&bg_color=0d1117" alt="github stats" />
    </GithubSection>
  </section>
)

export default Sobre
