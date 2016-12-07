import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component {
  render () {
    const Host = 'http://localhost:8080/#/'
    const headerLists = [{href:'', nav:'首页'}, {href:'college', nav:'咖学院'}, {href:'circle', nav:'咖圈子'}]
    let HeaderItem = headerLists.map((number, index) =>
       <li className='item' key={index} >
        <a href={Host + number.href}>{number.nav}</a>
       </li>
    )
    return (
      <div>
        <div className='header'>
          <ul>{HeaderItem}</ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Header
