import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./cluster.scss";
import { Menu, Icon } from "antd";
import Overview from "./overview/overview";
import Agent from "./agent/agent";
import Theme from "./theme/theme";
import Connection from "./connection/connection";
import KsqlDb from "./ksqlDb/ksqlDb";
import Consumer from "./consumer/consumer";
import ClusterSet from "./clusterSet/clusterSet";

class Cluster extends Component {
  handleClick = e => {
    console.log("click ", e);
  };

  state = {
    sidenav: [
      { title: "概览", link: "/cluster/overview" },
      { title: "代理", link: "/cluster/agent" },
      { title: "主题", link: "/cluster/theme" },
      { title: "连接", link: "/cluster/connection" },
      { title: "KSQL DB", link: "/cluster/ksqlDb" },
      { title: "消费者", link: "/cluster/consumer" },
      { title: "集群设置", link: "/cluster/clusterSet" },
    ],
  };

  render() {
    let { sidenav } = this.state;
    return (
      <div className="cluster">
        <div className="side_nav">
          <h2 className="cluster_name">集群1</h2>
          <Menu
            onClick={this.handleClick}
            style={{ width: "100%", background: "none" }}
            defaultSelectedKeys={["0"]}
            mode="inline"
          >
            {sidenav.map((item, index) => {
              let { title, link } = item;
              return (
                <Menu.Item key={index}>
                  <NavLink to={link} exact>
                    <Icon type="mail" />
                    {title}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
        <div className="cluster_content">
          <Switch>
            <Route path="/cluster" exact component={Overview} />
            <Route path="/cluster/overview" exact component={Overview} />
            <Route path="/cluster/theme" exact component={Theme} />
            <Route path="/cluster/agent" exact component={Agent} />
            <Route path="/cluster/ksqlDb" exact component={KsqlDb} />
            <Route path="/cluster/consumer" exact component={Consumer} />
            <Route path="/cluster/clusterSet" exact component={ClusterSet} />
            <Route path="/cluster/connection" exact component={Connection} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Cluster;
