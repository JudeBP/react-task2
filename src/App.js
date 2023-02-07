import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css'
import data from './data';
import Modal from 'react-modal';
import Groceries from './Groceries';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(88, 88, 88, 0.75)',
    },
    content: {
        backgroundColor: '#282c34',
        color: 'white',
        border: 'none',
        minWidth: '400px',
        maxWidth: '600px',
        position: 'absolute',
        left: '50%',
        right: '50%',
        transform: 'translate(-50%)',
    },
};

Modal.setAppElement('#app');

function App() {

    // For modals
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // Groceries
    const groceries = ["Soap", "Shampoo", "Beef Cuts", "Bread", "Tissues"]

    //   Open modal
    const openModal = (employee) => {
        setModalOpen(true)
        setModalContent(employee);
    }
    //  Close modal
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="App">
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Sample Modal"
            >
                <div className="container">
                        <img className="avatar modal-image" src={modalContent.image} />
                    <div className="details">
                        <h3 className="name"> {modalContent.name} </h3>
                        <div> Age: {modalContent.age} </div>
                        <div> Date of Birth: {modalContent.dob} </div>
                        <div> Salary: {modalContent.salary} </div>
                        <div> Designation: {modalContent.designation} </div>
                        <div> Department: {modalContent.department} </div>
                    </div>
                </div>
                <button onClick={closeModal} class="close-btn">Close</button>
            </Modal>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Jude's Assessment 2</p>
                <h3>
                    Groceries List
                    <Groceries groceries={groceries}/>
                </h3>
                <h3>
                    Employees List
                </h3>

                <div className="employees-list">
                    {data.map(employee => {
                        return (
                            <div onClick={() => openModal(employee)} className="employee">
                                <div className="employee-image">
                                    <img className="avatar" src={employee.image} />
                                </div>
                                <div className="employee-data">
                                    <div> Name: {employee.name} </div>
                                    <div> Age: {employee.age} </div>
                                </div>
                                <div className="view-employee"> View Employee </div>
                            </div>
                        )
                    })}
                </div>
            </header>
        </div>
    )
}

export default App