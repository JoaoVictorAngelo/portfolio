import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // duas colunas iguais
  gap: 16px;
  margin-top: 32px;
`
export const LinkBotao = styled.a`
  display: inline-block;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  margin-top: 24px;
`
