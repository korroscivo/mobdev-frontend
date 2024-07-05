"use client"

import { findeDogsApi } from "@/api/common";
import { GlobalContext } from "@/context/global-context";
import { Chips } from "primereact/chips";
import { useContext } from "react";




export default function ChipStateFilter() {
    const {stateFilter, setStateFilter, setUrlImagenes} = useContext(GlobalContext)

    const findDogs = async (filterDogs) => {
        const images = await findeDogsApi(filterDogs)
        await setUrlImagenes(images)    
    }

    const handledChip = (e) => {
        // console.log(e)
        if(e.originalEvent.hasOwnProperty('key')){
          return
        }
        setStateFilter(e.value)
        findDogs(e.value)
    }

    return(
        
        <div className="card p-fluid" style={{marginTop:"10px", marginBottom:"10px"}}>
            <Chips value={stateFilter} onChange={(e) => handledChip(e)} />
        </div>
    )
}