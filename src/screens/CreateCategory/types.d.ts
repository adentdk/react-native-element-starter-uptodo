import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare namespace iCreateCategoryScreen {
  interface Props extends NativeStackScreenProps<iNavigator.RootParamList, 'Login'> { }

  interface CreateCategoryForm extends Omit<CategoryData, 'id' | 'createdAt' | 'updatedAt'> { }
}

export { iCreateCategoryScreen };