import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
export default function AccountSummary() {
    const {transactions} = useContext(GlobalContext)
    const transactionAmount = transactions.map(transaction => transaction.transactionAmount)
    const income = transactionAmount.filter(transaction => transaction > 0).reduce((acc,transaction) => (acc += transaction),0).toFixed(2) 
   
    const expense = transactionAmount.filter(transaction => transaction < 0).reduce((acc,transaction) => (acc += transaction),0).toFixed(2) 
   
    return (
        <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
              <p className="money plus">
                  +{income}
              </p>
            </div>
            <div>
              <h4>Expense</h4>
              <p className="money minus">
                  {expense}
              </p>
                
            </div>
        </div>
    )
}
