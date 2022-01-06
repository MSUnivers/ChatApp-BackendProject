const initialState = {
    user: {
        name: "maroua",
      },
      rooms: ["family", "travelling"],
    
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return {
        ...state,
        user: {
          name: "maroua",
        },
        rooms: ["family", "travelling"],
      };

    default:
      return state;
  }
};

export {initialState,reduce}
