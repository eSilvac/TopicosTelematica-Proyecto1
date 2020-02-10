import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { getAll } from '../../services/GpsService'

const App = () => {
  const [gpsData, setGpsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const fetchData = async () => {
      try {
        const data = await getAll(true)
        console.log(data)

        setGpsData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error refreshing session.')
      }
    }

    fetchData()
  },[]);


  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center mt-4">
          <Col xs={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                </tr>
              </thead>
              <tbody>
                {gpsData.map((value, index) => ( 
                  <tr>
                    <td>{index}</td>
                    <td>{value.latitude}</td>
                    <td>{value.longitude}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
