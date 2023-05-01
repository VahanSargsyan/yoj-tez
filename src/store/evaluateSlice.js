import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  link: '',
  fetchStatus: 'idle',
  history: [
    {
      link: 'youtube.com',
    },
    {
      link: 'auto.am',
    },
    {
      link: 'github.com',
    },
  ]
};

// export const fetchSiteData = createAsyncThunk(
//   'counter/fetchCount',
//   async (link) => {
//     const response = await fetchData(link);

//     return response.data;
//   }
// );

export const evaluateSlice = createSlice({
  name: 'evaluate',
  initialState,
  reducers: {
    setLink: (state, action) => {
      state.link = action.payload;
    },
    pushHistory: (state, action) => {
      state.history.push(action.payload);
    },
   
  },
  
  
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.fetchStatus = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.fetchStatus = 'idle';
//         state.siteData = action.payload;
//       })
//       .addCase(incrementAsync.rejected, (state) => {
//         state.fetchStatus = 'failed';
//       });
//   },
})


export const { setLink, pushHistory } = evaluateSlice.actions;

export const selectLink = (state) => state.evaluate.link;
export const selectHistory = (state) => state.evaluate.history;

export default evaluateSlice.reducer;