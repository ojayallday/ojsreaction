import React, { Component } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import NewProductForm from './NewProductForm';

import tshirt from '../Images/products/tshirt.png';
import backpack from '../Images/products/backpack.png';
import pants from '../Images/products/pants.png';
import trekkingshoes from '../Images/products/trekkingshoes.png';
import giacket from '../Images/products/giacket.png';
import tshirt_ladies from '../Images/products/tshirt_ladies.png';
import Default_image from '../Images/product_image.jpeg';

// ActualProductList
const actualProductList = [
  
 
    {
        name: 'T-Shirt',
        price: '599',
        photo: tshirt,
        id: "1"
    },
    {
        name: 'BackPack',
        price: '1500',
        photo: backpack,
        id: "2"
    },
    {
        name: 'Pants',
        price: '1000',
        photo: pants,
        id: '3'
    },
    {
        name: 'Trekking Shoes',
        price: '2000',
        photo: trekkingshoes,
        id: '4'
    },
    {
        name: 'Jacket',
        price: '1500',
        photo: giacket,
        id: '5'
    },
    {
        name:'T-Shirt Ladies',
        price: '650',
        photo: tshirt_ladies,
        id: '6'
    }
 ]

class ProductControl extends Component {
   constructor(props){
       super(props);
       this.state ={
        productFormVisible: false,
        actualProductList: actualProductList //new code
       }
   }
    handleClick = () => {
        this.setState((prevState) => ({
            productFormVisible: !prevState.productFormVisible
        }))
    }

    // Method to handle adding a new product
    handleAddingNewProduct = (newProduct) => {
        if (newProduct.photo === undefined) {
            newProduct.photo = Default_image
        }
        const newProductList = this.state.actualProductList.concat(newProduct)
        this.setState({
            actualProductList: newProductList,
            ProductFormVisibleOn: false
        })
    };

   render() {
       let currentVisibleState = null;
       let buttonText = null
    
       if (this.state.productFormVisible) {
           currentVisibleState = <NewProductForm onNewProductCreation= {this.handleAddingNewProduct} />
           buttonText = 'Go back to Product List'
       } else {
           currentVisibleState = <ProductList productList = {this.state.actualProductList} /> //new code
           buttonText = 'Add A Product'
           
       }
       return (
           <React.Fragment>

               <AddProduct
                   whenButtonClicked={this.handleClick}
                   buttonText={buttonText} />

             {currentVisibleState}
           </React.Fragment>
       )
   }
}

export default ProductControl
