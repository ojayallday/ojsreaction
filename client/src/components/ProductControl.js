import React, { Component } from 'react';
import axios from 'axios';

//component imports
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import EditProductForm from './EditProductForm';


/*import tshirt from '../Images/products/tshirt.png';
import backpack from '../Images/products/backpack.png';
import pants from '../Images/products/pants.png';
import trekkingshoes from '../Images/products/trekkingshoes.png';
import giacket from '../Images/products/giacket.png';
import tshirt_ladies from '../Images/products/tshirt_ladies.png';*/
import Default_image from '../Images/product_image.jpeg';

//commented out old section of code(hard coded product list) since now there is a connection to the backend
// ActualProductList
/*const actualProductList = [
  
 
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
 ]*/

class ProductControl extends Component {
   constructor(props){
       super(props);
       this.state ={
        productFormVisible: false,
        actualProductList: [], //actualProductList, array is new code after connecting to backend
        selectedProduct: null,
        editProduct: false, //new code
       }
   }
   //old  code before connection to backend
    handleClick = () => {
        if(this.state.editProduct){
            this.setState({
                editProduct: false
            })
        }else if(this.state.selectedProduct !=null){
            this.setState({
                productFormVisible: false,
                selectedProduct: null
            })
        }else{
 
            this.setState((prevState)=>({
                productFormVisible: !prevState.productFormVisible
            }))
        }
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

    // Method to handle click event on a product
    handleChangingSelectedProduct = (id) => {
        const selectedProduct = this.state.actualProductList.filter(product => product.id === id)[0];
        this.setState({selectedProduct: selectedProduct});
    }

    handleEditingProduct = (editedProduct) =>{

        axios.put('http://localhost:5000/api/products/' + this.state.selectedProduct._id, editedProduct)
            .then(res =>console.log(res.data))
       
        this.setState({
            editProduct: false,
            // formVisibleOnPage: false
        })
        window.location = '/';
    }

    //method to show edit form and set state
    handleEditProductClick = () =>{
        this.setState({
            editProduct: true
        })
    }

   render() {
       let currentVisibleState = null;
       let buttonText = null
    
       if (this.state.editProduct) {
           currentVisibleState = <EditProductForm product={this.state.selectedProduct} onEditProduct={this.handleEditingProduct} />
           buttonText = "Back to Product Detail "
       } else if (this.state.selectedProduct != null) {
           currentVisibleState = <ProductDetail product={this.state.selectedProduct} onDeleteProduct={this.handleDeletingProduct} onEditProductClick={this.handleEditProductClick} /> //new code
           buttonText = 'Back to Product List '
       } else if (this.state.productFormVisible) {
           currentVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProduct} />
           buttonText = 'Go back to Product List'
       } else {
           currentVisibleState = <ProductList productList={this.state.actualProductList} onProductSelection={this.handleChangingSelectedProduct} /> // Because a user will actually be clicking on the Product in the Product component, we will need to pass our new handleChangingSelectedProduct method as a prop.
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

    
    handleDeletingProduct = (id) => {
        axios.delete('http://localhost:5000/                   products/' + id)
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error)
            })
        this.setState({
            actualProductList: this.state.actualProductList.filter(product => product._id !== id),
            formVisibleOnPage: false,
            selectedProduct: null
        })
    }

    

}



export default ProductControl
