import { useState } from 'react'
import "./Navbar.css"
const Navbar = () => {

    const [open, setOpen] = useState(null);

    const createMenu = (menu) => {
        setOpen(open === menu ? null : menu);
    };
    return (
        <div className='navbar'>
            <ul className='navbar-link'>
                <li onClick={() => createMenu("trangchu")}>
                    Trang chủ
                    {open === "trangchu" && (
                        <ul className='dropdown'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    )}
                </li>
                <li onClick={() => createMenu("thucdon")}>
                    Thực đơn
                    {open === "thucdon" && (
                        <ul className='dropdown'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    )}
                </li>
                <li onClick={() => createMenu("chungtoi")}>
                    Về chúng tôi
                    {open === "chungtoi" && (
                        <ul className='dropdown'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    )}
                </li>
                <li onClick={() => createMenu("tintuc")}>
                    Tin tức
                    {open === "tintuc" && (
                        <ul className='dropdown'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    )}
                </li>
            </ul>
            <button className="order">Đặt tiệc ngay</button>
        </div>
);
};
export default Navbar;
