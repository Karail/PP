// eslint-disable-next-line @typescript-eslint/no-var-requires
const winston = require('winston');

const defaultCombine = winston.format.combine(
	winston.format.label({ label: '[logger]' }),
	winston.format.timestamp({ format: 'YY-MM-DD HH:MM:SS' }),
	winston.format.printf((info: any) => `${info.label} ${info.timestamp}  ${info.level}: ${info.message}`)
);

export const logger = winston.createLogger({
	level: 'debug',
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize({ all: true }),
				defaultCombine
			)
		})
	],
	stream: {
		write: (message: string) => {
			logger.info(message);
		}
	}
});