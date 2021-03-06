import React, { Component } from "react";
import "./addConnection.scss";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Steps, Row, Col } from "antd";
import SetConnection from "./setConnection/setConnection";
import qs from "qs";
import { connect } from "react-redux";

const { Step } = Steps;
class AddConnection extends Component {
  state = {
    current: 0,
    stepsLeft: ["设置连接器", "测试与验证"],
    stepsRight: [
      "如何连接到您的数据",
      "公共",
      "变换",
      "属性词",
      "错误处理",
      "主题创建",
      "常规",
      "其他属性",
    ],
  };

  next() {
    this.setState(state => {
      return {
        current: state.current + 1,
      };
    });
  }

  done() {
    console.log("done");
  }

  prev() {
    this.setState(state => {
      return {
        current: state.current - 1,
      };
    });
  }

  render() {
    let {
        location: { search },
        routerParam = { clusterIdStore: "" },
      } = this.props,
      connectionName = qs.parse(search.substring(1)).connection_name;
    let { current, stepsLeft, stepsRight } = this.state,
      { clusterIdStore } = routerParam;
    return (
      <div className="add_connection">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={`/cluster/${clusterIdStore}/connection`}>
              所有连接集群
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to={`/cluster/${clusterIdStore}/connection/details?connection_name=${connectionName}`}
            >
              {connectionName}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to={`/cluster/${clusterIdStore}/connection/details/choose?connection_name=${connectionName}`}
            >
              浏览
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>新建连接器</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="page_title">新建连接器</h2>

        <div className="connection_content">
          <Row gutter={150}>
            <Col span={14}>
              <div className="step_form">
                <Steps current={current}>
                  {stepsLeft.map(item => (
                    <Step key={item} title={item} />
                  ))}
                </Steps>
                <div className="steps-content">
                  {current === 0 ? <SetConnection /> : "step2"}
                </div>
                <div className="steps-action">
                  {current < stepsLeft.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                      下一步
                    </Button>
                  )}
                  {current === stepsLeft.length - 1 && (
                    <Button type="primary" onClick={() => this.done()}>
                      完成
                    </Button>
                  )}
                  {current > 0 && (
                    <Button
                      style={{ marginLeft: 8 }}
                      onClick={() => this.prev()}
                    >
                      上一步
                    </Button>
                  )}
                </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="step_process">
                <Steps progressDot current={1} direction="vertical">
                  {stepsRight.map(item => (
                    <Step title={item} key={item} />
                  ))}
                </Steps>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ ...state.routerParamReducer }))(
  AddConnection
);
