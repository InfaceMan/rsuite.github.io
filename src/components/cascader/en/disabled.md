### Disabled

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province.js
 */

const instance = (
  <div>
    <Cascader data={data} valueKey="name" labelKey="name" disabled />
    <hr />
    <p>Disabled Option</p>
    <Cascader
      data={data}
      valueKey="name"
      labelKey="name"
      defaultValue={'虹口区'}
      disabledItemValues={['北京', '广东', '天津']}
    />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
