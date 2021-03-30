import { ReactElement, createContext, useMemo, memo } from 'react'
import _noop from 'lodash/noop'

import { FarmWithStakedValue } from '@pancakeswap/farms'
import useYieldBoosterState, { YieldBoosterState } from '../hooks/useYieldBoosterState'

interface ProxyFarmContainerPropsType {
  children: ReactElement
  farm: FarmWithStakedValue
}
  const {
    state: boosterState,
    refreshActivePool,
    shouldUseProxyFarm,
    refreshProxyAddress,
    proxyAddress,
  } = useYieldBoosterState({
    farmPid: farm.pid,
  })

  const proxyFarm = useMemo(
    () => ({
      ...farm,
      userData: farm.userData.proxy,
    }),
    [farm],
  )

  const providerValue = useMemo(() => {
    return { proxyAddress, boosterState, refreshActivePool, refreshProxyAddress, proxyFarm, shouldUseProxyFarm }
  }, [proxyAddress, boosterState, refreshActivePool, refreshProxyAddress, proxyFarm, shouldUseProxyFarm])

  return <YieldBoosterStateContext.Provider value={providerValue}>{children}</YieldBoosterStateContext.Provider>
}

export default memo(ProxyFarmContainer)
