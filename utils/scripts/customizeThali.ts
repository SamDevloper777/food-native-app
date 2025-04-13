import { router } from "expo-router";

import { addThaliItem } from "../slice/cartSlice";

export const handleAddToCart = (id: string, title: string, price: string, quantity: string, dispatch: any) => {
    dispatch(
      addThaliItem({
        id: parseInt(id),
        name: title,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      })
    );
    router.push("/(screens)/cart");
  };
