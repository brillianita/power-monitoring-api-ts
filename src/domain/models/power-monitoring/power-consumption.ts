import { Entity, IBaseDomainProperty } from "../entity";

export interface IPowerConsumption extends IBaseDomainProperty {
  deviceId: string;
  year: number;
  lwbpJan: number;
  lwbpFeb: number;
  lwbpMar: number;
  lwbpApr: number;
  lwbpMay: number;
  lwbpJun: number;
  lwbpJul: number;
  lwbpAug: number;
  lwbpSep: number;
  lwbpOkt: number;
  lwbpNov: number;
  lwbpDec: number;
  wbpJan: number;
  wbpFeb: number;
  wbpMar: number;
  wbpApr: number;
  wbpMay: number;
  wbpJun: number;
  wbpJul: number;
  wbpAug: number;
  wbpSep: number;
  wbpOkt: number;
  wbpNov: number;
  wbpDec: number;
}

export class PowerConsumption extends Entity<IPowerConsumption> {
  private constructor(props: IPowerConsumption) {
    const {id, ...data} = props;
    super(data, id);
  }

  public create(props: IPowerConsumption): PowerConsumption {
    return new PowerConsumption(props);
  }

  public unmarshal(): IPowerConsumption {
    return {
      ...this.props,
      id : this._id
    };
  }

  get deviceId(): string {
    return this.props.deviceId;
  }

  get year(): number {
    return this.props.year;
  }

  get lwbpJan(): number {
    return this.props.lwbpJan;
  }

  get lwbpFeb(): number {
    return this.props.lwbpFeb;
  }

  get lwbpMar(): number {
    return this.props.lwbpMar;
  }

  get lwbpApr(): number {
    return this.props.lwbpApr;
  }

  get lwbpMay(): number {
    return this.props.lwbpMay;
  }

  get lwbpJun(): number {
    return this.props.lwbpJun;
  }

  get lwbpJul(): number {
    return this.props.lwbpJul;
  }

  get lwbpAug(): number {
    return this.props.lwbpAug;
  }

  get lwbpSep(): number {
    return this.props.lwbpSep;
  }

  get lwbpOkt(): number {
    return this.props.lwbpOkt;
  }

  get lwbpNov(): number {
    return this.props.lwbpNov;
  }

  get lwbpDec(): number {
    return this.props.lwbpDec;
  }

  get wbpJan(): number {
    return this.props.wbpJan;
  }

  get wbpFeb(): number {
    return this.props.wbpFeb;
  }

  get wbpMar(): number {
    return this.props.wbpMar;
  }

  get wbpApr(): number {
    return this.props.wbpApr;
  }

  get wbpMay(): number {
    return this.props.wbpMay;
  }

  get wbpJun(): number {
    return this.props.wbpJun;
  }

  get wbpJul(): number {
    return this.props.wbpJul;
  }

  get wbpAug(): number {
    return this.props.wbpAug;
  }

  get wbpSep(): number {
    return this.props.wbpSep;
  }

  get wbpOkt(): number {
    return this.props.wbpOkt;
  }

  get wbpNov(): number {
    return this.props.wbpNov;
  }

  get wbpDec(): number {
    return this.props.wbpDec;
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

