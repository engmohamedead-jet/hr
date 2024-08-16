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
import { PRINTTEMPLATECONTENT_TITLE_FIELD } from "../printTemplateContent/PrintTemplateContentTitle";

export const PrintTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PrintTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="FilePath" source="filePath" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsCustomized" source="isCustomized" />
        <BooleanField label="IsFavourite" source="isFavourite" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="PaperLayout" source="paperLayout" />
        <TextField label="PaperSize" source="paperSize" />
        <TextField label="PreviewImage" source="previewImage" />
        <ReferenceField
          label="PrintTemplateContents"
          source="printtemplatecontent.id"
          reference="PrintTemplateContent"
        >
          <TextField source={PRINTTEMPLATECONTENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
