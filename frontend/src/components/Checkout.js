import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
export default function Checkout({subtotal}) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))

    }

  return (
    <div>

        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        {success && (<Success success='Your Order Placed Successfully'/>)}
        <StripeCheckout amount={subtotal} shippingAddress token={tokenHander} stripekey={pk_test_51MhA3KSJhyrIFUV9TuUTRkIxUOqnIvhiJCu1pxS7ERkrczBdoapWAAgNuiuv8bCTKuYwMxviTp3gQYsnIizpjWAu00TY8Odcblpk_test_51MhA3KSJhyrIFUV9TuUTRkIxUOqnIvhiJCu1pxS7ERkrczBdoapWAAgNuiuv8bCTKuYwMxviTp3gQYsnIizpjWAu00TY8Odcbl} currency='INR'>

            <button className='btn'>Pay Now</button>

        </StripeCheckout>

    </div>
  )
}
