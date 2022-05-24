import { useForm } from "react-hook-form"
import { iCreateCategoryScreen } from "./types";

export const useCreateCategory = () => {
  const createCategoryForm = useForm<iCreateCategoryScreen.CreateCategoryForm>();
  return {
    createCategoryForm
  }
}