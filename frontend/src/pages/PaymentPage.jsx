import { useLocation, Navigate } from "react-router-dom";
import MainLayout from "../components/mainLayout/MainLayout";
import PaymentContainer from "../components/paymentContainer/PaymentContainer";

const PaymentPage = () => {
  const location = useLocation();
  const { clientSecret, orderId, amount } = location.state || {};

  if (!clientSecret) {
    return <Navigate to="/cart" />;
  }

  return (
    <MainLayout>
      <PaymentContainer 
        clientSecret={clientSecret} 
        orderId={orderId} 
        amount={amount} 
      />
    </MainLayout>
  );
};

export default PaymentPage;