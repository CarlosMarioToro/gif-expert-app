import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        // categories.push('Valorant');
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
            // setCategories = {setCategories} 
            onNewCategory = {event => onAddCategory(event)}
        />
        {
            categories.map(category => (
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li>
                    // </div>
                    <GifGrid key={category} category={category} />
                ))
        }
    </>
    )
}
