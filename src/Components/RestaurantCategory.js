import ListCategory from "./ListCategory"
import { useState } from "react"
const RestaurantCategory = ({data,showData,setShowIndex}) => {

// const [showData, setShowData]  = useState(false)

const HandleEvent = () => {
   setShowIndex()
}

  const {title,itemCards} = data

    
    return <div>
         <div className="w-6/12 p-8 shadow-lg bg-purple-50 mx-auto my-4 ">
              <div className="flex justify-between cursor-pointer" onClick={HandleEvent} >
              <span className="font-bold">{title} ({itemCards.length})</span>
              <span>💧</span>
              </div>
              <div>
               { showData && <ListCategory item = {itemCards}/>}
              </div>
      </div>

    </div>
}

export default RestaurantCategory