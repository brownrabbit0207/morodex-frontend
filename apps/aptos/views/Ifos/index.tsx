import { SubMenuItems } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { PageMeta } from 'components/Layout/Page'
import { useRouter } from 'next/router'
import Hero from './components/Hero'

  return (
    <IfoProvider>
      <PageMeta title={t('Initial Farm Offering')} />
      <SubMenuItems
        items={[
          {
            label: t('Latest'),
            href: '/ifo',
          },
          {
            label: t('Finished'),
            href: '/ifo/history',
          },
        ]}
        activeItem={isExact ? '/ifo' : '/ifo/history'}
      />
      <Hero />
      {children}
    </IfoProvider>
  )
}
