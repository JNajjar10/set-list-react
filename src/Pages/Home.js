import React, { Component } from 'react'
import axios from '../axios/index';
import Carousel from '../components/Carousel';
import Banner from '../components/Banner';
import styles from './home.module.css'
import hash from '../utilities/hash';

export default class Home extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {
          userPlaylists: [],
          featuredPlaylists: [],
          isLoaded: false,
          token: ""
        } 
      } 
    
      async componentDidMount() {
        let token = hash.access_token;
        await axios.get('/authenticate',{
          headers: {
            'Authorization': `${token}`,
          }
        })
        .then(resp => {
          console.log(resp.data)
          this.setState({
            token: token
          })
        })
        .catch(console.log)

        await axios.get('user/playlists')
        .then(resp => { 
          console.log(resp.data)
          this.setState({
            isLoaded: true,
            userPlaylists: resp.data
          })
        })
    
        await axios.get('playlists/trending')
        .then(resp => { 
          console.log(resp.data)
          this.setState({
            isLoaded: true,
            featuredPlaylists: resp.data
          })
        })
       }
      render() {
        var { isLoaded, items} = this.state;
    
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
    
        if (!isLoaded) {
          return <div>Loading...</div>;
        }
        else {
          return (
            <div className={styles.body}>
              <div>
                <Banner/>
              </div>
              <div className={styles.body}>
                <Carousel name={'User Playlists'} data={this.state.userPlaylists}/>
                <Carousel name={'Featured Playlists'} data={this.state.featuredPlaylists}/>
                <Carousel name={'User Playlists'} data={this.state.userPlaylists}/>
              </div>
            </div>
          );
        }
      }
    
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}