const CardProduct= ({name,description,price,image})=>{
    return (
        <>
        <div class="card w-25">
        <img src={image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <p class="card-text fw-bold" >{price}</p>
            
          </div>
      </div>
        </>
    )
}
export default CardProduct;