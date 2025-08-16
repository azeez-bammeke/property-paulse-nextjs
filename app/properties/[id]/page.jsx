'use client'

import {useRouter, useParams} from "next/navigation";

const PropertyPage = () => {
   const router = useRouter()
   const params = useParams()
    console.log("Testing server component and client component", params )
    return (<div>Property page {params.id} </div>);
}

export default PropertyPage;