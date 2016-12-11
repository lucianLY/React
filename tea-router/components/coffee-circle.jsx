import React from 'react'

class CoffeeCircle extends React.Component {
  render () {
    const Colleges = [
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
    return (
      <div>
        <div className='article'>
          <a>咖啡种类</a>
        </div>
        <div className='article'>
          <a>喝咖啡糖什么糖好</a>
        </div>
        <div className='article'>
          <a>咖啡拉环之如何打好奶泡</a>
        </div>
      </div>
    )
  }
}

export default CoffeeCircle
