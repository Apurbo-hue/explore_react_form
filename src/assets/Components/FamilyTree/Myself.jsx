import React, { useContext } from 'react';
import Special from './Special';
import { MoneyContext } from './FamilyTree';

const Myself = ({asset}) => {
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h2>Myself</h2>
            <Special asset={asset}></Special>
            <button onClick={()=>setMoney(money+1000)}>add 1k</button>
        </div>
    );
};

export default Myself;