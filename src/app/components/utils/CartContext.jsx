"use client";

import {
  GoogleAuthProvider,
  linkWithPopup,
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
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

  const updateCartItem = useCallback(
    async (itemId, quantity) => {
      if (!user) return;
      const cartItemRef = doc(db, "carts", user.uid, "items", itemId);

      if (quantity <= 0) {
        await deleteDoc(cartItemRef);
        return;
      }

      await setDoc(
        cartItemRef,
        {
          quantity,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
    },
    [user]
  );

  const removeCartItem = useCallback(
    async (itemId) => {
      if (!user) return;
      await deleteDoc(doc(db, "carts", user.uid, "items", itemId));
    },
    [user]
  );

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + (item.quantity || 0), 0),
    [items]
  );

  const loginWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();

    try {
      if (auth.currentUser?.isAnonymous) {
        await linkWithPopup(auth.currentUser, provider);
      } else {
        await signInWithPopup(auth, provider);
      }
    } catch (error) {
      console.error("Google login failed:", error);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      items,
      cartCount,
      isCartReady,
      addToCart,
      updateCartItem,
      removeCartItem,
      loginWithGoogle,
      logout,
    }),
    [user, items, cartCount, isCartReady, addToCart, updateCartItem, removeCartItem, loginWithGoogle, logout]
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
