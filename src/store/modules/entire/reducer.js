import { TYPE1 } from "./constants"

const initialState = {}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPE1:
      // 操作派发过来的操作
      return
    default:
      return state
  }
}

export default reducer