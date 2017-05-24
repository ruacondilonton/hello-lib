/**
 * Created by long on 5/23/17.
 */
import React, { Component } from 'react';
import request from 'request';

export default class CommonModule extends Component {
    render() {
       this.httpGet();

        return (
            <div className="map-wrapper">
                <h3>commonModule</h3>
                <style>{css}</style>
            </div>

        );
    }


      httpGet() {
        return new Promise(function (resolve, reject) {
            let url = 'https://mapfinder-staging.herokuapp.com/mapfinder/postcode?postcode=30&sport=baseball&orderby=dis';
            console.log('url');
            console.log(url);
            const options = {
                timeout: 12000,
                headers: {
                    'Authorization': "Basic ZGV2OmRldjIwMTY=",
                    "X_API_KEY": "XrVL2DyqsA3hIF3oIfbQU7bAF7EtfRSH1ln6RL22",

                }
            };
            request.get(  url ,options, function (error, response, body) {

                if (!error && response.statusCode == 200) {
                    if (body) {
                        console.log('data',JSON.parse(body));
                        return resolve(JSON.parse(body));
                    }
                    return resolve();
                } else {
                    return reject(error || body);
                }
            });
        });
    }


} ;
const css = `

  .map-wrapper {
         width:1000px;
         height:1000px;
      
    }
    
    


`;
