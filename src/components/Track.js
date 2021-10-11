import React from "react";
import styles from './track.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class Track extends React.Component {
  constructor(props){
    super(props);
  } 

  render() {
    return(
    <div className={styles.container}>
      <div className={styles.box_1}>
        <div className={styles.box_1_container}>
          <div className={styles.box_1_container_box_1}>
            <button className={styles.playButton} onClick={() => this.props.action(
              this.props.item.track.name, 
              this.props.item.track.artists[0].name,
              this.props.item.track.album.name,
              this.props.index)}>
            </button>
          </div>
          <div className={styles.box_1_container_box_2}>
            <img className={styles.album} src={this.props.item.track.album.images[0].url}/>
          </div>
          <div className={styles.box_1_container_box_3}>
            <h1 className={styles.trackName}>{this.props.item.track.name}</h1>
            <h1 className={styles.text}>{this.props.item.track.artists[0].name}</h1>
          </div>
        </div>
      </div>

      <div className={styles.box_2}>
        <h1 className={styles.text}>{this.props.item.track.album.name}</h1>
      </div>
    </div>
    )
  }
}

