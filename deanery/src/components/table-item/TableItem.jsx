import React, {useState} from "react";

export const TableItem = ({value, edit, width, onChange}) => {

    return (
        <div className='table-item'>
            {
                edit ?  <textarea onChange={(e) => onChange(e.target.value)}     style={{ maxWidth: width, border: 0, fontSize: 16, margin: "16px 0 ",   resize: 'none'}} value={value}/> : <p  style={{ width: width, fontSize: 14}}>{value}</p>
            }
        </div>
    )
}