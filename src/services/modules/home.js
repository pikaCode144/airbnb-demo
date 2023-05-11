import request from "../request"

export function getHomeGoodPriceData() {
  return request.get('/home/goodprice')
}

export function getHomeHighScoreData() {
  return request.get('/home/highscore')
}