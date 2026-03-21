import classes from './Navbar.module.css'
import logo from '../../../assets/logo.png'
import profilePicture from '../../../assets/default_profile_picture.jpg'
import { Navbar, Nav, NavDropdown, Container, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FolderCog, Heart, LogIn, LogOut, Package, ShoppingCart, UserRoundCog } from 'lucide-react'
import { useAuth } from '../../../contexts/AuthContext'
import { categories } from '../../../utils/categories'

const CustomNavbar = () => {
  const navigate = useNavigate();
  const { authData, logout, authIsLoading } = useAuth();
  const cartCount = authData?.cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <Navbar bg="black" variant="dark" className="py-2">
      <Container>
        <div className="d-flex align-items-center gap-3">
          <Navbar.Brand as={Link} to="/" className={classes["logo-container"]}>
            <img className="w-100 h-100 object-fit-contain" src={logo} alt="logo" />
          </Navbar.Brand>

          <Nav className="d-flex flex-row gap-3 align-items-center">
            <Nav.Link as={Link} to="/shop" className="text-white fw-light p-0">Shop</Nav.Link>

            <NavDropdown
              title="Categories"
              id="nav-categories"
              className={classes["nav-item"]}
              renderMenuOnMount={true}
            >
              <div className={classes["mega-menu-container"]}>
                {categories.map((group) => (
                  <div key={group.label} className={classes["mega-menu-column"]}>
                    <h6 className={classes["mega-menu-title"]}>{group.label}</h6>
                    {group.subcategories.map((sub) => (
                      <NavDropdown.Item
                        key={sub.name}
                        className={classes["mega-menu-item"]}
                        onClick={() => navigate(`/shop?category=${encodeURIComponent(sub.name)}`)}
                      >
                        {sub.name}
                      </NavDropdown.Item>
                    ))}
                  </div>
                ))}
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-center text-uppercase fw-bold' onClick={() => navigate('/shop')}>All Products</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to={authData ? "/wishlist" : "/login"}
              className="text-white fw-light p-0"
            >
              Favourites
            </Nav.Link>
          </Nav>
        </div>

        <div className="d-flex gap-3 align-items-center">
          {authIsLoading ? (
            <Spinner animation="border" size="sm" variant="light" />
          ) : !authData ? (
            <Link to="/login" className={classes["settings-icon-container"]}>
              <LogIn size={20} color="white" />
            </Link>
          ) : (
            <>
              <Link to="/cart" className={`${classes["cart-icon-container"]} position-relative`}>
                <ShoppingCart size={20} color="white" />
                {cartCount > 0 && (
                  <span className={`${classes["cart-badge"]} position-absolute badge bg-danger`}>
                    {cartCount}
                  </span>
                )}
              </Link>

              <NavDropdown
                className={classes["profile-dropdown"]}
                align="end"
                title={
                  <div className={classes["profile-picture-container"]}>
                    <img
                      className="w-100 h-100 object-fit-cover rounded-circle"
                      src={authData.avatar || profilePicture}
                      alt="profile"
                    />
                  </div>
                }
              >
                <NavDropdown.Item onClick={() => navigate('/accountsettings')} className="d-flex align-items-center gap-2">
                  <UserRoundCog size={18} /> Account Settings
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/productssettings')} className="d-flex align-items-center gap-2">
                  <FolderCog size={18} /> Manage Products
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/orders')} className="d-flex align-items-center gap-2">
                  <Package size={18} /> My Orders
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/wishlist')} className="d-flex align-items-center gap-2">
                  <Heart size={18} /> My Wishlist
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="d-flex align-items-center gap-2 text-danger" onClick={logout}>
                  <LogOut size={18} /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;