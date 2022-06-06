  import create from 'zustand' 
  // import {devtools,persist} from 'zustand/middleware' 
  import ky from "ky"; 
   
  const useStore = create(set => ({ 
    visits:[],
    status:false,
    redirect: async (shortLink) => {   
      const access_token = localStorage.getItem('access_token_route_shortener')  
      const resp =  ky
      .get(`${process.env.REACT_APP_API_URL}/visits`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        },
        json :{shortLink }
      })
      .then((resp) => {     
      })
      .catch((err) => {     
        console.log('error: ')
        console.log(err)   
       })
    }, 
    listVisits: async (id) => {    
      const access_token = localStorage.getItem('access_token_route_shortener')  
      const resp =  ky
      .get(`${process.env.REACT_APP_API_URL}/visitsCount/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }, 
      }).json()
      .then((resp) => {   
        set(state => ({ visits: resp}))  
        set(state => ({ status: true}))   
      })
      .catch((err) => {     
        console.log('error: ')
        console.log(err)   
       })
    }, 
    
  }))

  export default useStore;
