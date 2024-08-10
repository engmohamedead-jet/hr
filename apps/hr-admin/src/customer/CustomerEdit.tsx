import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { CurrencyTitle } from "../currency/CurrencyTitle";
import { CustomerCateogryTitle } from "../customerCateogry/CustomerCateogryTitle";
import { CustomerTypeTitle } from "../customerType/CustomerTypeTitle";
import { RatingTitle } from "../rating/RatingTitle";
import { SalePriceTypeTitle } from "../salePriceType/SalePriceTypeTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Code" source="code" />
        <NumberInput label="Credit" source="credit" />
        <ReferenceInput
          source="currencyId.id"
          reference="Currency"
          label="CurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customerCateogryId.id"
          reference="CustomerCateogry"
          label="CustomerCateogry"
        >
          <SelectInput optionText={CustomerCateogryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customerTypeId.id"
          reference="CustomerType"
          label="CustomerType"
        >
          <SelectInput optionText={CustomerTypeTitle} />
        </ReferenceInput>
        <NumberInput label="Debit" source="debit" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput label="FirstBalance" source="firstBalance" />
        <DateTimeInput label="FirstBalanceDate" source="firstBalanceDate" />
        <TextInput label="GuarantorAddress" source="guarantorAddress" />
        <TextInput label="GuarantorJobTitle" source="guarantorJobTitle" />
        <TextInput label="GuarantorName" source="guarantorName" />
        <TextInput
          label="GuarantorNationalIdNumber"
          source="guarantorNationalIdNumber"
        />
        <TextInput label="GuarantorPhoneNumber" source="guarantorPhoneNumber" />
        <ReferenceInput
          source="guarantorRatingId.id"
          reference="Rating"
          label="GuarantorRatingId"
        >
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
        <TextInput label="GuarantorWorkAddress" source="guarantorWorkAddress" />
        <TextInput label="HasMortalOrDiscount" source="hasMortalOrDiscount" />
        <TextInput label="HasNoPendingInvoices" source="hasNoPendingInvoices" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsComplain" source="isComplain" />
        <BooleanInput label="IsSystem" source="isSystem" />
        <BooleanInput label="IsUnderRevision" source="isUnderRevision" />
        <TextInput label="JobTitle" source="jobTitle" />
        <NumberInput label="MaxAllowedDebit" source="maxAllowedDebit" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="note" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <NumberInput label="PreviousBalance" source="previousBalance" />
        <ReferenceInput source="rating.id" reference="Rating" label="Rating">
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
        <DateTimeInput label="RevisionDate" source="revisionDate" />
        <NumberInput label="SaleDiscountRate" source="saleDiscountRate" />
        <ReferenceInput
          source="salePriceTypeId.id"
          reference="SalePriceType"
          label="SalePriceTypeId"
        >
          <SelectInput optionText={SalePriceTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="supplierId.id"
          reference="Supplier"
          label="SupplierId"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <TextInput label="TaxNumber" source="taxNumber" />
        <TextInput label="Website" source="website" />
        <TextInput label="WorkAddress" source="workAddress" />
      </SimpleForm>
    </Edit>
  );
};
