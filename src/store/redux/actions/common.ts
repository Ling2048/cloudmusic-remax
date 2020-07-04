enum CommonTypes {
  SET_SEARCHINPUTVALUE = 'SET_SEARCHINPUTVALUE',
  SET_SEARCHSHOWTYPE = 'SET_SEARCHSHOWTYPE'
}

const SearchInputValue = (value: string) => ({
  type: CommonTypes.SET_SEARCHINPUTVALUE,
  data: value
})

const SearchShowType = (value: 0 | 1 | 2) => ({
  type: CommonTypes.SET_SEARCHSHOWTYPE,
  data: value
})

export {
  CommonTypes,
  SearchInputValue,
  SearchShowType
}