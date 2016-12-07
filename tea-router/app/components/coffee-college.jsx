import React from 'react'

class CoffeeCollege extends React.Component {
  render () {
    const Host = 'http://localhost:8080/#/'
    return (
      <div>
        <a href={Host + 'college/The history of coffee'}>咖啡的历史</a>
      </div>
    )
  }
}

export default CoffeeCollege
