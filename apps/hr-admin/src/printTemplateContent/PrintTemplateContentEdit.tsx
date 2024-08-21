import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PrintTemplateTitle } from "../printTemplate/PrintTemplateTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const PrintTemplateContentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Display" source="display" />
        <TextInput label="FieldValue" source="fieldValue" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Key" source="key" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="printTemplateId.id"
          reference="PrintTemplate"
          label="PrintTemplateId"
        >
          <SelectInput optionText={PrintTemplateTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenantId.id" reference="Tenant" label="Tenantd">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
