import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestCard({item}) {
  return (
    <div>
      <Link to={`/view/${item.id}`} style={{textDecoration: 'none'}}>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.photograph} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.address}
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </div>
  )
}

export default RestCard