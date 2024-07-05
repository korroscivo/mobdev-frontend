"use client"

import { findeDogsApi } from "@/api/common";
import { GlobalContext } from "@/context/global-context";
import { useContext } from "react";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';




export default function FindBox() {
    const {stateFilter, setStateFilter, setUrlImagenes} = useContext(GlobalContext)
    const {selectedRaza, setSelectedRaza} = useContext(GlobalContext)
    const {selectedSubRaza, setSelectedSubRaza} = useContext(GlobalContext)
    const {subRazas, setsubRazas} = useContext(GlobalContext)
    const {razas, setRazas} = useContext(GlobalContext)

    const findDogs = async (filterDogs) => {
        const images = await findeDogsApi(filterDogs)
        await setUrlImagenes(images)    
    }

    const handlerChangeRaza = (raza) => {
        let sub_razas_ue = [];
        setSelectedRaza(raza)
        Object.entries(raza.sub_raza).forEach(([key, value]) => {
          sub_razas_ue.push({'id':value,'sub_raza':value.charAt(0).toUpperCase() + value.slice(1)})
        });
        setsubRazas(sub_razas_ue)
        setSelectedSubRaza(null)
    }

    const handlerChangeSubRaza = (valor) => {
        setSelectedSubRaza(valor)
    }
    
    const handledButtonFind = () => {
      if (stateFilter.includes(selectedRaza.id + (selectedSubRaza ? '/' + selectedSubRaza.id : ""))){
        return
      }
      const newFilter = [...stateFilter, selectedRaza.id + (selectedSubRaza ? '/' + selectedSubRaza.id : "") ]
      setStateFilter(newFilter)
      findDogs(newFilter)
    }


    return(
        
        <>
            <div className=" card flex justify-content-center " >
                <Dropdown value={selectedRaza} onChange={(e) => handlerChangeRaza(e.value)}  filter 
                    options={razas} optionLabel="raza" placeholder="Seleccione una raza" style={{width:"300px"}}/>     
            </div>
            {subRazas.length > 0 &&
            <div className="card flex justify-content-center">
                <Dropdown value={selectedSubRaza} onChange={(e) => handlerChangeSubRaza(e.value)}  
                    options={subRazas} optionLabel="sub_raza" placeholder="Seleccione una sub raza" style={{width:"300px"}}/>     
            </div>
            }
            <div className="flex justify-end items-start mt-4">
                <Button label="Buscar" icon="pi pi-check" onClick={() => handledButtonFind()} />
            </div>
        </>
    )
}