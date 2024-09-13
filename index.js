import express from "express"
import cors from "cors" 
import dotenv from "dotenv"
dotenv.config()
// IMPORT OUR DB
import { db } from "./util/FirebaseInit.js";
// IMPORT FIREBASE FUNCTION
import { collection, getDocs } from "firebase/firestore"

const app = express();
const port = 8080;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get("/", async(req,res) => {
    res.send("Hello World!");
});

app.get("/students", async (req, res) => {
    // Get a reference to the colleciton 'Students' 
    const collectionRef = collection(db, "Students");
    // Get all documents from the collection
    const collectionSnap = await getDocs(collectionRef)
    const docs = []
    collectionSnap.forEach((doc) => {
        docs.push(doc.data());
    });
    // Make a list of those documents
    // Return them
    res.send(docs);
});

app.listen(port, () => {
    console.log("Listening on port", port);
});