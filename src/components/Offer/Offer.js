import React from 'react'

import rounded from '../../Assets/rounded.svg'
import styles from './Offer.module.css'

const Offer = ({title, desc, image}) => {
    return (
        <div className={styles.Offer}>
            <div className={styles.OfferImg}>
                <img className={styles.Rounded1} src={rounded} alt='square' />
                <img className={styles.Rounded2} src={rounded} alt='square' />
                <div className={styles.OfferPic}>
                    <img src={image} alt='people' />
                </div>
            </div>
            <div className={styles.OfferText}>
                <span>{title}</span>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Offer