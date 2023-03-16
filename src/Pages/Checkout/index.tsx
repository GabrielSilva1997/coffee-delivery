import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Button } from '../../components/Button'
import { CoffeeSelected } from '../../components/CoffeeSelected'
import {
  AdressForm,
  CheckoutContainer,
  Dashboard,
  InfoOrder,
  InfoUser,
  PaymentForm,
} from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoUser>
        <p>Complete seu pedido</p>
        <AdressForm>
          <header>
            <MapPinLine size={22} />
            <div>
              <h1>Endereço de Entrega</h1>
              <h2>Informe o endereço onde deseja receber seu pedido</h2>
            </div>
          </header>
          <div>
            <input placeholder="CEP"></input>
            <input placeholder="Rua"></input>
            <input placeholder="Número"></input>
            <input placeholder="Complemento"></input>
            <input placeholder="Bairro"></input>
            <input placeholder="Cidade"></input>
            <input placeholder="UF"></input>
          </div>
        </AdressForm>

        <PaymentForm>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <h1>Pagamento</h1>
              <h2>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h2>
            </div>
          </header>

          <div>
            <Button
              content="CARTÃO DE CRÉDITO"
              icon={<CreditCard size={16} />}
            />
            <Button content="CARTÃO DE DÉBITO" icon={<Bank size={16} />} />
            <Button content="DINHEIRO" icon={<Money size={16} />} />
          </div>
        </PaymentForm>
      </InfoUser>

      <InfoOrder>
        <p>Cafés selecionados</p>
        <Dashboard>
          <CoffeeSelected />
          <CoffeeSelected />

          <div>
            <p>Total de itens</p>
            <p>Entrega</p>
            <p>Total</p>
          </div>
        </Dashboard>
      </InfoOrder>
    </CheckoutContainer>
  )
}
