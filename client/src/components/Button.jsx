import { Fragment, memo } from "react"

const Button = ({ text, textColor, className }) => {
    return (
        <Fragment>
            <div className={className} style={{padding: '20px'}}>
                <a href="/" className="btn-text">
                    {text}
                </a>
            </div>
        </Fragment>
    )
}

export default memo(Button)