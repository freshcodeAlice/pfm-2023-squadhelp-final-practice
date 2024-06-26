const db = require('../models');

module.exports.getUserTransactions = async (req, res, next) => {
    try {
        const {tokenData: {userId}} = req;
        const foundTransactions = await db.Transaction.findAll({
            where: {
                userId
            }
        });
        if(foundTransactions) {
            res.status(200).send({data: foundTransactions})
        } else {
            res.status(204)
        }
    } catch(error) {
        next(error);
    }
} 