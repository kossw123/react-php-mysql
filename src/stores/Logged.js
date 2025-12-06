import { create } from "zustand";



const useLoggedStore = create((set) => ({
    isLogged: false,
    setLogged: (param) => set({ isLogged: param })
}));


export default useLoggedStore;