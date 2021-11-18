import { nanoid } from '@reduxjs/toolkit'
import { useCallback } from 'react'
import { fetchTokenList } from './actions'
import { TokenList } from '../src/types'

function useFetchListCallback(
  dispatch: (action?: unknown) => void,
): (listUrl: string, sendDispatch?: boolean) => Promise<TokenList> {
  // note: prevent dispatch if using for list search or unsupported list
  return useCallback(
    async (listUrl: string, sendDispatch = true) => {
      const requestId = nanoid()
      if (sendDispatch) {
        dispatch(fetchTokenList.pending({ requestId, url: listUrl }))
      }
      // lazy load avj and token list schema
      const getTokenList = (await import('./getTokenList')).default
      return getTokenList(listUrl)
        .then((tokenList) => {
          if (sendDispatch) {
