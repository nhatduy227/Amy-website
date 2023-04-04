import React, { useState } from "react";
import { db } from "../../Firebase";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { useTranslation } from 'react-i18next';
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../../Firebase";
import { v4 as uuidv4 } from 'uuid';

export default function PostRecipe() {
    const { t } = useTranslation();
    const initialState = {
        name: "",
        url: ""
    };
    const [isDisabled, setDisable] = useState(true)
    const [data, setData] = useState(initialState);
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const uploadFile = async (file) => {
        const pdfRef = ref(storage, `pdf/${Date.now()}_${file.name}`);

        try {
            await uploadBytes(pdfRef, file);

            // Get the download URL of the image
            const downloadURL = await getDownloadURL(pdfRef);
            setData({
                ...data,
                url: downloadURL
            })
            alert('File uploaded successfully!')
            setDisable(false)
        } catch (error) {
            console.error(error);
        }
    };
    const handlePostRecipe = async () => {
        const collectionRef = collection(db, "recipe")
        const id = uuidv4();
        const payload = { recipeId: id, recipeName: data.name, recipeFile: data.url }
        setData(initialState)
        setDisable(true)
        await addDoc(collectionRef, payload).then(() => console.log("submitted"))
    }
    console.log(data)
    return (
        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    {t(`admin.recipe name`)}
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    onChange={handleInputChange}
                    value={data.name}
                    name="name"
                    placeholder={t(`admin.recipe name`)} />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    {t(`admin.recipe file`)}
                </label>
                <input
                    type="file"
                    onChange={(event) => {
                        uploadFile(event.target.files[0])
                    }}
                    name="file"
                    id="file"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    disabled={isDisabled}
                    class="bg-blue-500 disabled:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handlePostRecipe} >
                    {t(`admin.submit`)}
                </button>
            </div>
        </form>

    )
}
