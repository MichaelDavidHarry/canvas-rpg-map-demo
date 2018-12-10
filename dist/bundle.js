/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CanvasMap.ts":
/*!**************************!*\
  !*** ./src/CanvasMap.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasMapConfiguration_1 = __webpack_require__(/*! ./CanvasMapConfiguration */ "./src/CanvasMapConfiguration.ts");
var Direction_1 = __webpack_require__(/*! ./Direction */ "./src/Direction.ts");
var MapPosition_1 = __webpack_require__(/*! ./MapPosition */ "./src/MapPosition.ts");
var CanvasMap = (function () {
    function CanvasMap(canvas, configuration) {
        if (configuration === void 0) { configuration = new CanvasMapConfiguration_1.default(); }
        this.canvas = canvas;
        this.configuration = configuration;
        this.xOffset = 0;
        this.yOffset = 0;
        this.xPosition = 0;
        this.yPosition = 0;
        this.mapMoving = false;
        this.backgroundTileImageElement = null;
        var context = canvas.getContext("2d");
        if (context === null) {
            throw new Error("Could not get canvas context");
        }
        this.context = context;
    }
    CanvasMap.prototype.moveCharacter = function (direction) {
        var _this = this;
        if (this.mapMoving) {
            return;
        }
        this.mapMoving = true;
        var intervalHandle = 0;
        if (direction === Direction_1.default.Up || direction === Direction_1.default.Down) {
            if (direction === Direction_1.default.Up) {
                this.yPosition++;
            }
            else {
                this.yPosition--;
            }
            intervalHandle = setInterval(function () {
                if (direction === Direction_1.default.Up) {
                    _this.yOffset += _this.configuration.mapMoveStepPixels;
                }
                else {
                    _this.yOffset -= _this.configuration.mapMoveStepPixels;
                }
                _this.yOffset = _this.yOffset % _this.configuration.tileSize;
                if (_this.yOffset === 0) {
                    clearInterval(intervalHandle);
                    _this.mapMoving = false;
                }
            }, this.configuration.drawFrequencyMilliseconds);
        }
        else {
            if (direction == Direction_1.default.Left) {
                this.xPosition--;
            }
            else {
                this.xPosition++;
            }
            intervalHandle = setInterval(function () {
                if (direction === Direction_1.default.Right) {
                    _this.xOffset -= _this.configuration.mapMoveStepPixels;
                }
                else {
                    _this.xOffset += _this.configuration.mapMoveStepPixels;
                }
                _this.xOffset = _this.xOffset % _this.configuration.tileSize;
                if (_this.xOffset === 0) {
                    clearInterval(intervalHandle);
                    _this.mapMoving = false;
                }
            }, this.configuration.drawFrequencyMilliseconds);
        }
    };
    CanvasMap.prototype.startRendering = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        that = this;
                        _a = this;
                        return [4, this.loadImageAsset(this.configuration.backgroundTileImageUrl)];
                    case 1:
                        _a.backgroundTileImageElement = _b.sent();
                        setInterval(function () {
                            that.draw();
                        }, this.configuration.drawFrequencyMilliseconds);
                        return [2];
                }
            });
        });
    };
    CanvasMap.prototype.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.drawCharacter();
        if (this.configuration.drawGrid) {
            this.drawGrid();
        }
    };
    CanvasMap.prototype.drawBackground = function () {
        for (var i = -1 * this.configuration.tileSize; i < this.canvas.width + this.configuration.tileSize; i = i + this.configuration.tileSize) {
            for (var j = -1 * this.configuration.tileSize; j < this.canvas.height + this.configuration.tileSize; j = j + this.configuration.tileSize) {
                if (this.backgroundTileImageElement != null) {
                    this.context.drawImage(this.backgroundTileImageElement, i + this.xOffset, j + this.yOffset);
                }
            }
        }
    };
    CanvasMap.prototype.drawGrid = function () {
        for (var i = -1 * this.configuration.tileSize; i < this.canvas.width + this.configuration.tileSize; i = i + this.configuration.tileSize) {
            this.context.beginPath();
            this.context.moveTo(i + this.xOffset, 0);
            this.context.lineTo(i + this.xOffset, this.canvas.height);
            this.context.stroke();
            this.context.beginPath();
            this.context.moveTo(0, i + this.yOffset);
            this.context.lineTo(this.canvas.width, i + this.yOffset);
            this.context.stroke();
        }
    };
    CanvasMap.prototype.drawCharacter = function () {
        var center = this.canvas.width / 2;
        var tileSize = this.configuration.tileSize;
        var offsetCenter = center - tileSize / 2;
        this.context.fillRect(offsetCenter, offsetCenter, tileSize, tileSize);
    };
    CanvasMap.prototype.loadImageAsset = function (imageAssetUrl) {
        var imageElement = new Image(0, 0);
        var loadPromise = new Promise(function (resolve, reject) {
            imageElement.addEventListener("load", function () {
                resolve(imageElement);
            });
        });
        imageElement.src = imageAssetUrl;
        return loadPromise;
    };
    Object.defineProperty(CanvasMap.prototype, "mapPosition", {
        get: function () {
            return new MapPosition_1.default(this.xPosition, this.yPosition);
        },
        enumerable: true,
        configurable: true
    });
    return CanvasMap;
}());
exports.default = CanvasMap;


