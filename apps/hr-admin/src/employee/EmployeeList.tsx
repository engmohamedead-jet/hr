import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="LastYearBalance" source="lastYearBalance" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="RemainingBalance" source="remainingBalance" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UsedBalance" source="usedBalance" />
      </Datagrid>
    </List>
  );
};
