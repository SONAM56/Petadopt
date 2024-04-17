import React from 'react'
import dogicon from '../assets/icons/dogicon.png'

const IconCard = (props) => {
  return (
    <>
        <div className="flex justify-center items-center">
        <div>
            <div className="card flex flex-col justify-center py-5 px-8 bg-white rounded-lg shadow-2xl">
            <div className="prod-img">
                <img src={props.icon}
                    className="w-24 object-cover object-center" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p className="m-auto font-normal">{props.name}</p>
            </div>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default IconCard