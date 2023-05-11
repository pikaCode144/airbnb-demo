import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'

const SectionFooter = memo((props) => {
  const { currentTab = '' } = props

  const View = (
    <div className='view'>
      <span className='text'>查看更多{currentTab}房源</span>
      <IconMoreArrow />
    </div>
  )

  const Info = (
    <div className="info">
      <span className='text'>显示全部</span>
      <IconMoreArrow />
    </div>
  )
  
  return (
    <FooterWrapper>
      { currentTab ? View : Info }
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  currentTab: PropTypes.string
}

export default SectionFooter