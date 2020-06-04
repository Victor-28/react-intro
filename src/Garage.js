import React, {Component} from 'react';
import GarageV from'./GarageV';

class Garages extends Component {
    render() {
        return this.props.garage.map((garage) => (
            <GarageV key={Garage.id} Garage={Garage}/>

            

        ));
    }
}
export default Garages;