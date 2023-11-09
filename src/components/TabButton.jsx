export default function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log('Hello');
  }
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
      {/* 如果在onClick中調用handleClick()，會變成有這段代碼就直接執行而不是點擊它後執行 */}
      {/* <button onClick={handleClick()}>{props.children}</button> */}
    </li>
  );
}
