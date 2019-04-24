import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NewspaperIcon from "./icons/newspaper"
import PaletteIcon from "./icons/palette"
import LightbulbIcon from "./icons/lightbulb"
import TrophyIcon from "./icons/trophy"
import ToolsIcon from "./icons/tools"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        background: "rgb(43, 43, 45)",
        paddingTop: "16px",
        textDecoration: "none",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          marginLeft: '16px',
          marginBottom:'0px'
        }}
      >
        <li className='buttonheader'>
          <Link to="/" className="tab">
         { /* <NewspaperIcon className="navbarIcons" /> */}
            Latest
          </Link>
        </li>
        <li className='buttonheader'>
          <Link to="/art" className="tab">
            {/*<PaletteIcon className="navbarIcons" /> */}
            Art
          </Link>
        </li>
        <li className='buttonheader'>
          <Link to="/guides" className="tab">
            {/*<LightbulbIcon className="navbarIcons" />*/}
            Guides
          </Link>
        </li>
        <li className='buttonheader'>
          <Link to="/entertainment" className="tab">
            {/*<TrophyIcon className="navbarIcons" />*/}
            Entertainment
          </Link>
        </li>
        <li className='buttonheader'>
          <Link to="/tools" className="tab">
            {/*<ToolsIcon className="navbarIcons" />*/}
            Tools
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// Navbar icons are from fontawesome <3
// https://fontawesome.com/license
