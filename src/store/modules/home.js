import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services"

const fetchHomeDataAction = createAsyncThunk('fetchData', async (payload, { dispatch }) => {
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
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
      console.log(state.highScoreInfo)
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
  changeHighScoreInfoAction
} = homeReducer.actions

export {
  fetchHomeDataAction
}

export default homeReducer.reducer