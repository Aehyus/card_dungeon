const Card = ({ content, timerEnded, setAddedItems, addedItems }) => {


    return (
      <>
        <div className='item'>
  
          <p>{content.title}</p>
          <button onClick={() => { setAddedItems([...addedItems, content]) }}> BUY NOW </button>
  
        </div>
  
        <div className={`placeholder-img ${!timerEnded ? 'loading' : ""}`}>
          { timerEnded && <img className="card-img" src={content.thumbnail} loading='lazy'/> }
        </div>
      </>
  
  
    )
  }

  export default Card