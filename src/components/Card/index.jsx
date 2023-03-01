import api from '../../api/api'

import * as React from 'react';
import { useState, useEffect } from 'react';
import { BoxCard } from './style'

function Card({ name, email, telefone, dataUsers }) {
    const [DataUsers, setDataUsers] = useState({});
    const handLoadCards = () => {
        api
            .get('/users')
            .then((response) => {
                console.log(response)
                // setDataUsers({
                //     name: response?.name,
                //     email: response?.email,
                //     telefone: response?.telefone
                // });
    
            })}
            useEffect(() => {
                handLoadCards()
            }, [dataUsers])
    return (
        <div>
            <BoxCard>
                <div>{name}</div>
                <div>{email}</div>
                <div>{telefone}</div>
            </BoxCard>
        </div>
    )
}
export default Card;