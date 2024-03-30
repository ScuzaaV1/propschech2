import React from 'react'
import Playerlist from './Playerlist'


const Playercard = ({list}) => {
    console.log(list)
  return (
    <div>
      {
        list.map((el,i)=><Playerlist key={i} football={el}   />)
      }
    </div>
  )
}





export default Playercard