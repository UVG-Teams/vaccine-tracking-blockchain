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

  badgesContract = new web3.eth.Contract(badgesContractAbi);
  badgesContract.options.address = '0xe2E296C81084B810c70Fb45F9735bC8af3cDfE4f'; // Address of the contract
}

function App() {
  return (
    <Provider store={store}>
      <Home user_address={window.ethereum.selectedAddress} contract={badgesContract}/>
    </Provider>
  );
}

export default App;
