import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { PrintTemplateContentTitle } from "../printTemplateContent/PrintTemplateContentTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const PrintTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="FilePath" source="filePath" />
        <BooleanInput label="IsActive" source="isActive" />
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
            { label: "A6", value: "A6" },
            { label: "B1", value: "B1" },
            { label: "B2", value: "B2" },
            { label: "B3", value: "B3" },
            { label: "B5", value: "B5" },
            { label: "B6", value: "B6" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceInput
          source="printTemplateContents.id"
          reference="PrintTemplateContent"
          label="PrintTemplateContents"
        >
          <SelectInput optionText={PrintTemplateContentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
