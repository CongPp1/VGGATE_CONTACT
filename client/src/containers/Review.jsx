import { Fragment, React } from "react"
import { useSelector } from "react-redux"
import { apiSubmit } from "../APIs/submit";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Review = () => {
    const payloadData = useSelector((state) => state);
    const navigate = useNavigate();

    const handleOnclickBack = () => {
        navigate('/');
    }

    const handleOnclickSubmit = () => {
        let finalPayload = {
            name: payloadData.name,
            email: payloadData.email,
            message: payloadData.message,
            file: payloadData.file.name
        }
        apiSubmit(finalPayload);
    }

    const handleSubmitPopup = () => {
        Swal.fire({
            title: 'Bạn có muốn lưu tất cả dữ liệu này không? Nếu không thì hãy nhấn nút Back để nhập lại dữ liệu',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Save',
        }).then((result) => {
            if (result.isConfirmed) {
                handleOnclickSubmit();
                Swal.fire('Lưu thành công!', '', 'success').then(() => { window.location.reload() });
                handleOnclickBack();
            }
        })
    };

    return (
        <Fragment>
            <div className="review-form">
                <div className="review-form-input">
                    <h2>Review</h2>
                    <p>Name: {payloadData.name}</p>
                    <p>Email: {payloadData.email}</p>
                    <p>Message: {payloadData.message}</p>
                    <p>File: {payloadData.file.name}</p>
                </div>
                <button className="button-submit" type="submit" onClick={handleSubmitPopup}>Submit</button>
                <button className="button-back" type="button" onClick={handleOnclickBack}>Back</button>
            </div>
        </Fragment >
    )
}

export default Review