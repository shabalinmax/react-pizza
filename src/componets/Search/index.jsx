import React from "react";

import styles from './Search.module.scss'



const Search = ({searchValue,setSearchValue}) => {
    const clearInput = () => {
        setSearchValue('')
    }
    return (
        <div className = {styles.root} >
        <input onChange={(event) =>
            setSearchValue(event.target.value)} value={searchValue} type = "text"  placeholder = "Поиск пиццы... " />
            <div onClick={() => clearInput()}>
                <button>x</button>
            </div>


        </div>)
}

export default Search