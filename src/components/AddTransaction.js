import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
export default function AddTransaction() {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState();

    const { addTransaction } = useContext(GlobalContext)
  const  addTransactionInfo=(e)=> {
        e.preventDefault();
        addTransaction({
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        })
        setDescription('')
        setTransactionAmount('')
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={addTransactionInfo}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Detail of transaction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" id="transactionamount" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} placeholder="Dollar Value of Transaction" />
                </div>
                <button className="btn" >
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
