import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AttendanceController } from "../attendance.controller";
import { AttendanceService } from "../attendance.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  attendanceDate: new Date(),
  checkInTime: "exampleCheckInTime",
  checkOutTime: "exampleCheckOutTime",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  overtimeHours: "exampleOvertimeHours",
  reasonForAbsenteeism: "exampleReasonForAbsenteeism",
  updatedAt: new Date(),
  wasAbsent: "exampleWasAbsent",
  wasPresent: "exampleWasPresent",
};
const CREATE_RESULT = {
  attendanceDate: new Date(),
  checkInTime: "exampleCheckInTime",
  checkOutTime: "exampleCheckOutTime",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  overtimeHours: "exampleOvertimeHours",
  reasonForAbsenteeism: "exampleReasonForAbsenteeism",
  updatedAt: new Date(),
  wasAbsent: "exampleWasAbsent",
  wasPresent: "exampleWasPresent",
};
const FIND_MANY_RESULT = [
  {
    attendanceDate: new Date(),
    checkInTime: "exampleCheckInTime",
    checkOutTime: "exampleCheckOutTime",
    createdAt: new Date(),
    id: "exampleId",
    isActive: "true",
    isAppreoved: "true",
    note: "exampleNote",
    overtimeHours: "exampleOvertimeHours",
    reasonForAbsenteeism: "exampleReasonForAbsenteeism",
    updatedAt: new Date(),
    wasAbsent: "exampleWasAbsent",
    wasPresent: "exampleWasPresent",
  },
];
const FIND_ONE_RESULT = {
  attendanceDate: new Date(),
  checkInTime: "exampleCheckInTime",
  checkOutTime: "exampleCheckOutTime",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  overtimeHours: "exampleOvertimeHours",
  reasonForAbsenteeism: "exampleReasonForAbsenteeism",
  updatedAt: new Date(),
  wasAbsent: "exampleWasAbsent",
  wasPresent: "exampleWasPresent",
};

const service = {
  createAttendance() {
    return CREATE_RESULT;
  },
  attendances: () => FIND_MANY_RESULT,
  attendance: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Attendance", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AttendanceService,
          useValue: service,
        },
      ],
      controllers: [AttendanceController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /attendances", async () => {
    await request(app.getHttpServer())
      .post("/attendances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        attendanceDate: CREATE_RESULT.attendanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /attendances", async () => {
    await request(app.getHttpServer())
      .get("/attendances")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          attendanceDate: FIND_MANY_RESULT[0].attendanceDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /attendances/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/attendances"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /attendances/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/attendances"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        attendanceDate: FIND_ONE_RESULT.attendanceDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /attendances existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/attendances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        attendanceDate: CREATE_RESULT.attendanceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/attendances")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
