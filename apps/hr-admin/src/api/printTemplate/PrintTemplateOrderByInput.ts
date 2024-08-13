import { SortOrder } from "../../util/SortOrder";

export type PrintTemplateOrderByInput = {
  Description?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  isCustomized?: SortOrder;
  isFavourite?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  paperLayout?: SortOrder;
  paperSize?: SortOrder;
  previewImage?: SortOrder;
  printTemplateGroupIdId?: SortOrder;
  updatedAt?: SortOrder;
};
