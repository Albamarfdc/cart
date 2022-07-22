import React from 'react'
import { Link } from 'react-router-dom'
import { CgUser } from "react-icons/cg";
import {GiShoppingCart} from 'react-icons/gi'




const Header = (props) => {
  const {countItems } =props
  return (
    <div className=' row block'>
      <Link className='link' to='/'><h1>Shopping Cart</h1></Link>
    <div>
        <Link className='link' to='/cart'>
          <Link className='link' to='/signin'><CgUser size={30} /></Link>
          < GiShoppingCart size={30} />{''}
          {countItems ? (
            <button className='badge'>{countItems}</button>
            ) :('')
          }
        </Link>
    </div>
  </div>
    
  )
}

export default Header