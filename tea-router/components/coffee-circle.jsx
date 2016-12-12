import React from 'react'

class CoffeeCircle extends React.Component {
  render () {
    const Colleges = [
      {
        id : 1,
        image : './images/coffee-bean.jpg',
        title : '咖啡豆的种类'
      },
      {
        id : 2,
        image : './images/coffee-sugar.jpg',
        title : '喝咖啡糖什么糖好'
      },
      {
        id : 3,
        image : './images/coffee-flowers.jpg',
        title : '咖啡拉环之如何打好奶泡'
      }
    ]
    let CircleMap = Colleges.map((val, index) =>
      <a className='culture' key={index}>
        <div className='culture-title'>
          咖啡种类
        </div>
        <div className='culture-img'>
          <img src={val.image} class='tile'/>
        </div>
      </a>
    )
    return (
      <div>
        {CircleMap}
       </div>
    )
  }
}

export default CoffeeCircle
