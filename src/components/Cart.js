import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from '../data';
import { useState } from 'react';

function Cart(){
    const { products} = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {
                        ...exist,
                        qty: exist.qty + 1
                    } : x
                )
            );
        } else {
            setCartItems([...cartItems, {
                ...product,
                qty: 1
            }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {
                        ...exist,
                        qty: exist.qty - 1
                    } : x
                )
            );
        }
    };
    const onRemoveAll = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty > 0) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {
                        ...exist,
                        qty: exist.qty - 1
                    } : x
                )
            );
        }
    };

    return (
        <div className="App">
            <Header countCartItems={cartItems.length} pageName='Product Details'  project='2'></Header>
            <div className = "container">
                <div className="row">
                <Main products={products} onAdd={onAdd}></Main>
                <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onRemoveAll={onRemoveAll}></Basket>
                </div>
            </div>
        </div>
    )

};

export default Cart;