import { ButtonContainer } from './style'

interface Props {
  content: string
  icon: object
}

export const Button = ({ content, icon }: Props) => {
  return (
    <ButtonContainer>
      {icon}
      <p>{content}</p>
    </ButtonContainer>
  )
}
