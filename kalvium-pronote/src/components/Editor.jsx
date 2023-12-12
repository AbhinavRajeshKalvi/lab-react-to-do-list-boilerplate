import React, { Component } from "react";
import './Editor.css'

class Notepad extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            value: '',
            items: []
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    addItem() {
        if (this.state.value.trim() !== '') {
            this.setState(prevState => ({
                items: [...prevState.items, prevState.value],
                value: ''
            }));
        }
    }

    deleteItem(index) {
        this.setState(prevState => {
            const items = [...prevState.items];
            items.splice(index, 1);
            return { items };
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="input">
                        <textarea className="input-text" onChange={this.handleChange} value={this.state.value} />
                        <button className="add-btn" onClick={this.addItem}>Add Item</button>
                    </div>
                    <div className="output">
                        {this.state.items.map((item, index) => (
                            <div className="output-item" key={index}>
                                <div contentEditable={true} className="editable-item">{item}</div>
                                <button className="delete-btn" onClick={() => this.deleteItem(index)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Notepad;