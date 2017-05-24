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
              // let url = 'https://mapfinder-staging.herokuapp.com/mapfinder/postcode?postcode=30&sport=baseball&orderby=dis';
              //
              // console.log('url');
              // console.log(url);
              // const options = {
              //     headers: {
              //         'Content-Type': 'application/json',
              //         'Accept': 'application/json',
              //         'Authorization':"Basic ZGV2OmRldjIwMTY=",
              //         'x-api-key': "XrVL2DyqsA3hIF3oIfbQU7bAF7EtfRSH1ln6RL22",
              //         'Access-Control-Allow-Origin': '*',
              //         'Access-Control-Allow-Headers': '*',
              //     }
              // };


              let url = 'http://128.199.90.210:8083/team/a0Rp0000004AIsVEAW';

               console.log('url');
               console.log(url);
              fetch(url)
                  .then(function (response) {
                      if (response.status >= 400) {
                          throw new Error("Bad response from server");
                      }
                      return response.json();
                  })
                  .then(function (data) {
                      console.log("=====data:", data);

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
