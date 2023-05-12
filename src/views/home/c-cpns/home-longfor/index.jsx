import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
  const { infoData } = props

  console.log(infoData)
  
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="content-inner">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemInfo={item} key={item.picture_url} />
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor