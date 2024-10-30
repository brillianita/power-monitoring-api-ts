import { writeApi } from "../../infrastructure/database/influx";
import mqtt from "mqtt";
import { URL_MQTT } from "@/libs/utils";
import { Point } from "@influxdata/influxdb-client";
import { injectable } from "inversify";

@injectable()
export class Mqtt {
  private static client: mqtt.MqttClient;
  private static topic = "dpm/powmon/CED01/01";

  constructor() {
    this.initialize();
  }

  public initialize() {
    Mqtt.client = mqtt.connect(URL_MQTT);

    Mqtt.client.on("connect", () => {
      console.log("MQTT server connected");
      Mqtt.client.subscribe(Mqtt.topic, (err) => {
        if (!err) {
          console.log("Successfully connected to topic", Mqtt.topic);
        } else {
          console.error("Failed to subscribe to topic", Mqtt.topic, err);
        }
      });
    });

    Mqtt.client.on("message", this.handleMessage.bind(this));
  }

  public async handleMessage(_topic: string, message: Buffer) {
    try {
      const data = JSON.parse(message.toString());
      console.log("Received data:", data.data);

      const point = new Point("logDetails")
        .timestamp(new Date())
        .floatField("voltage", data.data.voltage.voltRN)
        .floatField("current", data.data.current.currentR);

      await writeApi.writePoint(point);
      console.log("Data successfully written to InfluxDB");
    } catch (error) {
      console.error("Failed to write data to InfluxDB:", error);
    }
  }
}
