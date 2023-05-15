import { getEntireRoomList } from '@/services/modules/entire'
import * as actionType from './constants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionType.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionType.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionType.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionType.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  // 新的函数
  return async (dispatch, getState) => {
    // 0.修改currentPage
    dispatch(changeCurrentPageAction(page))
    
    // 1.根据页码获取最新的数据
    const currentPage = getState().entire.currentPage

    // 在发送网络请求前改变isLoading的状态
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsLoadingAction(false))

    // 2.获取到最新的数据, 保存redux的store中
    const roomList = res.data.list
    const totalCount = res.data.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}