import { Fragment, memo } from "react"

const Box = ({ text }) => {
    return (
        <Fragment>
            <div>
                {text}
            </div>
            <div>
                {text}
            </div>
        </Fragment>
    )
}

export default memo(Box)