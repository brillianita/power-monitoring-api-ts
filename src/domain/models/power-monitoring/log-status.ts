import { Entity, IBaseDomainProperty } from "../entity";

export interface ILogStatus extends IBaseDomainProperty {
  logName: string;
  deviceId: string;
  isAlert: boolean;
}

export class LogStatus extends Entity<ILogStatus> {
  private constructor(props: ILogStatus) {
    const {id, ...data} = props;
    super(data, id);
  }

  public static create(props: ILogStatus): LogStatus {
    return new LogStatus(props);
  }

  public unmarshal(): ILogStatus{
    return {
      id: this._id,
      logName: this.logName,
      deviceId: this.deviceId,
      isAlert: this.isAlert,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get logName(): string {
    return this.props.logName;
  }

  get deviceId(): string {
    return this.props.deviceId;
  }

  get isAlert(): boolean {
    return this.props.isAlert;
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