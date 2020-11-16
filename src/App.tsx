import React, { useState } from "react";
import logo from "./firstcry.png";
import profile from "./avatar.png";

import res from "./MockData";

import "./App.css";
import Modal from "./components/ModalComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const [open, setShow] = useState(false);
  const [item, setItem] = useState({});

  const _setItem = (show: boolean, item?: any) => {
    if (item) setItem(item);
    setShow(show);
  };
  const renderCards = () => {
    let count = 0;
    let cards: any = [];
    let list: any = [];
    let item;
    let n = res.materialList.length;

    for (let i = 0; i < n; i++) {
      item = res.materialList[i];
      count = i % 3;
      cards.push(
        <CardComponent
          key={i}
          name={item.name}
          url={item.url}
          colors={item.colors}
          onShow={_setItem}
        />
      );
      if (count === 3 - 1 || i === n - 1) {
        list.push(<div className="row text-center">{cards}</div>);
        cards = [];
      }
    }
    return list;
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <h2>LF</h2>
            <ul className="nav nav-pills nav-stacked">
              <li key={1}>
                <a href="#">
                  <span className="glyphicon glyphicon-search" />
                </a>
              </li>
              <li key={2}>
                <a href="#">
                  <span className="glyphicon glyphicon-question-sign" />
                </a>
              </li>
              <li key={3}>
                <a href="#">
                  <span className="glyphicon glyphicon-bell" />
                </a>
              </li>
              <li key={4}>
                <a href="#">
                  <span className="glyphicon glyphicon-search" />
                </a>
              </li>
              <li key={5}>
                <a href="#">
                  <span className="glyphicon glyphicon-question-sign" />
                </a>
              </li>
              <li key={6}>
                <a href="#">
                  <span className="glyphicon glyphicon-bell" />
                </a>
              </li>
              <li key={7}>
                <a href="#">
                  <span className="glyphicon glyphicon-search" />
                </a>
              </li>
              <li key={8}>
                <a href="#">
                  <span className="glyphicon glyphicon-question-sign" />
                </a>
              </li>
              <li key={9}>
                <a href="#">
                  <span className="glyphicon glyphicon-bell" />
                </a>
              </li>
            </ul>
            <br />
          </div>
          <br />

          <div className="col-sm-9">
            <nav className="navbar navbar-default">
              <div className="container-fluid header1">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    Material Library
                  </a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-search" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-question-sign" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-bell" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={logo} width="70" height="50" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={profile} width="70" height="50" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="container-fluid header2">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#">
                      Fabrics <span>(928)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Trims <span>(928)</span>
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <button className="primary danger">
                      <span className="glyphicon glyphicon-transfer" />Stock I/O
                    </button>
                  </li>
                  <li>
                    <select className="primary">
                      <option>Add New</option>
                    </select>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container-fluid text-center bg-grey">
              {renderCards()}
              {/* <div className="row text-center">
                <div className="col-sm-4" onClick={() => setShow(true)}>
                  <div className="thumbnail">
                    <img src={logo} alt="Paris" width="214" height="250" />
                    <p>
                      {" "}
                      <strong>paris</strong>{" "}
                    </p>
                    <p>8 more colors</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} item={item} onShow={setShow} />
    </div>
  );
}

export default App;
