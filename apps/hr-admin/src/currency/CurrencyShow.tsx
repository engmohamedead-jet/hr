import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTCATEGORY_TITLE_FIELD } from "../accountCategory/AccountCategoryTitle";
import { ACCOUNTTYPE_TITLE_FIELD } from "../accountType/AccountTypeTitle";
import { CURRENCY_TITLE_FIELD } from "./CurrencyTitle";
import { CUSTOMERCATEOGRY_TITLE_FIELD } from "../customerCateogry/CustomerCateogryTitle";
import { CUSTOMERTYPE_TITLE_FIELD } from "../customerType/CustomerTypeTitle";
import { RATING_TITLE_FIELD } from "../rating/RatingTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { EXCHANGERATEDETAIL_TITLE_FIELD } from "../exchangeRateDetail/ExchangeRateDetailTitle";

export const CurrencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Account"
          target="currencyIdId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AccountCategoryId"
              source="accountcategory.id"
              reference="AccountCategory"
            >
              <TextField source={ACCOUNTCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="AccountNumber" source="accountNumber" />
            <ReferenceField
              label="AccountTypeId"
              source="accounttype.id"
              reference="AccountType"
            >
              <TextField source={ACCOUNTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsMasterAccount" source="isMasterAccount" />
            <BooleanField label="IsUnderRevision" source="isUnderRevision" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="ParentAccountId" source="parentAccountId" />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Customer"
          target="currencyIdId"
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
        <ReferenceManyField
          reference="ExchangeRateDetail"
          target="localCurrencyIdId"
          label="ExchangeRateDetails"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ExchangeRateDate" source="exchangeRateDate" />
            <TextField label="ExchangeRateValue" source="exchangeRateValue" />
            <ReferenceField
              label="ForeignCurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="LocalCurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Unit" source="unit" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Supplier"
          target="currencyIdId"
          label="Suppliers"
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
            <TextField label="Debit" source="debit" />
            <TextField label="Description" source="description" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Website" source="website" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
