import { Entity, IBaseDomainProperty } from "../entity";

export interface IElectricityRate extends IBaseDomainProperty {
  rateWbp: number;
  rateLwbp: number;
  rateKvarh: number;
  rateWbpBefore: number;
  rateLwbpBefore: number;
  rateKvarhBefore: number;
}

export class ElectricityRate extends Entity<IElectricityRate> {
  private constructor(props: IElectricityRate) {
    const {id, ...data} = props;
    super(data, id);
  }

  public create(props: IElectricityRate): ElectricityRate {
    return new ElectricityRate(props);
  }

  public unmarshal(): IElectricityRate {
    return {
      ...this.props,
      id: this._id
    };
  }

  get id(): string {
    return this._id;
  }

  get rateWbp(): number {
    return this.props.rateWbp;
  }

  get rateLwbp(): number {
    return this.props.rateLwbp;
  }

  get rateKvarh(): number {
    return this.props.rateKvarh;
  }

  get rateWbpBefore(): number {
    return this.props.rateWbpBefore;
  }
  get rateLwbpBefore(): number {
    return this.props.rateLwbpBefore;
  }
  get rateKvarhBefore(): number {
    return this.props.rateKvarhBefore;
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