import InformationCheckout from './components/InformationCheckout';
import OrderResume from './components/OrderResume';
import './App.scss';

function App() {
  return (
    <div className="checkout">
      <InformationCheckout/>
      <OrderResume/>
    </div>
  );
}

export default App;
