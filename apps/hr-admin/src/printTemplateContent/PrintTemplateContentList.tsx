import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRINTTEMPLATE_TITLE_FIELD } from "../printTemplate/PrintTemplateTitle";

export const PrintTemplateContentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PrintTemplateContents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Display" source="display" />
        <TextField label="FieldValue" source="fieldValue" />
        <TextField label="ID" source="id" />
        <TextField label="Key" source="key" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="PrintTemplate"
          source="printtemplate.id"
          reference="PrintTemplate"
        >
          <TextField source={PRINTTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
