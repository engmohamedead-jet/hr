import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { SaleQuotationTitle } from "../saleQuotation/SaleQuotationTitle";

export const SaleOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
