import { Entity, IBaseDomainProperty } from "../entity";

export interface ILogStatus extends IBaseDomainProperty {
  userId: string;
  logAlertId: string;
  isRead: boolean;
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
      userId: this.userId,
      logAlertId: this.logAlertId,
      isRead: this.isRead,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this.props.userId;
  }

  get logAlertId(): string {
    return this.props.logAlertId;
  }

  get isRead(): boolean {
    return this.props.isRead;
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