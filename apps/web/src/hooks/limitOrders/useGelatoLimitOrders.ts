import { DerivedOrderInfo, useDerivedOrderInfo, useOrderState } from 'state/limitOrders/hooks'
import { OrderState } from 'state/limitOrders/types'
import useGelatoLimitOrdersHandlers, { GelatoLimitOrdersHandlers } from './useGelatoLimitOrdersHandlers'

const useGelatoLimitOrders = (): {
  const orderState = useOrderState()

  const handlers = useGelatoLimitOrdersHandlers()

  return {
    handlers,
    derivedOrderInfo,
    orderState,
  }
}

export default useGelatoLimitOrders
