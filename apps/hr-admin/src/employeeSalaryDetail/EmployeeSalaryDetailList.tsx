import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALARYITEM_TITLE_FIELD } from "../salaryItem/SalaryItemTitle";

export const EmployeeSalaryDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmployeeSalaryDetails"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
