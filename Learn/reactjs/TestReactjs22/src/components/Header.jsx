import React from 'react'

const Header = ({ value, setUser }) => {
    return(
        <div>
            Header{value}
            <button onClick={() => setUser("a")}>a</button>
            <button onClick={() => setUser("b")}>b</button>
        </div>
    );
};
export default Header;

const a = {
    age: "Khanh",
    name: 123,
};