const React = require('react')
let FN = require('./header')
console.log(FN)

const Header = () => {
  const headerLists = ['首页', '咖学院', '咖圈子']
  let HeaderItem = headerLists.map((number, index) =>
     <li className='item' key={index} >{number}</li>
  )
  return (
    <div className='header'>
      <ul>{HeaderItem}</ul>
    </div>
  )
}

const Recommend = () => {
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

const Banner = () => {
  return (
    <div className = 'headerImg'>
      <img src='../images/img1.jpg' className='tile' />
    </div>
  )
}

let App  = () => {
  return (
    <div className = 'main'>
      <Header />
      <Banner />
      <Recommend />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
