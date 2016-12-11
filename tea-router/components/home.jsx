import React from 'react'
import { Link } from 'react-router'
import HomeBanner from './home-banner.jsx'

import Footer from './footer.jsx'
class Home extends React.Component {
  render () {
    const recommends = [
      {
        id : 1,
        title : '咖啡豆种类',
        href : '/college/1',
        image : './images/coffee-bean.jpg'
      },
      {
        id : 1,
        title : '喝咖啡放什么糖好',
        href : '/about/1',
        image : './images/coffee-sugar.jpg'
      },
      {
        id : 1,
        title : '咖啡拉花之如何打好奶泡',
        href : '/knowledge/1',
        image : './images/coffee-flowers.jpg'
      }
    ]
    let Lists = recommends.map((number, index) =>
      <div className='recommend_bg' style={{backgroundImage: 'url(' + number.image + ')'}}  key={index} >
        <a href={number.href} className='title_recommend'>{number.title}</a>
      </div>
    )
    return (
      <div>
        <HomeBanner />
        <div className = 'recommends'>
          <div className='index_recommend'>
            {Lists}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
