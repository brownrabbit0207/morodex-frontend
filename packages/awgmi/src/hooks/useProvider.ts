// eslint-disable-next-line import/extensions
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector.js'
import { AptosClient } from 'aptos'
import { GetProviderArgs, getProvider, watchProvider } from '@pancakeswap/awgmi/core'

    () => getProvider<TProvider>({ networkName }),
    (x) => x,
    // FIXME: should have better way to compare
    (a, b) => a.client.accounts.httpRequest.config.BASE === b.client.accounts.httpRequest.config.BASE,
  )
}
