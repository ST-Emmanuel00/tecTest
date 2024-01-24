import React from 'react'

export const Modal = ({ onClick, children, value , closedModal}) => {
    return (
        <div className='card myModal'>
            <div  >

                {children}


                <div className='myModal-footer'>

                    <button type='button' className='btn btn-purple' onClick={onClick}>{value}</button>
                    <button type='button' className='btn btn-secondary m-2' onClick={closedModal }>cerrar</button>

                </div>



            </div>

        </div>)
}
