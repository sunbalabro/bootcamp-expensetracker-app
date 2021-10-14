import React,{createContext,useReducer} from "react"
import AppReducer from "./AppReducer"
const  initialState ={
    transactions:[
        {id:1, description:"First Transaction",transactionAmount: 10000},
        {id:2, description:"Second Transaction",transactionAmount: 20000},
        {id:3, description:"First Bill",transactionAmount: -5000},
        {id:4, description:"Second Bill",transactionAmount: -1000},
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    function addTransaction(transObj){
                dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: transObj
                })
    }
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
}
    return (  
    
    <GlobalContext.Provider value = {
            {
                transactions: state.transactions,
                addTransaction,
                deleteTransaction
                }
                }>{children}</GlobalContext.Provider>
    )
}