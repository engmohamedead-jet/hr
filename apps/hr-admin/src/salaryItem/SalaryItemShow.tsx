import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EMPLOYEECLASS_TITLE_FIELD } from "../employeeClass/EmployeeClassTitle";
import { SALARYITEM_TITLE_FIELD } from "./SalaryItemTitle";

export const SalaryItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EmployeeClassSalaryItemValue"
          target="salaryItemIdId"
          label="EmployeeClassSalaryItemValues"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeClassId"
              source="employeeclass.id"
              reference="EmployeeClass"
            >
              <TextField source={EMPLOYEECLASS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="ItemValue" source="itemValue" />
            <ReferenceField
              label="SalaryItemId"
              source="salaryitem.id"
              reference="SalaryItem"
            >
              <TextField source={SALARYITEM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeSalaryDetail"
          target="salaryItemIdId"
          label="EmployeeSalaryDetails"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="SalaryItemId"
              source="salaryitem.id"
              reference="SalaryItem"
            >
              <TextField source={SALARYITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SalaryItemValue" source="salaryItemValue" />
            <TextField label="Serial" source="serial" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
