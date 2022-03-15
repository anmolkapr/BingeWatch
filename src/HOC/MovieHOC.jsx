import React from "react";
import {Route} from "react-router-dom";
import MovieLayout from "../Layouts/MovieLayout";

const MovieHOC = ({component,...rest}) =>{
    const Component =  component;
     return (
     <>
         <Route
            {...rest}// all components other than the component ecaxt path etc.
            component = {(props) => (
                <MovieLayout>
                    <Component {...props} />
                </MovieLayout>
            )

            }
            />
     </>);
}

export default MovieHOC;