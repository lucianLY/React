import React from 'react'

class Article extends React.Component {
  getArticle (id) {
    const json = [
      {
        title : '咖啡豆的种类',
        content : '阿拉比卡（Arabica）：贵、味道柔顺、咖啡因低咖啡广告里常常强调他们使用百分之百的阿拉比卡咖啡。没错，单用价钱来看的话，阿拉比卡的确比较高级，一般阿拉比卡咖啡豆的价钱是罗布斯塔的两倍。就成分来看，阿拉比卡的咖啡因含量低（0.9-1.2%），脂肪含量比罗布斯塔多了60%，糖的含量则是，因此综合起来，阿拉比卡的味道比较甜、柔和，带点梅果般的酸味。此外，阿拉比卡的绿原酸较低一些（5.5-8%），而绿原酸除了可以抗氧化，也是抵抗害虫的重要成分，因此阿拉比卡较容易受害虫侵害，也容易受气候影响，一般种植在较高海拔的地方，结的果实较少也较慢。果实为椭圆形。目前阿拉比卡最大的种植国是巴西，哥伦比亚则只产阿拉比卡咖啡。'
      },
      {
        id : 2,
        title : '喝咖啡糖什么糖好',
        content :''
      },
      {
        id : 3,
        title : '咖啡拉环之如何打好奶泡',
        content :''
      }
    ]
    return (
      <div>
        <div className='articleTitle'>{json[id-1]['title']}</div>
        <div className='articleBody'>{json[id-1]['content']}</div>
      </div>
    )
  }
  render () {
    return (
      <div>
        {this.getArticle(this.props.params.Id)}
      </div>
    )
  }
}

export default Article
