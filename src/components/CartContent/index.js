import React, { useContext } from 'react';
import { QuantityAdjuster } from '../QuantityAdjuster';
import CartContext from '../../context/CartContext';
import { CartItem, CartHeader, CartFooter } from './styles';
import { RemoveLineItem } from '../RemoveLineItem';

export const CartContent = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <CartHeader>
        <div>Product</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Amount</div>
      </CartHeader>
      {checkout?.lineItems?.map(lineItem => (
        <CartItem key={lineItem.variant.id}>
          <div>
            <div>{lineItem.title}</div>
            <div>
              {lineItem.variant.title === 'Default Title'
                ? ' '
                : lineItem.variant.title}
            </div>
          </div>
          <div>{lineItem.price}</div>
          <div>
            <QuantityAdjuster item={lineItem} onAdjust={handleAdjustQuantity} />
          </div>
          <div>${(lineItem.quantity * lineItem.variant.price).toFixed(2)}</div>
          <div>
            <RemoveLineItem lineItemId={lineItem.id} />
          </div>
        </CartItem>
      ))}
      <CartFooter>
        <div>
          <strong>Total:</strong>
        </div>
        <div>
          <span>${checkout?.totalPrice}</span>
        </div>
      </CartFooter>
    </div>
  );
};
