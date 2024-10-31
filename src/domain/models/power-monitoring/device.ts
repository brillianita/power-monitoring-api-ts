import { Entity, IBaseDomainProperty } from "../entity";

export interface IDevice extends IBaseDomainProperty {
  parentId: string;
  name: string;
  macAddress: string;
  status: string;
  maxAmpere: number;
  stdAmpere: number;
}

export class Device extends Entity<IDevice> {
  private constructor(props: IDevice) {
    const {id, ...data} = props;
    super(data, id);
  }

  public static create(props: IDevice): Device {
    return new Device(props);
  }

  public unmarshal(): IDevice{
    return {
      id: this._id,
      parentId: this.parentId,
      name: this.name,
      macAddress: this.macAddress,
      status: this.status,
      maxAmpere: this.maxAmpere,
      stdAmpere: this.stdAmpere,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt
    };
  }

  get id(): string {
    return this._id;
  }

  get parentId(): string {
    return this.props.parentId;
  }

  get name(): string {
    return this.props.name;
  }

  get macAddress(): string {
    return this.props.macAddress;
  }

  get status(): string {
    return this.props.status;
  }

  get maxAmpere(): number {
    return this.props.maxAmpere;
  }

  get stdAmpere(): number {
    return this.props.stdAmpere;
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