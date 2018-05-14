import React from 'react';

const TableHead = (props) => {
    const headers = props.headers.map((header, index) => {
        return <th key={index}>{header}</th>
    });
    
    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
}

export default TableHead;