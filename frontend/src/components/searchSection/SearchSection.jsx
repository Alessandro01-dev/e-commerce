import classes from './SearchSection.module.css'
import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

const SearchSection = ({ onSearchChange, currentTitle }) => {
  const [query, setQuery] = useState(currentTitle || '');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchChange(query);
  };

  return (
    <Container className="my-5 py-5" >
      <Row className='mb-3'>
        <Col
          className='mx-auto'
          xs={12}
          md={10}
          lg={6}
        >
          <div className='d-flex flex-column border rounded shadow-sm p-3 gap-3'>
            <h3 className="m-0 text-center">What product are you looking for?</h3>
            <Form onSubmit={handleSearch} className='d-flex gap-2'>
              <Form.Control
                className={classes['custom-input']}
                name="query"
                placeholder="Search product"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">search product</Form.Control.Feedback>
              <Button type="submit" variant='dark'>
                Search
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchSection