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
import { FISCALYEAR_TITLE_FIELD } from "../fiscalYear/FiscalYearTitle";

export const FiscalMonthList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FiscalMonths"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="EndsOn" source="endsOn" />
        <ReferenceField
          label="FiscalYear"
          source="fiscalyear.id"
          reference="FiscalYear"
        >
          <TextField source={FISCALYEAR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="NormalizedName" source="mormalizedName" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <TextField label="StartsFrom" source="startsFrom" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
