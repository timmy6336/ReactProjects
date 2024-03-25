import { useState, useRef } from "react"
import {FaBars} from 'react-icons/fa'
import {links,social} from '../data'


function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const linksRef = useRef(null)
    const linksContainerRef = useRef(null)

    const toggleLinks = () =>{
        setShowLinks(!showLinks)
    }

    const linkStyle = {
        height:showLinks?linksRef.current.getBoundingClientRect().height:0
    }


    return( 
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <button className="nav-toggle" onClick={toggleLinks}><FaBars/></button>
                </div>
                <div className='links-container' ref={linksContainerRef} style={linkStyle}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const {id,url,text} = link
                            return(
                            <li className="link" key={id}>
                                <a href={url}>{text}</a>
                            </li>)})}
                    </ul>
                </div>
                {/*social links*/}
                <ul className="social-icons">
                    {social.map((socialIcon) => {
                        const {id,url,icon} = socialIcon
                        return(
                            <li className="icon" key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar