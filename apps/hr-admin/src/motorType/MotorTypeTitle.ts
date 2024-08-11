import { MotorType as TMotorType } from "../api/motorType/MotorType";

export const MOTORTYPE_TITLE_FIELD = "name";

export const MotorTypeTitle = (record: TMotorType): string => {
  return record.name?.toString() || String(record.id);
};
