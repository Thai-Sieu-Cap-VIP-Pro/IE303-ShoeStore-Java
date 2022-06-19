import { useRef, useState, useEffect, useContext } from "react";
import React from "react";
// import AuthContext from "../../context/AuthProvider";

// import axios from '../../api/axios';
import "./index.css";
import HomePages from "../home/pages/HomePages";
import { useNavigate } from "react-router-dom";
import authAPI from "../../../api/AuthApi";
const LOGIN_URL = "/auth";

const Login = () => {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user, pwd);
    authAPI.login({ username: user, password: pwd }).then((res) => {
      if (res.data === "") {
        setSuccess("Sai tên đăng nhập hoặc mật khẩu");
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        if (res.data.accountRole) {
          navigate("/");
        } else {
          console.log("first");
          navigate("/admin");
        }
      }
    });
  };

  return (
    <div className="body">
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h4>Đăng Nhập</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <label>{success}</label>
          <button className="btn__submit heladf">Đăng Nhập</button>
        </form>
        <p className="jkf">
          Cần một tài khoản?
          <br />
          <div className="path">
            <span className="line">
              {/*put router link here*/}
              <a href="/register">Đăng ký</a>
            </span>
            <span className="line">
              {/*put router link here*/}
              <a href="/">Trang chủ</a>
            </span>
          </div>
        </p>
      </section>
    </div>
  );
};

export default Login;
