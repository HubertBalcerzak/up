import styled from '@emotion/styled'

const HomePage = styled('div')`
  margin-top: 160px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 120px;
  }
`

export default HomePage
