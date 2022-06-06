  import create from 'zustand'
  

  const useStore = create(set => ({  
    status:false,  
    editLink:{},
    statusEdit:false, 
    loading:false,
    toogle: () => set(state => ({ status: !state.status })), 
    
    toogleEdit: async (values) => {
        
      set({ loading: false }) 
      set(state => ({ statusEdit: false}))
      set({ editLink: values })  
      setTimeout(()=>{
      set({ loading: true }) 
      },1)
      set(state => ({ statusEdit: true}))  
    },  
    toogleClose : ()=>{ 
      set({ loading: false }) 
      set(state => ({ statusEdit: false}))

    }
  }))

  export default useStore;