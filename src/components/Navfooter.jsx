import React, { Component } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import home from '../assets/home.png';
import search from '../assets/search.png';
import send2 from '../assets/send2.png';
import video from "../assets/video-icon.png";
import './Navfooter.css';

const Navfooter = () => {
    return (
        <div className='navfooter'>
            <NavLink to="/" className='navigation-link'>
                <img onClick={() => { window.location.href = '/' }}
                    className='foot-icon' src={home} alt="home-button" />
            </NavLink>
            <NavLink to="/search" className='navigation-link'>
                <img className='foot-icon' src={search} alt="search-button" />
            </NavLink>
            <NavLink to="/reels" className='navigation-link'>
                <img className='foot-icon' src={video} alt="video-button" />
            </NavLink>
            <a href="/profil/6">
                <img src="https://i.ibb.co/5402THJ/saori-profilepic.jpg" alt="Saori Kido" className="foot-icon-profile" />
            </a>
        </div>
    )
}

export default Navfooter;