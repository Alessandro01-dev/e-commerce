import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Form, Button, Row, Col, Image, Alert, Spinner } from 'react-bootstrap';
import { Camera } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import useUsers from '../../hooks/useUsers';
import classes from './EditAccountForm.module.css';

const EditAccountForm = () => {
  const { authData, getProfile } = useAuth();
  const { updateAvatar, updateUser, usersIsLoading } = useUsers();

  const [formData, setFormData] = useState({ name: '', surname: '', email: '', password: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const resetForm = () => {
    if (authData) {
      setFormData({
        name: authData.name || '',
        surname: authData.surname || '',
        email: authData.email || '',
        password: ''
      });
      setPreviewUrl(authData.avatar);
      setSelectedFile(null);
      setStatus({ type: '', msg: '' });
    }
  };

  useEffect(() => {
    resetForm();
  }, [authData]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    try {
      if (selectedFile) await updateAvatar(selectedFile);
      const payload = { ...formData };
      if (!payload.password) delete payload.password;
      
      await updateUser(payload);
      await getProfile();
      
      setStatus({ type: 'success', msg: 'Profile updated successfully!' });
      setSelectedFile(null);
    } catch (err) {
      setStatus({ type: 'danger', msg: err.message || 'An error occurred' });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false
  });

  return (
    <div className={classes['form-container']}>
      {status.msg && (
        <Alert variant={status.type} onClose={() => setStatus({ type: '', msg: '' })} dismissible>
          {status.msg}
        </Alert>
      )}

      <div className="d-flex align-items-center gap-4 mb-4 pb-4 border-bottom">
        <div
          {...getRootProps()}
          className={`${classes['avatar-wrapper']} rounded-circle ${isDragActive ? classes['avatar-active'] : ''}`}
        >
          <input {...getInputProps()} />
          <Image
            src={previewUrl}
            roundedCircle
            className={classes['avatar-image']}
          />
          <div className={classes['camera-overlay']}>
            <Camera size={24} />
          </div>
        </div>
        <div>
          <h5 className="m-0">{authData?.name} {authData?.surname}</h5>
          <p className="text-muted small m-0">
            {selectedFile ? <span className="text-primary fw-bold">New image selected! Press save.</span> : "Personalize your profile information"}
          </p>
        </div>
      </div>

      <Form onSubmit={handleUpdate}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className={classes['label-bold']}>First Name</Form.Label>
              <Form.Control
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className={classes['label-bold']}>Last Name</Form.Label>
              <Form.Control
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label className={classes['label-bold']}>Email Address</Form.Label>
          <Form.Control
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className={classes['label-bold']}>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Leave blank to keep current"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </Form.Group>
        
        <div className="d-flex justify-content-end gap-2">
          <Button 
            variant="outline-secondary" 
            type="button" 
            onClick={resetForm}
            disabled={usersIsLoading}
          >
            Cancel
          </Button>
          <Button variant="dark" type="submit" className="px-4" disabled={usersIsLoading}>
            {usersIsLoading ? <><Spinner size="sm" className="me-2"/>Saving...</> : 'Save Changes'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditAccountForm;