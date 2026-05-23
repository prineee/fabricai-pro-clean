import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase";


// CREATE TEMPLATE
export const createTemplate = async (
  name: string,
  category: string,
  content: string
) => {
  try {
    await addDoc(
      collection(db, "templates"),
      {
        name,
        category,
        content,
      }
    );

    console.log("Template added");
  } catch (error) {
    console.log(error);
  }
};


// GET TEMPLATES
export const getTemplates = async () => {
  try {
    const snapshot = await getDocs(
      collection(db, "templates")
    );

    const templates: any[] = [];

    snapshot.forEach((doc) => {
      templates.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return templates;
  } catch (error) {
    console.log(error);
    return [];
  }
};