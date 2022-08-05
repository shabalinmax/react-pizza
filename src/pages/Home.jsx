import React from "react";
import Categories from '../componets/Categories'
import Sort from '../componets/Sort'
import Index from "../componets/PizzaBlock";
import Skeleton from "../componets/PizzaBlock/Skeleton";
import axios from "axios";
function  Home({onClickAdd, searchValue}) {
    const [categoryId, setCategoryId] = React.useState(0)
    const [selected, setSelected] = React.useState(0)

    React.useEffect( () => {

        let rating = selected === 0 ? 'rating' : ''
        let price = selected === 1 ? 'price' : ''
        let alpabet = selected === 2 ? 'title' : ''
        setIsLoading(true)


        axios.get('https://62e22afb3891dd9ba8e1453c.mockapi.io/Items?'
            + 'category=' + categoryId  + '&sortBy=' + rating + price + alpabet + '&order=desc')
            .then(res => {
                setItems(res.data)
                setIsLoading(false)})

        }, [categoryId, selected]
    ) // чтобы рендерились один раз пиццы
    const [items, setItems] = React.useState([]) // отображение пицц/скелетов
    const [isLoading, setIsLoading] = React.useState(true)
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key = {index} /> )
    const pizzas =
        items.filter(obj =>
            obj.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj) =>
            <Index
                onClickAdd = {onClickAdd}
                key = {obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl = {obj.imageUrl}
                sizes = {obj.sizes}
                types={obj.types}/> )
    return (

        <div>
            <div className="content__top">
                <Categories categoryId={categoryId} setCategoryId={setCategoryId}/>
                <Sort selected={selected} setSelected={setSelected} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ?  skeletons : pizzas
                }
            </div>

        </div>
    )
}

export default Home






