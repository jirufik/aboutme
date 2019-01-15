let production = {
    PORT: 4005
};

let development = {
    PORT: 4006
};

module.exports = (() => {
    if (process.env.NODE_ENV === 'production') {
        return production;
    }
    return development;
})();