const reducer = (state, action) => {
  throw new Error(`no such actions : ${action.type}`);
};

export default reducer;
