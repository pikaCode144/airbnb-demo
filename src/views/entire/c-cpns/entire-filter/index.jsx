import React, { memo, useState } from 'react'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [ checkedArray, setCheckedArray ] = useState([])
  
  const itemClickHandle = (value) => {
    const index = checkedArray.findIndex(item => item === value)
    const arr = [...checkedArray]
    if (index > 0) {
      arr.splice(index, 1)
    } else {
      arr.push(value)
    }
    setCheckedArray(arr)
  }
  
  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div
                className={classNames('item', { action: checkedArray.includes(item) })}
                key={item}
                onClick={() => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter