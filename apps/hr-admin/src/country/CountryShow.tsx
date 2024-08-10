import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CITY_TITLE_FIELD } from "../city/CityTitle";
import { COUNTRY_TITLE_FIELD } from "./CountryTitle";
import { STATE_TITLE_FIELD } from "../state/StateTitle";

export const CountryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bank" target="countryIdId" label="Banks">
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
            <ReferenceField label="CityId" source="city.id" reference="City">
              <TextField source={CITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <TextField label="ContactPhoneNumber" source="contactPhoneNumber" />
            <ReferenceField
              label="CountryId"
              source="country.id"
              reference="Country"
            >
              <TextField source={COUNTRY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Fax" source="fax" />
            <TextField label="HomePhoneNumber" source="homePhoneNumber" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField
              label="RelationshipOfficerContactNumber"
              source="relationshipOfficerContactNumber"
            />
            <TextField
              label="RelationshipOfficerName"
              source="relationshipOfficerName"
            />
            <ReferenceField label="StateId" source="state.id" reference="State">
              <TextField source={STATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Street" source="street" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="State"
          target="countryIdId"
          label="States"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <ReferenceField
              label="CountryId"
              source="country.id"
              reference="Country"
            >
              <TextField source={COUNTRY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
