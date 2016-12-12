import React from 'react'
import Banner from './banner.jsx'
import {Link} from 'react-router'
import CoffeeJson from './json.jsx'

class CoffeeCollege extends React.Component {
  render () {
    const json = [
      {
        id : 1,
        title : '咖啡豆的种类'
      },
      {
        id : 2,
        title : '喝咖啡糖什么糖好'
      },
      {
        id : 3,
        title : '咖啡拉环之如何打好奶泡'
      }
    ]
    let Articles = json.map((number, index) =>
      <div className='article' key={index}>
        <Link to={'college/' + number.id}>{number.title}</Link>
      </div>
    )
    return (
      <div>
        <Banner />
        {Articles}
      </div>
    )
  }
}

export default CoffeeCollege
