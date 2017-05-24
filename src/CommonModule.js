/**
 * Created by long on 5/23/17.
 */
import React, { Component } from 'react';


export default class CommonModule extends Component {
    render() {
        return (
            <div className="map-wrapper">
                <h3>commonModule</h3>
                <style>{css}</style>
            </div>

        );
    }
} ;
const css = `

  .map-wrapper {
         width:1000px;
         height:1000px;
      
    }
    
    


`;
