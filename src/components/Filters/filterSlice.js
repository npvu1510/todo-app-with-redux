import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  status: 'All',
  priority: [],
};

// const filtersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'filters/setSearchContent':
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case 'filters/setStatus':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case 'filters/setPriority':
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

const filtersSlice = createSlice({
  name: ' filters',
  initialState,
  reducers: {
    setSearchContent: (state, action) => {
      console.log('aaaaa');
      state.search = action.payload;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export default filtersSlice;
