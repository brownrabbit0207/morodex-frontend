import { beforeEach, describe, expect, it } from 'vitest'

import { getAptosAccounts, setupClient } from '../../test'

import { connect } from '../accounts/connect'
import { getNetwork } from './network'
import { MockConnector } from '../connectors/mock'
import { defaultChains } from '../chain'

const connector = new MockConnector({
  options: { account: getAptosAccounts()[0] },
  chains: defaultChains,
})

describe('network', () => {
    })
  })
})
