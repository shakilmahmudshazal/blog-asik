import React, { Component } from 'react';
import Table from './table';
import Form from './form';
import "./notes.css";
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
class Notes extends Component {
    constructor(props) {
        super(props);
        const localNotes = JSON.parse(window.localStorage.getItem("localNotes"));
        this.state = { 
            notes:localNotes? localNotes: [],
            isModalVisible : false,
            // notes: [],
            tempNote:"",
         }
    }

    handleChange=(e)=>{
        console.log("this is ",e.target.value);
        this.setState({tempNote:e.target.value});
    }
    handleSave=()=>{
       this.setState({notes : [...this.state.notes, {details: this.state.tempNote , id: Date.now()}]},()=>{
        window.localStorage.setItem("localNotes",JSON.stringify(this.state.notes));
        console.log("saving")
       })
       this.setState({tempNote:""});
    }

    onDelete=(id)=>{
        console.log("deleting",id);
        let notesFromState = this.state.notes;

        notesFromState = notesFromState.filter(item=>item.id!=id);
        this.setState({notes: notesFromState},()=>{
                window.localStorage.setItem("localNotes",JSON.stringify(this.state.notes));
        });


        // this.setState((prevState)=>{
        //     prevState.notes = prevState.notes.filter(item => item.id !== id);
        //     return prevState;
        // },()=>{
        //     window.localStorage.setItem("localNotes",JSON.stringify(this.state.notes))
        // })
    }
    handleOk=()=>{
        this.setState({isModalVisible : false})
    }

    handleCancel=()=>{
        this.setState({isModalVisible : false})
    }
    showModal=()=>{
        this.setState({isModalVisible : true})

    }
    render() { 
        return ( <div className="container-div">
            <Form tempNote={this.state.tempNote} handleChange={this.handleChange} handleSave={this.handleSave} />
            <Table onEdit={this.showModal} notes={this.state.notes} onDelete={this.onDelete}/> 
            
            <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                shakil
                <Button>shakil</Button>
            </Modal>
        </div> );
    }
}
 
export default Notes;