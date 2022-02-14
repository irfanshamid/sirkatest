"use strict";
(() => {
var exports = {};
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ service)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "sweetalert"
const external_sweetalert_namespaceObject = require("sweetalert");
var external_sweetalert_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/service.js


const URLS = "https://fakestoreapi.com";
/* harmony default export */ const service = ({
    actions: {
        get_user (limit, sort) {
            let _param = {
                limit: limit,
                sort: sort ? sort : "asc"
            };
            return new Promise((resolve, reject)=>{
                try {
                    external_axios_default().get(URLS + `/users`, {
                        params: _param
                    }).then((response)=>{
                        resolve(response);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        },
        get_total_user () {
            return new Promise((resolve, reject)=>{
                try {
                    external_axios_default().get(URLS + `/users`).then((response)=>{
                        resolve(response);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        },
        submit_user (data) {
            return new Promise((resolve, reject)=>{
                try {
                    external_axios_default().post(URLS + `/users`, data).then((response)=>{
                        if (response.status === 200) {
                            resolve(response.data);
                            this.handling("Done", "user submited", "success");
                        } else {
                            resolve("submit data is error");
                        }
                    });
                } catch (error) {
                    reject(error);
                    this.handling("Oops", "check network or data submition", "error");
                }
            });
        },
        edit_user (uid, data) {
            return new Promise((resolve, reject)=>{
                try {
                    external_axios_default().put(URLS + `/users/` + uid, data).then((response)=>{
                        if (response.status === 200) {
                            resolve(response.data);
                            this.handling("Done", "user edited", "success");
                            window.location.href = "/user";
                        } else {
                            resolve("update data error");
                        }
                    });
                } catch (error) {
                    reject(error);
                    this.handling("Oops", "check network or data submition", "error");
                }
            });
        },
        get_detail_user (uid) {
            return new Promise((resolve, reject)=>{
                try {
                    external_axios_default().get(URLS + `/users/` + uid).then((response)=>{
                        resolve(response);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        },
        delete_user (uid) {
            return new Promise((resolve, reject)=>{
                try {
                    external_axios_default()["delete"](URLS + `/users/` + uid).then((response)=>{
                        if (response.status === 200) {
                            resolve(response.data);
                            this.handling("Success", "data has been deleted", "success");
                        } else {
                            resolve("error access");
                            this.handling("Oops", "something wrong", "error");
                        }
                    });
                } catch (error) {
                    reject(error);
                }
            });
        },
        handling (title, message, callback) {
            external_sweetalert_default()({
                title: title,
                text: message,
                icon: callback,
                timer: 2000,
                button: false
            });
        }
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(84));
module.exports = __webpack_exports__;

})();