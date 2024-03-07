import React from 'react'
import Cheats from '../../db/cheats.json'

function GtaIII(){

    return(
        <div>
            <table>
            <thead>  
            <tr>
                <th>Efeitos</th>
                <th>Códigos</th>
            </tr>
            </thead>

            <tbody>
            {Cheats.map((item) => {
                if(item.jogos_id === 1){
                return (
                    <tr className='tableRows'>
                    <td className='tableCells'>{item.efeitos}</td>
                    <td className='tableCells'>{item.cheats}</td>
                    </tr>
                )
                }
            })}
            </tbody>
        </table>
        </div>
    )
}

export default GtaIII