export const REDUCER = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 };
    case 'sub':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'add-color':
      const colors = [...state.colors, action.payload.color]
      return { ...state, colors };;
    default:
      return state;
  }
}