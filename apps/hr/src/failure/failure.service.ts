import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FailureServiceBase } from "./base/failure.service.base";

@Injectable()
export class FailureService extends FailureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
