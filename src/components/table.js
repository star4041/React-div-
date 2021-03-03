import React from 'react'

const Table = ({ data }) => {

    const columns = data[0] && Object.keys(data[0]);

    return (

        <table cellPadding={10} cellSpacing={10} style={{width:'100%'}}>
         <thead>
            <tr style={{background: 'linear-gradient(to right, #ff5858, #f857a6)'
}}>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
         </thead>
         <tbody>
            {data.map(row => <tr>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
            </tr>)}
         </tbody>
    </table>
    );
     
}

export default Table;