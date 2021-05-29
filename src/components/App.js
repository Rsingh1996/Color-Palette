import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ColorTitle from "./ColorTitle"
import colors from "../colors"
import ColorContainer from "./ColorContainer"

function App() {
    return <div className="container">
            < Header />
            { colors.map((colors) => { 
                return (
                <Fragment >
                <ColorTitle title={colors.colorFamily} />
                <ColorContainer colors={colors.shades} />
                </Fragment>)
            })}
        < Footer />
    </div>
}
export default App;