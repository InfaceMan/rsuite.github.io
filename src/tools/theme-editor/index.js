import React from 'react';
import MonacoEditor from 'react-monaco-editor';

import { Content, Row, Col, Navbar, Nav } from '../../rsuiteSource';
import PreviewComponents from './PreviewComponents';
import defaultCode from './defaultCode';

const options = {
  selectOnLineNumbers: true
};

const getEditorSize = () => {
  return {
    width: document.documentElement.clientWidth / 2,
    height: document.documentElement.clientHeight
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaultCode,
      editorSize: getEditorSize()
    };
  }
  editorDidMount(editor, monaco) {
    editor.focus();
  }

  render() {
    const { code, editorSize } = this.state;

    return (
      <Content>
        <Row>
          <Col xs={12}>
            <div className="theme-editor">
              <Navbar appearance="inverse" className="theme-editor-navbar">
                <Navbar.Body>
                  <Nav>
                    <Nav.Item>Reset</Nav.Item>
                    <Nav.Item>Run</Nav.Item>
                  </Nav>
                </Navbar.Body>
              </Navbar>
              <MonacoEditor
                {...editorSize}
                value={code}
                options={options}
                language="less"
                theme="vs-dark"
                editorDidMount={this.editorDidMount}
              />
            </div>
          </Col>
          <Col xs={12}>
            <PreviewComponents />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default App;
