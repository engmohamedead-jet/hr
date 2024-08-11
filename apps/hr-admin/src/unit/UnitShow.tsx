import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { UNIT_TITLE_FIELD } from "./UnitTitle";
import { COMPOUNDUNIT_TITLE_FIELD } from "../compoundUnit/CompoundUnitTitle";

export const UnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <ReferenceField
          label="CompareUnit"
          source="compoundunit.id"
          reference="CompoundUnit"
        >
          <TextField source={COMPOUNDUNIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsCompound" source="isCompound" />
        <BooleanField label="IsDefault" source="isDefault" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CompoundUnit"
          target="Name"
          label="CompoundUnits"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BaseUnitId"
              source="unit.id"
              reference="Unit"
            >
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CompareUnitId"
              source="unit.id"
              reference="Unit"
            >
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
