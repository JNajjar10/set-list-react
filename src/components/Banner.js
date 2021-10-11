import styles from './banner.module.css';
import React from 'react'
import StockFootage from '../video/StockFootage.mp4';
import YoutubeBackground from 'react-youtube-background'



function Banner() {
    return (
        <header>
            <div className={styles.gradient_overlay}>
                <video className={styles.video} autoPlay loop muted>
                    <source src={StockFootage} type='video/mp4'/>
                </video>
                <div className={styles.overlay}>
                    <h1 className={styles.title}>Set List.</h1>
                    <p className={styles.description}>your playlists, performed.</p>
                </div>
            </div>
        </header>
    )
}

export default Banner;