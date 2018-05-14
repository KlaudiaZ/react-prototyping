import React from 'react';

const TableRow = (props) => {
    const content = props.content.map((element, index) => {
        return <td key={index}>{element}</td>
    });
    
    return (
                            <tr>
                                <th scope="row">{props.number}</th>
                                {content}
                            </tr>
    );
}

export default TableRow;