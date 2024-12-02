"use strict";
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
exports.KeyboardInteraction = exports.ComplexLayout = exports.CustomContent = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var test_1 = require("@storybook/test");
var test_2 = require("@storybook/test");
var alert_dialog_1 = require("./alert-dialog");
var button_1 = require("./button");
var meta = {
    title: "Components/AlertDialog",
    component: alert_dialog_1.AlertDialog,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
exports.default = meta;
var AlertDialogDemo = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Are you absolutely sure?" : _b, _c = _a.description, description = _c === void 0 ? "This action cannot be undone. This will permanently delete your account and remove your data from our servers." : _c, _d = _a.cancelText, cancelText = _d === void 0 ? "Cancel" : _d, _e = _a.actionText, actionText = _e === void 0 ? "Continue" : _e, _f = _a.variant, variant = _f === void 0 ? "default" : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g;
    return (react_1.default.createElement(alert_dialog_1.AlertDialog, null,
        react_1.default.createElement(alert_dialog_1.AlertDialogTrigger, { className: "" },
            react_1.default.createElement(button_1.Button, { "data-testid": "alert-trigger" }, "Open Dialog")),
        react_1.default.createElement(alert_dialog_1.AlertDialogContent, { "data-testid": "alert-content", id: "alertcontent" },
            react_1.default.createElement(alert_dialog_1.AlertDialogHeader, null,
                react_1.default.createElement(alert_dialog_1.AlertDialogTitle, { "data-testid": "alert-title" }, title),
                react_1.default.createElement(alert_dialog_1.AlertDialogDescription, { "data-testid": "alert-description" }, description)),
            react_1.default.createElement(alert_dialog_1.AlertDialogFooter, null,
                react_1.default.createElement(alert_dialog_1.AlertDialogCancel, { "data-testid": "alert-cancel", disabled: disabled }, cancelText),
                react_1.default.createElement(alert_dialog_1.AlertDialogAction, { "data-testid": "alert-action", disabled: disabled }, actionText)))));
};
exports.Default = {
    render: function () { return react_1.default.createElement(AlertDialogDemo, null); },
    play: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var canvas;
        var canvasElement = _b.canvasElement, step = _b.step;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    canvas = (0, test_2.within)(canvasElement);
                    return [4 /*yield*/, step("Dialog should be initially closed", function () { return __awaiter(void 0, void 0, void 0, function () {
                            var dialog;
                            return __generator(this, function (_a) {
                                dialog = document.querySelector('[data-testid="alert-content"]');
                                (0, test_1.expect)(dialog).toBeNull();
                                return [2 /*return*/];
                            });
                        }); })];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, step("Dialog should open when trigger is clicked", function () { return __awaiter(void 0, void 0, void 0, function () {
                            var trigger;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        trigger = canvas.getByTestId("alert-trigger");
                                        return [4 /*yield*/, test_2.userEvent.click(trigger)];
                                    case 1:
                                        _a.sent();
                                        // wait for the dialog to be in the document
                                        return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                                var dialog = document.querySelector('[data-testid="alert-content"]');
                                                (0, test_1.expect)(dialog).toBeInTheDocument();
                                            }, { timeout: 2000 })];
                                    case 2:
                                        // wait for the dialog to be in the document
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, step("Dialog should display correct content", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                            var title = document.querySelector('[data-testid="alert-title"]');
                                            var description = document.querySelector('[data-testid="alert-description"]');
                                            var cancelButton = document.querySelector('[data-testid="alert-cancel"]');
                                            var actionButton = document.querySelector('[data-testid="alert-action"]');
                                            (0, test_1.expect)(title).toHaveTextContent(/are you absolutely sure\?/i);
                                            (0, test_1.expect)(description).toHaveTextContent(/this action cannot be undone/i);
                                            (0, test_1.expect)(cancelButton).toHaveTextContent(/cancel/i);
                                            (0, test_1.expect)(actionButton).toHaveTextContent(/continue/i);
                                        }, { timeout: 2000 })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, step("Dialog should close when Cancel is clicked", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                            var cancelButton = document.querySelector('[data-testid="alert-cancel"]');
                                            test_2.userEvent.click(cancelButton);
                                            var dialog = canvas.queryByTestId("alert-content");
                                            (0, test_1.expect)(dialog).toBeNull();
                                        }, { timeout: 2000 })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 4:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.CustomContent = {
    render: function () { return react_1.default.createElement(AlertDialogDemo, { title: "Delete Project", description: "Are you sure you want to delete this project? All of your data will be permanently removed. This action cannot be undone.", cancelText: "Keep Project", actionText: "Delete Project" }); },
    play: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var canvas;
        var canvasElement = _b.canvasElement, step = _b.step;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    canvas = (0, test_2.within)(canvasElement);
                    return [4 /*yield*/, step("Should display custom content correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
                            var trigger;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        trigger = canvas.getByTestId("alert-trigger");
                                        return [4 /*yield*/, test_2.userEvent.click(trigger)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                                var title = document.querySelector('[data-testid="alert-title"]');
                                                var cancelButton = document.querySelector('[data-testid="alert-cancel"]');
                                                var actionButton = document.querySelector('[data-testid="alert-action"]');
                                                (0, test_1.expect)(title).toHaveTextContent(/delete project/i);
                                                (0, test_1.expect)(cancelButton).toHaveTextContent(/keep project/i);
                                                (0, test_1.expect)(actionButton).toHaveTextContent(/delete project/i);
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
// ... other story variants remain the same ...
exports.ComplexLayout = {
    render: function () { return (react_1.default.createElement(alert_dialog_1.AlertDialog, null,
        react_1.default.createElement(alert_dialog_1.AlertDialogTrigger, { className: "" },
            react_1.default.createElement(button_1.Button, { "data-testid": "complex-alert-trigger" }, "Open Complex Dialog")),
        react_1.default.createElement(alert_dialog_1.AlertDialogContent, { "data-testid": "complex-alert-content", className: "max-w-xl" },
            react_1.default.createElement(alert_dialog_1.AlertDialogHeader, null,
                react_1.default.createElement(alert_dialog_1.AlertDialogTitle, { "data-testid": "complex-alert-title", className: "flex items-center gap-2" },
                    react_1.default.createElement("span", { className: "text-red-500" }, "\u26A0\uFE0F"),
                    "System Maintenance Required"),
                react_1.default.createElement(alert_dialog_1.AlertDialogDescription, { "data-testid": "complex-alert-description" },
                    react_1.default.createElement("div", { className: "space-y-4" },
                        react_1.default.createElement("p", null, "The system requires immediate maintenance for the following components:"),
                        react_1.default.createElement("ul", { className: "list-disc pl-6 space-y-2", "data-testid": "maintenance-list" },
                            react_1.default.createElement("li", null, "Database optimization (Est. 2 hours)"),
                            react_1.default.createElement("li", null, "Cache clearing (Est. 30 minutes)"),
                            react_1.default.createElement("li", null, "Index rebuilding (Est. 1 hour)")),
                        react_1.default.createElement("p", { className: "font-semibold" }, "Total estimated downtime: 3.5 hours")))),
            react_1.default.createElement(alert_dialog_1.AlertDialogFooter, { className: "flex-col space-y-2" },
                react_1.default.createElement("div", { className: "flex items-center gap-2 text-sm text-muted-foreground" },
                    react_1.default.createElement("input", { type: "checkbox", id: "confirm", "data-testid": "confirmation-checkbox" }),
                    react_1.default.createElement("label", { htmlFor: "confirm" }, "I understand the implications of this action")),
                react_1.default.createElement("div", { className: "flex justify-end gap-2" },
                    react_1.default.createElement(alert_dialog_1.AlertDialogCancel, { "data-testid": "complex-alert-cancel" }, "Schedule Later"),
                    react_1.default.createElement(alert_dialog_1.AlertDialogAction, { "data-testid": "complex-alert-action", className: "bg-red-500 hover:bg-red-600" }, "Start Maintenance Now")))))); },
    play: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var canvas;
        var canvasElement = _b.canvasElement, step = _b.step;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    canvas = (0, test_2.within)(canvasElement);
                    return [4 /*yield*/, step("Should handle complex layout interactions", function () { return __awaiter(void 0, void 0, void 0, function () {
                            var trigger, checkbox, cancelButton;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        trigger = canvas.getByTestId("complex-alert-trigger");
                                        return [4 /*yield*/, test_2.userEvent.click(trigger)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                                var title = document.querySelector('[data-testid="complex-alert-title"]');
                                                var list = document.querySelector('[data-testid="maintenance-list"]');
                                                var checkbox = document.querySelector('[data-testid="confirmation-checkbox"]');
                                                (0, test_1.expect)(title).toHaveTextContent(/system maintenance required/i);
                                                (0, test_1.expect)(list).toBeInTheDocument();
                                                (0, test_1.expect)(list.children.length).toBe(3); // Type assertion added
                                                (0, test_1.expect)(checkbox).not.toBeChecked();
                                            })];
                                    case 2:
                                        _a.sent();
                                        checkbox = document.querySelector('[data-testid="confirmation-checkbox"]');
                                        return [4 /*yield*/, test_2.userEvent.click(checkbox)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                                (0, test_1.expect)(checkbox).toBeChecked();
                                            })];
                                    case 4:
                                        _a.sent();
                                        cancelButton = document.querySelector('[data-testid="complex-alert-cancel"]');
                                        return [4 /*yield*/, test_2.userEvent.click(cancelButton)];
                                    case 5:
                                        _a.sent();
                                        return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                                var dialog = document.querySelector('[data-testid="complex-alert-content"]');
                                                (0, test_1.expect)(dialog).toBeNull();
                                            })];
                                    case 6:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.KeyboardInteraction = {
    render: function () { return react_1.default.createElement(AlertDialogDemo, null); },
    play: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var canvas;
        var canvasElement = _b.canvasElement, step = _b.step;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    canvas = (0, test_2.within)(canvasElement);
                    return [4 /*yield*/, step("Should close on Escape key press", function () { return __awaiter(void 0, void 0, void 0, function () {
                            var trigger;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        trigger = canvas.getByTestId("alert-trigger");
                                        return [4 /*yield*/, test_2.userEvent.click(trigger)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                                var dialog = document.querySelector('[data-testid="alert-content"]');
                                                (0, test_1.expect)(dialog).toBeInTheDocument();
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, test_2.userEvent.keyboard("{Escape}")];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, (0, test_1.waitFor)(function () {
                                                var dialog = document.querySelector('[data-testid="alert-content"]');
                                                (0, test_1.expect)(dialog).toBeNull();
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
