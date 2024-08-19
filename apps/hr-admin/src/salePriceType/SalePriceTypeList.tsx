import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SALEDETAIL_TITLE_FIELD } from "../saleDetail/SaleDetailTitle";
import { SALEQUOTATIONDETAIL_TITLE_FIELD } from "../saleQuotationDetail/SaleQuotationDetailTitle";
import { SALERETURNDETAIL_TITLE_FIELD } from "../saleReturnDetail/SaleReturnDetailTitle";
import { SALERETURN_TITLE_FIELD } from "../saleReturn/SaleReturnTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SalePriceTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SalePriceTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="SaleDetails"
          source="saledetail.id"
          reference="SaleDetail"
        >
          <TextField source={SALEDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SaleQuotationDetails"
          source="salequotationdetail.id"
          reference="SaleQuotationDetail"
        >
          <TextField source={SALEQUOTATIONDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SaleReturnDetails"
          source="salereturndetail.id"
          reference="SaleReturnDetail"
        >
          <TextField source={SALERETURNDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SaleReturns"
          source="salereturn.id"
          reference="SaleReturn"
        >
          <TextField source={SALERETURN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Sales" source="sale.id" reference="Sale">
          <TextField source={SALE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
