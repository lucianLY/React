import dispatcher from '../dispatcher.js'

export function CreateTODO (text) {
  console.log('AppAction CreateTODO' + text)
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  })
}

export function RemoveTODO (id) {
  console.log(id)
  dispatcher.dispatch({
    type: 'REMOVE_TODO',
    id
  })
}
