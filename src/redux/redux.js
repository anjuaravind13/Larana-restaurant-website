import { createSlice, configureStore } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : { items: [], value: 0 };
  } catch (e) {
    return { items: [], value: 0 };
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.counter);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.error("Failed to save state", e);
  }
};

let mealSlice = createSlice({
  name: "meals",
  initialState: {
    value: [],
  },

  reducers: {
    setMealDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

let counterSlice = createSlice({
    name: 'counter',
    initialState: loadState(),

    reducers: {
      increase: (state, action) => {
       
        state.items.push(action.payload);
        state.value++;
      },
      decrease: (state,action) => {
        state.items = state.items.filter(
          (item) => item.idCategory !== action.payload
        );
        state.value--;
      },
      clearCart(state){
        state.items = [];
        state.value = 0;
      }
    }
  });

export let {setMealDetails} = mealSlice.actions;
export let { increase, decrease, clearCart} = counterSlice.actions;


export let reduxStore = configureStore({
    reducer:{
        meals: mealSlice.reducer,
        counter : counterSlice.reducer
    }
});

reduxStore.subscribe(() => saveState(reduxStore.getState()));