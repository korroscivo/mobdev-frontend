"use client"
import { useContext, useEffect } from "react";

import { Panel } from 'primereact/panel';
import { getBreedApi } from "@/api/common";
import { GlobalContext } from "@/context/global-context";
import ChipStateFilter from "./ChipStateFilter";
import FindBox from "./FindBox";
import ListDogs from "./ListDogs";




export default function Finder() {

    const {selectedRaza, setRazas, urlImagenes} = useContext(GlobalContext)

    const getListBread = async () => {
      const listBreed = await getBreedApi();
      setRazas(listBreed)
    }

    useEffect(()=>{
      getListBread()
    }, [])
    

    return (<>
        <Panel header="Busqueda" toggleable  >
            <div className="w-full md:w-auto">
                    <FindBox />
                    <ChipStateFilter />
                    {/* display imagens */}
                    <div className="flex" style={{flexWrap: "wrap"}}>
                      {selectedRaza &&
                        <ListDogs filter={urlImagenes}/>
                      }
                    </div>
            </div>
            
        
        </Panel>
        
        </>
    )
}