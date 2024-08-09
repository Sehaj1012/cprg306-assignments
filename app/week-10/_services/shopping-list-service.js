import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user
export async function getItems(userId) {
    const itemsArray = [];
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const q = query(itemsCollectionRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        itemsArray.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return itemsArray;
}

// Function to add a new item to a specific user's list of items
export async function addItem(userId, item) {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;  // Return the id of the newly created document
}

