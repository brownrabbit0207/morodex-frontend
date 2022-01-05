import { Text, Heading, Card, CardHeader, CardBody } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LandingBodyWrapper } from 'views/PancakeSquad/styles'
import FoldableText from 'components/FoldableSection/FoldableText'
import configBuilder from './config'
import { StyledFaqSection, StyledDetailsWrapper } from './styles'

const FaqSection = () => {
  const { t } = useTranslation()
  const config = configBuilder({ t })

  return (
    <StyledFaqSection justifyContent="center">
      <LandingBodyWrapper py="64px">
        <StyledDetailsWrapper>
                    )
                  })}
                </FoldableText>
              ))}
            </CardBody>
          </Card>
        </StyledDetailsWrapper>
      </LandingBodyWrapper>
    </StyledFaqSection>
  )
}

export default FaqSection
