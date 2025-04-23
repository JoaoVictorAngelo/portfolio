import { useEffect, useState } from 'react'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string
}

const Projeto = () => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/JoaoVictorAngelo/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <>
      {repos.map((repo) => (
        <Card key={repo.id}>
          <Titulo>{repo.name}</Titulo>
          <Paragrafo tipo="secundario">
            {repo.description || 'Sem descrição'}
          </Paragrafo>
          <LinkBotao href={repo.html_url} target="_blank">
            Visualizar
          </LinkBotao>
        </Card>
      ))}
    </>
  )
}

export default Projeto
