import React, { useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'
import { AssetContext, MoneyContext } from './context';



const FamilyTree = () => {
    const asset = 'Diamond'
    const newAsset = 'Gold'
    const [money, setMoney] = useState(0)
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h1>{money}</h1>


            <MoneyContext value={[money, setMoney]}>
                <AssetContext value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext>
            </MoneyContext>

        </div>
    );
};

export default FamilyTree;