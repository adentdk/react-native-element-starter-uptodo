import TextInputControl from 'design-system/molecules/TextInputControl';
import Main from 'design-system/templates/Main';
import React, {FC} from 'react';
import { Text } from 'react-native';
import { iCreateCategoryScreen } from './types';
import { useCreateCategory } from './useCreateCategory';

const CreateCategoryScreen: FC<iCreateCategoryScreen.Props> = () => {
  const {createCategoryForm} = useCreateCategory();
  return (
    <Main>
      <TextInputControl
        formProps={{
          control: createCategoryForm.control,
          name: 'name',
        }}
        label="Category name"
      />
    </Main>
  )
};

export default CreateCategoryScreen;
