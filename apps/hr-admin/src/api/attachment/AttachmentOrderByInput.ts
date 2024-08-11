import { SortOrder } from "../../util/SortOrder";

export type AttachmentOrderByInput = {
  createdAt?: SortOrder;
  fileExtension?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  originalFileName?: SortOrder;
  tableKeyName?: SortOrder;
  tableKeyValue?: SortOrder;
  tableName?: SortOrder;
  updatedAt?: SortOrder;
};
