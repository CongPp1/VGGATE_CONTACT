import { Fragment, memo } from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

const Home = () => {
    return(
        <Fragment>
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </Fragment>
    )
}

export default memo(Home)