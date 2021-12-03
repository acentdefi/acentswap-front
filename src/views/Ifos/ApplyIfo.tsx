import { Button, Card, CardBody, CardFooter, Text } from 'acentswap-uikit-hwan'
import React from 'react'
import styled from 'styled-components'
import IfoLayout from './components/IfoLayout'

const StyledCard = styled(Card)`
  max-width: 350px;
  width: 100%;
  margin: auto;
`

const StyledCardBody = styled(CardBody)`
  padding: 24px 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 24px;
  }
`

const StyledCardFooter = styled(CardFooter)`
  text-align: center;
  padding: 8px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`

const Ifo = () => {
  const onClick = () => {
    window.open(
      'https://docs.google.com/forms/d/1xvZHAGCxNWjTGefcH89cNYD4Gtad3rQgaFoOss0x1zE',
      '_blank',
    )
  }
  return (
    <IfoLayout>
      <StyledCard>
        <StyledCardBody>
          <Text>Is your project ready to get launched on ACENT?</Text>
        </StyledCardBody>
        <StyledCardFooter>
          <Button width="100%" onClick={onClick}>
            Apply Now
          </Button>
        </StyledCardFooter>
      </StyledCard>
    </IfoLayout>
  )
}

export default Ifo
