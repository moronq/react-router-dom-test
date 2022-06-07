import React, {createContext, FC, useState} from 'react';

type contextType = {
    user: null | string
    signIn: (newUser: string, cb:()=>void)=>void
    signOut: (cb:()=>void)=>void
}

export const AuthContext = createContext<contextType>({} as contextType);

type AuthProviderType = {
    children: JSX.Element
}

const AuthProvider:FC<AuthProviderType> = ({children}) => {

    const [user, setUser] = useState<string | null>(null)

    const signIn = (newUser: string, cb:()=>void):void => {
        setUser(newUser)
        cb()
    }
    const signOut = (cb:()=>void):void => {
        setUser(null)
        cb()
    }

    const value = {user, signIn, signOut}

    return <AuthContext.Provider value={value as contextType}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;