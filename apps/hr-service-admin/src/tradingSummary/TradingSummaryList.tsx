import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const TradingSummaryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TradingSummaries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="FiscalWeekId" source="fiscalWeekId" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Note" source="note" />
        <TextField label="PartyId" source="partyId" />
        <TextField label="Price" source="price" />
        <TextField label="PriceTotal" source="priceTotal" />
        <TextField label="ProductId" source="productId" />
        <TextField label="ProductVariantId" source="productVariantId" />
        <TextField label="Quantity" source="quantity" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TransactionDate" source="transactionDate" />
        <TextField label="TransactionTypeId" source="transactionTypeId" />
        <TextField label="UnitId" source="unitId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
