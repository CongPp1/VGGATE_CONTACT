import { Fragment, memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFromPayload, updateFile } from "../Redux/payloadDataAction";
import { useNavigate } from "react-router";
import { path } from "../utils/constant";
import Swal from 'sweetalert2';

const InputForm = () => {
    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const payloadData = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const updatedPayloadData = {
            ...payloadData,
            ...data,
        };
        dispatch(setFromPayload(updatedPayloadData));
        navigate(path.REVIEW);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        dispatch(updateFile(selectedFile))
    };

    const handleAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng nhập đẩy đủ thông tin name và email!',
        })
    }

    useEffect(() => {
        reset({ name: payloadData.name, email: payloadData.email, message: payloadData.message });
    }, [reset]);

    return (
        <Fragment>
            <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="not-msg"
                    placeholder="Your name*"
                    style={{
                        paddingLeft: "20px",
                        gap: "100px",
                        border: "none",
                        outline: "none",
                        background: "rgba(242, 242, 242, 0.5)",
                        fontFamily: "Nunito Sans sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.875",
                        fontWeight: "400",
                        color: "white",
                    }}
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <small className="error-container">Name is required{handleAlert()}</small>
                )}
                <input
                    className="not-msg"
                    placeholder="Your email*"
                    style={{
                        paddingLeft: "20px",
                        gap: "100px",
                        border: "none",
                        outline: "none",
                        background: "rgba(242, 242, 242, 0.5)",
                        fontFamily: "Nunito Sans sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.875",
                        fontWeight: "400",
                        color: "white",
                    }}
                    {...register("email", {
                        required: true,
                        pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                    })}
                />
                {errors.email && (
                    <small className="error-container">Email is not valid{handleAlert()}</small>
                )}
                <textarea
                    className="is-msg"
                    placeholder='Message...'
                    style={{
                        paddingLeft: "20px",
                        gap: "1000px",
                        outline: "none",
                        background: "rgba(242, 242, 242, 0.5)",
                        fontFamily: "Nunito Sans sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.875",
                        fontWeight: "400",
                        color: "white",
                    }}
                    {...register("message", { required: false })}
                />
                <input
                    className="file-input"
                    type="file"
                    onChange={handleFileChange}
                    style={{
                        paddingLeft: "20px",
                        gap: "1000px",
                        outline: "none",
                        background: "rgba(242, 242, 242, 0.5)",
                        fontFamily: "Nunito Sans sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.875",
                        fontWeight: "400",
                        color: "white",
                    }}
                />
                <div className="send-btn">
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </Fragment>
    );
};

export default memo(InputForm);