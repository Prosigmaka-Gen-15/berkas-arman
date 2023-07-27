export default function Content() {
  return (
    <div>
      <Button dari="Headphone Type" />
    </div>
  );
}
function Button(props) {
  return <button className={"text-white bg-green-500 text-center justify-center p-2 rounded-xl hover:bg-green-700"}>{props.dari}</button>;
}
