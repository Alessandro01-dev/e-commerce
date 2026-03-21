import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Container } from "react-bootstrap";
import classes from "./PaymentContainer.module.css";
import CheckoutForm from "../checkoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PaymentContainer = ({ clientSecret, orderId, amount }) => {
  const options = {
    clientSecret,
    appearance: { theme: 'stripe' },
  };

  return (
    <Container className={`${classes['payment-wrapper']} mt-5`}>
      <h2 className="mb-4 text-center">Complete your Payment</h2>
      <p className="text-center text-muted mb-4">
        Total Amount: <strong>{amount.toFixed(2)} $</strong>
      </p>

      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm orderId={orderId} />
      </Elements>
    </Container>
  );
};

export default PaymentContainer;