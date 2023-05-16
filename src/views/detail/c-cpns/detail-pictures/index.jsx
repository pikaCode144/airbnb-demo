import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { PicturesWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPictures = memo((props) => {
  const { infoData } = props
  // 定义组件内部的状态
  const [ showBrowser, setShowBrowser ] = useState(false)
  
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setShowBrowser(true)}>
            <img src={infoData.picture_urls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            infoData.picture_urls.slice(1, 5).map(item => {
              return (
                <div className="item" key={item} onClick={() => setShowBrowser(true)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="show-btn" onClick={() => setShowBrowser(true)}>显示照片</div>

      { showBrowser && (
        <PictureBrowser
          pictureUrls={infoData.picture_urls}
          closeBtn={() => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {
  infoData: PropTypes.object
}

export default DetailPictures