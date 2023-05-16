import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
// import DetailInfos from './c-cpns/detail-infos'
import { isEmptyO } from '@/utils'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  
  return (
    <DetailWrapper>
      { isEmptyO(detailInfo) && <DetailPictures infoData={detailInfo} /> }
      {/* <DetailInfos /> */}
    </DetailWrapper>
  )
})

export default Detail