import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component {
  render () {
    const headerLists = [{href:'', nav:'首页'}, {href:'college', nav:'咖学院'}, {href:'circle', nav:'咖圈子'}]
    let HeaderItem = headerLists.map((number, index) =>
       <li className='item' key={index} >
        <Link to='/{{number.href}}'>{number.href}--{number.nav}</Link>
       </li>
    )
    return (
      <div className='header'>
        <ul>{HeaderItem}</ul>
      </div>
    )
  }
}

export default Header
