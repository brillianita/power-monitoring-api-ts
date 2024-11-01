import { Entity, IBaseDomainProperty } from "../entity";

export interface ILogAlert extends IBaseDomainProperty {
  deviceId: string;
  location: string;
  category: string;
  priority: string;
  alertLog: string;
}

export class LogAlert extends Entity<ILogAlert> {
  private constructor(props: ILogAlert) {
    const {id, ...data} = props;
    super(data, id);
  }

  public create(props: ILogAlert): LogAlert {
    return new LogAlert(props);
  }

  public unmarshal(): ILogAlert {
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

  get location(): string {
    return this.props.location;
  }

  get category(): string {
    return this.props.category;
  }

  get alertLog(): string {
    return this.props.alertLog;
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