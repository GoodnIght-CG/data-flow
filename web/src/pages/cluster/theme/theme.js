import React, { Component } from "react";
import "./theme.scss";
import { Link } from "react-router-dom";
import { Button, Table, Row, Col } from "antd";
import SearchInput from "@/components/searchInput/searchInput";
import SwitchBtn from "@/components/switchBtn/switchBtn";

const { Column, ColumnGroup } = Table;
class Theme extends Component {
  state = {
    tableData: [
      {
        key: "1",
        name: "主题1",
        copy_area: "0 of 1",
        async_follower: "0 of 1",
        async_observer: "0 of 1",
        production: "- -",
        consume: "- -",
      },
      {
        key: "2",
        name: "主题2",
        copy_area: "0 of 1",
        async_follower: "0 of 1",
        async_observer: "0 of 1",
        production: "0B",
        consume: "0B",
      },
      {
        key: "3",
        name: "主题3",
        copy_area: "0 of 5",
        async_follower: "0 of 5",
        async_observer: "0 of 0",
        production: "0B",
        consume: "0B",
      },
    ],
  };
  render() {
    let { tableData } = this.state,
      {
        location: { pathname },
      } = this.props;
    return (
      <div className="theme">
        <h2 className="theme_title">所有主题</h2>
        <div className="theme_content">
          <div className="actions">
            <Row>
              <Col span={18}>
                <Row gutter={40}>
                  <Col span={9}>
                    <SearchInput placeholder="搜索集群名称或id" />
                  </Col>
                  <Col span={15}>
                    <div className="switch_box">
                      <SwitchBtn label="隐藏内部主题" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                <div className="add_theme_box">
                  <Link to={`${pathname}/add`}>
                    <Button type="primary" icon="plus">
                      新增主题
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
          <Table dataSource={tableData} bordered>
            <Column
              title="主题名称"
              dataIndex="name"
              align="center"
              render={(text, record) => (
                <Link to={`${pathname}/details?theme_name=${text}`}>
                  {text}
                </Link>
              )}
            />
            <ColumnGroup title="有效性">
              <Column align="center" title="复制分区" dataIndex="copy_area" />
              <Column
                align="center"
                title="非同步跟随者"
                dataIndex="async_follower"
              />
              <Column
                align="center"
                title="非同步观察者"
                dataIndex="async_observer"
              />
            </ColumnGroup>
            <ColumnGroup title="吞吐量">
              <Column
                align="center"
                title="字节/秒 生产"
                dataIndex="production"
              />
              <Column align="center" title="字节/秒 消费" dataIndex="consume" />
            </ColumnGroup>
          </Table>
        </div>
      </div>
    );
  }
}

export default Theme;
