import React from 'react';
import Appbar from './components/Appbar';
import ReceiptView from './components/ReceiptView';
import './App.css';

const data = [
  {
      id: 1,
      num_items: '3',
      date: '09/22/2020',
      items: [
          {name: 'Apples', price: '2.99'},
          {name: 'Blanket', price: '20.30'},
          {name: 'Sponge', price: '1.99'}
      ]
  },
  {
      id: 2,
      num_items: '2',
      date: '09/28/2020',
      items: [
          {name: 'Apples', price: '2.00'},
          {name: 'Gloves', price: '4.99'},
          {name: 'DVD Player', price: '24.99'}
      ]

  }
]

function App() {
  return (
    <div className="App">
      <Appbar/>
      {data.map((receipt, id) => ( 
              <ReceiptView key={id}
              date={receipt.date}
              num_items={receipt.num_items}>
 </ReceiptView>
                     ))}
    </div>
  );
}

export default App;
