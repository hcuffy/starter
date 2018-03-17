import { createStore } from 'redux';
import { ADD_RECIPE } from './action-types';
import { ADD_INGREDIENT } from './action-types';

const initialState = {
  recipes: [{
    name: 'Omelette'
  }],
  ingredients: [{
    recipe: 'Omelette',
    name: 'Egg',
    quantity: 2
  }]
};


const reducer = (state, action) => {
	switch (action.type) {
    case ADD_RECIPE:
      return Object.assign({}, state, {
        recipes: state.recipes.push({
          name: action.name
        })
      });
    case ADD_INGREDIENT:
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity
      };
      return Object.assign({}, state, {
        ingredients: state.ingredients.push(newIngredient)
      });
  }

return state;
};

const store = createStore(reducer, initialState);

let test = store.getState().recipes[0].name;

store.subscribe(() => document.getElementById('counter').innerText = test);

store.dispatch({ type: 'ADD_RECIPE', name: 'Pancake'});
// window.store = store;


console.log("Redux started");
