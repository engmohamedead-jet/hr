import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BANKTYPE_TITLE_FIELD } from "../bankType/BankTypeTitle";

export const BankList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Banks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address" source="address" />
        <ReferenceField
          label="BankType"
          source="banktype.id"
          reference="BankType"
        >
          <TextField source={BANKTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextField label="Code" source="code" />
        <TextField label="ContactPhoneNumber" source="contactPhoneNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Fax" source="fax" />
        <TextField label="HomePhoneNumber" source="homePhoneNumber" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField
          label="RelationshipOfficerContactNumber"
          source="relationshipOfficerContactNumber"
        />
        <TextField
          label="RelationshipOfficerName"
          source="relationshipOfficerName"
        />
        <TextField label="Street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
