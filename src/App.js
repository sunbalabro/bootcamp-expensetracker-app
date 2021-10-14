import AccountSummary from "./components/AccountSummary";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/balance";
import Header from "./components/header"
import TransactionHistory from "./components/TransactionHistory";
import { GlobalProvider } from "./context/GlobalState";
import './App.css'
function App() {
  return (
    
        <GlobalProvider>
          <Header />
<div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
        </GlobalProvider>
    
    
  );
}

export default App;
