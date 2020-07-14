
import { CommonTypes } from '../actions'

type SearchShowTypeType = Actions['common']['SearchShowType']['data'];

const SearchInputValue = (state: string = '', action: {type: string, data: string}) => {
  switch(action.type) {
    case CommonTypes.SET_SEARCHINPUTVALUE:
      return action.data
    default:
      return state
  }
}

const SearchShowType = (state: SearchShowTypeType = 0, action: {type: string, data: SearchShowTypeType}) => {
  switch(action.type) {
    case CommonTypes.SET_SEARCHSHOWTYPE:
      return action.data
    default:
      return state
  }
}

export {
  SearchInputValue,
  SearchShowType
}