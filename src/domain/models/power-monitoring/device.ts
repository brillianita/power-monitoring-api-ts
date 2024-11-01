import { Entity, IBaseDomainProperty } from "../entity";

export enum EStatus {
  active = "active",
  inactive = "inactive"
} 
export interface IDevice extends IBaseDomainProperty {
  name: string;
  location: string;
  macAddress: string;
  status: string | EStatus;
  maxAmpere?: number | undefined;
  stdAmpere?: number | undefined;
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
      name: this.name,
      location: this.location,
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

  get location(): string {
    return this.props.location;
  }

  get name(): string {
    return this.props.name;
  }

  get macAddress(): string {
    return this.props.macAddress;
  }

  get status(): string | EStatus {
    return this.props.status;
  }

  get maxAmpere(): number | undefined {
    return this.props.maxAmpere;
  }

  get stdAmpere(): number | undefined {
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