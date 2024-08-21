import { SortOrder } from "../../util/SortOrder";

export type PrintTemplateOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isCustomized?: SortOrder;
  isFavourite?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  paperLayout?: SortOrder;
  paperSize?: SortOrder;
  previewImage?: SortOrder;
  printTemplateContentsId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
