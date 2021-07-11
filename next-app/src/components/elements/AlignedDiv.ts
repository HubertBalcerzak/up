import styled from '@emotion/styled'

const AlignedDiv = styled('div')<{ align?: 'flex-start' | 'flex-end' }>`
  display: flex;
  justify-content: ${(props) => props.align};
  align-items: center;
`

AlignedDiv.defaultProps = {
  align: 'flex-start'
}

export default AlignedDiv
