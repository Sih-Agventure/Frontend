import React, { PureComponent } from 'react';

import {FaHeart} from 'react-icons/fa'
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
//   import ReactTable from '@kavience/react-table';


  
  const History = () => {
    const dataSource = [
      {
        id: 1,
        name:
          'kevinkevinkevinkevinkevikevinkevinkevinkevinkevinkevinkevinkevinkevinkevinn',
        age: 28,
        height: '168cm',
        weight: '75kg'
      },
      {
        id: 2,
        name: 'kevin2',
        age: 28,
        height: '168cm',
        weight: '75kg'
      },
      {
        id: 3,
        name: 'kevin3',
        age: 28,
        height: '168cm',
        weight: '75kg'
      }
    ];
    
    return (
      <div >
          <div>
              <h1 style={{fontSize:'30px',padding:'20px',textAlign:"center"}}><b>PREVIOUS BOOKINGS</b></h1>
          </div>
          <Center>
          <table 
        style={{fontSize:'20px'}}>
            <tr style={{padding:'10px'}}>
                <th style={{padding:'10px'}} align={Center}>Product Name</th>

                <th style={{padding:'10px'}} align={Center}>Product ID</th>
                <th align={Center} ><Center>Action</Center></th>
                <th align={Center} ><Center>User</Center></th>
                <th align={Center} style={{padding:'10px'}}>Start Date</th>
                <th align={Center} style={{padding:'10px'}}>End Date</th>
                <th align={Center} style={{padding  :'10px'}}>Rent Price</th>
            </tr>
            <tr >
                <td style={{padding: '10px'}}><Center>Tractor</Center></td>
                <td style={{padding:'10px'}}><Center>6478333</Center></td>
                <td style={{padding:'10px'}}><Center>Buy</Center></td>
                <td style={{padding:'10px'}}>Himanshu(Farmer)</td>
                <td style={{padding:'10px'}}>12/02/2022</td>
                <td style={{padding:'10px'}}>14/02/2022</td>
                <td><Center>
                3999</Center></td>
            </tr>
            <tr style={{backgroundcolor:'Grey'}}>
                <td style={{padding: '10px'}}><Center>Axe</Center></td>
                <td style={{padding:'10px'}}><Center>6478333</Center></td>
                <td style={{padding:'10px'}}><Center>Rented</Center></td>
                <td style={{padding:'10px'}}>Anuj(Farmer)</td>
                <td style={{padding:'10px'}}>12/02/2022</td>
                <td style={{padding:'10px'}}>14/02/2022</td>
                <td><Center>
                299</Center></td>
            </tr>
            <tr >
                <td style={{padding: '10px'}}><Center>Shovel</Center></td>
                <td style={{padding:'10px'}}><Center>6478333</Center></td>
                <td style={{padding:'10px'}}><Center>Rented</Center></td>
                <td style={{padding:'10px'}}>Prasanna(Farmer)</td>
                <td style={{padding:'10px'}}>12/02/2022</td>
                <td style={{padding:'10px'}}>14/02/2022</td>
                <td ><Center>199</Center></td>
            </tr>
            <tr >
                <td style={{padding: '10px'}}><Center>Rake</Center></td>
                <td style={{padding:'10px'}}><Center>6478333</Center></td>
                <td style={{padding:'10px'}}><Center>Hired</Center></td>
                <td style={{padding:'10px'}}>Neel(Farmer)</td>
                <td style={{padding:'10px'}}>12/02/2022</td>
                <td style={{padding:'10px'}}>14/02/2022</td>
                <td >
                <Center>
                349</Center></td>
            </tr>
            <tr >
                <td style={{padding: '10px'}}><Center>knife</Center></td>
                <td style={{padding:'10px'}}><Center>6478333</Center></td>
                <td style={{padding:'10px'}}><Center>Sold</Center></td>
                <td style={{padding:'10px'}}>Rohit(Farmer)</td>
                <td style={{padding:'10px'}}>12/02/2022</td>
                <td style={{padding:'10px'}}>14/02/2022</td>
                <td ><Center>499</Center></td>
                
            </tr>
        </table>
          </Center>
      </div>
    );
  };
  
  export default History;