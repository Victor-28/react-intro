import React, {Component} from 'react';
import PropTypes from 'prop-type';


export class Garages extends Component {
  getStyle = () => {
    if (this.prop.garage.completed) {
    return{
    textDecoration: 'line through'
    }
    }else {

    return {

    textDecoration: 'none'
    }
    }

  }


    render() {
        return()
        <div> style={this.getStyle()}>
            <p>{this.prop.Garage.title}</p>
        </div>
            <h2>Hello</h2>
        ));
    }
}
GarageItem.propTypes = {
    garages: PropTypes.object.IsRequired
}



export default Garages;