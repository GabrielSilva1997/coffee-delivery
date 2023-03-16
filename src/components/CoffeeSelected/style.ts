import styled from 'styled-components'

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding: 8px 4px;

  border-bottom: 1px solid black;

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
`
