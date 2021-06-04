import React, { useState } from 'react'
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';

export default function DropdownMenu() {
    //state hook that allows us to toggle the state of the activemenu
    const [activeMenu, setActiveMenu] = useState('main'); 

    //nested functional component that populates the svg icons, and has 
    //links to a linkRoute given by parent. sets active menu if goToMenu prop exists
    function DropdownItem(props){
        return (
            <a href={props.linkRoute} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown">
            <CSSTransition 
                in={ activeMenu === 'main' } 
                unmountOnExit 
                timeout={ 500 }
                classNames="menu-primary"
                >
                    <div className="menu">

                        <DropdownItem 
                            leftIcon={ <ArrowIcon /> }
                            linkRoute={ "/" }
                            >
                            FLATBÖK
                        </DropdownItem>
                        <DropdownItem 
                            leftIcon={ <CogIcon /> }
                            rightIcon={ <ChevronIcon /> }
                            goToMenu='settings'
                            >
                            More
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
                            leftIcon={ <ArrowIcon/> }
                            goToMenu='main'
                            > Go Back</DropdownItem>
                        <DropdownItem 
                            leftIcon={ <BoltIcon/> }
                            linkRoute="https://github.com/1ouis1effler/flatbook"                        
                            > Project Repo 
                        </DropdownItem>

                        <DropdownItem 
                            leftIcon={ <PlusIcon/> }
                            linkRoute="https://github.com/1ouis1effler"
                            > Louis Github 
                        </DropdownItem>
                        <DropdownItem 
                            leftIcon={ <PlusIcon/> }
                            linkRoute="https://www.linkedin.com/in/louisleffler/"
                            > Louis Linkedin 
                        </DropdownItem>
                        <DropdownItem 
                            leftIcon={ <PlusIcon/> }
                            linkRoute="https://github.com/Sunset05"
                            > Keith Github 
                        </DropdownItem>
                        <DropdownItem 
                            leftIcon={ <PlusIcon/> }
                            linkRoute="https://www.linkedin.com/in/keith-funk-7082a315b/"
                            > Keith Linkedin 
                            </DropdownItem>

                    </div>
            </CSSTransition>
        </div>
    );
}
