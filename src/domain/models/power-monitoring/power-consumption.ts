import { Entity, IBaseDomainProperty } from "@/domain/models/entity";

export interface IVoltage {
  voltRN: number;
  voltSN: number;
  voltTN: number;
  voltAvg: number;
  voltST: number;
  voltTR: number;
  volt3PAvg: number;
  voltUnbalance: number;
}

export interface ICurrent {
  currentR: number;
  currentS: number;
  currentT: number;
  currentAvg: number;
  currentUnbalance: number;
}

export interface IEnergy {
  apparentPower: number;
  reactivePower: number;
  realPower: number;
  energy: number;
  reactiveEnergy: number;
  apparentEnergy: number;
  powerFactor: number;
}

export interface IThd {
  thdV1: number;
  thdV2: number;
  thdV3: number;
  thdI1: number;
  thdI2: number;
  thdI3: number;
}

export interface IData {
  voltage: IVoltage;
  current: ICurrent;
  energy: IEnergy;
  frequency: number;
  thd: IThd;
}

export interface IPowerConsumption extends IBaseDomainProperty {
  timestamp: Date;
  data: IData;
}

export class PowerConsumption extends Entity<IPowerConsumption> {
  private constructor(props: IPowerConsumption) {
    const { id, ...data } = props;
    super(data, id);
  }

  public static create(props: IPowerConsumption): PowerConsumption {
    return new PowerConsumption(props);
  }

  public unmarshal(): IPowerConsumption {
    return {
      id: this._id,
      timestamp: this.timestamp,
      data: this.data,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get timestamp(): Date {
    return this.props.timestamp;
  }

  get data(): IData {
    return this.props.data;
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  get deletedAt(): Date | null | undefined {
    return this.props.deletedAt;
  }
}
