import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import SearchTitles from '@/assets/data/search_titles'
import { CenterWrapper } from './style'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import IconSearchBar from '@/assets/svg/icon_search-bar'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  
  const [ tabIndex, setTabIndex ] = useState(0)
  const titles = SearchTitles.map(item => item.title)

  const searchBarClickHandle = () => {
    if (searchBarClick) searchBarClick()
  }
  
  // 搜索栏
  const searchBarElement = (
    <div className="search-bar" onClick={searchBarClickHandle}>
      <div className="text">搜索房源和体验</div>
      <span className="icon">
        <IconSearchBar />
      </span>
    </div>
  )

  // 搜索详情
  const searchDetailElement = (
    <div className="search-detail">
      <SearchTabs titles={titles} tabClick={setTabIndex} />
      <div className="infos">
        <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
      </div>
    </div>
  )
  
  return (
    <CenterWrapper>
      {/* {
        isSearch ? searchDetailElement : searchBarElement
      } */}
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        unmountOnExit={true}
      >
        {searchBarElement}
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames='detail'
        timeout={250}
        unmountOnExit={true}
      >
        {searchDetailElement}
      </CSSTransition>
    </CenterWrapper>
  )
})

HeaderCenter.prototype = {
  isSearch: PropTypes.bool,
  searchBarClick: PropTypes.func
}

export default HeaderCenter