import React, { useState, useContext } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { ProductQuantityAdderWrapper, StyledButton } from './styles';
import CartContext from '../../context/CartContext';

export const ProductQuantityAdder = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          min="1"
          step="1"
          disabled={!available}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <StyledButton disabled={!available} type="submit" fullWidth>
          Add to cart
        </StyledButton>
      </form>
    </ProductQuantityAdderWrapper>
  );
};
