import React from 'react';
import OptionSwitch from './OptionSwitch';

const Collapsible = (props) =>
{
    const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

    const toggleCollapse = () =>
    {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <>
            <OptionSwitch
                containerName="catCollapseCont"
                handleToggle={toggleCollapse}
                className="categoryCollapse"
                id={props.id}
                value={props.value}
                label={props.value}
            />
            <hr
                className='faded'
                style={{display: !isCollapsed ? 'block' : 'none'}}
            />
            <div
                className={`optionsTable ${props.category}Table collapse-content category ${isCollapsed ? 'collapsed' : 'expanded'}`}
                aria-expanded={isCollapsed}
            >
                {props.children}
            </div>
            <hr
                style={{display: !isCollapsed || props.alwaysBar ? 'block' : 'none'}}
            />
        </>
    )
}

export default Collapsible;