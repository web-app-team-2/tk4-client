import { useState } from 'react';
import {
  useFirestoreCollectionMutation,
} from '@react-query-firebase/firestore';
import { collection } from 'firebase/firestore';

import firestore from '../../database/firestore';

export const useSubmitForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const storageRef = collection(firestore, 'students');
  const mutation = useFirestoreCollectionMutation(storageRef);

  const submitForm = async (form) => {
    setLoading(true);

    try {
      await mutation.mutateAsync({
        nim: form.nim,
        name: form.name,
        address: form.address,
        gender: form.gender,
        hobbies: form.hobbies || [],
        comment: form.comment,
        createdAt: new Date(),
      });

      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
    }

    setLoading(false);
  };

  return { loading, success, submitForm };
};
