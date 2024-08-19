import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { SaleQuotationTitle } from "../saleQuotation/SaleQuotationTitle";

export const SaleOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customerId.id"
          reference="Customer"
          label="CustomerId"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="SaleOrderDate" source="saleOrderDate" />
        <ReferenceInput
          source="saleQuotation.id"
          reference="SaleQuotation"
          label="SaleQuotation"
        >
          <SelectInput optionText={SaleQuotationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
