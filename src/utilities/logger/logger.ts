/* eslint-disable no-console */

import dayjs from 'dayjs'

const getLogger = (
    appName: string
) => {
    const getDescription = (level: string) => {
        const timestamp = dayjs().format('HH:MM:ss')

        return `[${appName} ${level} ${timestamp}]`
    };

    const logger = {
        log: (...args: any[]) => console.log(
            getDescription('INFO'),
            ...args
        ),

        getLogger: (...args: any[]) => (
            (...args2: any[]) => (
                logger.log(...args, ...args2)
            )
        )
    }

    if (process.env.NODE_ENV === 'production' || process.env.KLOAK_APP_ENABLE_PRODUCTION_LOGGING === 'true') {
        logger.log = () => {
        }
        logger.getLogger = () => () => {
        }
    }

    return logger
}

export default getLogger('seguro-platform')