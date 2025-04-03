import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'yellow')};
  font-size: ${(props) => props.fontSize || '16px'};
  color: white;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <br />
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <br />
      <BotaoPerigo principal as="a">
        <span>Não Clique!</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
