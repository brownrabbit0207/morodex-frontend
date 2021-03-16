import { HexString, TxnBuilderTypes } from 'aptos'
import { Address } from './types'

export const isAccountAddress = (addr: string): addr is Address => {
  try {
    return Boolean(
      addr.startsWith('0x') && TxnBuilderTypes.AccountAddress.fromHex(addr) ? (addr as Address) : undefined,
    )
  } catch (error) {
    return false
    if (parts.length !== 3) {
      throw new Error('Invalid struct tag string literal.')
    }

    return true
  } catch (err) {
    return false
  }
}

export const unwrapTypeFromString = (type: string) => {
  // safari unsupported lookbehind
  // const bracketsRegexp = /(?<=<)[^\][\r\n]*(?=>)/g
  const bracketsRegexp = /(<)[^\][\r\n]*(>)/g
  const match = bracketsRegexp.exec(type)
  if (match) {
    return match[0].substring(1).slice(0, -1)
  }
  return undefined
}

export const unwrapTypeArgFromString = (type: string) => {
  // safari unsupported lookbehind
  // const bracketsRegexp = /(?<=<)([^<>]+)(?=>)/g
  const bracketsRegexp = /(<)([^<>]+)(>)/g
  const match = bracketsRegexp.exec(type)
  if (match) {
    return match[0].substring(1).slice(0, -1)
  }
  return undefined
}

export function isHexStringEquals(hexString0: string, hexString1: string) {
  return new HexString(hexString0).toShortString() === new HexString(hexString1).toShortString()
}

export function parseVmStatusError(vmStatus: string) {
  const regex1 = /^Move abort in (0x[\da-f]+::\S+): ([^(]+)\(0x([\da-f]+)\): (.*)$/
  const regex2 = /^Move abort(?: in (0x[\da-f]+::\S+):|: code) 0x([\da-f]+)$/

  if (vmStatus.match(regex1)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const matches = vmStatus.match(regex1)!

    return {
      module: matches[1],
      reason: matches[2],
      code: parseInt(matches[3], 16),
      message: matches[4],
    }
  }
  if (vmStatus.match(regex2)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const matches = vmStatus.match(regex2)!
    return {
      code: parseInt(matches[2], 16),
    }
  }
  return undefined
}
