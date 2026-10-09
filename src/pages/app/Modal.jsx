import React from 'react'
import "./Modal.css"


export default function Modal({isOpen, setModalOpen, children}){
    if (isOpen){
        return (
            <div className='modal-fundo'>
                
                <div className='modal'>
                    <div className="close">
                        <button onClick={setModalOpen} >X</button>
                    </div>
                    <div className='modal-content'>
                        {children}
                    </div>
                    
                </div>
            </div>
        )
    }

    return null
}