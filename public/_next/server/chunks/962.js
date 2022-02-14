"use strict";
exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyledSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function StyledSkeleton({ total , height  }) {
    const styled = {
        width: "100%",
        height: height ? height : "30px",
        background: "#2222",
        margin: "8px 0",
        position: "relative",
        borderRadius: "4px"
    };
    var puler = [];
    for(let i = 0; i < total; i++){
        puler.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "animated-pulse",
            style: styled
        }, i));
    }
    return puler;
};
StyledSkeleton.propTypes = {
    total: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ }),

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(562);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _component_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93);
/* harmony import */ var _component_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(876);










/* eslint no-use-before-define: 0 */ // --> OFF
function Users() {
    const { 0: list , 1: setList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: chart , 1: setChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: limit , 1: setLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const { 0: sort , 1: setSorting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("asc");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const COLORS = [
        "#307bd1",
        "#30ced1",
        "#d1c130",
        "#c630d1",
        "#d14e30",
        "#2ea3c9",
        "#762ec9",
        "#649cb3",
        "#9b64b3", 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getList(limit, sort);
        getTotal();
    }, []);
    const getList = (_limit, _sort)=>{
        _api_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].actions.get_user */ .Z.actions.get_user(_limit, _sort).then((res)=>{
            setList(res.data);
        });
    };
    const getTotal = ()=>{
        _api_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].actions.get_total_user */ .Z.actions.get_total_user().then((res1)=>{
            setTotal(res1.data.length);
            var bundle = res1.data;
            var result = [];
            bundle.reduce(function(res, value) {
                if (!res[value.address.city]) {
                    res[value.address.city] = {
                        name: value.address.city,
                        value: 0
                    };
                    result.push(res[value.address.city]);
                }
                res[value.address.city].value += 1;
                return res;
            }, {});
            setChart(result);
        });
    };
    const onLimit = (attr)=>{
        setLimit(attr);
        getList(attr, sort);
    };
    const onSorting = (attr)=>{
        setSorting(attr);
        getList(limit, attr);
    };
    const onAction = (action, data)=>{
        if (action === "create") {
            router.push("/user/form");
        } else {
            router.push({
                pathname: "/user/" + data.id,
                query: {
                    index: action
                }
            });
        }
    };
    const onDelete = (idx)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete)=>{
            if (willDelete) {
                _api_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].actions.delete_user */ .Z.actions.delete_user(idx).then((res)=>{
                    getList(limit, sort);
                });
            }
        });
    };
    const renderCustomizedLabel = ({ x , y , name , percent , value  })=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("text", {
            x: x,
            y: y,
            fill: "#333",
            fontSize: 8,
            textAnchor: "middle",
            children: [
                `${(percent * 100).toFixed(0)}%`,
                " (",
                value,
                ")"
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-md-8 col-sm-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-3 col-sm-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "m-1 btn btn-primary w-100",
                                        onClick: ()=>onAction("create", null)
                                        ,
                                        children: "Add Data"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-2 col-sm-6 py-1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "form-select",
                                        defaultValue: 5,
                                        onChange: ()=>onSorting(event.target.value)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "asc",
                                                children: "ASC"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "desc",
                                                children: "DSC"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-2 col-sm-6 py-1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "form-select",
                                        defaultValue: 10,
                                        onChange: ()=>onLimit(event.target.value)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: 5,
                                                children: "5"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: 10,
                                                children: "10"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: 15,
                                                children: "15"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-5 col-sm-6 py-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: "email",
                                        className: "form-control",
                                        placeholder: "search"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "table-responsive",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                className: "table table-borderless table-sm table-hover",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    children: "#"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    children: "Name"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    children: "Action"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        children: list.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: list.map((item, i)=>{
                                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            scope: "row",
                                                            valign: "middle",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                children: i + 1
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            valign: "middle",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                                children: [
                                                                    item.name.firstname,
                                                                    " ",
                                                                    item.name.lastname
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            valign: "middle",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                                children: item.email
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                            valign: "middle",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "m-1 rounded-pill btn btn-sm btn-outline-secondary",
                                                                    onClick: ()=>onAction("detail", item)
                                                                    ,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEye
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "m-1 rounded-pill btn btn-sm btn-outline-success",
                                                                    onClick: ()=>onAction("edit", item)
                                                                    ,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPencil
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: "m-1 rounded-pill btn btn-sm btn-outline-danger",
                                                                    onClick: ()=>onDelete(item.id)
                                                                    ,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTrash
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, i));
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                colSpan: 5,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                    height: "40px",
                                                    total: 5
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Summary"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_panel__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                summary: total,
                                desc: "users"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Statics City"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: "100%",
                                    height: 350
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_6__.PieChart, {
                                        width: 400,
                                        height: 400,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.Pie, {
                                                data: chart,
                                                innerRadius: 40,
                                                outerRadius: 60,
                                                paddingAngle: 2,
                                                dataKey: "value",
                                                isAnimationActive: false,
                                                labelLine: true,
                                                label: renderCustomizedLabel,
                                                children: chart.map((entry, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.Cell, {
                                                        fill: COLORS[index % COLORS.length]
                                                    }, `cell-${index}`)
                                                )
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_6__.Legend, {
                                                align: "left",
                                                iconSize: 10
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;