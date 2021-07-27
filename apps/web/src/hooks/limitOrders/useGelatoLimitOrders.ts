import { DerivedOrderInfo, useDerivedOrderInfo, useOrderState } from 'state/limitOrders/hooks'
import { OrderState } from 'state/limitOrders/types'
import useGelatoLimitOrdersHandlers, { GelatoLimitOrdersHandlers } from './useGelatoLimitOrdersHandlers'

const useGelatoLimitOrders = (): {
  handlers: GelatoLimitOrdersHandlers
  derivedOrderInfo: DerivedOrderInfo
  orderState: OrderState
} => {
  const derivedOrderInfo = useDerivedOrderInfo()

export default useGelatoLimitOrders
