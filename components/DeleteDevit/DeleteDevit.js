import { deleteDoc } from '../../firebase/client';

import React from 'react';

const DeleteDevit = ({userId , Uid , docId}) => {

    

    const handleDelete = () => {
        if(userId === Uid){
            deleteDoc(docId)
            
        }
    }

    return (
        <button onClick={handleDelete}>
            X
        </button>
    );
};

export default DeleteDevit;