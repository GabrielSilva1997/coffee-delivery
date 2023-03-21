import { ButtonContainer } from './style'

interface Props {
  content: string
  icon: object
}

export const Button = ({ content, icon }: Props) => {
  return (
    <ButtonContainer>
      {icon}
      <span>{content}</span> {/*Criar um styled component para por no lugar de span*/}
    </ButtonContainer>
  )
}
