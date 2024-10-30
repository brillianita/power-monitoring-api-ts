import { InfluxDB } from "@influxdata/influxdb-client";
import { URL_INFLUX, TOKEN_INFLUX, ORG_INFLUX, BUCKET_INFLUX } from "../../libs/utils";

const influxDB = new InfluxDB({ url: URL_INFLUX, token: TOKEN_INFLUX });
const writeApi = influxDB.getWriteApi(ORG_INFLUX, BUCKET_INFLUX);
writeApi.useDefaultTags({ region: "east" });

export { writeApi };