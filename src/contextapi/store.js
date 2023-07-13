import React, { createContext, useEffect, useReducer } from "react";

// createContext
export const StoreProvider = createContext();

// getRecords
const getRecords = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

// {
  //   todos:["Zaman","Ahmad"],
  //   getRecords:()=>{}
  // }
  
  // initialState
  const intialState = getRecords();
  // todoReducer
const todoReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        todos: [...state.todos.filter((values) => values !== action.payload)],
      };
    default:
      return state;
  }
};
const TodoStore = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, intialState);

  // add Records
  const addRecords = (data) => {
    dispatch({
      type: "ADD_TODO",
      payload: data,
    });
  };
  //delelte records
  const deleteRecords = (data) => {
    dispatch({
      type: "DELETE_TODO",
      payload: data,
    });
  };

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  return (
    <>
      <StoreProvider.Provider
        value={{
          ...intialState,
          todos: [...state.todos],
          addRecords: addRecords,
          deleteRecords: deleteRecords,
        }}
      >
        {children}
      </StoreProvider.Provider>
    </>
  );
};
export default TodoStore;
