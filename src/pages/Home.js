import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RestCard from '../components/RestCard'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {

    const [restaurants,setRestaurants]=useState([])

    const fetchData=async()=>{
       const result= await axios.get('/restaurants.json')
       setRestaurants(result.data.restaurants);
    }

    useEffect(()=>{
        fetchData()
    },[])

    // console.log(restaurants);

  return (
        <div>
            <Row className='mt-5 p-4'>
                <Col>
                <h2 className='mt-3 mb-5 text-danger'>Find The Restaurants Of Your Choice</h2>
                <p className='fs-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates placeat adipisci voluptatum molestiae id, iusto aspernatur sapiente voluptatibus vitae odit assumenda ratione omnis perspiciatis harum commodi quaerat velit rerum?</p>
                </Col>
                <Col className='text-center'>
                <img src="https://i.postimg.cc/pXpryxsW/cartoon-ganesh-catering-food-restaurant-harapan-jaya-catering-logo-cooking-food-truck-png-clipart-re.png" alt="" />
                </Col>
            </Row>

            <Row>
                {
                    restaurants.map(i=>(
                       <Col className='ps-3 mt-3 p-2 mb-5' lg={3} md={4} sm={6}> <RestCard item={i}></RestCard></Col>
                    ))
                }
            </Row>
        </div>
  )
}

export default Home