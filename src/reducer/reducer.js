export const initialState = {
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return {
        ...state,
        darkMode: action.payload,
      };
    case "DARK":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
