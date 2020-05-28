import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import List from "./List.jsx"
import Card from './Card.jsx'

function App() {


    const [imgURL, setImgURL] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')

    const [products, setProduct] = useState([])

    function handleImgURL(e) {
        setImgURL(e.target.value)
    }

    function handleName(e) {
        setName(e.target.value)
    }

    function handlePrice(e) {
        console.log(e.target.value)
        setPrice(e.target.value)
    }

    function handleType(e) {
        setType(e.target.value)
    }

    function addProduct() {
        axios
            .post('/products', { name: name, imgURL: imgURL, type: type, price: price })
            .then(res => fetchData())
            .catch(err => console.log(err))
    }

    function fetchData() {

        axios
            .get('/products')
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }

    function updateProduct(id, price) {
        axios
            .put('/products', { id: id, price: price })
            .then(res => fetchData())
            .catch(err => console.log(err))
    }

    function deleteProduct(deleteId) {
        axios
            .delete("/products", { params: { id: deleteId } })
            .then(res => fetchData())
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    });



    return (
        <div>
            <div>
                <div>
                    <input onChange={handleImgURL} type="text" placeholder="img" />
                    <input onChange={handleName} type="text" placeholder="name" />
                    <input onChange={handleType} type="text" placeholder="type" />
                    <input onChange={handlePrice} type="text" placeholder="price" />
                    <button onClick={addProduct}>Add Product</button>


                </div>

            </div>
            <div class="card-list">
                {products.map((product,i) => <Card key={i} updateProduct={updateProduct} deleteProduct={deleteProduct} id={product.id} imgURL={product.imgURL} name={product.name} type={product.type} price={product.price} /> )}
                
                

            </div>
        </div>


    )

}

export default App;