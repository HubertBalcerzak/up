import styled from '@emotion/styled'

const BackgroundBox = styled('div')`
  position: absolute;
  width: calc(100% + 25px);
  height: calc(100% - 25px);
  border-radius: 8px;
  top: 25px;
  left: 10px;
  background: ${(props) => props.theme.colors.shark};
  z-index: -1;
`

export default BackgroundBox
