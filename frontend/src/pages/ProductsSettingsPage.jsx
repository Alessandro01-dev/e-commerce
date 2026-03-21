import { Button, Container } from 'react-bootstrap'
import MainLayout from '../components/mainLayout/MainLayout'
import SettingsTable from "../components/settingsTable/SettingsTable"
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const ProductsSettingsPage = () => {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <Container className="mt-4">
        <Button
          variant="link"
          className="text-dark p-0 mb-4 d-flex align-items-center gap-1 text-decoration-none"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={20} /> Back
        </Button>
        <SettingsTable />
      </Container>
    </MainLayout>
  )
}

export default ProductsSettingsPage