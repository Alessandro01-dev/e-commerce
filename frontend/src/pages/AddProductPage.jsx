import { Button, Container } from "react-bootstrap"
import AddProductForm from "../components/addProductForm/AddProductForm"
import MainLayout from "../components/mainLayout/MainLayout"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AddProductPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Container className="mt-4">
        <Button
          variant="link" 
          className="text-dark p-0 mb-4 d-flex align-items-center gap-1 text-decoration-none"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={20} /> Back to products settings
        </Button>
        <AddProductForm />
      </Container>
    </MainLayout>
  )
}

export default AddProductPage