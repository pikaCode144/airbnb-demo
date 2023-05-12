import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services"

const fetchHomeDataAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  // 获取折扣房源数据
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res.data))
  })

  // 获取热门推荐房源数据
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfoAction(res.data))
  })

  // 你可能想去
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res.data))
  })
  
  // 获取高性价比房源的数据
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res.data))
  })

  // 获取高分好评房源的数据
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res.data))
  })

  // 获取房间plus数据
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res.data))
  })
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     console.log(payload)
  //     state.goodPriceInfo = payload
  //   }
  // }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeReducer.actions

export {
  fetchHomeDataAction
}

export default homeReducer.reducer