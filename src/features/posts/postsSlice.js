import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

// Remember: reducer functions must always create new state values immutably, by making copies! It's safe to call mutating functions like Array.push() or modify object fields like state.someField = someValue inside of createSlice(), because it converts those mutations into safe immutable updates internally using the Immer library, but don't try to mutate any data outside of createSlice!

// # Redux state is updated by "reducer functions":
// Reducers always calculate a new state immutably, by copying existing state values and modifying the copies with the new data
// The Redux Toolkit createSlice function generates "slice reducer" functions for you, and lets you write "mutating" code that is turned into safe immutable updates
// Those slice reducer functions are added to the reducer field in configureStore, and that defines the data and state field names inside the Redux store

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
