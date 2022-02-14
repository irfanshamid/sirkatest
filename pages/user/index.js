import { useEffect, useState } from "react";
import global from "./../api/service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import StyledCard from "../component/card";
import StyledSkeleton from "../component/skeleton";
import StyledPanel from "../component/panel";
/* eslint no-use-before-define: 0 */ // --> OFF

export default function Users() {
  const [list, setList] = useState([]);
  const [chart, setChart] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sort, setSorting] = useState("asc");
  const router = useRouter();

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

  useEffect(() => {
    getList(limit, sort);
    getTotal();
  }, []);

  const getList = (_limit, _sort) => {
    global.actions.get_user(_limit, _sort).then((res) => {
      setList(res.data);
    });
  };

  const getTotal = () => {
    global.actions.get_total_user().then((res) => {
      setTotal(res.data.length);

      var bundle = res.data;
      var result = [];
      bundle.reduce(function (res, value) {
        if (!res[value.address.city]) {
          res[value.address.city] = { name: value.address.city, value: 0 };
          result.push(res[value.address.city]);
        }
        res[value.address.city].value += 1;
        return res;
      }, {});
      setChart(result);
    });
  };

  const onLimit = (attr) => {
    setLimit(attr);
    getList(attr, sort);
  };

  const onSorting = (attr) => {
    setSorting(attr);
    getList(limit, attr);
  };

  const onAction = (action, data) => {
    if (action === "create") {
      router.push("/user/form");
    } else {
      router.push({
        pathname: "/user/" + data.id,
        query: {
          index: action,
        },
      });
    }
  };

  const onDelete = (idx) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        global.actions.delete_user(idx).then((res) => {
          getList(limit, sort);
        });
      }
    });
  };

  const renderCustomizedLabel = ({ x, y, name, percent, value }) => {
    return (
      <text x={x} y={y} fill="#333" fontSize={8} textAnchor="middle">
        {`${(percent * 100).toFixed(0)}%`} ({value})
      </text>
    );
  };

  return (
    <div className="row">
      <div className="col-md-8 col-sm-12">
        <StyledCard>
          <div className="row mb-3">
            <div className="col-md-3 col-sm-12">
              <button
                className="m-1 btn btn-primary w-100"
                onClick={() => onAction("create", null)}
              >
                Add Data
              </button>
            </div>
            <div className="col-md-2 col-sm-6 py-1">
              <select
                className="form-select"
                defaultValue={5}
                onChange={() => onSorting(event.target.value)}
              >
                <option value="asc">ASC</option>
                <option value="desc">DSC</option>
              </select>
            </div>
            <div className="col-md-2 col-sm-6 py-1">
              <select
                className="form-select"
                defaultValue={10}
                onChange={() => onLimit(event.target.value)}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div className="col-md-5 col-sm-6 py-1">
              <input
                name="email"
                className="form-control"
                placeholder="search"
              />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-borderless table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.length > 0 ? (
                  <>
                    {list.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td scope="row" valign="middle">
                            <small>{i + 1}</small>
                          </td>
                          <td valign="middle">
                            <small>
                              {item.name.firstname} {item.name.lastname}
                            </small>
                          </td>
                          <td valign="middle">
                            <small>{item.email}</small>
                          </td>
                          <td valign="middle">
                            <button
                              className="m-1 rounded-pill btn btn-sm btn-outline-secondary"
                              onClick={() => onAction("detail", item)}
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button
                              className="m-1 rounded-pill btn btn-sm btn-outline-success"
                              onClick={() => onAction("edit", item)}
                            >
                              <FontAwesomeIcon icon={faPencil} />
                            </button>
                            <button
                              className="m-1 rounded-pill btn btn-sm btn-outline-danger"
                              onClick={() => onDelete(item.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <tr>
                    <td colSpan={5}>
                      <StyledSkeleton height="40px" total={5} />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </StyledCard>
      </div>

      <div className="col-md-4">
        <StyledCard>
          <h5>Summary</h5>
          <StyledPanel summary={total} desc="users" />
        </StyledCard>

        <StyledCard>
          <h5>Statics City</h5>
          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
              <PieChart width={400} height={400}>
                <Pie
                  data={chart}
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                  isAnimationActive={false}
                  labelLine={true}
                  label={renderCustomizedLabel}
                >
                  {chart.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend align="left" iconSize={10} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </StyledCard>
      </div>
    </div>
  );
}
