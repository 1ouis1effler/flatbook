import React, { useState } from 'react'
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { CSSTransition } from 'react-transition-group';


export default function DropdownMenu(props) {

    const [activeMenu, setActiveMenu] = useState('main'); //settings, animals
    

  

    function DropdownItem(props){
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown">
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-primary"
                >
                    <div className="menu">

                        <DropdownItem>My Proflie</DropdownItem>
                        <DropdownItem 
                            leftIcon={<CogIcon />}
                            rightIcon={<ChevronIcon />}
                            goToMenu='settings'
                            >
                            Settings
                        </DropdownItem>

                    </div>
            
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                >
                    <div className="menu">
                        <DropdownItem 
                            leftIcon={<CogIcon />}
                            goToMenu='main'
                            >go back</DropdownItem>
                        <DropdownItem> Settings </DropdownItem>
                        <DropdownItem> placeholder </DropdownItem>
                        <DropdownItem> placeholder </DropdownItem>
                        <DropdownItem> placeholder </DropdownItem>
                        <DropdownItem> placeholder </DropdownItem>

                    </div>
            </CSSTransition>
        </div>
    );
}
