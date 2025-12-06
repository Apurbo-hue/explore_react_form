import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name,asset}) => {
    const newAsset = useContext(AssetContext)
    return (
        <div>
            <h2>Special:{name}{asset}</h2>
            <p>New asset: {newAsset}</p>
        </div>
    );
};

export default Special;