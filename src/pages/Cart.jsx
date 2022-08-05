import CartBlock from "../componets/CartBlock/CartBlock";
const Cart = ({deleteAllCart,cartItems,deleteCartItem,totalSumOfCart}) => {
    return (
        <>
            <CartBlock
                deleteAllCart={deleteAllCart}
                cartItems={cartItems}
                deleteCartItem={deleteCartItem}
                cartItems={cartItems}
                totalSumOfCart={totalSumOfCart}
            />
        </>

    )
}
export default Cart;