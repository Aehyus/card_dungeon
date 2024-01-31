import { useSelector, useDispatch } from 'react-redux';

const Inventory = () => {

    const { items } = useSelector(state => state.inventory)

    return (
        <h1>{items.map(item => item.title)}</h1>
    )
}

export default Inventory