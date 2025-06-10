export interface Index {
  debug(primaryMessage: string, ...supportingData: any[]): void
  warn(primaryMessage: string, ...supportingData: any[]): void
  error(primaryMessage: string, ...supportingData: any[]): void
  info(primaryMessage: string, ...supportingData: any[]): void
}

const logLvlVal = {
  debug: 0,
  info: 0,
  warn: 0,
  error: 1,
}

export class Log implements Log {
  private lvl: number
  constructor(logLvl?: 'debug' | 'info' | 'warn' | 'error') {
    this.lvl = 0
    if (logLvl && logLvlVal[logLvl]) {
      this.lvl = logLvlVal[logLvl]
    }
  }
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
    if (this.lvl <= logLvlVal[msgType]) {
      return
    }

    if (supportingDetails.length > 0) {
      // @ts-ignore
      console[msgType](msg, ...supportingDetails)
    } else {
      console[msgType](msg)
    }
  }
}
