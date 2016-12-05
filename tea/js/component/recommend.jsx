import React from 'react'
class Recommend extends React.Component {
  render () {
    const recommends = [
      {
        id : 1,
        title : '咖啡豆种类',
        href : './knowledge/1',
        image : './images/coffee-bean.jpg'
      }
    ]
    let Lists = recommends.map((number, index) =>
      <div className='recommend_bg' style={{backgroundImage: 'url(' + number.image + ')'}}  key={index} >
        <a href='./knowledge.html' className='title_recommend'>{number.title}</a>
      </div>
    )
    return (
      <div className = 'recommends'>
        <div className='index_recommend'>
          {Lists}
        </div>
      </div>
    )
  }
}

export default Recommend
