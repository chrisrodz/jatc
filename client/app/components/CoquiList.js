import React from 'react';
import axios from 'axios';

class CoquiList extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        coquis: [{
                                message: 'Changing the a example coqui'
                        }]
                }
        }
        componentDidMount() {
                console.log('testing');
                this.init()
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
                        <ul className='list-group'>
                                {this.state.coquis.map((coqui, index) => (
                                        <li className="list-group-item" key={coqui.id}> {coqui.message} </li>
                                ))}
                        </ul>
                )
        }
}
export default CoquiList;
