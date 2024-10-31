import { Entity, IBaseDomainProperty } from "../entity";

export interface ILimitation extends IBaseDomainProperty {
  deviceId: string;
  maxLimitationCurrentR: number;
  maxLimitationCurrentS: number;
  maxLimitationCurrentT: number;
  maxLimitationCurrentAvg: number;
  maxLimitationCurrentUnbalance: number;
  maxLimitationVoltageRs: number;
  maxLimitationVoltageSt: number;
  maxLimitationVoltageTr: number;
  maxLimitationVoltageRn: number;
  maxLimitationVoltageSn: number;
  maxLimitationVoltageTn: number;
  maxLimitationVoltageUnbalanced: number;
  maxLimitationVoltageAvg: number;
  maxLimitationVoltage3PAvg: number;
  minLimitationVoltageRs: number;
  minLimitationVoltageSt: number;
  minLimitationVoltageTr: number;
  minLimitationVoltageRn: number;
  minLimitationVoltageSn: number;
  minLimitationVoltageTn: number;
  minLimitationVoltageUnbalanced: number;
  minLimitationVoltageAvg: number;
  minLimitationVoltage3PAvg: number;
  maxLimitationKva: number;
  maxLimitationKvar: number;
  maxLimitationPowerFactor: number;
  maxLimitationFrequency: number;
  minLimitationPowerFactor: number;
  minLimitationFrequency: number;
  maxThdV1: number;
  maxThdV2: number;
  maxThdV3: number;
  minThdV1: number;
  minThdV2: number;
  minThdV3: number;
  maxThdI1: number;
  maxThdI2: number;
  maxThdI3: number;
  minThdI1: number;
  minThdI2: number;
  minThdI3: number;
}

export class Limitation extends Entity<ILimitation> {
  private constructor(props: ILimitation) {
    const{id, ...data} = props;
    super(data, id);
  }

  public create(props: ILimitation): Limitation {
    return new Limitation(props);
  }

  public unmarshal(): ILimitation {
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

  get maxLimitationCurrentR(): number {
    return this.props.maxLimitationCurrentR;
  }

  get maxLimitationCurrentS(): number {
    return this.props.maxLimitationCurrentS;
  }
 
  get maxLimitationCurrentT(): number {
    return this.props.maxLimitationCurrentT;
  }

  get maxLimitationCurrentAvg(): number {
    return this.props.maxLimitationCurrentAvg;
  }
  
  get maxLimitationCurrentUnbalance(): number {
    return this.props.maxLimitationCurrentUnbalance;
  }

  get maxLimitationVoltageRs(): number {
    return this.props.maxLimitationVoltageRs;
  }

  get maxLimitationVoltageSt(): number {
    return this.props.maxLimitationVoltageSt;
  }

  get maxLimitationVoltageTr(): number {
    return this.props.maxLimitationVoltageTr;
  }

  get maxLimitationVoltageRn(): number {
    return this.props.maxLimitationVoltageRn;
  }

  get maxLimitationVoltageSn(): number {
    return this.props.maxLimitationVoltageSn;
  }

  get maxLimitationVoltageTn(): number {
    return this.props.maxLimitationVoltageTn;
  }

  get maxLimitationVoltageUnbalanced(): number {
    return this.props.maxLimitationVoltageUnbalanced;
  }

  get maxLimitationVoltageAvg(): number {
    return this.props.maxLimitationVoltageAvg;
  }
 
  get maxLimitationVoltage3PAvg(): number {
    return this.props.maxLimitationVoltage3PAvg;
  }
 
  get minLimitationVoltageRs(): number {
    return this.props.minLimitationVoltageRs;
  }

  get minLimitationVoltageSt(): number {
    return this.props.minLimitationVoltageSt;
  }

  get minLimitationVoltageTr(): number {
    return this.props.minLimitationVoltageTr;
  }

  get minLimitationVoltageRn(): number {
    return this.props.minLimitationVoltageRn;
  }

  get minLimitationVoltageSn(): number {
    return this.props.minLimitationVoltageSn;
  }

  get minLimitationVoltageTn(): number {
    return this.props.minLimitationVoltageTn;
  }

  get minLimitationVoltageUnbalanced(): number {
    return this.props.minLimitationVoltageUnbalanced;
  }

  get minLimitationVoltageAvg(): number {
    return this.props.minLimitationVoltageAvg;
  }
 
  get minLimitationVoltage3PAvg(): number {
    return this.props.minLimitationVoltage3PAvg;
  }

  get maxLimitationKva(): number {
    return this.props.maxLimitationKva;
  }

  get maxLimitationPowerFactor(): number {
    return this.props.maxLimitationPowerFactor;
  }

  get maxLimitationFrequency(): number {
    return this.props.maxLimitationFrequency;
  }

  get minLimitationPowerFactor(): number {
    return this.props.minLimitationPowerFactor;
  }

  get minLimitationFrequency(): number {
    return this.props.minLimitationFrequency;
  }

  get maxThdV1(): number {
    return this.props.maxThdV1;
  }

  get maxThdV2(): number {
    return this.props.maxThdV2;
  }

  get maxThdV3(): number {
    return this.props.maxThdV3;
  }
 
  get minThdV1(): number {
    return this.props.minThdV1;
  }

  get minThdV2(): number {
    return this.props.minThdV2;
  }

  get minThdV3(): number {
    return this.props.minThdV3;
  }

  get maxThdI1(): number {
    return this.props.maxThdI1;
  }

  get maxThdI2(): number {
    return this.props.maxThdI2;
  }

  get maxThdI3(): number {
    return this.props.maxThdI3;
  }
 
  get minThdI1(): number {
    return this.props.minThdI1;
  }

  get minThdI2(): number {
    return this.props.minThdI2;
  }

  get minThdI3(): number {
    return this.props.minThdI3;
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