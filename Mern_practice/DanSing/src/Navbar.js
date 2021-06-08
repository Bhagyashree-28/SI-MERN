import React ,{useState,useRef,useEffect}from 'react';
import {FaBars,FaTwitter,FaFacebook,FaLinkedin,FaYoutube} from 'react-icons/fa';
import {FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import{GiLoveSong}from 'react-icons/gi';
import data from './data';
import dan from './image/DanSing-logos_black.png';
import danceimg from './image/dance.png';
import kai from './image/kai.png';
import group from './image/group.png';
import gurl from './image/gurl.png';
import { Link } from 'react-router-dom';
const Navbar=()=>{
const [people, setPeople] = useState(data);
const [index, setIndex] = React.useState(0);
const [showLinks,setShowLinks]=useState(true);
useEffect(()=>{
    const lastIndex=people.length-1;
    if(index<0)
    {
        setIndex(lastIndex);
    }
    if(index>lastIndex){
        setIndex(0);
    }
},[index,people]);
/*useEffect(()=>{
    let slider=setInterval(()=>{
        setIndex(index+1);
    },3000);
    return ()=>clearInterval(slider);
},[index]);*/

return <div>
    <nav>
    <div className="nav-center">
        <div className="nav-header">
            <img src={dan} alt="logo" className="logo_icon"/>
            <button className="nav-toggle" onClick={()=>
            setShowLinks(!showLinks)
            }>
                <FaBars/>
            </button>
        </div>
        {showLinks &&
         (<div className="links-container show-container">
            <ul className="links">
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/contact'>contact us</Link>
                    
                </li>
                <li>
                <Link to='/about'>about</Link>
                </li>
            </ul>

        </div>)
    }
       
        <ul className="social-icons">
        <li>
            <a target="_blank" href="https://www.twitter.com"><FaTwitter/></a>
        </li>
        <li>
            <a target="_blank"  href="https://www.facebook.com"><FaFacebook /></a>
        </li>
        <li>
            <a  target="_blank" href="https://www.linkedin.com"><FaLinkedin /></a>
        </li>
        </ul>
    </div>
</nav>
    <div className="mid-text-image">
        <div>
    <h1 className="font1">Dance</h1>
    <h1 className="font2">With</h1>
    <h1 className="font3">Us</h1>
    <button className="tutorial-btn" >  <a target="_blank" href="https://youtu.be/2IkoKhr6Tss">Watch Tutorial</a></button></div>
    <img src={danceimg} alt="dance" className="dance-step"/>
    </div>

    <div class="cards-list">
  
        <div class="card 1">
          <div class="card_image"> <img src={group} className="first"/> </div>
          <div class="card_title1 ">
            <p>Feb 28,2021</p>
            <h5>Basic Dance steps for Everyone</h5>
            <h1><FaYoutube /> <a target="_blank" href="https://youtu.be/mUc9tOYaTJU" style={{color: "red"}}> check out</a></h1>
          </div>
        </div>
        
          <div class="card 2">
          <div class="card_image">
            <img src={kai}className="second" />
            </div>
          <div class="card_title2 ">
          <p>Feb 28,2021</p>
            <h5>Basic Dance steps for Everyone</h5>
            <h1><FaYoutube /><a target="_blank" href="https://youtu.be/mUc9tOYaTJU" style={{color: "red"}}> check out</a></h1>
          </div>
        </div>
        
        <div class="card 3">
          <div class="card_image">
            <img src={gurl} className="third"/>
          </div>
          <div class="card_title3 ">
          <p>Feb 28,2021</p>
            <h5>Basic Dance steps for Everyone</h5>
            <h1><FaYoutube /> <a target="_blank" href="https://youtu.be/mUc9tOYaTJU" style={{color: "red"}}> check out</a></h1>
          </div>
        </div>
        
        </div>
 
<div className="centeritems">
    {people.map((person,personIndex)=>{
    const {id,image,name,title}=person;
    let position='nextSlide';
    if(personIndex===index){
        position='activeSlide';
    }
    if(personIndex==index-1||(index===0 && personIndex===person.length-1))
    {
        position='lastSlide';
    }
   
    return(
        
        <article className={position} key={id}>
            <img src={image} alt={name} className='person-img'/>
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <GiLoveSong className="icon" />
        </article>
    );
    })}
    <button className='prev' onClick={()=>setIndex(index-1)}><FiChevronLeft/></button>
    <button className='next' onClick={()=>setIndex(index+1)}><FiChevronRight/></button>
</div>

</div>
}
export default Navbar