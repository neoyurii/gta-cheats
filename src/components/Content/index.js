import React from 'react'
import './content.css'

function Content({data}) {
  return (
    <div>
        <table>
            <thead>  
            <tr>
                <th>Efeitos</th>
                <th>Códigos</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{data.efeitos}</td>
                <td>00000000</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Content