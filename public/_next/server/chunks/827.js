"use strict";
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);


const URLS = "https://fakestoreapi.com";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    actions: {
        get_user (limit, sort) {
            let _param = {
                limit: limit,
                sort: sort ? sort : "asc"
            };
            return new Promise((resolve, reject)=>{
                try {
                    axios__WEBPACK_IMPORTED_MODULE_0___default().get(URLS + `/users`, {
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
                    axios__WEBPACK_IMPORTED_MODULE_0___default().get(URLS + `/users`).then((response)=>{
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
                    axios__WEBPACK_IMPORTED_MODULE_0___default().post(URLS + `/users`, data).then((response)=>{
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
                    axios__WEBPACK_IMPORTED_MODULE_0___default().put(URLS + `/users/` + uid, data).then((response)=>{
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
                    axios__WEBPACK_IMPORTED_MODULE_0___default().get(URLS + `/users/` + uid).then((response)=>{
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
                    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](URLS + `/users/` + uid).then((response)=>{
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
            sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
                title: title,
                text: message,
                icon: callback,
                timer: 2000,
                button: false
            });
        }
    }
});


/***/ }),

/***/ 16:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyledCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/* eslint no-use-before-define: 0 */ // --> OFF
function StyledCard({ children , bgcolor  }) {
    const core = {
        backgroundColor: bgcolor ? bgcolor : "#FFF",
        border: "none",
        borderRadius: "10px",
        padding: "30px",
        margin: "20px 0"
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card",
        style: core,
        children: children
    }));
};
StyledCard.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), 
    ]),
    bgcolor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ })

};
;