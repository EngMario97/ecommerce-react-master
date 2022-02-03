import React from 'react';
import Menu from '../../components/Menu';

import { useShop } from '../../context/shop';

function Shop() {
  const { productsShop } = useShop();

  console.log(productsShop);

    return (
      <Menu />
    )
  }
  
  export default Shop;