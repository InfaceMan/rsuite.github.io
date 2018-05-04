import React from 'react';
import {
  Container,
  Content,
  Row,
  Col,
  Icon,
  ButtonToolbar,
  Button,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Toggle,
  Slider,
  Nav,
  Input,
  Panel,
  Navbar,
  Message,
  Dropdown,
  Steps,
  DatePicker
} from '../../rsuiteSource';

class PreviewComponents extends React.Component {
  render() {
    return (
      <Panel header={<h3>Preview</h3>}>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a href="#" className="navbar-brand logo">
              RSUITE
            </a>
          </Navbar.Header>
          <Navbar.Body>
            <Nav>
              <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                Home
              </Nav.Item>
              <Nav.Item eventKey="2">News</Nav.Item>
              <Nav.Item eventKey="3">Products</Nav.Item>
              <Dropdown title="About">
                <Dropdown.Item eventKey="4">Company</Dropdown.Item>
                <Dropdown.Item eventKey="5">Team</Dropdown.Item>
                <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
              </Dropdown>
            </Nav>
            <Nav pullRight>
              <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
        <hr />
        <ButtonToolbar>
          <Button appearance="default">Default</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="link">Link</Button>
          <Button appearance="ghost">Ghost</Button>
        </ButtonToolbar>
        <hr />
        <CheckboxGroup name="check" defaultValue={['1', '2']} inline>
          <Checkbox value="1">Javascript</Checkbox>
          <Checkbox value="2">CSS</Checkbox>
          <Checkbox value="3">HTML</Checkbox>
        </CheckboxGroup>
        <hr />
        <RadioGroup name="radio" defaultValue="1" inline>
          <Radio value="1">Front End</Radio>
          <Radio value="2">Back End </Radio>
        </RadioGroup>
        <hr />
        <Input />
        <hr />
        <DatePicker />
        <hr />
        <Toggle defaultChecked />
        <hr />
        <Slider progress defaultValue={50} />
        <hr />
        <Nav appearance="subtle" activeKey="home">
          <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
            Home
          </Nav.Item>
          <Nav.Item eventKey="news">News</Nav.Item>
          <Nav.Item eventKey="solutions">Solutions</Nav.Item>
          <Nav.Item eventKey="products">Products</Nav.Item>
          <Nav.Item eventKey="about">About</Nav.Item>
        </Nav>

        <hr />

        <Steps current={1}>
          <Steps.Item title="Finished" />
          <Steps.Item title="In progress" />
          <Steps.Item title="Waiting" />
          <Steps.Item title="Waiting" />
        </Steps>

        <hr />
        <Message showIcon type="info" description="Informational" />
        <Message showIcon type="success" description="Success" />
        <Message showIcon type="warning" description="Warning" />
        <Message showIcon type="error" description="Error" />
      </Panel>
    );
  }
}

export default PreviewComponents;
