import createApiContext from "./createApiContext";

const apiReducer = (state: any, action: any, params: any) => {
  switch (action.type) {
    case "setSelectedTasks": {
      return { ...state, selectedTasks: action.params };
    }

    default:
      return state;
  }
};

const setSelectedTasks = (dispatch: any, params: any) => (props: any) => {
  dispatch({
    type: "setSelectedTasks",
    params: props,
  });
};

export const { Provider, Context } = createApiContext(
  apiReducer,
  {
    setSelectedTasks,
  },
  {}
);
