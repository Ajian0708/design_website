// actions
export default {
  async getproject(mode,mode2,{ commit }) {
    try {
      const registered = reactive({
        apimode: 'getproject',
        mode: mode2,
      });
      const res = await getproject(registered);
      console.log(res)
     // commit("setproject", res.data,mode2);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};
