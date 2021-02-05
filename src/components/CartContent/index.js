import React, { useContext } from 'react';
import { QuantityAdjuster } from '../QuantityAdjuster';
import CartContext from '../../context/CartContext';
import {
  CartItem,
  CartHeader,
  CartFooter,
  Footer,
  CartWrapper,
  StyledButton,
} from './styles';
import { RemoveLineItem } from '../RemoveLineItem';
import { Button } from '../Button';
import { navigate } from '@reach/router';

export const CartContent = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <CartWrapper>
      <h1>
        <span>Your Cart</span>
      </h1>
      {!!checkout?.lineItems && (
        <CartHeader>
          <div>Product</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Amount</div>
        </CartHeader>
      )}
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
      {checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            <span>${checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems && (
        <div>
          <h4>Your cart is empty</h4>
        </div>
      )}
      <Footer>
        <div>
          <StyledButton onClick={() => navigate(-1)}>
            Continue Shopping
          </StyledButton>
        </div>
        <div>
          {!!checkout?.webUrl && (
            <StyledButton
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              Checkout
            </StyledButton>
          )}
        </div>
      </Footer>
    </CartWrapper>
  );
};
