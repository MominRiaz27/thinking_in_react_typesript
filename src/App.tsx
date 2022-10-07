import React from 'react';
import './App.css';
import PRODUCTS from './components/data';
import FilterableProductTable from './components/FilterableProductTable';




function App() {
  return <FilterableProductTable  myobject={PRODUCTS} />;
}

export default App;
