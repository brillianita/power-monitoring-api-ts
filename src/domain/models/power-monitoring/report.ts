import { Entity, IBaseDomainProperty } from "../entity";

export interface IReport extends IBaseDomainProperty {
  deviceId: string;
  dateTime: Date;
  vRst: number;
  iRst: number;
  cosPhi: number;
  apparentPower: number;
  thdI: number;
  thdV: number;
  power: number;
}

export class Report extends Entity<IReport> {
  private constructor(props: IReport) {
    const {id, ...data} = props;
    super(data, id);
  }

  public static create(props: IReport): Report {
    return new Report(props);
  }

  public unmarshal(): IReport{
    return {
      id: this._id,
      deviceId: this.deviceId,
      dateTime: this.dateTime,
      vRst: this.vRst,
      iRst: this.iRst,
      cosPhi: this.cosPhi,
      apparentPower: this.apparentPower,
      thdI: this.thdI,
      thdV: this.thdV,
      power: this.power,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get deviceId(): string {
    return this.props.deviceId;
  }

  get dateTime(): Date {
    return this.props.dateTime;
  }

  get vRst(): number {
    return this.props.vRst;
  }
  get iRst(): number {
    return this.props.iRst;
  }
  get cosPhi(): number {
    return this.props.cosPhi;
  }
  get apparentPower(): number {
    return this.props.apparentPower;
  }
  get thdI(): number {
    return this.props.thdI;
  }
  get thdV(): number {
    return this.props.thdV;
  }
  get power(): number {
    return this.props.power;
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