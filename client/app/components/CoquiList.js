import React from 'react';
import axios from 'axios';

class CoquiList extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        coquis: [],
                        message: ''
                }
        }
        componentDidMount() {
                this.init()
        }
        handleMessageChange(e) {
                this.setState({ message: e.target.value })
        }
        handleSubmit() {
                axios.post(`/coqui`, {message: this.state.message}).then((res) => {
                        console.log(res);
                        this.setState({ message: '' })
                        this.init()
                })
        }
        init() {
                axios.get(`/coqui`).then((res) => {
                        this.setState({
                                coquis: res.data.coquis
                        })
                })
        }
        render() {
                return (
                        <div>
                                <ul className='list-group'>
                                        {this.state.coquis.map((coqui, index) => (
                                                <li className="list-group-item" key={coqui.id}> {coqui.message} </li>
                                        ))}
                                </ul>
                                <div className="input-group">
                                        <input type='text' className='form-control' placeholder='Add new coqui' value={this.state.message} onChange={(e) => this.handleMessageChange(e)}/>
                                        <span className='input-group-btn'>
                                                <button className='btn btn-default' type='button' onClick={() => this.handleSubmit()}> Submit </button>
                                        </span>
                                </div>
                        </div>
                )
        }
}
export default CoquiList;
