import React from 'react'
import ReactDOM  from 'react-dom'

function Comment(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author}/>
    </div>
  );
}
function Avatar (props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}
let comment = {
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
let element = <Comment author={comment.author}/>
ReactDOM.render(
  element,
  document.getElementById('app')
)
