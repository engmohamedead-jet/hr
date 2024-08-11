import { CompoundUnit as TCompoundUnit } from "../api/compoundUnit/CompoundUnit";

export const COMPOUNDUNIT_TITLE_FIELD = "id";

export const CompoundUnitTitle = (record: TCompoundUnit): string => {
  return record.id?.toString() || String(record.id);
};
