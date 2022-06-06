import './login.css';
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <main className="nothomepage">
      <div className="oe_website_login_container">
        <div id="loginbox" className="mainbox login_box">
          <div className="container">
            <div className="row flex-col-login-signup">
              <div className="col-md-6">
                <div className="login_img">
                  <img src="/images/login_register.png" alt="login_register.png" />
                  <div className="clear-fix"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="login_right">
                  <h3>Đăng Nhập</h3>
                  <p>Chào mừng bạn đến với phần mềm quản lý nông trại</p>
                  <form>
                    <div className="form-group field-login">
                      <label htmlFor="login" className="control-label">
                        Email
                      </label>
                      <input
                        type="text"
                        name="login"
                        id="login"
                        className="form-control"
                        required="required"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group field-password">
                      <label htmlFor="password" className="control-label">
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        placeholder="Mật Khẩu"
                        name="password"
                        id="password"
                        className="form-control"
                        required="required"
                        maxLength="4096"
                      />
                    </div>
                    <div className="clearfix oe_login_buttons hidden">
                      <div className="pull-right">
                        <div>
                          <Link className="btn btn-link" to="/">
                            <i className="fa fa-facebook-square"></i>
                            Đăng nhập bằng Facebook
                          </Link>
                        </div>
                        <div>
                          <Link className="btn btn-link" to="/">
                            <i className="fa fa-google-plus-square"></i>
                            Đăng nhập bằng Google
                          </Link>
                        </div>
                      </div>
                      <Link className="btn btn-link pull-right" to="/">
                        Đăng ký
                      </Link>
                      <Link className="btn btn-link pull-right" to="/">
                        Reset mật khẩu
                      </Link>
                      <button type="submit" className="btn btn-success">
                        Đăng nhập
                      </button>
                    </div>
                    <div className="space10"></div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-success btn-block btn-login-system">
                        Đăng nhập
                      </button>
                    </div>
                    <div className="form-group" id="group3">
                      <div className="control">
                        <div className="box-link-pass">
                          <input type="checkbox" id="chk-save-pass" />
                          <label htmlFor="chk-save-pass" id="label-pass">
                            Lưu Mật Khẩu
                          </label>
                          <Link to="/" className="btn-forgot-pass1">
                            Quên Mật Khẩu
                          </Link>
                        </div>
                        <div className="box-link-signup">
                          <label id="label-pass">
                            Bạn chưa có tài khoản?
                            <Link to="/signup"> Đăng ký </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <div className="form-group field-db">
                      <div className="row">
                        <div className="col-sm-6 btn-social-network">
                          <a className="fa fa-facebook-square" href="/">
                            <i className="fa fa-facebook-square"></i>
                            Đăng nhập bằng Facebook
                          </a>
                        </div>
                        <div className="col-sm-6 btn-social-network">
                          <a className="fa fa-google-plus-square" href="/">
                            <i className="fa fa-google-plus-square"></i>
                            Đăng nhập bằng Google
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="space10"></div>
                  </form>
                </div>
                <div className="clear-fix"></div>
              </div>
            </div>
            <div className="clear-fix"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
