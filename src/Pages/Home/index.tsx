import {
  CoffeeListContainer,
  HomeContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
} from './style'

import introImage from '../../assets/intro-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ItemsContainer>
            <div>
              <span>
                <ShoppingCart size={24} /> 
                Compra simples e segura
              </span>
              <span>
                <Timer size={24} />
                Entrega rápida e rastreada
              </span>
            </div>
            <div>
              <span>
                <Package size={24} />
                Embalagem mantém o café intacto
              </span>
              <span>
                <Coffee size={24} />O café chega fresquinho até você
              </span>
            </div>
          </ItemsContainer>
        </TitleContainer>

        <div>
          <img src={introImage} alt="" />
        </div>
      </IntroContainer>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
