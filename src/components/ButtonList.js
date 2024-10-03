import React from 'react';
import Button from "./Button";

const ButtonList = ()  =>{
    return (
        <div className="flex ml-3">
            <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Music"/>
            <Button name="Programming"/>
            <Button name="Idk"/>
            <Button name="Dummy"/>
        </div>
    );
}

export default ButtonList;