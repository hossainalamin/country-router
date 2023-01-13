import { createBrowserRouter } from "react-router-dom";
import Country from "../Components/Country/Country";
import CountryDetail from "../Components/CountryDetail/CountryDetail";

export const router = createBrowserRouter([
    {
        path : '/country',
        loader : async() =>{
            return fetch('https://restcountries.com/v3.1/all')
        },
        element : <Country></Country>
    },
    {
        path : '/country/:countryDetail',
        loader : async({params}) =>{
            return fetch(`https://restcountries.com/v3.1/name/${params.countryDetail}`)

        },
        element : <CountryDetail></CountryDetail>
    }
])