import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { STORETYPE_TITLE_FIELD } from "../storeType/StoreTypeTitle";

export const StoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AddressLine1" source="addressLine1" />
        <BooleanField label="AllowSale" source="allowSale" />
        <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fax" source="fax" />
        <TextField label="HomePhoneNumber" source="homePhoneNumber" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="OfficeId" source="office.id" reference="Office">
          <TextField source={OFFICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="StoreTypeId"
          source="storetype.id"
          reference="StoreType"
        >
          <TextField source={STORETYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
