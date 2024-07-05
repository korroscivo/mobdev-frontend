"use client"



import { PrimeReactProvider, PrimeReactContext  } from 'primereact/api';


import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import 'primeicons/primeicons.css';
import Finder from "@/component/Finder";
import './globals.css';
import GlobalContextProvider, { GlobalContext } from '@/context/global-context';



      

export default function Home() {

  return (
    <GlobalContextProvider>
      <PrimeReactProvider>
        <main>
            <div className="flex justify-center h-24 items-center ">
              <h1 className="text-2xl">Adopta un Perrito</h1>
            </div>
          
            <div>
              <Finder />
            </div>
        </main>
      </PrimeReactProvider>
    </GlobalContextProvider>
  );
}
