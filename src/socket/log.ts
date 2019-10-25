export interface Log {
  debug(primaryMessage: string, ...supportingData: any[]): void
  warn(primaryMessage: string, ...supportingData: any[]): void
  error(primaryMessage: string, ...supportingData: any[]): void
  info(primaryMessage: string, ...supportingData: any[]): void
}

export class Log implements Log {
  debug(msg: string, ...supportingDetails: any[]): void {
    this.emitLogMessage('debug', msg, supportingDetails)
  }
  info(msg: string, ...supportingDetails: any[]): void {
    this.emitLogMessage('info', msg, supportingDetails)
  }
  warn(msg: string, ...supportingDetails: any[]): void {
    this.emitLogMessage('warn', msg, supportingDetails)
  }
  error(msg: string, ...supportingDetails: any[]): void {
    this.emitLogMessage('error', msg, supportingDetails)
  }

  private emitLogMessage(
    msgType: 'debug' | 'info' | 'warn' | 'error',
    msg: string,
    supportingDetails: any[]
  ) {
    if (supportingDetails.length > 0) {
      console[msgType](msg, ...supportingDetails)
    } else {
      console[msgType](msg)
    }
  }
}
