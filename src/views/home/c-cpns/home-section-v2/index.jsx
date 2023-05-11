import PropTypes from 'prop-types'
import React, { memo, useMemo, useCallback, useState, useEffect } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV2 = memo((props) => {
  // 从props中拿数据
  const { infoData } = props

  // 定义内部的state
  const initialName = Object.keys(infoData.dest_list)[0]
  const [currentTab, setCurrentTab] = useState(initialName)

  // 将数组中的对象整理成字符串
  const tabList = useMemo(() => infoData.dest_address.map(item => item.name), [infoData])

  // Tab切换处理函数
  const changeTabHandle = useCallback((value, index) => {
    setCurrentTab(value)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabList={tabList} changeTabHandle={changeTabHandle} />
      <SectionRooms roomList={infoData.dest_list[currentTab]} itemCount={3} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2