import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const array = ['item1', 'item2', 'item3'];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>;

  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello('Hello')}</h3>
      <h3>{/* コメント */}</h3>
      {<h3>Hello JSX</h3>}
      {jsx}
    </div>
  )
}
export default Expression;
