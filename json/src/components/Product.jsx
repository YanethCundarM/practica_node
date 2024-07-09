import './Product.css';
import { AddCartBtn } from './AddCartBtn';
import { Discount } from './Discount';
import { Heart } from './Heart';



const Product = ({discount, name, oldPrice, newPrice}) => {
    return(
        <div className='product'>
           <Discount discount = {discount}/>
            <Heart/>
            <img className='product__img' src='https://picsum.photos/180' alt='Product' />
            <h2 className='product__name'> {name} </h2>
            <div className='product__details'>
                <p className='product__oldPrice'>$ {oldPrice} </p>
                <p className='product__price'>$ {newPrice} </p>
                <AddCartBtn name = {name} newPrice= {newPrice} />
            </div>
          
        </div>
    )
}
export {Product};
