import React, {Fragment, useState} from "react";
import Link from "next/link";
import axios from "axios";

export default function Buyers ({buyers}) {
    return (
        <>
            <h2>Welcome to Buyer's Page !!</h2>

            <ul>            
                {buyers.map((buyer) => {
                    return (
                        <li key={buyer.id}>
                            <Link href="/components/cars/mclaren">
                                <a>{buyer.name} {buyer.email}</a>
                                
                            </Link>
                        </li> 
                    )                
                })}
            </ul>           
            
        </>
    )
}

export async function getStaticProps() {
    const resp = await axios.get("http://localhost:2222/api/buyers/all");  
    const buyers = resp.data;

    console.log("from getStaticProps", buyers);
    
    return {
        props: {
            buyers
        }
    }
}   