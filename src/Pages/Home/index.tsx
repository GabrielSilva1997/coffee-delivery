import {
  CoffeeListContainer,
  HomeContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
} from './style'

import introImage from '../../assets/intro-image.svg'
import Cart from '../../assets/icons/IconCart.svg'
import Timer from '../../assets/icons/IconTimer.svg'
import Package from '../../assets/icons/IconPackage.svg'
import Coffee from '../../assets/icons/IconCoffee.svg'

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
              <p>
                <img src={Cart} alt="" />
                Compra simples e segura
              </p>
              <p>
                <span>
                  <img src={Timer} alt="" />
                </span>
                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <p>
                <span>
                  <img src={Package} alt="" />
                </span>
                Embalagem mantém o café intacto
              </p>
              <p>
                <span>
                  <img src={Coffee} alt="" />
                </span>
                O café chega fresquinho até você
              </p>
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
