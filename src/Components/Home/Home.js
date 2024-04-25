import 'bootstrap/dist/css/bootstrap.css'
import './Home.css'
import { useState } from 'react'

function Home(props){
    
    //console.log(props.data)
    const [btn,setbtn] = useState(false)
    
    return(
        <div className="m-auto">
            
            <div className="greeting-card d-flex justify-content-between" >
                <div className='m-3'>
                    <h6>Good Afternoon, Sandeep</h6>
                    <p>You are subscribed to retail plan</p>
                </div>
                <div className='d-flex'>
                    <img src="https://icon2.cleanpng.com/20180628/xie/kisspng-computer-icons-calendar-date-schedule-5b345e37bf07c5.7082728115301586477825.jpg" alt="Calender" className="navicons hlogo"/>
                    <p className='m-3'>Today, 24 April </p>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteqEd-Q6lWwBtOr6aKYqfo2cCx8jzKxn_-ULwkoX9aA&s' alt="clock" className="navicons hlogo"/>
                    <p className='m-3'>16:42</p>

                    <img src='https://static.vecteezy.com/system/resources/previews/010/366/210/original/bell-icon-transparent-notification-free-png.png' alt="Notification" className="navicons "/>
                </div>
            </div>
            <div className='d-flex home-cards flex-wrap'>
                <div className='shadow m-3 p-3 card'>
                    <img src='https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png' alt="Notification" className="navicons "/>
                    <p>My Saved Library 1</p>
                    <p>dd-mm-yyyy</p>
                </div>
                <div className='shadow m-3 p-3 card'>
                    <img src='https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png' alt="Notification" className="navicons "/>
                    <p>My Saved Library 1</p>
                    <p>dd-mm-yyyy</p>
                </div>
                <div className='shadow m-3 p-3 card'>
                    <img src='https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png' alt="Notification" className="navicons "/>
                    <p>My Saved Library 1</p>
                    <p>dd-mm-yyyy</p>
                </div>
                <div className='shadow m-3 p-3 card'>
                    <img src='https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png' alt="Notification" className="navicons "/>
                    <p>My Saved Library 1</p>
                    <p>dd-mm-yyyy</p>
                </div>
                <div className='shadow m-3 p-3 card'>
                    <img src='https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png' alt="Notification" className="navicons "/>
                    <p>My Saved Library 1</p>
                    <p>dd-mm-yyyy</p>
                </div>
            </div>
            <div className='d-flex '>

                <div className='shadow images-container '>
                    <div className="d-flex  text-center flex-column flex-md-row">
                        <div className='shadow m-3 pb-4'>
                            <img src='https://images.squarespace-cdn.com/content/v1/6037fe3b0c151a3960d10481/1685368077924-D86IR54E6FO3EUWGIMRG/Polish_20230528_161304024.jpg?format=750w' className='image-cards'/>
                            <h6 className="text-center">State of Markets</h6>
                            <p className="m-2 text-center m-auto">The market captalizing of indian stocks crosses 445$ trillions in January</p>
                        </div>
                        <div className='shadow m-3'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TNC_8k8nS98JwPH3aGJ0EmE19wTxKAfM6HqJUOrghA&s' className='image-cards'/>
                            <h6 className="text-center">State of Markets</h6>
                            <p className="m-2 text-center m-auto">The market captalizing of indian stocks crosses 445$ trillions in January</p>
                        </div>
                        <div className='shadow m-3'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNSc6n-UKqX0AzVzV92nr_Ka_F9-RNe3ORw9jcaQc1A&s' className='image-cards'/>
                            <h6 className="text-center">State of Markets</h6>
                            <p className="m-2 text-center m-auto">The market captalizing of indian stocks crosses 445$ trillions in January</p>
                        </div>
                        <div className='shadow m-3'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHK2mtLRICzDQ32YunGg-i8ek3oKkQohcyTxJeNcC_HeXF7LGgg-QAesghJPTXkXZA8A&usqp=CAU' className='image-cards'/>
                            <h6 className='text-center m-3'>Banking Monitor</h6>
                            <p className="m-2 text-center m-auto">The market captalizing of indian stocks crosses 445$ trillions in January</p>
                        </div>
                        <img src='https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-right-arrow-icon-png-image_956430.jpg' className='navicons m-auto'/>
                    </div>
                    <div>
                        {btn ? 
                        <div className="d-flex  text-center flex-column flex-md-row">
                            <div className='shadow m-3 pb-4'>
                                <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220628171333/Business-environment.png' className='image-cards'/>
                                <h6 className="text-center">State of Markets</h6>
                                <p className="m-2 text-center m-auto">The market captalizing of indian stocks crosses 445$ trillions in January</p>
                            </div>
                            <div className='shadow m-3'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZc8EREN0xZHiN2HFYdPZvxc9h38RtCv3s-XeEJRzTA&s' className='image-cards'/>
                                <h6 className="text-center">State of Markets</h6>
                                <p className="m-2 text-center m-auto">The market captalizing of indian stocks crosses 445$ trillions in January</p>
                            </div>
                            <div className='shadow m-3'>
                                <img src='https://files.taxfoundation.org/legacy/docs/Millionaires%202001%20to%202010.png' className='image-cards'/>
                                <h6 className="text-center">State of Markets</h6>
                                <p className="m-2 text-center m-auto">The market captalizing of indian stocks crosses 445$ trillions in January</p>
                            </div>
                            <div className='shadow m-3'>
                                <img src='https://www.economy.com/dismal/graphs/blog/AC_040617_1a.png' className='image-cards'/>
                                <h6 className='text-center m-3'>Banking Monitor</h6>
                                <p className="m-2 text-center m-auto">The market captalizing of indian stocks crosses 445$ trillions in January</p>
                            </div>
                            <img src='https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-right-arrow-icon-png-image_956430.jpg' className='navicons m-auto'/>
                        </div> : ""}
                    </div>
                    <div className='m-auto text-center'>
                        <button className='btn btn-dark m-3' onClick={()=>(setbtn(!btn))}>{btn? "Show Less" : "View More"}</button>
                    </div>
                    
                </div>
                <div className='shadow m-2 p-2 w-50'>
                    <div className='d-flex justify-content-around m-auto'>
                        <h6>Recent Releases</h6>
                        <select>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="RUssia">RUssia</option>
                            <option value="Chaina">Chaina</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                    <hr />
                    <div>
                        <p>Feburary 12 2024</p>
                        <h6>Industrial Production</h6>
                        <p className='m-2'>Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1:2% YoY in December as compared to 10.4% YoY growth in the same month last year.</p>
                    </div>
                    <hr />
                    <div>
                        <p>Feburary 12 2024</p>
                        <h6>CPI Inflation</h6>
                        <p className='m-2'>India's Inflation eased to 5.1% in Jan, a 60 basis points decrese from the previous month. Consumer Food Price Index (CFP() declined from 9.6% in Dec 23 to 8.3% in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home