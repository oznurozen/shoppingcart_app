import Main from './components/Main';
import Header from './components/Header';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map((x)=>
      x.id === product.id ? {...exist, qty: exist.qty +1} : x
      )
      );
    } else {
      setCartItems([...cartItems, {...product, qty : 1}]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else{
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty - 1}:x
        )
      );
    }
  }
  return (
    <div className="App">
      <header>
        <Header countCartItems={cartItems.length}></Header>
        <div className='row'>
          <Main onAdd={onAdd} products={products}></Main>
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        </div>

      </header>

      
    </div>
  );
}

export default App;
