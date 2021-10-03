import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const useDocument = (collection, id) => {
  const error = ref(null);
  const isPending = ref(false);

  let docRef = projectFirestore.collection(collection).doc(id);

  const deleteDoc = async () => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await docRef.delete();
      isPendig.value = false;
      return res;
    } catch (err) {
      console.log(err);
      isPending.value = false;
      error.value = 'Could not delete document';
    }
  };

  return { error, isPending, deleteDoc };
};

export default useDocument;
