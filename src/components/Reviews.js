import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({reviewData}) {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Reviews</Accordion.Header>
                    <Accordion.Body>
                       {reviewData?.map(i=>(
                        <div>
                            <p className='fs-5'>Name : {i.name}</p>
                            <p className='fs-5'>Date : {i.date}</p>
                            <p className='fs-5'>Rating : {i.rating}</p>
                            <p className='fs-5'>Comments : {i.comments}</p>
                            <hr /> 
                            <hr />
                        </div>
                       
                       ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Reviews