import { Entity, IBaseDomainProperty } from "../entity";

export interface ILogDetail extends IBaseDomainProperty {
  deviceId: string;
  time: Date;
  currentR: number;
  currentS: number;
  currentT: number;
  currentAvg: number;
  minCurrentAvg: number;
  maxCurrentAvg: number;
  currentUnbalance: number;
  voltageRs: number;
  voltageSt: number;
  voltageTr: number;
  voltageRn: number;
  voltageSn: number;
  voltageTn: number;
  voltageUnbalanced: number;
  voltageAvg: number;
  minVoltageAvg: number;
  maxVoltageAvg: number;
  voltage3PAvg: number;
  apparentPower: number;
  minReactivePower: number;
  maxReactivePower: number;
  realPower: number;
  minRealPower: number;
  maxRealPower: number;
  energy: number;
  powerFactor: number;
  frequency: number;
  minFrequency: number;
  maxFrequency: number;
  thdV1: number;
  thdV2: number;
  thdV3: number;
  thdI1: number;
  thdI2: number;
  thdI3: number;
  thdAvg: number;
  minThdAvg: number;
  maxThdAvg: number;
  kvarh: number;
  kvah: number;
}

export class LogDetail extends Entity<ILogDetail> {
  private constructor(props: ILogDetail) {
    const {id, ...data} = props;
    super(data, id);
  }

  public create(props: ILogDetail): LogDetail {
    return new LogDetail(props);
  }

  public unmarshal(): ILogDetail {
    return {
      ...this.props,
      id: this._id
    };
  }

  get id(): string {
    return this._id;
  }

  get deviceId(): string {
    return this.props.deviceId;
  }

  get time(): Date {
    return this.props.time;
  }

  get currentR(): number {
    return this.props.currentR;
  }

  get currentS(): number {
    return this.props.currentS;
  }
  
  get currentT(): number {
    return this.props.currentT;
  }
 
  get currentAvg(): number {
    return this.props.currentAvg;
  }
  
  get minCurrentAvg(): number {
    return this.props.minCurrentAvg;
  }
  
  get maxCurrentAvg(): number {
    return this.props.maxCurrentAvg;
  }

  get currentUnbalance(): number {
    return this.props.currentUnbalance;
  }

  get voltageRs(): number {
    return this.props.voltageRs;
  }

  get voltageSt(): number {
    return this.props.voltageSt;
  }

  get voltageTr(): number {
    return this.props.voltageTr;
  }

  get voltageRn(): number {
    return this.props.voltageRn;
  }

  get voltageSn(): number {
    return this.props.voltageSn;
  }

  get voltageTn(): number {
    return this.props.voltageTn;
  }
  
  get voltageUnbalanced(): number {
    return this.props.voltageUnbalanced;
  }

  get voltageAvg(): number {
    return this.props.voltageAvg;
  }

  get minVoltageAvg(): number {
    return this.props.minVoltageAvg;
  }

  get maxVoltageAvg(): number {
    return this.props.maxVoltageAvg;
  }

  get voltage3PAvg(): number {
    return this.props.voltage3PAvg;
  }
  
  get apparentPower(): number {
    return this.props.apparentPower;
  }

  get minReactivePower(): number {
    return this.props.minReactivePower;
  }

  get maxReactivePower(): number {
    return this.props.maxReactivePower;
  }

  get realPower(): number {
    return this.props.realPower;
  }

  get minRealPower(): number {
    return this.props.minRealPower;
  }

  get maxRealPower(): number {
    return this.props.maxRealPower;
  }

  get energy(): number {
    return this.props.energy;
  }
  
  get powerFactor(): number {
    return this.props.powerFactor;
  }
  
  get frequency(): number {
    return this.props.frequency;
  }

  get minFrequency(): number {
    return this.props.minFrequency;
  }

  get maxFrequency(): number {
    return this.props.maxFrequency;
  }

  get thdV1(): number {
    return this.props.thdV1;
  }

  get thdV2(): number {
    return this.props.thdV2;
  }

  get thdV3(): number {
    return this.props.thdV3;
  }

  get thdI1(): number {
    return this.props.thdI1;
  }

  get thdI2(): number {
    return this.props.thdI2;
  }

  get thdI3(): number {
    return this.props.thdI3;
  }

  get thdAvg(): number {
    return this.props.thdAvg;
  }
  get minThdAvg(): number {
    return this.props.minThdAvg;
  }
  get maxThdAvg(): number {
    return this.props.maxThdAvg;
  }
  get kvarh(): number {
    return this.props.kvarh;
  }
  get kvah(): number {
    return this.props.kvah;
  }
  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }
  get deletedAt(): Date | undefined | null {
    return this.props.deletedAt;
  }
}