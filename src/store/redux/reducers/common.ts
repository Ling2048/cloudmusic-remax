
import { CommonTypes } from '../actions'

type SearchShowTypeType = Actions['common']['SearchShowType']['data'];
type SearchInputValueype = Actions['common']['SearchInputValue']['data'];
type SearchKeywordype = Actions['common']['SearchKeyword']['data'];

const SearchInputValue = (state: SearchInputValueype = '', action: {type: string, data: SearchInputValueype}) => {
  switch(action.type) {
    case CommonTypes.SET_SEARCHINPUTVALUE:
      return action.data
    default:
      return state
  }
}

const SearchKeyword = (state: SearchKeywordype = '', action: {type: string, data: SearchKeywordype}) => {
  switch(action.type) {
    case CommonTypes.SET_SEARCHWEYWORD:
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
  SearchShowType,
  SearchKeyword
}