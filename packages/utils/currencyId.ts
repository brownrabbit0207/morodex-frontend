import { Currency } from '@pancakeswap/aptos-swap-sdk'
import { APTOS_COIN } from '@pancakeswap/awgmi'

export default function currencyId(currency: Currency): string {
  if (currency?.isNative) return APTOS_COIN
