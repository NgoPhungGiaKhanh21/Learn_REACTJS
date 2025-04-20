import React from 'react'

const Header = (props) => {
    const { name } = props;
    console.log("giá trị của properties", name);
    return <div>Header</div>;
};
export default Header;

const a = {
    age: "Khanh",
    name: 123,
};