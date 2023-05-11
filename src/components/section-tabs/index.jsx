import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabList = [], changeTabHandle } = props

  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const changeTabIndexhandle = (value, index) => {
    setCurrentTabIndex(index)
    changeTabHandle(value, index)
  }

  
  return (
    <TabsWrapper>
      {
        tabList.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: index === currentTabIndex })}
              key={item}
              onClick={() => changeTabIndexhandle(item, index)}
            >
              {item}
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabList: PropTypes.array,
  changeTabHandle: PropTypes.func
}

export default SectionTabs