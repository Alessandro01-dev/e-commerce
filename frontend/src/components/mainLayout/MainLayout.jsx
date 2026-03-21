import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout