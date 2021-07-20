import { Text } from '@pancakeswap/uikit'
import getTimePeriods from '@pancakeswap/utils/getTimePeriods'
import { useTranslation } from '@pancakeswap/localization'

const WithdrawalFeeTimer: React.FC<React.PropsWithChildren<{ secondsRemaining: number }>> = ({ secondsRemaining }) => {
  const { t } = useTranslation()
  const { days, hours, minutes } = getTimePeriods(secondsRemaining)

  return (
    <Text bold fontSize="14px">
