"use client";

import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import {
  collection,
  doc,
  increment,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth, db } from "../../lib/firebase";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [isCartReady, setIsCartReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        return;
      }

      setItems([]);
      setIsCartReady(false);
      const credentials = await signInAnonymously(auth);
      setUser(credentials.user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      return undefined;
    }

    const cartItemsRef = collection(db, "carts", user.uid, "items");
    const unsubscribe = onSnapshot(cartItemsRef, (snapshot) => {
      setItems(
        snapshot.docs.map((cartItem) => ({
          id: cartItem.id,
          ...cartItem.data(),
        }))
      );
      setIsCartReady(true);
    });

    return () => unsubscribe();
  }, [user]);

  const addToCart = useCallback(async (product, quantity = 1) => {
    if (!user) return;

    const cartItemRef = doc(db, "carts", user.uid, "items", product.id);

    await setDoc(
      cartItemRef,
      {
        productId: product.id,
        name: product.name,
        flavour: product.flavour,
        price: product.price,
        image: product.image,
        quantity: increment(quantity),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  }, [user]);

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + (item.quantity || 0), 0),
    [items]
  );

  const value = useMemo(
    () => ({
      user,
      items,
      cartCount,
      isCartReady,
      addToCart,
    }),
    [user, items, cartCount, isCartReady, addToCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
