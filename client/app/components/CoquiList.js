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
        handleSubmit(e) {
                e.preventDefault();
                if (!this.state.message) {
                        return
                }
                axios.post(`/coqui`, {message: this.state.message}).then((res) => {
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
                                        <form onSubmit={(e) => this.handleSubmit(e)}>
                                                <input type='text' className='form-control' placeholder='Add new coqui' value={this.state.message} onChange={(e) => this.handleMessageChange(e)}/>
                                                <span className='input-group-btn'>
                                                        <button className='btn btn-default' type='submit'> Submit </button>
                                                </span>
                                        </form>
                                </div>
                        </div>
                )
        }
}
export default CoquiList;
