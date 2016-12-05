import React from 'react'

class Header extends React.Component {
  render () {
    const headerLists = ['首页', '咖学院', '咖圈子`']
    let HeaderItem = headerLists.map((number, index) =>
       <li className='item' key={index} >{number}</li>
    )
    return (
      <div className='header'>
        <ul>{HeaderItem}</ul>
      </div>
    )
  }
}

export default Header
