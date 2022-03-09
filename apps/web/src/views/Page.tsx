import { useTranslation } from '@pancakeswap/localization'
import { Swap } from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import { PageMeta } from 'components/Layout/Page'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { EXCHANGE_HELP_URLS } from 'config/constants'

const Page: React.FC<
  React.PropsWithChildren<{
    removePadding?: boolean
    hideFooterOnDesktop?: boolean
    noMinHeight?: boolean
    helpUrl?: string
  }>
> = ({
      <Swap.Page
        removePadding={removePadding}
        noMinHeight={noMinHeight}
        hideFooterOnDesktop={hideFooterOnDesktop}
        helpUrl={helpUrl}
        externalText={externalText}
        externalLinkUrl={externalLinkUrl}
        {...props}
      >
        {children}
      </Swap.Page>
    </>
  )
}

export default Page
