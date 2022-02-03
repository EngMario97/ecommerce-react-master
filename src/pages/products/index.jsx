import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { FormatCurrency } from '../../utils/FormatCurrency';

function Products() {

  let { id } = useParams();

  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(async () => {
    const { data } = await api.get('/products');

    const findProduct = data.find(prod => prod.id == id)

    setProduct({ ...findProduct, valueFormatted: FormatCurrency(findProduct.value) });
    setTotal(findProduct.value)
  }, []);

  return (
    <>
      <Menu />
      <h2>{amount}</h2>
      <h2>{total}</h2>
    </>
  )
}

export default Products;