var PipeItem = (function () {
    function PipeItem(title, message, image) {
        var baseURL = "img/pipeline/";
        this.title = title;
        this.image = baseURL + image;
        this.message = message;
    }
    PipeItem.prototype.getTitle = function () {
        return this.title;
    };
    PipeItem.prototype.getContent = function () {
        return this.message;
    };
    PipeItem.prototype.getImage = function () {
        return this.image;
    };
    return PipeItem;
})();
exports.PipeItem = PipeItem;
