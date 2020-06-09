import React, {Component} from 'react';
import PropTypes from 'prop-type';


export class Garages extends Component {
  getStyle = () => {

    return{
    background: '#f4f4f4',
    padding: '10px','1px #ccc dotted',
    borderBottom: '1px #'
    textDecoration: this.prop.GarageV.completed ?
    'line-through'


    render() {
        return()
        <div> style={this.getStyle()}>
            <p>{ this.prop.Garage.title }</p>
        </div>
            
        ));
    }
}
GarageItem.propTypes = {
    garages: PropTypes.object.IsRequired
}



export default Garages;