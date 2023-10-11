import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <>
                <div className="m-4 p-4 border-1 w-25 shadow" style={{border:"1px solid gray ",boxShadow:"2px 2px 2px 2px white"}}>
                    <div>
                        <h1>React card</h1>
                    </div>
                    <p> What is React card? A content container is a react card component. </p>
                    <p> It includes image, header, and footer options, a wide range of content, contextual background colors, and excellent display options.</p>
                </div>

            </>
        )
    }
}
export default Nav;