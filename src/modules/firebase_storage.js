import { initializeApp } from 'firebase/app';
import { deleteObject, getStorage, listAll, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export function uploadImage(path, file) {
  const imgRef = ref(storage, path);

  uploadBytes(imgRef, file).then((snapshot) => console.log(snapshot));
}

export async function getStorageList(storageType, path) {
  const listRef = ref(storage, path);
  const result = await listAll(listRef);
  if (storageType === "folders") {
    const folders = result.prefixes.map(folder => folder.name);
    return folders;
  } else if (storageType === "files") {
    const files = result.items.map(files => files.name);
    return files;
  }
}

export async function deleteImage(path) {
  const imgRef = ref(storage, path);

  deleteObject(imgRef).then(() => console.log("delete success."));
}