import { useSelector, useDispatch } from 'react-redux';
import { addToInventory } from '../redux/manageInventory';

const Card = ({ content, timerEnded }) => {

  const dispatch = useDispatch();


  return (
    <>
      <div className='item'>

        <p>{content.title}</p>

        <button onClick={() => {

          try {
            dispatch(addToInventory(content))
          } catch (err) {
            console.log(err)
          }

        }}> BUY NOW </button>

      </div>

      <div className={`placeholder-img ${!timerEnded ? 'loading' : ""}`}>
        {timerEnded && <img className="card-img" src={content.thumbnail} loading='lazy' />}
      </div>
    </>


  )
}

export default Card