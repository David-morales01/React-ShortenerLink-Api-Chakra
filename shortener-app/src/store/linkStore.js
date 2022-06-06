  import create from 'zustand' 
  import ky from "ky"; 
   
  const useStore = create(set => ({  
    links:[],
    disabled:false,
    register: async (values) => {  
      
      const access_token = localStorage.getItem('access_token_route_shortener') 
      const resp =  ky
      .post(`${process.env.REACT_APP_API_URL}/links`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        json: values,
      }).json()
      .then((resp) => {  
      // // //   console.log(resp) 
      // // const var = state.links;
      // let vare =[]
      //  vare.push(resp.data);
      // console.log(vare)
       set(state =>({ links: [...state.links,resp.data]  }))    
      })
      .catch((err) => {     
        console.log('error: ')
        console.log(err)   
       })
    }, 
    update: async (values) => {  
      const access_token = localStorage.getItem('access_token_route_shortener') 
      const resp =  ky
      .put(`${process.env.REACT_APP_API_URL}/links`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        json: values,
      }).json()
      .then((resp) => {  
      // // //   console.log(resp) 
      // // const var = state.links;
      // let vare =[]
      //  vare.push(resp.data);
      // console.log(vare)
       set(state =>({ links: [...state.links,resp.data]  }))    
      })
      .catch((err) => {     
        console.log('error: ')
        console.log(err)   
       })
    }, 
    
    listLink: async () => {
      const access_token = localStorage.getItem('access_token_route_shortener') 
      const resp = await ky
      .get(`${process.env.REACT_APP_API_URL}/links`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }, 
      }).json() 
      set({ links: resp.data })   
    },   
  }))

  export default useStore;

 