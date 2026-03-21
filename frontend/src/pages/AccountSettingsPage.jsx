import { useState } from 'react'
import { Button, Container, Row, Col, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import MainLayout from '../components/mainLayout/MainLayout'
import EditAccountForm from '../components/editAccountForm/EditAccountForm'
import useUsers from '../hooks/useUsers'

const AccountSettingsPage = () => {
  const navigate = useNavigate()

  const { deleteAccount } = useUsers()
  const [localError, setLocalError] = useState(null) 

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure? This action is irreversible and will delete all your data.")) {
      try {
        await deleteAccount()
        navigate('/login')
      } catch (err) {
        setLocalError(err.message)
      }
    }
  }

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

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="mb-4">Account Settings</h2>

            {localError && <Alert variant="danger" onClose={() => setLocalError(null)} dismissible>{localError}</Alert>}

            <EditAccountForm />
            <hr className="my-5" />
            <div className="mt-5 p-4 border border-danger rounded bg-light">
              <h5 className="text-danger">Danger Zone</h5>
              <p className="text-muted small">Once you delete your account, there is no going back. Please be certain.</p>
              <Button variant="outline-danger" onClick={handleDeleteAccount}>
                Delete My Account
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default AccountSettingsPage