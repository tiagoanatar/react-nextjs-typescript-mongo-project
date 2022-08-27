import type { LayoutProps } from "../types/pageWithLayouts";
import {createContext, useReducer} from "react";
import { Reducer } from '../composables/reducer';

const initialState = {
  id: '0304',
};

export const Context = createContext(initialState);

export const Store : LayoutProps = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <>
      <Context.Provider value={[state, dispatch]}>
        {children}
      </Context.Provider>
    </>
  );
};
