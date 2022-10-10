type TLogSeverity = 'info' | 'warning' | 'error';

export class LoggerProvider {
	private _component: string;

	constructor(component: string) {
		this._component = component;
	}

	public info(message: string = '', data: any = null) {
		this._log('info', message, data);
	}

	public warn(message: string = '', data: any = null) {
		this._log('warning', message, data);
	}

	public error(message: string = '', data: any = null) {
		this._log('error', message, data);
	}

	private _log(
		severity: TLogSeverity,
		message: string = '',
		data: any = null,
	) {
		switch (severity) {
			case 'info':
				if (data != null) {
					console.log(
						`%c${this._component}: ${message}`,
						'color: #3498DB',
						data
					);
				} else {
					console.log(
						`%c${this._component}: ${message}`,
						'color: #3498DB'
					);
				}
				break;
			case 'warning':
				if (data != null) {
					console.warn(`${this._component}: ${message}`, data);
				} else {
					console.warn(`${this._component}: ${message}`);
				}
				break;
			case 'error':
				if (data != null) {
					console.error(`${this._component}: ${message}`, data);
				} else {
					console.error(`${this._component}: ${message}`);
				}
				break;
			default:
				if (data != null) {
					console.log(
						`%c${this._component}: ${message}`,
						'color: #3498DB',
						data
					);
				} else {
					console.log(
						`%c${this._component}: ${message}`,
						'color: #3498DB'
					);
				}
				break;
		}
	}
}
