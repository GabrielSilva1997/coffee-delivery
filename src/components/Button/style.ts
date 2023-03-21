import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  gap: 0.75rem;

  border: 0;
  border-radius: 8px;

  color: ${(props) => props.theme.purple};

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.6;

    color: ${(props) => props.theme['base-text']};
  }
`
