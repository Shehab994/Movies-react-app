import React from 'react'
import movies from '../api/movies.json';
import Cart from './Cart';

export default function Movise() {

    return (
        movies.map((item, key) => {
            return (<Cart key={key} item={item} index={key} />)
        })
    )
}
