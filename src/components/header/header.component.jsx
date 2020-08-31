import React from "react";
import {Link} from "react-router-dom";

import './header.styles.scss'
import {ReactComponent as Logo} from "../../asset/crown.svg";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarOption: [
                {urlName: "shop", url: "/shop"},
                {urlName: "hats", url: "/hats"}
            ]
        }
    }

    render() {
        return (
            <div className="header">
                <Link className='logo-container' to="/">
                    <Logo className='logo'/>
                </Link>
                <div className='options'>
                    {
                        this.state.navBarOption.map(({urlName, url},
                                                     idx) => (
                                <Link key={idx}
                                      className='option'
                                      to={url}>
                                    {urlName}
                                </Link>
                            )
                        )
                    }

                </div>
            </div>
        )
    }
}

export default Header;