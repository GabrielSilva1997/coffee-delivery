import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.background};
`
export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 34rem;
  padding: 6rem 10rem;
  gap: 3.5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  gap: 2.5rem;

  div {
    display: flex;
    flex-direction: column;

    gap: 1.25rem;

    p {
      display: flex;
      align-items: center;

      gap: 0.75rem;

      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
    }
  }
`

export const CoffeeListContainer = styled.div`
  padding: 10rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
  }
`
