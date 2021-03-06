import { ControllerProps } from "react-hook-form";
import type Category from "@model/Category";
import { ForwardRefExoticComponent, RefAttributes } from "react";

declare namespace iCategoryPicker {
  interface Props {
    value?: string;
    visible?: boolean;
    finishText?: string;
    onCancel?: () => void;
    onSelect?: (value?: string) => void;
    onFinish?: () => void;
  }

  interface Ref {
    togglePickerVisibility: () => void;
  }

  interface DatabaseProps {
    categories?: Category[];
  }

  interface CategoryModel extends Category {}

  type ComposePropsInput = Props & RefAttributes<Ref> & DatabaseProps;

  type ComposePropsOutput = ForwardRefExoticComponent<ComposePropsInput>;

  type ComponentProps = Props & RefAttributes<Ref> & DatabaseProps;

  interface PropControl extends Omit<Props, 'ref' | 'value'> {
    formProps: Omit<ControllerProps<any>, 'render'>
  }
}

export { iCategoryPicker };
