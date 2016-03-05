var Compromise = (function () {
    function Compromise(src, label) {
        var prefix = '_alt';
        var type = 'svg';
        this.main = src + '.' + type;
        this.alt = src + prefix + '.' + type;
        this.label = label;
    }
    return Compromise;
})();
exports.Compromise = Compromise;
