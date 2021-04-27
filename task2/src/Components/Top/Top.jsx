import React, { useState } from "react";
import logo from "../../assests/images/logo.png";
import { Table } from "antd";
import "../../App.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { menuItems } from "../../Components/Top/data/Data.js";
import { Button } from "antd";

import { Select } from "antd";
import { Progress } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import TextData from "../Textdata/TextData";
import TableData from "../TableData/TableData";
import Footer from "../Footer/Footer";

const Top = () => {
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  

  

  return (
    <div className="main-top">
      <div className="container-fluid">
        <div className=" align-items-center justify-content-sm-center row">
          <div className="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">

              <div className="padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11">
            <img src={logo} className="logo" alt="" />
            </div>

            <div className="col-12 text-center-xs linkss">
              <p>
                Powered By{" "}
                <a class="footer_link" href="">
                  FinStreet
                </a>
              </p>
            </div>
          </div>
          <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
            {/* <select className="form-select form-select-sm" aria-label=".form-select-sm"> */}
            <Select
              defaultValue="INR"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <option value="INR">INR</option>
            </Select>

            <Select
              defaultValue="BTC"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              {menuItems.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.value}
                  </option>
                );
              })}
            </Select>
            <Button className="btns" type="primary">
              <a href="">BUY BTC</a>
            </Button>
          </div>
          <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
            <Progress strokeLinecap="square" percent={75} type="circle" />

            <Button
              type="primary"
              shape="round"
              className="btnsss"
              icon={<DownloadOutlined />}
            >
              Connect To Telegram
            </Button>
            <Switch defaultChecked onChange={onChange} />
          </div>
        </div>


</div>
<TextData />
<TableData />
<Footer />

    </div>
  );
};

export default Top;
