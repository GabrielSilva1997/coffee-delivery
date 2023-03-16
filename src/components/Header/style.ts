import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 10rem;

  background: ${(props) => props.theme.background};

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.75rem;
  }
`

export const Local = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.3;

  height: 2.375rem;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`
