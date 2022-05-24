import { ControllerProps } from "react-hook-form";
import type Category from "@model/Category";
import { ForwardRefExoticComponent, RefAttributes } from "react";

declare namespace iCategoryCreate {
  interface Props {
    visible?: boolean;
    onFinish?: () => void;
    onCancel?: () => void;
  }

  interface Ref {
    togglePickerVisibility: () => void;
  }

  interface Form {
    name: string;
    icon: string;
    color: string;
  }

  interface CategoryModel extends Category {}
}

export { iCategoryCreate };
