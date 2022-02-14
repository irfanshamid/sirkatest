import axios from "axios";
import swal from "sweetalert";
const URLS = "https://fakestoreapi.com";

export default {
  actions: {
    get_user(limit, sort) {
      let _param = {
        limit: limit,
        sort: sort ? sort : "asc",
      };
      return new Promise((resolve, reject) => {
        try {
          axios
            .get(URLS + `/users`, {
              params: _param,
            })
            .then((response) => {
              resolve(response);
            });
        } catch (error) {
          reject(error);
        }
      });
    },

    get_total_user() {
      return new Promise((resolve, reject) => {
        try {
          axios.get(URLS + `/users`).then((response) => {
            resolve(response);
          });
        } catch (error) {
          reject(error);
        }
      });
    },

    submit_user(data) {
      return new Promise((resolve, reject) => {
        try {
          axios.post(URLS + `/users`, data).then((response) => {
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

    edit_user(uid, data) {
      return new Promise((resolve, reject) => {
        try {
          axios.put(URLS + `/users/` + uid, data).then((response) => {
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

    get_detail_user(uid) {
      return new Promise((resolve, reject) => {
        try {
          axios.get(URLS + `/users/` + uid).then((response) => {
            resolve(response);
          });
        } catch (error) {
          reject(error);
        }
      });
    },

    delete_user(uid) {
      return new Promise((resolve, reject) => {
        try {
          axios.delete(URLS + `/users/` + uid).then((response) => {
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

    handling(title, message, callback) {
      swal({
        title: title,
        text: message,
        icon: callback,
        timer: 2000,
        button: false,
      });
    },
  },
};
