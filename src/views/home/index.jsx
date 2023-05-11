import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }), shallowEqual)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 高分好评房源 */}
        <div className='high-score'>
          <SectionHeader title={highScoreInfo?.title} subtitle={highScoreInfo?.subtitle} />
          <SectionRooms roomList={highScoreInfo?.list} />
        </div>
        {/* 高性价比房源 */}
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo?.title} />
          <SectionRooms roomList={goodPriceInfo?.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home