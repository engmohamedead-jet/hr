import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationDependencyServiceBase } from "./base/applicationDependency.service.base";

@Injectable()
export class ApplicationDependencyService extends ApplicationDependencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
