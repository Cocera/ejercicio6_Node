const Logger = require('logplease');
const logger = Logger.create('utils');

exports.calculo = (num) => {
    if (num%2==0) {
        logger.info("Tu número es PAR")
    } else if (num%2!==0) {
        logger.error(`Tu número es IMPAR`);
    };
};