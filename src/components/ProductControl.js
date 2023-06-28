import React, { Component } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import NewProductForm from './NewProductForm';

class ProductControl extends Component {
   constructor(props){
       super(props);
       this.state ={
        productFormVisible: false
       }
   }
    handleClick = () => {
        this.setState((prevState) => ({
            productFormVisible: !prevState.productFormVisible
        }))
    }
   render() {
       let currentVisibleState = null;
       let buttonText = null
       let addProductButton = null ;
       if (this.state.productFormVisible) {
           currentVisibleState = <NewProductForm />
           buttonText = 'Go back to Product List'
       } else {
           currentVisibleState = <ProductList />
           buttonText = 'Add A Product'
           addProductButton = <button onClick={this.handleClick}>Add Product</button>
       }
       return (
           <React.Fragment>
             <button onClick = {this.handleClick}>{buttonText} </button>
             {currentVisibleState}
           </React.Fragment>
       )
   }
}

export default ProductControl
