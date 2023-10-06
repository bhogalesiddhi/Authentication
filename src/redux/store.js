// // src/redux/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import userRedux from "./userRedux";

// const store = configureStore({
//   reducer: userRedux,
// });



// export default store;


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux"; // Import the userReducer

const store = configureStore({
  reducer: {
    user: userReducer, // Assign the userReducer to the 'user' slice of the store
  },
});

export default store;
