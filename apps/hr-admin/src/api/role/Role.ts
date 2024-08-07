import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
