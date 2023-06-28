import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.request.use(function(response)
{
  return response;
},function(error){
  return Promise.reject(error);
});

export default {
  getTasks: async () => {
    const result = await axios.get(`/todoitems`)
    console.log(result);
    return result.data;
  },
  addTask: async (name) => {
  
    const result = await axios.post(`/todoitems`, { id:1,name:name,isComplete:false});
    console.log('addTask', name)
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    await axios.put(`/todoitems/${id}`,{isComplete:{isComplete}})
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    const result = await axios.delete(`/todoitems/${id}`)
    return result.data;
  }
};
