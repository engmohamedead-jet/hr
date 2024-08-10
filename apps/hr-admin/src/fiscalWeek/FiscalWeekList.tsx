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
import { FISCALMONTH_TITLE_FIELD } from "../fiscalMonth/FiscalMonthTitle";

export const FiscalWeekList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FiscalWeeks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndsOn" source="endsOn" />
        <ReferenceField
          label="FiscalMonthId"
          source="fiscalmonth.id"
          reference="FiscalMonth"
        >
          <TextField source={FISCALMONTH_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="StartsFrom" source="startsFrom" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
