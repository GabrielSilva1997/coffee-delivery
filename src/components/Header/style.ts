import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 10rem;

  background: ${(props) => props.theme.background};
`
