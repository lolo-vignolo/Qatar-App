

import {firestore} from "../../../firebase/admin.js";

export default function dinamic (req, res)  {
    const {query} = req
    const {id} = query


    firestore
    .collection("comments")
    .doc(id)
    .get()
    .then (doc =>{
        const docData = doc.data();
        const id = doc.id;
       
        const { createdAt } = docData;

        res.json( {
          ...docData,
          createdAt: +createdAt.toDate(),
          id,
        })
        res.status(200).end()


    })
    .catch(() =>{res.status(404).end()})
}

