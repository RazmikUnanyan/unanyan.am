import React, {createContext, Dispatch, PropsWithChildren, SetStateAction, useState} from 'react'
import {IProduct} from "../interface";

export interface IMainContext {
    basket: {[key:string]: { product: IProduct, counter: number } }
    setInBasket?: Dispatch<SetStateAction<{[key:string]: { product: IProduct, counter: number } }>>
}

export const MainContext = createContext<IMainContext>({
    basket: {}
})

export const MainContextProvider = ({ children }: PropsWithChildren<IMainContext>): JSX.Element => {
    const [basket, setInBasket] = useState<{}>({})

    return (
        <MainContext.Provider value={{ basket, setInBasket }}>
    {children}
    </MainContext.Provider>
)
}