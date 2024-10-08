import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
