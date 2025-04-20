import "./Logo.css"
import imgLogo from "../../images/img1.png"
const logo = () => {
    return (
        <div className="logo">
            <img src={imgLogo} alt="Logo restaurant"></img>
        </div>
    );
};

export default logo;
