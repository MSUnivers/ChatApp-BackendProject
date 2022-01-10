export const initialState = {
    user: {
        name: "",
      },
      rooms: [],
    
};

export const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return {
        ...state,
        user: {
          name: action.payload,
        },
        rooms: ["family", "travelling"],
      };

    default:
      return state;
  }
};
