import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData } from "@/services"

const fetchHomeDataAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res.data))
  })
  
  // 获取高性价比房源的数据
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res.data))
  })

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res.data))
  })

  
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}
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
  changeDiscountInfoAction
} = homeReducer.actions

export {
  fetchHomeDataAction
}

export default homeReducer.reducer