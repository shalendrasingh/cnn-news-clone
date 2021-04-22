import React from "react"
export const AuthContext = React.createContext()

export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth]=React.useState(true)
    const [token,setToken]=React.useState("")
    const [language,setLanguage]=React.useState("en")
    const [topic,setTopic]=React.useState("")
    const inputRef=React.useRef(null)

    const loginSuccess = (value)=>{
        setToken(value);
        setIsAuth(true)
    }
    const logout = () => {
        setToken("")
        setIsAuth(false)
    }
    const handleLanguage = (lan)=>{
        setLanguage(lan)
        console.log(" language -",lan)
    }
    const handleTopic = (topic)=>{
        setTopic(topic)
    }
    const value={
        isAuth,
        token,
        inputRef, 
        language,
        topic,
        loginSuccess,
        logout,
        handleLanguage,
        handleTopic
    }
    return <AuthContext.Provider value={value} > {children} </AuthContext.Provider>
}