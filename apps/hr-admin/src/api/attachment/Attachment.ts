export type Attachment = {
  createdAt: Date;
  fileExtension: string;
  filePath: string;
  id: string;
  note: string | null;
  originalFileName: string;
  tableKeyName: string;
  tableKeyValue: string | null;
  tableName: string;
  updatedAt: Date;
};
