import { createContext, useState,useContext } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [isSideBarOpen,setIsSideBarOpen] = useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false)

    const openSideBar = () => {
        setIsSideBarOpen(true);
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider  value={{isSideBarOpen,isModalOpen,openModal,closeModal,openSideBar,closeSideBar}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}