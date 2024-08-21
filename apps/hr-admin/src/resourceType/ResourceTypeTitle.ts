import { ResourceType as TResourceType } from "../api/resourceType/ResourceType";

export const RESOURCETYPE_TITLE_FIELD = "name";

export const ResourceTypeTitle = (record: TResourceType): string => {
  return record.name?.toString() || String(record.id);
};
