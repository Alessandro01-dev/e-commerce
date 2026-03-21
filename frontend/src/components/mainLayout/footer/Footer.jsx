import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer-container"]}>
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <div className={classes["logo-wrapper"]}>
              <img src={logo} alt="Logo" className={classes["footer-logo"]} />
            </div>
            <p className={`${classes["text-muted-custom"]} small`}>
              Your premium destination for electronics and lifestyle.
              Quality guaranteed and fast shipping across Europe.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-4">SHOPPING</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link to="/shop" className={classes["link-muted"]}>All Products</Link></li>
              <li><Link to="/shop?onSale=true" className={classes["link-muted"]}>Best Deals</Link></li>
              <li><Link to="/shop" className={classes["link-muted"]}>New Arrivals</Link></li>
              <li><Link to="/orders" className={classes["link-muted"]}>Track Order</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-4">POLICIES</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><span className={classes["text-muted-custom"]}>Terms of Sale</span></li>
              <li><span className={classes["text-muted-custom"]}>Returns & Refunds</span></li>
              <li><span className={classes["text-muted-custom"]}>Privacy Policy</span></li>
              <li><span className={classes["text-muted-custom"]}>Cookie Settings</span></li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-4">CONTACT</h6>
            <ul className={`list-unstyled small d-flex flex-column gap-2 ${classes["text-muted-custom"]}`}>
              <li>📍 123 My Store Street, Rome, IT</li>
              <li>📧 mystore@example.com</li>
              <li>📞 +39 06 1234567</li>
            </ul>
            <div className="mt-4">
              <p className="small fw-bold mb-2">SECURE PAYMENTS</p>
              <div className="d-flex align-items-center gap-3">
                <span className={classes["payment-badge"]}>Stripe</span>
                <span className={classes["payment-badge"]}>Visa</span>
                <span className={classes["payment-badge"]}>Mastercard</span>
              </div>
            </div>
          </div>
        </div>

        <hr className={classes["divider"]} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <small className={classes["text-muted-custom"]}>
            © {new Date().getFullYear()}. All rights reserved.
          </small>
          <div className={`d-flex gap-3 small ${classes["text-muted-custom"]}`}>
            <span>EUR (€)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;