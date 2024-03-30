import React from 'react'
import {  Card } from 'react-bootstrap';
import './Playerlist.css';
import './Playercard';
import { propTypes } from 'react-bootstrap/esm/Image';

const Playerlist = ({football}) => {
    return (
        <div className='cards'>
              <Card className="cartaa">
              <Card.Img variant="top" src={football.imageUrl} className="img" />
              <Card.Body>
              <Card.Title className='name'>{football.name}</Card.Title>
              <Card.Text className='team'>{football.team}</Card.Text>
              <Card.Text className='bled'>{football.nationality}</Card.Text>
              <Card.Text className='nmbr'>{football.playerNumber}</Card.Text>
              </Card.Body>
              </Card>
        </div>
      )
    };
    
    Playerlist.defaultProps ={
      football:{

        imgURL:".....",
        name:"......",
        team:"......",
        nationality:"........",
        playerNumber:"........",
      }
  }

  Playerlist.propTypes = {
    football : propTypes.string,
    list : propTypes.string,
  }
  

export default Playerlist