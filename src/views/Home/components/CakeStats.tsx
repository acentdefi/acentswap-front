import React from 'react'
import { ACENT_PER_BLOCK, TRANSFER_TAX } from 'config'

import { Card, CardBody, Heading, Text } from 'acentswap-uikit-hwan'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const acentPerBlock = ACENT_PER_BLOCK.toNumber()
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('Acent Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total ACENT Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total ACENT Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New ACENT/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={acentPerBlock} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Transfer ACENT Fee')}</Text>
          <Text fontSize="14px">{TRANSFER_TAX}%</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
