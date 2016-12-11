import React from 'react'
import {Link} from 'react-router'
import Home from './home.jsx'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='logo'>T-Coffee</div>
        <div className='header'>
          <ul>
            <li className='item' >
              <Link to='/' activeClassName='active' onlyActiveOnIndex={true}>
                <div>首页</div>
              </Link>
            </li>
            <li className='item' >
              <Link to='/college' activeClassName='active' onlyActiveOnIndex={true}>
                <div>咖学院</div>
              </Link>
            </li>
            <li className='item' >
              <Link to='/circle' activeClassName='active' onlyActiveOnIndex={true}>
                <div>咖文化</div>
              </Link>
            </li>
          </ul>
        </div>
        { this.props.children || <Home /> }
      </div>
    )
  }
}

export default Header
