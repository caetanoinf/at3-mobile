import { useCallback } from "react";
import { useSession } from "../contexts";
import { db } from "../firebase";
import firebase from "firebase";

const productsCollection = db.collection("products");

export function useProducts() {
  const { authenticatedUser } = useSession();
  const userId = authenticatedUser?.uid;

  const getProducts = useCallback(
    async (orderField = "timestamp") => {
      const querySnapshot = await productsCollection.where("userId", "==", userId).get();
      const data = [];

      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });

      return data;
    },
    [authenticatedUser]
  );

  const createProduct = useCallback(
    async (product) => {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const doc = { ...product, timestamp, userId: authenticatedUser.uid };
      return productsCollection.add(doc);
    },
    [authenticatedUser]
  );

  const deleteProduct = useCallback(async (productId) => {
    return productsCollection.doc(productId).delete();
  });

  const updateProduct = useCallback(async (productId, product) => {
    return productsCollection.doc(productId).update(product);
  });

  return {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
  };
}
