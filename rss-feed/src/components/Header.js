
import '../css/Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faHouse } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <div className="Header">
            <header className="navbar">
                <div className="navbar-top">
                    <img src="https://static-tuoitre.tuoitre.vn/tuoitre/web_images/logottonew.svg" alt="Tuoi Tre Online" className="logo" />
                    <div className="navbar-top-links">
                        <a href="#podcast">Podcast</a>
                        <a href="#youtube">YouTube</a>
                        <a href="#can-biet">Cần biết</a>
                        <a href="#rao-vat">Rao vặt</a>
                        <a href="#tim-kiem"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                        {/* <a href="#ca-nhan"><FontAwesomeIcon icon={faUser} /></a> */}
                        <button className="btn-subscribe">Đăng ký Tuổi Trẻ Sao</button>
                    </div>
                </div>
                <div className="navbar-bottom">
                    <a href="#trang-chu" className="home-btn"><FontAwesomeIcon icon={faHouse} color='#ff0000' fontSize={20} /></a>
                    <a href="#video">VIDEO</a>
                    <a href="#thoi-su">THỜI SỰ</a>
                    <a href="#the-gioi">THẾ GIỚI</a>
                    <a href="#phap-luat">PHÁP LUẬT</a>
                    <a href="#kinh-doanh">KINH DOANH</a>
                    <a href="#cong-nghe">CÔNG NGHỆ</a>
                    <a href="#xe">XE</a>
                    <a href="#du-lich">DU LỊCH</a>
                    <a href="#nhip-song-tre">NHỊP SỐNG TRẺ</a>
                    <a href="#van-hoa">VĂN HÓA</a>
                    <a href="#giai-tri">GIẢI TRÍ</a>
                    <a href="#the-thao">THỂ THAO</a>
                    <a href="#giao-duc">GIÁO DỤC</a>
                    <a href="#nha-dat">NHÀ ĐẤT</a>
                    <a href="#suc-khoe">SỨC KHỎE</a>
                    <a href="#giai-that">GIẢI THẬT</a>
                    <a href="#ban-doc">BẠN ĐỌC</a>
                </div>
            </header>
        </div>
    )
}

export default Header;