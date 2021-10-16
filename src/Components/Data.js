

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Main from "./Main";
import data from "bootstrap/js/src/dom/data";
import MainModal from "./MainModal";
import {Link} from "react-router-dom";

const

    ModalExample = (props) => {
    const {
        buttonLabel='Быстрый просмотр',
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="white" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} >
                <ModalHeader toggle={toggle}>  </ModalHeader>
                <ModalBody>

                    <MainModal/>

                    <Link to={"/three"}  className='text-decoration-none bord d-flex justify-content-center mt-4'>

                    <button className='btn btn-danger'>Больше информации о товаре</button>
                    </Link>

                </ModalBody>

            </Modal>
        </div>
    );
}

export default ModalExample;