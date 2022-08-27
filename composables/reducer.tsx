interface Reducer {
  state: {
    id: string
  },
  action: {
    type: string,
    payload: string,
  } 
}

//export const Reducer = ( { state, action } : Reducer ) => {
export const Reducer = ( state:any , action:any ) => {
  switch (action.type) {
    case 'GET_ID':
      return {
        ...state,
      };
    case 'SET_ID':
      return {
        ...state,
        id: () => state.id = action.payload
      };
    default:
      return state;
  }
};