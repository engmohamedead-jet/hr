import { ImageCategory as TImageCategory } from "../api/imageCategory/ImageCategory";

export const IMAGECATEGORY_TITLE_FIELD = "name";

export const ImageCategoryTitle = (record: TImageCategory): string => {
  return record.name?.toString() || String(record.id);
};
