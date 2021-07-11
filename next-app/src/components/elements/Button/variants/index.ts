import StyledButton from '../StyledButton'
import ButtonText from '../ButtonText'

import PrimaryStyledButton from './primary/PrimaryStyledButton'
import PrimaryButtonText from './primary/PrimaryButtonText'

export type possibleVariants = 'primary'

type TVariant = {
  Button: typeof StyledButton
  Text: typeof ButtonText
}

const variants: { [index in possibleVariants]: TVariant } = {
  primary: {
    Button: PrimaryStyledButton,
    Text: PrimaryButtonText
  }
}

export default variants
