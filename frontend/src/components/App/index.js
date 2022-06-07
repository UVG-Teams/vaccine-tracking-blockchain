import './styles.css';
import Web3 from 'web3';
import Home from '../Home';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';

const { store, persistor } = configureStore();

let web3 = null;
let badgesContract = null;
const badgesContractAbi = require('../../blockchain/build/contracts/VaccineTracking.json').abi;

if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
  console.log('Using MetaMask!');

  web3 = new Web3(window.ethereum);
  web3.eth.getAccounts().then(console.log);
  window.ethereum.request({ method: 'eth_requestAccounts' })

  // computer = new web3.eth.Contract(computer_abi);
  // computer.options.address = '0xE8b848f0220Ee779172E765675B330f7FcC136Dc'; // Address of the contract
}

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
