import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EXCHANGERATEDETAIL_TITLE_FIELD } from "../exchangeRateDetail/ExchangeRateDetailTitle";

export const CurrencyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Currencies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="ForeignCurrencyName"
          source="exchangeratedetail.id"
          reference="ExchangeRateDetail"
        >
          <TextField source={EXCHANGERATEDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="HundredthName" source="hundredthName" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsDefault" source="isDefault" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="Symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
