import axios from "axios"
import { BASE_URL, TIMROUT } from "./config"

class Request {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      return config
    })

    this.instance.interceptors.response.use(res => {
      return res
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(url, config) {
    return this.request({ ...config, url, method: 'get' })
  }

  post(url, config) {
    return this.request({ ...config, url, method: 'post' })
  }
}

const request = new Request(BASE_URL, TIMROUT)

export default request