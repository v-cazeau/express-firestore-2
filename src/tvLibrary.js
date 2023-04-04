import { db } from "./dbConnect.js";

export function addNewTv(req, res) {
    const newTv = req.body;
    // CREATE: Add new TV show 
    db.collection('tvShows')
        .add(newTv)
        .then(doc => res.status(201).send(`New Tv Added: ${doc.id}`)) //doc b/c firestore is a document database
        .catch(err => req.status(500).send(err))
};

export async function getAllTv(req,res) {
    const collection = await db.collection('tvShows')
        .get()
        .catch(err => res.status(500).send(err))

        const tvShowList = collection.doc.map(
            tvShow => ({...tvShow.data(), id:tvShow.id})
        )
};