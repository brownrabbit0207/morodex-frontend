import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import BigNumber from 'bignumber.js'
import { PoolIds } from 'config/constants/types'
import { useMemo } from 'react'
import { PublicIfoData, WalletIfoData } from 'views/Ifos/types'

interface UseIfoVestingProps {
  poolId: PoolIds
  publicIfoData: PublicIfoData
  walletIfoData: WalletIfoData
}

const useIfoVesting = ({ poolId, publicIfoData, walletIfoData }: UseIfoVestingProps) => {
  const publicPool = publicIfoData[poolId]
  const userPool = walletIfoData[poolId]
  const amountReleased = useMemo(() => {
    return releasedAtSaleEnd.plus(userPool.vestingReleased).plus(userPool.vestingComputeReleasableAmount)
  }, [userPool.vestingReleased, userPool.vestingComputeReleasableAmount, releasedAtSaleEnd])

  const amountInVesting = useMemo(() => {
    const remaining = totalPurchased.minus(amountReleased)

    return remaining.gt(0) ? remaining : BIG_ZERO
  }, [totalPurchased, amountReleased])

  const amountAvailableToClaim = useMemo(() => {
    return userPool.isVestingInitialized ? userPool.vestingComputeReleasableAmount : releasedAtSaleEnd
  }, [userPool.isVestingInitialized, releasedAtSaleEnd, userPool.vestingComputeReleasableAmount])

  const amountAlreadyClaimed = useMemo(() => {
    const released = userPool.isVestingInitialized ? releasedAtSaleEnd : BIG_ZERO
    return released.plus(userPool.vestingReleased)
  }, [releasedAtSaleEnd, userPool])

  return {
    vestingPercentage,
    releasedAtSaleEnd,
    amountReleased,
    amountInVesting,
    amountAvailableToClaim,
    amountAlreadyClaimed,
    totalPurchased,
  }
}

export default useIfoVesting
