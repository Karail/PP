import React, {useState} from "react";
import {Checkbox } from "@material-ui/core";

export const TableItemCheckbox = ({value, edit, width, onChange}) => {
    
    return (
        <div className='table-item'>
            {
                edit ?  
                <Checkbox 
                onChange={(e) => {
                    onChange(e.target.checked)
                }}     
                style={{ maxWidth: width, border: 0, fontSize: 16, margin: "16px 0 ",   resize: 'none'}} 
                 defaultChecked={value}/> : 
                <Checkbox  style={{ width: width, fontSize: 14}} defaultChecked={value}/>
            }
        </div>
    )
}