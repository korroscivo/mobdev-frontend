"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from 'primereact/card';




export default function ListDogs({filter}) {
    const [urlImagenes, setUrlImagenes] = useState([])
    useEffect(() => {
        setUrlImagenes(filter)
    }, [filter])
    
    return(
        
        urlImagenes.map(( filter, index ) => {
            const {raza, data} =  filter
            return data.map((elem, index) => {
                return(
                    <Card key={index} title={raza} className="space-y-1">
                        <Image
                            src={elem}
                            alt="Picture of the author"
                            width={450} 
                            height={450}
                        />
                    </Card>
                )
            })
          })
    )
}