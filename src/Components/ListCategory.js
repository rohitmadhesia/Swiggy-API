import { LIST_IMG_URL } from "../Utilites/Constant"
import { useDispatch } from "react-redux"
import { addItem } from "../Utilites/cartSlice"
const ListCategory = ({item}) => {

    const dispathchItem = useDispatch()

   const handleAddItem = (list) => {
     dispathchItem(addItem(list))
     
   }

    
    return <div>
        {item.map((list) => (
            <div className="m-4 p-4 border-gray-200 border-b-2 text-left flex justify-between gap-10" key={list.card.info.id}>
            <div className="w-9/12">
                <span className="font-bold">{list.card.info.name}</span>
                <span> - ₹ {list.card.info.price?list.card.info.price/100 : list.card.info.defaultPrice/100}</span>
                <p className="py-2 text-xs">{list.card.info.description}</p> 
                </div>
                <div className="w-3/12">
                <div className="absolute">
                      <button className="px-4 w-16 rounded-md text-pink-300 bg-white" onClick={() => handleAddItem(list)}>Add+</button>
                </div>
                    <img className="w-24 rounded-lg  " alt="url-img" src={LIST_IMG_URL+list.card.info.imageId}  />

                </div>   
            </div>
            
        ))}
    </div>
}

export default ListCategory