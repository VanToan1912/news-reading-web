import './Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faHouse } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="Header">
      <header className="navbar-head">
        <div className="navbar-top-head">
          <img src="https://static-tuoitre.tuoitre.vn/tuoitre/web_images/logottonew.svg" alt="Tuoi Tre Online" className="logo" />
          <div className="navbar-top-links">
            <a href="#podcast">Podcast</a>
            <a href="#youtube">YouTube</a>
            <a href="#can-biet">Cần biết</a>
            <a href="#rao-vat">Rao vặt</a>
            <a href="#tim-kiem"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            <button className="btn-subscribe">Đăng ký Tuổi Trẻ Sao</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;