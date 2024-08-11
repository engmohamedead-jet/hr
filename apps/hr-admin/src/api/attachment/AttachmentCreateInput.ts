export type AttachmentCreateInput = {
  fileExtension: string;
  filePath: string;
  note?: string | null;
  originalFileName: string;
  tableKeyName: string;
  tableKeyValue?: string | null;
  tableName: string;
};
