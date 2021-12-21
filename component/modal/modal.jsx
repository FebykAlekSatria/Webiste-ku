import React, { Children } from 'react'
import { Modal } from 'react-bootstrap'

const ModalForm = (props) => {

    return (
        <div>
            <Modal show={props.show}>
                <div className="text-center pt-4">
                    <h5 className="font-bold">{props.title}</h5>
                </div>
                {
                    props.children
                }
            </Modal>
        </div>
    )
}

export default ModalForm