"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "H3";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "styleSize", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "marginBottom8", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "marginBottom0", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "children", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-H3",
            template: "\n<h3 class=\"{{constants.styleSize[styleSize] !== undefined ?  constants.styleSize[styleSize] : \"\"}}{{marginBottom8 ? \" g-heading-mb-8\" : \"\"}}{{marginBottom0 ? \" g-heading-mb-0\" : \"\"}}\" id=\"{{id}}\">\n\n  <slot></slot>\n\n\n</h3>\n\n\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=H3.js.map