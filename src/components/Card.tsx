import "./card.css"

const Card = () => {
  return (
    <div className='container'>
      <img
        className='img'
        src='https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />
      <p className='categoryName'>Mens Collection</p>
      <div>
        <p className='description'>BackBag</p>
      </div>
      <div>
        <p className='price'>USD 109</p>
      </div>
      <div>
        <p className='rating'></p>
      </div>
      <div className='button-container'>
        <button className='button'>Add To Cart</button>
      </div>
    </div>
  )
}
