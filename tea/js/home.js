function Recommend () {
    const recommends = [
      {
        id : 1,
        title : '咖啡豆种类',
        href : './knowledge/1',
        image : './images/coffee-bean.jpg'
      }
    ]
    let Lists = recommends.map((number, index) =>
      <div className='recommend_bg' style={{backgroundImage: 'url(' + number.image + ')'}}>
        <a href='./knowledge.html' className='title_recommend'>{number.title}</a>
      </div>
    )
    return (
      <div className='index_recommend'>
        {Lists}
      </div>
    )
}
ReactDOM.render(
  <Recommend />,
  document.getElementById('recommends')
)

function Header () {
  const headerLists = ['首页', '咖学院', '咖圈子']
  let HeaderItem = headerLists.map((number) =>
     <li className='item'>{number}</li>
  )
  return <ul>{HeaderItem}</ul>
}

ReactDOM.render(
  <Header />,
  document.getElementById('header')
)
