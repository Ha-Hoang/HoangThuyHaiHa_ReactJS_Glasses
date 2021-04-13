import React, { Component } from "react";

export class Glasses extends Component {
  state = {
    glassImg: "./img/glassesImage/v1.png",
  };
  handleClick = (color) => {
    let urlImg = "";
    switch (color) {
      case "v1-img":
        urlImg = "./img/glassesImage/v1.png";
        break;

      case "v2-img":
        urlImg = "./img/glassesImage/v2.png";
        break;

      case "v3-img":
        urlImg = "./img/glassesImage/v3.png";
        break;

      case "v4-img":
        urlImg = "./img/glassesImage/v4.png";
        break;

      case "v5-img":
        urlImg = "./img/glassesImage/v5.png";
        break;

      case "v6-img":
        urlImg = "./img/glassesImage/v6.png";
        break;

      case "v7-img":
        urlImg = "./img/glassesImage/v7.png";
        break;

      case "v8-img":
        urlImg = "./img/glassesImage/v8.png";
        break;

      case "v9-img":
        urlImg = "./img/glassesImage/v9.png";
        break;
    }

    this.setState({
      glassImg: urlImg,
    },
    () => {
      console.log("sau setState", this.state.glassImg);
    }
    );
  };
  render() {
    return (
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <section className="model d-flex justify-content-center col-5">
              <div
                className="card text-left"
                style={{ width: 300, position: "relative" }}
              >
                <img
                  className="card-img-top"
                  src="./img/glassesImage/model.jpg"
                  alt="hinh model"
                />
                {/* Hiển thị kính */}
                <img
                  src={this.state.glassImg}
                  alt="kinh"
                  style={{
                    width: 170,
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "16%",
                  }}
                />
                <div className="card-body">
                  <span className="card-title badge-danger h3 px-2 rounded">
                    $30
                  </span>
                  <p className="card-text mt-2">GUCCI G8850U</p>
                </div>
              </div>
            </section>
            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v1-img")}
                >
                  <img
                    src="./img/glassesImage/v1.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v2-img")}
                >
                  <img
                    src="./img/glassesImage/v2.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v3-img")}
                >
                  <img
                    src="./img/glassesImage/v3.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v4-img")}
                >
                  <img
                    src="./img/glassesImage/v4.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v5-img")}
                >
                  <img
                    src="./img/glassesImage/v5.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v6-img")}
                >
                  <img
                    src="./img/glassesImage/v6.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v7-img")}
                >
                  <img
                    src="./img/glassesImage/v7.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v8-img")}
                >
                  <img
                    src="./img/glassesImage/v8.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.handleClick("v9-img")}
                >
                  <img
                    src="./img/glassesImage/v9.png"
                    alt="hinh"
                    style={{ width: 100, borderRadius: 20 }}
                  />
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default Glasses;
