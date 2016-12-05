import React from 'react'
import {render} from 'react-dom'

import Header from './component/header.jsx'
import Recommend from './component/recommend.jsx'
import Banner from './component/banner.jsx'

let App  = () => {
  return (
    <div className = 'main'>
      <Header />
      <Banner />
      <Recommend />
    </div>
  )
}
render(
  <App />,
  document.getElementById('app')
)
