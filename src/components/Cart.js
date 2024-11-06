import React from 'react'
// import styles from './style.module.css'

export default function Cart(props) {
    const { img, genre, year, description, rating, title, director } = props.item;

    const cartStyle = {
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        width: '295px',
        overflow: 'hidden',
        borderRadius: '7px'



    }
    const detailsStyle = {
        padding: '.5rem',
    }
    const imgStyle = {
        width: '100%',
    }

    const buttonStyle = {
        marginTop: '1rem',
        outline: 'none',
        border: 'none',
        padding: '.5rem',
        background: rating < 7.5 ? '#24ADF3' : '#F1731E',
        borderRadius: '3px'
    }
    const ratingColor = {
        background: rating < 7.5 ? '#24ADF3' : '#F1731E',

    }
    return (
        <>
            <div className="cart" style={cartStyle}>
                <img style={imgStyle} src={img} alt="" />
                <div className="details" style={detailsStyle}>
                    <h3>{title}</h3>
                    <h4>Director : {director}</h4>
                    <h4>Genre : {genre}</h4>
                    <h5>Relese Year : {year}</h5>
                    <h5>Rating : <span className='rating' style={ratingColor}>{rating}</span></h5>
                    <p>{description}</p>
                    <button style={buttonStyle} onClick={() => alert(`You watching the movie name : ${title}`)


                    }>Watch Now</button>
                </div>
            </div>
        </>
    )
}
