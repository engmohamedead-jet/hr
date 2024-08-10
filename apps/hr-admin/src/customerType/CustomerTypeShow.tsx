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
  BooleanField,
} from "react-admin";

import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { CUSTOMERCATEOGRY_TITLE_FIELD } from "../customerCateogry/CustomerCateogryTitle";
import { CUSTOMERTYPE_TITLE_FIELD } from "./CustomerTypeTitle";
import { RATING_TITLE_FIELD } from "../rating/RatingTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const CustomerTypeShow = (props: ShowProps): React.ReactElement => {
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
        <ReferenceManyField
          reference="Customer"
          target="customerTypeIdId"
          label="Customers"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credit" source="credit" />
            <ReferenceField
              label="CurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CustomerCateogry"
              source="customercateogry.id"
              reference="CustomerCateogry"
            >
              <TextField source={CUSTOMERCATEOGRY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CustomerType"
              source="customertype.id"
              reference="CustomerType"
            >
              <TextField source={CUSTOMERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Debit" source="debit" />
            <TextField label="Description" source="description" />
            <TextField label="Email" source="email" />
            <TextField label="FirstBalance" source="firstBalance" />
            <TextField label="FirstBalanceDate" source="firstBalanceDate" />
            <TextField label="GuarantorAddress" source="guarantorAddress" />
            <TextField label="GuarantorJobTitle" source="guarantorJobTitle" />
            <TextField label="GuarantorName" source="guarantorName" />
            <TextField
              label="GuarantorNationalIdNumber"
              source="guarantorNationalIdNumber"
            />
            <TextField
              label="GuarantorPhoneNumber"
              source="guarantorPhoneNumber"
            />
            <ReferenceField
              label="GuarantorRatingId"
              source="rating.id"
              reference="Rating"
            >
              <TextField source={RATING_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="GuarantorWorkAddress"
              source="guarantorWorkAddress"
            />
            <TextField
              label="HasMortalOrDiscount"
              source="hasMortalOrDiscount"
            />
            <TextField
              label="HasNoPendingInvoices"
              source="hasNoPendingInvoices"
            />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsComplain" source="isComplain" />
            <BooleanField label="IsSystem" source="isSystem" />
            <BooleanField label="IsUnderRevision" source="isUnderRevision" />
            <TextField label="JobTitle" source="jobTitle" />
            <TextField label="MaxAllowedDebit" source="maxAllowedDebit" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <TextField label="PreviousBalance" source="previousBalance" />
            <ReferenceField
              label="Rating"
              source="rating.id"
              reference="Rating"
            >
              <TextField source={RATING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="RevisionDate" source="revisionDate" />
            <TextField label="SaleDiscountRate" source="saleDiscountRate" />
            <ReferenceField
              label="SalePriceTypeId"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SupplierId"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TaxNumber" source="taxNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Website" source="website" />
            <TextField label="WorkAddress" source="workAddress" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
