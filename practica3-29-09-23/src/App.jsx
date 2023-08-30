import { useState } from 'react'
import CardProduct from './Components/CardProduct/Index'


function App() {
  const [textName, setTextName] = useState("")
  const [textDes, setTextDes] = useState("")
  const [textPrice, setTextPrice] = useState("")
  const [textImage, setTextImage] = useState("")

  const handleChangeName=(event)=>{
    const text = event.target.value
    setTextName(text)
  }
  const handleChangeDes=(event)=>{
    const text = event.target.value
    setTextDes(text)
  }
  const handleChangePrice=(event)=>{
    const text = event.target.value
    setTextPrice(text)
  }
  const handleChangeImage=(event)=>{
    const text = event.target.value
    setTextImage(text)
  }

  return (
    <>
      <main class="d-flex justify-content-center p-5 gap-3">
      <div class="card bg-dark text-bg-primary w-25 p-3">
        <h5 class="card-title">Product</h5>
        <div class="mb-4">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product name" value={textName} onChange={handleChangeName}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Description</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product description" value={textDes} onChange={handleChangeDes}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">$ Price</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product price" value={textPrice} onChange={handleChangePrice}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Image</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Image URL https://" value={textImage} onChange={handleChangeImage}/>
        </div>
      </div>

      <CardProduct
        name={textName}
        description={textDes}
        price={textPrice}
        image={textImage}

      />

     
      </main>
    </>
  )
}

export default App
