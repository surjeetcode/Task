import React from "react";
import "./TableData.css";
import { dataSource } from "../../Components/Top/data/Data";
import img2 from '../../assests/images/Task2image2.png'

const TableData = () => {
  const data = (item, index) => {
    return (
      <tr key={index}>
        <td className="align-middle">
          <h4 className="table-text">{item.id}</h4>
        </td>
        <td className="align-middle">
          <a href=""></a>
          <h4 className="table-text">
            <img className="logo_img" src={item.img} alt="" />{" "}
            <span className="name"></span> {item.Platform}
          </h4>
        </td>
        <td className="align-middle">
          <h4 className="table-text">{item.Last_Traded_Price}</h4>
        </td>
        <td className="align-middle">
          <h4 className="table-text">{item.Buy_Sell_Price}</h4>
        </td>
        <td className="align-middle">
          <h4 className="table-text color-green">{item.Difference}</h4>
        </td>
        <td className="align-middle">
          <h4 className="table-text color-green">{item.Savings}</h4>
        </td>
      </tr>
    );
  };
  return (
    <>
      <div className="table_div">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <h4>
                    <span className="pointer">#</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span className="pointer">Platform</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span className="pointer">Last Traded Price</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span className="pointer">Buy / Sell Price</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span className="pointer">Difference</span>
                  </h4>
                </th>
                <th>
                  <h4>
                    <span className="pointer">Savings</span>
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>{dataSource.map(data)}</tbody>
          </table>
        </div>
      </div>
      <a href="">

<img class="advir" src={img2} alt=""/>
</a>
    </>
  );
};

export default TableData;
