import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)

  function itemClickHandle(index) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }
  
  return (
    <TabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: currentIndex === index })}
              key={item}
              onClick={() => itemClickHandle(index)}
            >
              <span className='text'>{item}</span>
              <div className="bottom"></div>
            </div>
          )
        })
      }
      {/* <div className="inner">
        <div className="search-home item"></div>
        <div className="search-experience item"></div>
      </div> */}
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array,
  tabClick: PropTypes.func
}

export default SearchTabs