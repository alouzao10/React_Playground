import './App.css';

import Header from './Components/Header';
import Balance from './Components/Balance';
import Expenses from './Components/Expenses';

import Transactions from './Components/TransactionHistory/Transactions';
import AddTransaction from './Components/TransactionHistory/AddTransaction';

import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className='App'>
        <Header />
        <div className='container'>
          <Balance />
          <Expenses />
          <Transactions />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
