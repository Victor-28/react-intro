import React, {Component} from 'react';
class Garages extends Component {
    render() {
        return this.props.garage.map((garage) => (
            <h2>Hello</h2>
        ));
    }
}
export default Garages;