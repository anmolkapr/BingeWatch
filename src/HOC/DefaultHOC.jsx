import React from "react";
import {Route} from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayout";

const DefaultHOC = ({component,...rest}) =>{
    const Component =  component;
     return (
     <>
         <Route
            {...rest}// all components other than the component ecaxt path etc.
            component = {(props) => (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )

            }
            />
     </>);
}

export default DefaultHOC;