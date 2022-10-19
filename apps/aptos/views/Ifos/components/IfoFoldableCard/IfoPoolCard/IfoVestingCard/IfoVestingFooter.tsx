import styled from 'styled-components'
import { useMemo } from 'react'
import { Flex, Text, Skeleton } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { format } from 'date-fns'
import { useTranslation } from '@pancakeswap/localization'
import { Ifo, PoolIds } from 'config/constants/types'
import { PublicIfoData, WalletIfoData } from 'views/Ifos/types'
import { getFullDisplayBalance } from '@pancakeswap/utils/formatBalance'

const StyledIfoVestingFooter = styled(Flex)`
  padding: 16px;
  margin: 0 -12px -12px;
  background-color: ${({ theme }) => theme.colors.background};
`
      ) : (
        <Skeleton height={21} width={80} />
      )}
    </Flex>
  )
}

interface IfoVestingFooterProps {
  ifo: Ifo
  poolId: PoolIds
  publicIfoData: PublicIfoData
  walletIfoData: WalletIfoData
}

const IfoVestingFooter: React.FC<React.PropsWithChildren<IfoVestingFooterProps>> = ({
  ifo,
  poolId,
  publicIfoData,
  walletIfoData,
}) => {
  const { t } = useTranslation()
  const { token } = ifo
  const { vestingInformation } = publicIfoData[poolId]
  const { vestingAmountTotal } = walletIfoData[poolId]

  const releaseRate = useMemo(() => {
    const rate = new BigNumber(vestingAmountTotal).div(vestingInformation.duration)
    return getFullDisplayBalance(rate, token.decimals, token.decimals)
  }, [vestingInformation, vestingAmountTotal, token])

  const releaseDate = useMemo(() => {
    const currentTimeStamp = new Date().getTime()
    const date =
      publicIfoData.vestingStartTime === 0
        ? currentTimeStamp
        : (publicIfoData.vestingStartTime + vestingInformation.duration) * 1000
    return format(date, 'MM/dd/yyyy HH:mm')
  }, [publicIfoData, vestingInformation])

  return (
    <StyledIfoVestingFooter flexDirection="column">
      <FooterEntry label={t('Release rate')} value={t('%releaseRate% per second', { releaseRate })} />
      <FooterEntry label={t('Fully released date')} value={releaseDate} />
    </StyledIfoVestingFooter>
  )
}

export default IfoVestingFooter
