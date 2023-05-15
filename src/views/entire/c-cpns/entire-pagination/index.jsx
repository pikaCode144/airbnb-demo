import React, { memo } from 'react'

import { PaginationWrapper } from './style'
import { Pagination } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire'

const EntirePagination = memo((props) => {
  const dispatch = useDispatch()
  
  const { totalCount, currentPage, roomList } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const changeCurrentPageHandle = (page) => {
    // 页码改变回到顶部
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(page - 1))
  }
  
  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <Pagination
              defaultCurrent={1}
              pageSize={20}
              showSizeChanger={false}
              total={totalCount}
              onChange={changeCurrentPageHandle}
            />
            <div className="desc">
              第 { startCount } - { endCount } 个房源, 共超过 { totalCount } 个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination