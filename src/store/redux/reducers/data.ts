type TOPLIST = Actions['data']['getTopList']['data'];

const data = (state: TOPLIST = [], action: {type: string, data: TOPLIST}): TOPLIST => {
  console.log(state, action);
  switch (action.type) {
    case 'GET_TOPLIST':
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

export default data