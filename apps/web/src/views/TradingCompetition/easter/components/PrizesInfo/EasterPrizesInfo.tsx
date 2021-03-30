import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import EasterPrizesCard from './EasterPrizesCard'
import EasterPrizesText from './EasterPrizesText'

const Wrapper = styled(Flex)`
  flex-direction: column-reverse;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  )
}

export default EasterPrizesInfo
