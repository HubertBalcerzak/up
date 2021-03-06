import styled from 'styled-components'
import { pr } from 'styled-components-spacing/dist/cjs'

const Link = styled('a')`
  color: ${props => props.theme.colors.text.one};
  text-decoration: none;
  line-height: 25px;
  white-space: nowrap;
  ${pr({ xs: 2, md: 0 })};
  text-align: center;
  width: 100%;
  background: transparent;
  box-shadow: none;
  border: unset;
  outline: none;
  cursor: pointer;
`

export default Link
