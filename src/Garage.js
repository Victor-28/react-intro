import React, {Component} from 'react';
import GarageV from'./GarageV';
import PropTypes from 'prop-type';

class Garages extends Component {
    render() {
        return this.props.garage.map((garage) => (
            <GarageV key={Garage.id} Garage={Garage}/>



        ));
    }
}
Garages.propTypes = {
    garages: PropTypes.array.IsRequired
}
export default Garages;