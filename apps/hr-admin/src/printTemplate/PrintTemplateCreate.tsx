import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { PrintTemplateContentTitle } from "../printTemplateContent/PrintTemplateContentTitle";
import { PrintTemplateGroupTitle } from "../printTemplateGroup/PrintTemplateGroupTitle";

export const PrintTemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="Description" />
        <TextInput label="Code" source="code" />
        <TextInput label="FilePath" source="filePath" />
        <BooleanInput label="IsCustomized" source="isCustomized" />
        <BooleanInput label="IsFavourite" source="isFavourite" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <SelectInput
          source="paperLayout"
          label="PaperLayout"
          choices={[
            { label: "Portrait", value: "Portrait" },
            { label: "Landscape", value: "Landscape" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="paperSize"
          label="PaperSize"
          choices={[
            { label: "A1", value: "A1" },
            { label: "A2", value: "A2" },
            { label: "A3", value: "A3" },
            { label: "A4", value: "A4" },
            { label: "A5", value: "A5" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceArrayInput
          source="printTemplateContents"
          reference="PrintTemplateContent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PrintTemplateContentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="printTemplateGroupId.id"
          reference="PrintTemplateGroup"
          label="PrintTemplateGroupId"
        >
          <SelectInput optionText={PrintTemplateGroupTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
