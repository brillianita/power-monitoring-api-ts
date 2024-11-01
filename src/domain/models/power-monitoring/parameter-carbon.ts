import { Entity, IBaseDomainProperty } from "../entity";

export interface IParameterCarbon extends IBaseDomainProperty {
  initialCoefficientCarbon: number;
  currentCoefficientCarbon: number;
}

export class ParameterCarbon extends Entity<IParameterCarbon> {
  private constructor(props: IParameterCarbon) {
    const {id, ...data} = props;
    super(data, id);
  }

  public static create(props: IParameterCarbon): ParameterCarbon {
    return new ParameterCarbon(props);
  }

  public unmarshal(): IParameterCarbon{
    return {
      id: this._id,
      initialCoefficientCarbon: this.initialCoefficientCarbon,
      currentCoefficientCarbon: this.currentCoefficientCarbon,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get initialCoefficientCarbon(): number {
    return this.props.initialCoefficientCarbon;
  }

  get currentCoefficientCarbon(): number {
    return this.props.currentCoefficientCarbon;
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