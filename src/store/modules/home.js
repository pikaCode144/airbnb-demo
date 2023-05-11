import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData } from "@/services"

const fetchHomeDataAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  // 获取折扣房源数据
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res.data))
  })

  // 获取热门推荐房源数据
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfoAction(res.data))
  })
  
  // 获取高性价比房源的数据
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res.data))
  })

  // 获取高分好评房源的数据
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res.data))
  })
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {}
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
  changeHotRecommendInfoAction
} = homeReducer.actions

export {
  fetchHomeDataAction
}

export default homeReducer.reducer