import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} /> }

        {/* 热门推荐 */}
        { isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} /> }

        {/* 高分好评 */}
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} /> }

        {/* 高性价比 */}
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} /> }
      </div>
    </HomeWrapper>
  )
})

export default Home