const INITIAL_STATE = {
  newColor: '#',
  cyan: '#00FFFF',
  magenta: '#FF00FF',
};

const colorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PICK_COLOR':
      return { ...state, newColor: action.payload };
    default:
      return state;
  }
};

export default colorReducer;
