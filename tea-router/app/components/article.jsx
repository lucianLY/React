import React from 'react'

class Article extends React.Component {
  render () {
    return (
      <div>
        <span >{this.props.params.Article}</span>
      </div>
    )
  }
}

export default Article
