import React from 'react'
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';


export default function DropdownMenu(props) {

    function DropdownItem(props){
        return (
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown">
            <DropdownItem>My Proflie</DropdownItem>
            <DropdownItem 
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}>


            </DropdownItem>
        </div>
    )
}
