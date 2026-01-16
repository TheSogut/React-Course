import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIContextProvider({ children }) {
  const [uiProgress, setUIProgess] = useState("");

  function showCart() {
    setUIProgess("cart");
  }

  function hideCart() {
    setUIProgess("");
  }
  function showCheckout() {
    setUIProgess("checkout");
  }

  function hideCheckout() {
    setUIProgess("");
  }

  const uiProgressContext = {
    uiProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UIContext.Provider value={uiProgressContext}>
      {children}
    </UIContext.Provider>
  );
}
