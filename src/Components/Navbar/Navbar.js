import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react";
import './Navbar.css'
import Home from '../Home/Home';

function Navbar(){

    const [shownames,setshownames] = useState(false)

    function onclickLogo(){
        setshownames(!shownames)
    }

    return(
        <div className="">
            <div className="d-flex flex-column m-2 navbg shadow ">
                <p className="logo" onClick={onclickLogo}>d
                </p>

                <div className="d-flex">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="Search" className="navicons"/>

                    {shownames ? <p className="iconname d-none d-md-block">Search</p> : ""}
                </div>

                <div className="d-flex">
                    <img src="https://icones.pro/wp-content/uploads/2021/04/icone-d-ordinateur-noir.png" alt="Desktop" className="navicons"/>

                    {shownames ? <p className="iconname d-none d-md-block">Desktop</p> : ""}
                </div>

                <div className="d-flex">
                    <img src="https://w1.pngwing.com/pngs/24/920/png-transparent-question-mark-text-black-and-white-circle-line-area-symbol-number-thumbnail.png" alt="Query" className="navicons"/>

                    {shownames ? <p className="iconname d-none d-md-block">Query ?</p> : ""}
                </div>
                    
                <div className="d-flex">
                    <img src="https://icon2.cleanpng.com/20180628/xie/kisspng-computer-icons-calendar-date-schedule-5b345e37bf07c5.7082728115301586477825.jpg" alt="Calender" className="navicons"/>

                    {shownames ? <p className="iconname d-none d-md-block">Calender</p> : ""}
                </div>
                    

                <div className="d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSzCwNiUrWTtjdqmCM43Zixz8CVt3hbKk1YGuyBDXONJu0nkBeVQ0gtZlXQwqLuVRi1U&usqp=CAU" alt="Domin" className="navicons"/>

                    {shownames ? <p className="iconname d-none d-md-block">Domain</p> : ""}
                </div>

                <div className="d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZrqIMMXFi0pSgWyVrqmUU5kKMPV4jyWrORZUV0fshA&s" alt="Dollor" className="navicons"/>

                    {shownames ? <p className="iconname d-none d-md-block">Dollor</p> : ""}
                </div>


                <div className="d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSDj5KnfWFLvXYwCgR9XB69vEeTo8ITQbmwZ_D_HffQ&s" alt="Earphone" className="navicons"/>

                    {shownames ? <p className="iconname d-none d-md-block">Headset</p> : ""}
                </div>

                <div className="d-flex">
                    <img src="https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png" alt="settings" className="navicons"/>

                    {shownames ? <p className="iconname d-none d-md-block">Settings</p> : ""}
                </div>
            </div>
        </div>
    )
}

export default Navbar