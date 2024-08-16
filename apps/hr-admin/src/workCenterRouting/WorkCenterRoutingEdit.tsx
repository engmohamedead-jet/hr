import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BillOfMaterialDetailTitle } from "../billOfMaterialDetail/BillOfMaterialDetailTitle";
import { WorkCenterTitle } from "../workCenter/WorkCenterTitle";

export const WorkCenterRoutingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="billOfMaterialDetails"
          reference="BillOfMaterialDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BillOfMaterialDetailTitle} />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput step={1} label="Sequence" source="sequence" />
        <NumberInput label="TimeCycleManual" source="timeCycleManual" />
        <NumberInput step={1} label="TimeModeBatch" source="timeModeBatch" />
        <ReferenceInput
          source="workCenter.id"
          reference="WorkCenter"
          label="WorkCenter"
        >
          <SelectInput optionText={WorkCenterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
