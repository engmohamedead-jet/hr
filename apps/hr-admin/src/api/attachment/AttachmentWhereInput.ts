import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttachmentWhereInput = {
  fileExtension?: StringFilter;
  filePath?: StringFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  originalFileName?: StringFilter;
  tableKeyName?: StringFilter;
  tableKeyValue?: StringNullableFilter;
  tableName?: StringFilter;
};
