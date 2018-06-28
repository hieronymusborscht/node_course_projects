import React from 'react';
import Modal from 'react-modal';




const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Label"
            onRequestClose={props.handleClearSelectedOption}
        >
           <h3>Selected Option</h3>
           {props.selectedOption && <p>{props.selectedOption}</p>}
           <button onClick={props.handleClearSelectedOption}>close</button>
        </Modal>
    );


export default OptionModal;