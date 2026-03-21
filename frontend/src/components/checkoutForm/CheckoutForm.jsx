import { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Spinner, Alert } from "react-bootstrap";
import useOrders from "../../hooks/useOrders";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { confirmOrderPayment } = useOrders();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      setIsLoading(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {

      try {
        await confirmOrderPayment(orderId);
        navigate("/success");
      } catch (err) {
        setMessage("Payment succeeded, but failed to update order status.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
      <PaymentElement className="mb-4" />

      {message && <Alert variant="danger">{message}</Alert>}

      <Button
        variant="dark"
        type="submit"
        className="w-100 py-2 fw-bold"
        disabled={isLoading || !stripe || !elements}
      >
        {isLoading ? <Spinner size="sm" className="me-2" /> : "Pay Now"}
      </Button>
    </form>
  );
};

export default CheckoutForm;