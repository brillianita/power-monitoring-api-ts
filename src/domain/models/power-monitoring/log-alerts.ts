import { Entity, IBaseDomainProperty } from "../entity";

export interface ILogAlerts extends IBaseDomainProperty {
  deviceId: string;
  location: string;
  category: string;
  priority: string;
  alertLog: string;
}

export class LogAlerts extends Entity<ILogAlerts> {
  private constructor(props: ILogAlerts) {
    const {id, ...data} = props;
    super(data, id);
  }

  public create(props: ILogAlerts): LogAlerts {
    return new LogAlerts(props);
  }

  public unmarshal(): ILogAlerts {
    return {
      ...this.props,
      id: this._id
    };
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