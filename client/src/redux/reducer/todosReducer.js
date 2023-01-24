const initial_state = {
  data: [],
  createdata: [],
  editdata: [],
  newdata: [],
};

export const todoreducer = (state = initial_state, action) => {
  switch (action.type) {
    case "GETDATA":
      return {
        ...state,
        data: action.payload,
      };
    case "POSTDATA":
      return {
        ...state,
        createdata: action.payload,
      };

    case "UPDATEDATA":
      return {
        ...state,
        editdata: action.payload,
      };
     
    
    case "DELETEDATA":
      const remove = state.data.filter((el) => el.id !== action.payload);
      console.log("uu", remove);
      return {
        ...state,
        newdata: remove,
      };
    default:
      return state;
  }
};
