import React from 'react'

export const ModalButton = ({ onClick, children }) => {
    return (
        <button className='btn btn-dark m-2' onClick={onClick}> {children}</button>
    )
}
