import { ImageCategoryWhereInput } from "./ImageCategoryWhereInput";
import { ImageCategoryOrderByInput } from "./ImageCategoryOrderByInput";

export type ImageCategoryFindManyArgs = {
  where?: ImageCategoryWhereInput;
  orderBy?: Array<ImageCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
