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

  interface CategoryModel extends Category {}

  type ComposePropsInput = Props & RefAttributes<Ref>;

  type ComposePropsOutput = ForwardRefExoticComponent<ComposePropsInput>;

  type ComponentProps = Props & RefAttributes<Ref>;

  interface PropControl extends Omit<Props, 'ref' | 'value'> {
    formProps: Omit<ControllerProps<any>, 'render'>
  }
}

export { iCategoryCreate };
