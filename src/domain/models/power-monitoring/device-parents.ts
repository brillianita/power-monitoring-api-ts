import {Entity, IBaseDomainProperty} from "@/domain/models/entity";

export interface IDeviceParent extends IBaseDomainProperty {
  name: string;
}

export class DeviceParent extends Entity<IDeviceParent> {
  private constructor(props: IDeviceParent) {
    const{id, ...data} = props;
    super(data, id);
  }

  public static create(props: IDeviceParent): DeviceParent {
    return new DeviceParent(props);
  }

  public unmarshal(): IDeviceParent {
    return {
      id: this._id, 
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
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