import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEECLASS_TITLE_FIELD } from "../employeeClass/EmployeeClassTitle";
import { SALARYITEM_TITLE_FIELD } from "../salaryItem/SalaryItemTitle";

export const EmployeeClassSalaryItemValueList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmployeeClassSalaryItemValues"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
