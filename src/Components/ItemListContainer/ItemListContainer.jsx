import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      try {
        const collectionRef = categoryId
          ? query(collection(db, "items"), where("category", "==", categoryId))
          : collection(db, "items");

        const querySnapshot = await getDocs(collectionRef);

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;