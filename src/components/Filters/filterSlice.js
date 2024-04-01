const initialState = {
  search: '',
  status: 'All',
  priority: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/setSearchContent':
      return {
        ...state,
        search: action.payload,
      };
    case 'filters/setStatus':
      return {
        ...state,
        status: action.payload,
      };
    case 'filters/setPriority':
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
