const MONGOHOST  = process.env;

module.exports = {
    mongoURI: `mongodb+srv://${MONGOHOST.DB_USERNAME}:${MONGOHOST.DB_PASSWOR}@${MONGOHOST.DB_URL}/${MONGOHOST.DB_NAME}?retryWrites=true&w=majority`
}