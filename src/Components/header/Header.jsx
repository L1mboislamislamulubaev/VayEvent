import React, { useState } from 'react';
import cl from './Header.module.css';
import useModal from '../../hooks/useModal';
import MyModal from '../../Components/UI/MyModal/MyModal';


const Header = ({ setModal }) => {
  const [auto,setAuto] = useState(true);
  const handleLoginClick = () => {
    setModal(true);
    setAuto(false)
  };


  

  return (
    <div className={`${cl.header}`}>
      <div className={`${cl.header_container}`}>
        <div className={`${cl.logo}`}>
        <img className={`${cl.header_loop1}`} src='./logo.png' width="80px" alt="Loop Icon" />
        </div>
        <div className={`${cl.header_description}`}>
          <div>EVENT</div>
          <div>EVENT</div>
          <div>EVENT</div>
          <div>EVENT</div>
        </div>
        <img className={`${cl.header_loop}`} src='./loop.svg' width="14px" alt="Loop Icon" />
        <input className={`${cl.header_search}`} type='search' placeholder='Найти мероприятие' />
        
      </div>

      {auto && (
        <div onClick={handleLoginClick} className={`${cl.login}`}>
          Войти
        </div>
      )}
      
      
      
    

  
    </div>
  );
};

export default Header;
