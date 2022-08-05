import './scss/app.scss';
import './App.css';
import Header from './componets/Header'
import Home from './pages/Home'
import React from "react";
import NotFound from './pages/NotFound'
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import axios from "axios";

function App() {
 const [searchValue, setSearchValue] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true) // сделать для скелетов в будущем
    const [isDeleted, setIsDeleted] = React.useState(false)
    const [isAdded, setIsAdded] = React.useState(false)
    const deleteAllCart = () => {
       arrayOfId.forEach(el => {
           axios.delete('https://62e22afb3891dd9ba8e1453c.mockapi.io/cart/' + el)
           setIsDeleted(true)
       })
    }

    const deleteCartItem = (itemId) => {
        axios.delete("https://62e22afb3891dd9ba8e1453c.mockapi.io/cart/" + itemId)
        setIsDeleted(true)
    }
    React.useEffect(() => {
        setIsLoading(true)
        setIsDeleted(false)
        setIsAdded(true)
        axios.get('https://62e22afb3891dd9ba8e1453c.mockapi.io/cart')
            .then(res => {
                setCartItems(res.data)
                setIsLoading(false)

            })
        setIsAdded(false)
    }, [isDeleted, isAdded ] )
    const [cartItems, setCartItems] = React.useState([])
    const onClickAdd = () => {
      setIsAdded(true)
    }

    let arrayOfId = []
    cartItems.map(item => arrayOfId.push(+item.id))
    let totalSumOfCart = cartItems.reduce((prev,item) => {return prev + item.price}, 0)

    return (

          <div className="wrapper">
                <Header
                    onClickAdd ={onClickAdd} cartItems={cartItems} totalSumOfCart={totalSumOfCart} searchValue={searchValue} setSearchValue={setSearchValue} />
                <div className="content ">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home onClickAdd = {onClickAdd} searchValue={searchValue}  />}>
                            </Route>
                            <Route path="/cart.html" element={
                                <Cart
                                    deleteAllCart={deleteAllCart}
                                    cartItems={cartItems}
                                    deleteCartItem={deleteCartItem}
                                    cartItems={cartItems}
                                    totalSumOfCart={totalSumOfCart}
                                />}>
                            </Route>
                            <Route path='*' element = {<NotFound/>}>
                            </Route>
                        </Routes>
                    </div>
                </div>
          </div>
)}

export default App;
