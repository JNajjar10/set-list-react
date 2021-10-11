import React from "react";
import styles from './playlist.module.css'
import {Link} from 'react-router-dom'

  
export default class Playlist extends React.Component {
  constructor(props){
    super(props);
  } 

  render() {
    return(
      <div className={styles.card}>
        <img className={styles.img} src={this.props.playlistData.images[0].url}/>
          <Link to ={`/watch/${this.props.playlistData.id}`}>
            <button className={styles.btn}>Play</button>
          </Link>
      </div>)
  }
}

