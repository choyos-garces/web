export class Compromise {
    public main : string;
    public alt : string;
    public label : string;

    constructor(src : string, label : string) {
        let prefix = '_alt';
        let type = 'svg';

        this.main = src + '.' + type;
        this.alt = src + prefix + '.' + type;
        this.label = label;
    }
}