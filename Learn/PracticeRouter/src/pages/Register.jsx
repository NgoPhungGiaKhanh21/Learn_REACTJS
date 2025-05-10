import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState ({
        name: "",
        phone: "",
        address: "",
        guest: "",
        date: "",
        event: "",
        accept: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.accept){
            alert("Vui lòng chấp nhận điều khoản!");
            return;
        }
        alert(JSON.stringify(formData, null, 2));
    };
}
export default Register