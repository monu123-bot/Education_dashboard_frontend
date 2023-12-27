import React from 'react';
import Class from './main/Class';
import Faculty from './main/Faculty';
import Roles from './main/Roles';
import InsideClass from './inside/InsideClass';
const Main = (props) => {
    let componentToRender;

    switch (props.mainContentValue) {
        case "classes":
            componentToRender = <Class setmainvalue = {props.setmainvalue} setclassid={props.setclassid} />;
            break;
        case "faculty":
            componentToRender = <Faculty />;
            break;
        case "roles":
            componentToRender = <Roles />;
            break;
        case "insideclass":
            componentToRender = <InsideClass classid = {props.classid} />
        default:
            break;
    }

    return (
        <div style={{ height: '94%', overflow: 'auto', display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
            {componentToRender}
        </div>
    );
};

export default Main;
