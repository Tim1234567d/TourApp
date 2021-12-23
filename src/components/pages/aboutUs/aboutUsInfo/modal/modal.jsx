import React from "react";
import s from"./modal.module.css"

const Modal = ({active, setActive, children, onModalClose }) => {
    return (
        <div className={ active ? s.modal : "" } onClick={() => setActive(false)}>
            <div className={active ? s.modal__content : s.modal__contentClose } onClick= {e => e.stopPropagation() }>
            <h2 className={s.modal__close} onClick={onModalClose}>×</h2>
                {children} 

         </div>
        </div>
    )
}

export default Modal;