import { router } from "expo-router";
import { AppDispatch } from "@/utils/store";

type ThaliItem = {
  id: string;
  title: string;
  cost: string;
  url: string;
  quantity: number;
  description?: string;
};

export const handleAddToCart = (
  id: string,
  title: string,
  cost: string,
  quantity: string,
  thaliId: string,
  description: string = "Default description",
  dispatch: AppDispatch,
  thaliItems?: ThaliItem[]
) => {
  const parsedCost = parseFloat(cost);
  const parsedQuantity = parseInt(quantity);

  if (isNaN(parsedCost) || isNaN(parsedQuantity)) {
    console.error("Invalid cost or quantity");
    return;
  }

  // No need to dispatch to cartSlice since we're using thaliItems directly
  // Simply navigate to the Cart screen
  router.push("/(screens)/cart");
};