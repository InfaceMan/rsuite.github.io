<!--start-code-->

```js
/**
 * import fakeData from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/components/table/data/users.js
 */

const DateCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>{rowData[dataKey].toLocaleString()}</Cell>
);

const NameCell = ({ rowData, dataKey, ...props }) => {
  const speaker = (
    <Popover title="Description">
      <p>
        <b>Name:</b> {`${rowData.firstName} ${rowData.lastName}`}{' '}
      </p>
      <p>
        <b>Email:</b> {rowData.email}{' '}
      </p>
      <p>
        <b>Company:</b> {rowData.companyName}{' '}
      </p>
      <p>
        <b>Sentence:</b> {rowData.sentence}{' '}
      </p>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{rowData[dataKey].toLocaleString()}</a>
      </Whisper>
    </Cell>
  );
};

const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 44,
        height: 44,
        background: '#f5f5f5',
        borderRadius: 22,
        overflow: `hidden`,
        display: 'inline-block'
      }}
    >
      <img src={rowData[dataKey]} width="44" />
    </div>
  </Cell>
);

const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: '46px' }}>
      <Checkbox
        value={rowData[dataKey]}
        inline
        onChange={onChange}
        checked={checkedKeys.some(item => item === rowData[dataKey])}
      />
    </div>
  </Cell>
);

const EmailCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <a href={`mailto:${rowData[dataKey]}`}>{rowData[dataKey]}</a>
  </Cell>
);

const ActionCell = ({ rowData, dataKey, ...props }) => {
  function handleAction() {
    alert(`id:${rowData[dataKey]}`);
  }

  return (
    <Cell {...props}>
      <a onClick={handleAction}> Edit </a>
      <Divider vertical />
      <a onClick={handleAction}> Remove </a>
    </Cell>
  );
};

const data = fakeData.filter((v, i) => i < 8);
class CustomColumnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedKeys: [],
      data
    };
    this.handleCheckAll = this.handleCheckAll.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheckAll(value, checked) {
    const checkedKeys = checked ? data.map(item => item.id) : [];
    this.setState({
      checkedKeys
    });
  }
  handleCheck(value, checked) {
    const { checkedKeys } = this.state;
    const nextCheckedKeys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter(item => item !== value);

    this.setState({
      checkedKeys: nextCheckedKeys
    });
  }
  render() {
    const { data, checkedKeys } = this.state;

    let checked = false;
    let indeterminate = false;

    if (checkedKeys.length === data.length) {
      checked = true;
    } else if (checkedKeys.length === 0) {
      checked = false;
    } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
      indeterminate = true;
    }

    return (
      <div>
        <Table height={420} data={data}>
          <Column width={50} align="center">
            <HeaderCell style={{ padding: 0 }}>
              <div style={{ lineHeight: '40px' }}>
                <Checkbox
                  inline
                  checked={checked}
                  indeterminate={indeterminate}
                  onChange={this.handleCheckAll}
                />
              </div>
            </HeaderCell>
            <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={this.handleCheck} />
          </Column>
          <Column width={80} align="center">
            <HeaderCell>Avartar</HeaderCell>
            <ImageCell dataKey="avartar" />
          </Column>

          <Column width={160}>
            <HeaderCell>First Name</HeaderCell>
            <NameCell dataKey="firstName" />
          </Column>

          <Column width={300}>
            <HeaderCell>Email</HeaderCell>
            <EmailCell dataKey="email" />
          </Column>

          <Column width={200}>
            <HeaderCell>Action</HeaderCell>
            <ActionCell dataKey="id" />
          </Column>
        </Table>
      </div>
    );
  }
}

ReactDOM.render(<CustomColumnTable />);
```

<!--end-code-->

Depending on your business scenario, you can define what you want to display in a cell, such as displaying a picture, like adding a few buttons, or displaying a text box that you can customize, and simply redefining the `Cell` component.

For example, display a picture, define a `Imagecell` component:

```js
const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);
```

Use:

```html
<Column width={200} >
    <HeaderCell>Avartar</HeaderCell>
    <ImageCell dataKey="avartar" />
</Column>
```

For example, to format a date, define a `DateCell` component:

```js
const DateCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>{rowData[dataKey].toLocaleString()}</Cell>
);
```

Use:

```html
<Column width={200} >
    <HeaderCell>Action</HeaderCell>
    <DateCell dataKey="date" />
</Column>
```

---

**Custom row height**

If you need to define row heights based on the content of your data in practical applications, you can use the following methods:

```html
<Table
    onRerenderRowHeight={(rowData) => {
      if (rowData.firstName === 'Janis') {
        return 30;
      }
    }}
  >
...
</Table>
```
