import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 0 10rem;
  gap: 3rem;
`

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.75rem;

  p {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BaseForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;
  width: 40rem;
  padding: 2.5rem;
  border: 0;
  border-radius: 8px;

  background: ${(props) => props.theme['base-card']};

  header {
    display: flex;

    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;

      color: ${(props) => props.theme['base-subtitle']};
    }
    h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 0.825rem;
      font-weight: 400;
      line-height: 1.3;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const AdressForm = styled(BaseForm)`
  gap: 3rem;

  header {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    gap: 0.5rem;
  }

  header img {
    width: 1.375rem;
  }

  input {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-label']};

    padding: 0.75rem;

    border: 0;
    border-radius: 4px;

    margin: 2px;
  }
`

export const PaymentForm = styled(BaseForm)`
  header {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    gap: 0.5rem;

    img {
      width: 1.375rem;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    gap: 0.75rem;
  }
`

export const InfoOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 28rem;
  gap: 0.75rem;

  p {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2.5rem;
  gap: 1.5rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 44px;
`
