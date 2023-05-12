import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="content-inner">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem key={item.id} itemData={item} itemCount={5} />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter currentTab='plus' />
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3