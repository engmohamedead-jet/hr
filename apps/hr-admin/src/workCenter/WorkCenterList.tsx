import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const WorkCenterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkCenters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AnalyticDistribution" source="analyticDistribution" />
        <TextField label="Code" source="code" />
        <TextField label="Color" source="color" />
        <TextField label="CostPerHour" source="costPerHour" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DefaultCapacity" source="defaultCapacity" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsProductive" source="isProductive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="OeeTareget" source="oeeTareget" />
        <TextField label="Sequence" source="sequence" />
        <TextField label="StartTime" source="startTime" />
        <TextField label="StopTime" source="stopTime" />
        <TextField label="TimeEfficiency" source="timeEfficiency" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
