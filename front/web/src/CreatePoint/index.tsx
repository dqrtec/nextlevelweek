import React from 'react';
import {Map, TileLayer} from 'react-leaflet';

const CreatePoint = () => {
    return (
        <div>
        <h1>criandndo Ponto</h1>
        <form> 
            <span>Nome</span>
            <input type="text"/>
            <br />

            <span>Nome</span>
            <input type="text"/>
            <br />

            <Map center={[-20,-20]} zoom={10}>
            <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
            </Map>

            <ul>
                <li>
                    <img src="" />
                </li>
            </ul>
            <button type="submit"> Enviar </button>
        </form>
        </div>
    ) ;
};

export default CreatePoint;
