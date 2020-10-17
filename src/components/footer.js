import React from "react"
import {Link} from "gatsby"
import { RiCopyrightFill, RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>2020<RiCopyrightFill/> SEO Uzmanı<span className="icon -love"></span> - <Link to="https://www.vedatolmez.com/">Vedat Ölmez</Link></p>
    </div>
  </footer>
)

export default Footer