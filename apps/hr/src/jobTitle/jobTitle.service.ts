import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobTitleServiceBase } from "./base/jobTitle.service.base";

@Injectable()
export class JobTitleService extends JobTitleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
