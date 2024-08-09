import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { EMPLOYEECLASS_TITLE_FIELD } from "../employeeClass/EmployeeClassTitle";
import { SALARYITEM_TITLE_FIELD } from "../salaryItem/SalaryItemTitle";

export const EmployeeClassSalaryItemValueShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
