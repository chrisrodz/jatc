import React from 'react';

class CoquiList extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        coquis: [{
                                message: 'This is an example coqui'
                        }]
                }
        }
        render() {
                return (
                        <ul className='list-group'>
                                {this.state.coquis.map((coqui, index) => (
                                        <li className="list-group-item" key={index}> {coqui.message} </li>
                                ))}
                        </ul>
                )
        }
}
export default CoquiList;
