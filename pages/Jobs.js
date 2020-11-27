import React, { useState, useEffect } from "react";
import * as API from "../Api/Works";
import Items from "../components/Items";
import { Container, Header, Content, List, Body, Title } from "native-base";

export default function Jobs() {
  const [jobList, setjobList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await API.getWorks();
      setjobList(res.GetJobInfo.row);
    };
    getList();
  }, []);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Find your Job!</Title>
        </Body>
      </Header>
      <Content>
        <List
          dataArray={jobList}
          renderRow={(job) => {
            return <Items key={job.JO_REGIST_NO} job={job} />;
          }}
        />
      </Content>
    </Container>
  );
}
