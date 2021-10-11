import React, { useState } from 'react'
import axios from '../axios/index';
import Track from '../components/Track'
import YouTube from 'react-youtube';
import styles from './watch.module.css';


export default class Watch extends React.Component {
    

    constructor(props) {  
        super(props);
        this.changeCurrentSong = this.changeCurrentSong.bind(this);
        this.state = {
          tracks: [],
          isLoaded: false,
          currentSong: String,
          currentSongIndex: Number,
          currentVideoID: String,
        } 
      } 

      changeCurrentSong(title, artist, album, index) {
        console.log(title + artist + album)
        console.log(index)
        this.setState({
          currentSong: title
        })
        var searchParam = "video/" + title + "+" + artist + "music+live+concert+tour"
        searchParam = searchParam.replace(" ", "+")
        console.log(searchParam)
        axios.post(searchParam) 
        .then(resp => { 
            this.setState({
              isLoaded: true,
              currentVideoID: resp.data.id,
              currentSongIndex: index
            })
          })
      }


    
      async componentDidMount() {
        document.body.style.backgroundColor = "#121212";
        console.log(this.props.match.params.id)
        await axios.get('playlist/' + this.props.match.params.id + '/tracks')
        .then(resp => { 
          console.log(resp.data)
          this.setState({
            isLoaded: true,
            tracks: resp.data,
            currentSong: resp.data[0].track.name,
            currentSongIndex: 0
          })
        })

        await axios.post('video/' + this.state.tracks[0].track.name + "+" + this.state.tracks[0].track.artists[0].name + "music+live+concert+tour") 
        .then(resp => { 
            console.log(resp.data.id)
            this.setState({
              isLoaded: true,
              currentVideoID: resp.data.id
            })
          })

       }
    render() {
        const opts = {
            height: '800',
            width: '1200',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };

          const playNextSong = () => {
            console.log(this.state.currentSong)
            console.log(this.state.currentSongIndex)
            var nextTrack = this.state.tracks[this.state.currentSongIndex + 1].track
            console.log(nextTrack)
            console.log(nextTrack.name)
            console.log(nextTrack.artists[0].name)
            console.log(nextTrack.album.name)
            this.changeCurrentSong(nextTrack.name, nextTrack.artists[0].name, nextTrack.album.name, this.state.currentSongIndex + 1)
          }

        if (!this.state.tracks || this.state.tracks.length <= 0) {
            return <div>Loading...</div>
        }  
        return (
            <div className={styles.body}>
                {this.state && this.state.currentVideoID &&
                    <YouTube 
                    className={styles.player} 
                    videoId={this.state.currentVideoID} 
                    opts={opts} 
                    onReady={this._onReady}
                    onEnd={playNextSong} />
                }
                <div className={styles.container}>
                  <div className={styles.box_1}>
                    <h1 className={styles.text}>#</h1>
                    <h1 className={styles.text}>TITLE</h1>
                  </div>
                  <div className={styles.box_2}>
                    <h1 className={styles.text}>ALBUM</h1>
                  </div>
                </div>         
                {this.state && this.state.tracks &&
                 this.state.tracks.map((track, index)=>
                  (
                    <Track key={index} item={track} action={this.changeCurrentSong} index={index}/>
                  )
                )}
            </div>
        )
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}