/***/ }),

/***/ "./src/CanvasMapConfiguration.ts":
/*!***************************************!*\
  !*** ./src/CanvasMapConfiguration.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasMapConfiguration = (function () {
    function CanvasMapConfiguration() {
        this.tileSize = 32;
        this.drawFrequencyMilliseconds = 33;
        this.drawGrid = false;
        this.mapMoveStepPixels = 2;
        this.backgroundTileImageUrl = "./tile.png";
        this.tileSize = 32;
        this.drawFrequencyMilliseconds = 33;
        this.drawGrid = false;
        this.mapMoveStepPixels = 2;
        this.backgroundTileImageUrl = "./tile.png";
    }
    return CanvasMapConfiguration;
}());
exports.default = CanvasMapConfiguration;


/***/ }),

/***/ "./src/Direction.ts":
/*!**************************!*\
  !*** ./src/Direction.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
exports.default = Direction;


/***/ }),

/***/ "./src/MapPosition.ts":
/*!****************************!*\
  !*** ./src/MapPosition.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MapPosition = (function () {
    function MapPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    return MapPosition;
}());
exports.default = MapPosition;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasMap_1 = __webpack_require__(/*! ./CanvasMap */ "./src/CanvasMap.ts");
var CanvasMapConfiguration_1 = __webpack_require__(/*! ./CanvasMapConfiguration */ "./src/CanvasMapConfiguration.ts");
var Direction_1 = __webpack_require__(/*! ./Direction */ "./src/Direction.ts");
var canvas = document.getElementById("map-canvas");
canvas.width = 352;
canvas.height = 352;
if (canvas === null) {
    throw new Error("Cannot get canvas");
}
var config = new CanvasMapConfiguration_1.default();
config.drawGrid = true;
var map = new CanvasMap_1.default(canvas, config);
map.startRendering();
window.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowDown":
            map.moveCharacter(Direction_1.default.Down);
            break;
        case "ArrowUp":
            map.moveCharacter(Direction_1.default.Up);
            break;
        case "ArrowLeft":
            map.moveCharacter(Direction_1.default.Left);
            break;
        case "ArrowRight":
            map.moveCharacter(Direction_1.default.Right);
            break;
    }
    updatePosition();
});
var updatePosition = function () {
    var xPosition = document.getElementById("x-position");
    var yPosition = document.getElementById("y-position");
    var position = map.mapPosition;
    if (xPosition === null) {
        throw new Error("Cannot get x-position");
    }
    xPosition.innerText = position.x.toString();
    if (yPosition === null) {
        throw new Error("Cannot get y-position");
    }
    yPosition.innerHTML = position.y.toString();
};
updatePosition();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map