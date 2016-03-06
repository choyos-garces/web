var Pipeline = (function () {
    function Pipeline(title, message, image) {
        var baseURL = "img/pipeline/";
        var type = ".svg";
        this.title = title;
        this.image = baseURL + image + type;
        this.message = message;
    }
    Pipeline.prototype.getTitle = function () {
        return this.title;
    };
    Pipeline.prototype.getContent = function () {
        return this.message;
    };
    Pipeline.prototype.getImage = function () {
        return this.image;
    };
    return Pipeline;
})();
exports.Pipeline = Pipeline;
