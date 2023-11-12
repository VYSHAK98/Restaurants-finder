import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import OperatingHours from '../components/OperatingHours';
import Reviews from '../components/Reviews';



function SingleView() {

    //state
    const [AllData, setData] = useState([])

    //create and object fro useParams
    const { id } = useParams()
    // console.log(id);

    const fetchAllDatas = async () => {
        const result = await axios.get('/restaurants.json')
        setData(result.data.restaurants);
    }

    useEffect(() => {
        fetchAllDatas()
    }, [])

    // find the object of that particular item from array
    const singleData = AllData.find(i => i.id == id)
    console.log(singleData);

    return (
        <div>
            {singleData &&
                <Row className='p-5'>
                <Col className='p-5'>
                    <img style={{height:'600px',width:'75%'}} src={singleData.photograph} alt="" />
                </Col>
                <Col className='me-5 pe-5'>
                <h1 className='text-danger mt-5'>{singleData.name}</h1>
                    <ListGroup className='fs-4 mt-3 pt-5'>
                        <ListGroup.Item className='mt-3'>
                            Address :<span className='text-danger'> {singleData.address}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            Neighborhood :<span className='text-danger'> {singleData.neighborhood}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            Cuisine type  : <span className='text-danger'>{singleData.cuisine_type}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-3'>

                           <OperatingHours data={singleData.operating_hours}></OperatingHours>

                        </ListGroup.Item>
                        <ListGroup.Item className='mt-3'>
                            <Reviews reviewData={singleData.reviews}></Reviews>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            }
        </div>
    )
}

export default SingleView