import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { getHomeGoodPriceData } from "@/services"

const fetchHomeDataAction = createAsyncThunk('fetchData', async () => {
  const res = await getHomeGoodPriceData()
  return res.data
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload)
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfoAction } = homeReducer.actions
export {
  fetchHomeDataAction
}
export default homeReducer.reducer