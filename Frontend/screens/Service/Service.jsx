import React from "react";
import Cards from "../../components/cards/Cards";
import NewServices from "../../components/newservices/NewServices";
import OurProcess from "../../components/ourprocess/OurProcess";
import FAQ from "../../components/faqs/FAQ";

const Service=()=>{
    return(
        <div>
            <Cards/>
            {/* <NewServices/> */}
            <NewServices/>
            <OurProcess/>
            <FAQ/>

        </div>
        );
}

export default Service;