import { ControllerProps } from "react-hook-form";
import type Category from "@model/Category";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Query from "@nozbe/watermelondb/Query";

declare namespace iCategoryPicker {
  interface Props {
    value?: string;
    visible?: boolean;
    finishText?: string;
    cancelText?: string;
    onDismiss?: () => void;
    onSelect?: (value?: string) => void;
    onFinish?: () => void;
    onCancel?: () => void;
  }

  interface Ref {
    togglePickerVisibility: () => void;
  }

  interface DatabaseProps {
    categories?: Query<Category>;
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
