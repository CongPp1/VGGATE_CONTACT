const initialState = {
    name: "",
    email: "",
    message: "",
    file: {}
  };
  
   export const payloadDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FORM_DATA":
        return {
          ...state,
          ...action.payload,
        };
      case "UPDATE_FILE":
        return {
          ...state,
          file: action.file
        }
      default:
        return state;
    }
  };
  

  



