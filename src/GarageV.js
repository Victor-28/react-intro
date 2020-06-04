import React, {Component} from 'react';
import PropTypes from 'prop-type';
class Garages extends Component {
    render() {
        return this.props.garage.map((garage) => (
        <div>
            <p>{this.prop.Garage.title}</p>
        </div>
            <h2>Hello</h2>
        ));
    }
}
Garages.propTypes = {
    garages: PropTypes.array.IsRequired
}



export default Garages;