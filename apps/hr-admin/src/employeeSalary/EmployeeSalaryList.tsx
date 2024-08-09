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
import { FISCALMONTH_TITLE_FIELD } from "../fiscalMonth/FiscalMonthTitle";

export const EmployeeSalaryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmployeeSalaries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="FiscalMonthId"
          source="fiscalmonth.id"
          reference="FiscalMonth"
        >
          <TextField source={FISCALMONTH_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="NetSalary" source="netSalary" />
        <TextField label="Note" source="note" />
        <TextField label="TotalDeserved" source="totalDeserved" />
        <TextField label="TotalDiscount" source="totalDiscount" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
