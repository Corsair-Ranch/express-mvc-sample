var indexController = function() {
    this.reverseWord = function (input) {
        return Array.from(input).reverse().join('');
    }
}

module.exports = new indexController();