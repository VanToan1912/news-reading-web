import '../asset/style/Header.css'

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
                        <a href="#tim-kiem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></a>
                        <button className="btn-subscribe">Đăng ký Tuổi Trẻ Sao</button>
                    </div>
                </div>
                <div className="navbar-bottom">
                    <a href="#euro2024">EURO 2024</a>
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