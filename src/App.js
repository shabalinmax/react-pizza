import './scss/app.scss';
import './App.css';
import Header from './componets/Header'
import Home from './pages/Home'
import React from "react";
import NotFound from './pages/NotFound'
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
 const [searchValue, setSearchValue] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true) // сделать для скелетов в будущем
    const [isDeleted, setIsDeleted] = React.useState(false)
    const [isAdded, setIsAdded] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])

    const deleteAllCart = () => {
           setCartItems([])
           setIsDeleted(true)
    }

    const deleteCartItem = (id) => {
        console.log( setCartItems(cartItems.filter(el => id !== el.id)))
        setIsDeleted(true)
    }
    React.useEffect(() => {
        setIsLoading(true)
        setIsDeleted(false)
        setIsAdded(true)
        setIsAdded(false)
    }, [isDeleted, isAdded] )
    const onClickAdd = (obj) => {
      setIsAdded(true)
        setCartItems([...cartItems,
            obj])
        console.log(obj)
    }

    let arrayOfId = []
    cartItems.map(item => arrayOfId.push(+item.id))
    let totalSumOfCart = cartItems.reduce((prev,item) => {return prev + item.price}, 0)

    return (
          <div className="wrapper">
                <Header
                    onClickAdd ={onClickAdd}
                    cartItems={cartItems}
                    totalSumOfCart={totalSumOfCart}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue} />
                <div className="content ">
                    <div className="container">
                        <Routes>
                            <Route path="/" element=
                                {<Home onClickAdd = {onClickAdd} searchValue={searchValue}  />}>
                            </Route>
                            <Route path="/cart.html" element={
                                <Cart
                                    isDeleted = {isDeleted}
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
