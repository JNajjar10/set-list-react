import * as React from "react";
import Flicking from "@egjs/react-flicking";
import Playlist from "./Playlist";
import axios from '../axios';

export default class FreeScroll extends React.Component {

    render() {
    if (!this.props.data || this.props.data.length <= 0) {
        return <div>Loading...</div>
    }  
    return (
      <div id="free-scroll" className="container">
        <Flicking
          className="flicking flicking1"
          gap={10}
          circular={true}
          deceleration={0.015}  
          autoResize = {true}
          moveType="freeScroll"
        >
         {this.props && this.props.data &&
         this.props.data.map(info => (
             <Playlist key={info.id} playlistData={info}/>
         ))}    
        </Flicking>
      </div>
    );
  }
}
