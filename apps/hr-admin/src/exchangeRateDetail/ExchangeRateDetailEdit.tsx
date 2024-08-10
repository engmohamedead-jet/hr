import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CurrencyTitle } from "../currency/CurrencyTitle";

export const ExchangeRateDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ExchangeRateDate" source="exchangeRateDate" />
        <NumberInput label="ExchangeRateValue" source="exchangeRateValue" />
        <ReferenceInput
          source="foreignCurrencyId.id"
          reference="Currency"
          label="ForeignCurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="localCurrencyId.id"
          reference="Currency"
          label="LocalCurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Unit" source="unit" />
      </SimpleForm>
    </Edit>
  );
};
