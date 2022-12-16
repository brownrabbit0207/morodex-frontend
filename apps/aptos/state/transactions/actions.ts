import { createAction } from '@reduxjs/toolkit'
import { Types } from 'aptos'
import { ChainId } from '@pancakeswap/aptos-swap-sdk'

export type TransactionType = 'approve' | 'swap' | 'add-liquidity' | 'remove-liquidity'

export interface TransactionReceipt {
  from: string
  payload: Types.TransactionPayload
  sequenceNumber: string
  blockNumber: string
  success: boolean
  timestamp: string
  transactionHash: string
  status?: number
}

export const addTransaction = createAction<{
  chainId: ChainId
  hash: string
  from: string
  approval?: { tokenAddress: string; spender: string }
  claim?: { recipient: string }
  summary?: string
  translatableSummary?: { text: string; data?: Record<string, string | number> }
