import React from 'react'
import {Link} from 'react-router-dom'

const categories = ['Keycaps', 'BareboneKits', 'Switches', 'Keyboards']

const Main = () => {

    const categoriesMap = categories.map(item => (
        <Link key={item} className={`${item.toLowerCase()}-container`} to={`/home/${item.toLowerCase()}`}>
            <p className="text" >{item}</p>
        </Link> 
    ))

    return (
        <>
        <h1>Building Your First Mechanical Keyboard is Easier Than Ever</h1>
        {categoriesMap}
        </>
    )
}

export default Main;