export type Failure = {
  createdAt: Date;
  failureDate: Date | null;
  failureReport: string | null;
  id: string;
  note: string | null;
  serial: number;
  updatedAt: Date;
};
