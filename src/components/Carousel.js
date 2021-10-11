import React from 'react';
import FreeScroll from './FreeScroll';
import axios from '../axios';
import styles from './carousel.module.css';


export default class Carousel extends React.Component {


    render() {
        if (!this.props.data || this.props.data.length <= 0) {
            return <div>Loading...</div>
        }  
        return (
            <div className={styles.container}>
                <div className={styles.title_container}>
                    <h1 className={styles.title}>{this.props.name}</h1>                            
                </div>
                <FreeScroll data={this.props.data}/>
            </div>        
            )
    }

}