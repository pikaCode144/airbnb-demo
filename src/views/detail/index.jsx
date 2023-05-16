import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
// import DetailInfos from './c-cpns/detail-infos'
import { isEmptyO } from '@/utils'
import { changeHeaderConfigAction } from '@/store/modules/main'
// import AppHeader from '@/components/app-header'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])
  
  return (
    <DetailWrapper>
      {/* <AppHeader /> */}
      { isEmptyO(detailInfo) && <DetailPictures infoData={detailInfo} /> }
      {/* <DetailInfos /> */}
    </DetailWrapper>
  )
})

export default Detail