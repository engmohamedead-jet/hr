import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  DependsOnApplicationDependencyId?: SortOrder;
  applicationDependencyId?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  i18nKey?: SortOrder;
  icon?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  landingUrl?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  publishedDateTime?: SortOrder;
  publisher?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  versionNumber?: SortOrder;
};
