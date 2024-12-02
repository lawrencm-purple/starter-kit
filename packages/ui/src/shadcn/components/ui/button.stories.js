"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.Small = exports.Large = exports.Link = exports.Ghost = exports.Outline = exports.Destructive = exports.WithIcons = exports.Secondary = exports.Default = void 0;
var button_1 = require("./button");
var test_1 = require("@storybook/test");
var react_1 = __importDefault(require("react"));
var meta = {
    component: button_1.Button,
    title: "Components/Button",
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        onClick: (0, test_1.fn)(),
    },
    args: {
        disabled: false,
        variant: "default",
    },
    render: function (args) { return (react_1.default.createElement(button_1.Button, __assign({}, args, { "data-testid": "button" }), "Button")); },
};
exports.default = meta;
exports.Default = {
    args: {
        onClick: (0, test_1.fn)(),
    },
    play: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var canvas, button;
        var args = _b.args, canvasElement = _b.canvasElement, step = _b.step;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    canvas = (0, test_1.within)(canvasElement);
                    return [4 /*yield*/, canvas.getByTestId("button")];
                case 1:
                    button = _c.sent();
                    return [4 /*yield*/, step("Check button is in the document", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                (0, test_1.expect)(button).toBeInTheDocument();
                                return [2 /*return*/];
                            });
                        }); })];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, step("Click the button", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, test_1.userEvent.click(button)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, (0, test_1.waitFor)(function () { return (0, test_1.expect)(args.onClick).toHaveBeenCalledOnce(); })];
                case 4:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.Secondary = {
    args: {
        variant: "secondary",
    },
};
exports.WithIcons = {
    args: {},
    render: function (args) { return (react_1.default.createElement(button_1.Button, __assign({}, args),
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
            react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" })),
        react_1.default.createElement("span", null, "With Icon"))); },
};
exports.Destructive = {
    args: {
        variant: "destructive",
    },
};
exports.Outline = {
    args: {
        variant: "outline",
    },
};
exports.Ghost = {
    args: {
        variant: "ghost", // Ensure this matches case sensitivity if applicable
    },
};
exports.Link = {
    args: {
        variant: "link",
    },
};
exports.Large = {
    args: {
        size: "lg",
    },
};
exports.Small = {
    args: {
        size: "sm",
    },
};
exports.Icon = {
    args: {
        size: "icon",
    },
    render: function (args) { return (react_1.default.createElement(button_1.Button, __assign({}, args),
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
            react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6m0 0v6m0-6h6m-6 0H6" })))); },
};
