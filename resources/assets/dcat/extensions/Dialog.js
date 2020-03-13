
export default class Dialog {
    constructor(Dcat) {
        this.extend(Dcat)
    }

    extend(Dcat) {
        let _this = this;

        Dcat.success = _this.success;
        Dcat.error = _this.error;
        Dcat.info = _this.info;
        Dcat.warning = _this.warning;
        Dcat.confirm = _this.confirm;
    }

    success(message, title, options) {
        toastr.success(message, title, options);
    }

    error(message, title, options) {
        toastr.error(message, title, options);
    }

    info(message, title, options) {
        toastr.info(message, title, options);
    }

    warning(message, title, options) {
        toastr.warning(message, title, options);
    }

    confirm(message, title, success, error, options) {

    }
}
