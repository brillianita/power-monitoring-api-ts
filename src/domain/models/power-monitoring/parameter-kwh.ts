import { Entity, IBaseDomainProperty } from "../entity";

export interface IParameterKwh extends IBaseDomainProperty {
  deviceId: string;
  year: number;
  standardPercentage: number;
  generalJan: number;
  generalFeb: number;
  generalMar: number;
  generalApr: number;
  generalMay: number;
  generalJun: number;
  generalJul: number;
  generalAug: number;
  generalSep: number;
  generalOkt: number;
  generalNov: number;
  generalDec: number;
  standardPercentageJan: number;
  standardPercentageFeb: number;
  standardPercentageMar: number;
  standardPercentageApr: number;
  standardPercentageMay: number;
  standardPercentageJun: number;
  standardPercentageJul: number;
  standardPercentageAug: number;
  standardPercentageSep: number;
  standardPercentageOct: number;
  standardPercentageNov: number;
  standardPercentageDec: number;
  electricityRate: number;
}

export class ParameterKwh extends Entity<IParameterKwh> {
  private constructor(props: IParameterKwh) {
    const { id, ...data } = props;
    super(data, id);
  }

  public static create(props: IParameterKwh): ParameterKwh {
    return new ParameterKwh(props);
  }

  public unmarshal(): IParameterKwh {
    return {
      ...this.props,
      id: this._id,
    };
  }
  get id(): string {
    return this._id;
  }
  // Define rounding utility
  private round(value: number, precision: number): number {
    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
  }
  get standardPercentageJan(): number {
    return this.props.standardPercentageJan;
  }
  set standardPercentageJan(_value: number) {
    this.props.standardPercentageJan = this.round(this.props.generalJan * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageFeb(): number {
    return this.props.standardPercentageFeb;
  }
  set standardPercentageFeb(_value: number) {
    this.props.standardPercentageFeb = this.round(this.props.generalFeb * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageMar(): number {
    return this.props.standardPercentageMar;
  }
  set standardPercentageMar(_value: number) {
    this.props.standardPercentageMar = this.round(this.props.generalMar * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageApr(): number {
    return this.props.standardPercentageApr;
  }
  set standardPercentageApr(_value: number) {
    this.props.standardPercentageApr = this.round(this.props.generalApr * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageMay(): number {
    return this.props.standardPercentageMay;
  }
  set standardPercentageMay(_value: number) {
    this.props.standardPercentageMay = this.round(this.props.generalMay * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageJun(): number {
    return this.props.standardPercentageJun;
  }
  set standardPercentageJun(_value: number) {
    this.props.standardPercentageJun = this.round(this.props.generalJun * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageJul(): number {
    return this.props.standardPercentageJul;
  }
  set standardPercentageJul(_value: number) {
    this.props.standardPercentageJul = this.round(this.props.generalJul * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageAug(): number {
    return this.props.standardPercentageAug;
  }
  set standardPercentageAug(_value: number) {
    this.props.standardPercentageAug = this.round(this.props.generalAug * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageSep(): number {
    return this.props.standardPercentageSep;
  }
  set standardPercentageSep(_value: number) {
    this.props.standardPercentageSep = this.round(this.props.generalSep * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageOct(): number {
    return this.props.standardPercentageOct;
  }
  set standardPercentageOct(_value: number) {
    this.props.standardPercentageOct = this.round(this.props.generalOkt * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageNov(): number {
    return this.props.standardPercentageNov;
  }
  set standardPercentageNov(_value: number) {
    this.props.standardPercentageNov = this.round(this.props.generalNov * (this.props.standardPercentage / 100), 2);
  }

  get standardPercentageDec(): number {
    return this.props.standardPercentageDec;
  }
  set standardPercentageDec(_value: number) {
    this.props.standardPercentageDec = this.round(this.props.generalDec * (this.props.standardPercentage / 100), 2);
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

