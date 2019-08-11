import React, { Component } from 'react';

class Likes extends Component {
    render() { 
        return ( 
            <div> 
                <h6>{this.props.faveFood}</h6>
                <h6>{this.props.faveDrink}</h6>
                </div> 
         );
    }
}
 
export default Likes;