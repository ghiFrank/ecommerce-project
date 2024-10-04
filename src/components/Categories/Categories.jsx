import React from 'react'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className='flex h-[80vh] gap-[10px] m-[10px] mt-[100px]'>
      <div className='colo'>
        <div className='rowo'>
          <img src='https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg' className='w-[100%] h-[100%] object-cover'/>
          <button>
            <Link  to="products/1">Sale</Link>
          </button>
        </div>
        <div className='rowo'>
        <img src='https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg' className='w-[100%] h-[100%] object-cover'/>
          <button>
            <Link  to="products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className='colo'>
        <div className='rowo'>
        <img src='https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg' className='w-[100%] h-[100%] object-cover'/>
          <button>
            <Link  to="products/1">Men</Link>
          </button>
        </div>
      </div>
      <div className='colo'>
        <div className='rowo'>
        <div className='colo'>
            <div className='rowo'>
              <img src='https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg' className='w-[100%] h-[100%] object-cover'/>
              <button>
                <Link  to="products/1">Children</Link>
              </button>
            </div>
          </div>
          <div className='colo'>
            <div className='rowo'>
              <img src='https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg' className='w-[100%] h-[100%] object-cover'/>
              <button>
                <Link  to="products/1">Sandals</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='rowo'>
          <img src='https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg' className='w-[100%] h-[100%] object-cover'/>
          <button>
            <Link  to="products/1">Socks</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories