// mutations
export default {
  setproject(state, payload,modes) {
    if(modes==1){
      state.array1 = payload;
    }else{
      state.array2 = payload;
    }
  },
};
