import React from 'react'
import {Link} from 'react-router'
import {IndexLink} from 'react-router'
import Home from './home.jsx'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='header'>
          <ul>
            <li className='item' >
              <IndexLink to='/' activeClassName='active' onlyActiveOnIndex={true}>首页</IndexLink>
            </li>
            <li className='item' >
              <Link to='/college' activeClassName='active' onlyActiveOnIndex={true}>咖学院</Link>
            </li>
            <li className='item' >
              <Link to='/circle' activeClassName='active' onlyActiveOnIndex={true}>咖圈子</Link>
            </li>
          </ul>
        </div>
        { this.props.children || <Home /> }
      </div>
    )
  }
}

export default Header
