import CartBlock from "../componets/CartBlock/CartBlock";
const Cart = ({deleteAllCart,cartItems,deleteCartItem,totalSumOfCart,isDeleted}) => {
    return (
        <>
            <CartBlock
                isDeleted = {isDeleted}
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