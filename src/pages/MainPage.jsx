import { getLofts } from "../data/getLofts";
import { useState } from "react";

const MainPage = ()=>{
    const [lofts, setLofts] = useState(getLofts());
    console.log(lofts)
    return (
        <div>
            <h2>Roomify</h2>
            {lofts.map((loft)=>(
                <h2>{loft.name}</h2>
            ))}
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, quidem libero impedit aspernatur pariatur consectetur fugit voluptatum cumque. Deserunt id cumque nesciunt facilis adipisci reprehenderit quaerat quos laborum distinctio reiciendis.</span>
        </div>
    )
}
export default MainPage;