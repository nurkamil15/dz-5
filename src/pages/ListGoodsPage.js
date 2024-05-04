import {useDispatch, useSelector} from "react-redux";
import { increaseCounter} from "../store/goodsSlice";


const ListGoodsPage = () => {
    const dispatch = useDispatch()
    const {product}= useSelector(state =>state.goods)
    const addProduct=() =>{
        dispatch(increaseCounter())
    }
    return (
        <div>
            {
                product.map(el =>[
                    <>
                        <div>{el.name}</div>
                        <button onClick={addProduct}>Купить</button>
                    </>
                ])
            }
        </div>
    );
};

export default ListGoodsPage;