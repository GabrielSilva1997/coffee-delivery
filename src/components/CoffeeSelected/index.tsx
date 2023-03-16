import { Trash } from 'phosphor-react'
import coffeeSelected from '../../assets/coffes/ImageAmericano.svg'
import { Button } from '../Button'
import { Options, OrdersContainer } from './style'

/*
 A imagem passada para coffeeSelected no momento é estática, mas futuramente 
 será dinâmica
*/
export const CoffeeSelected = () => {
  return (
    <OrdersContainer>
      <img src={coffeeSelected} alt="" width={64} />
      <div>
        <p>Nome do café</p>
        <Options>
          <span>- 1 + </span>
          <Button content="REMOVER" icon={<Trash />} />
        </Options>
      </div>
      <span>R$9,90</span>
    </OrdersContainer>
  )
}
