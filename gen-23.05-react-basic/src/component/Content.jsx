export default function Content() {
  return (
    <div className="flex mx-auto justify-between gap-2 lg:gap-0">
      <div className="flex-wrap lg:flex-row items-center">
        <Button coba="Headphone Type" />
        <Button coba="Price" />
        <Button coba="Review" />
        <Button coba="Color" />
        <Button coba="Material" />
        <Button coba="Offer" />
        <Button coba="All filters" />
      </div>
      <div>
        <Button coba="Sort by" />
      </div>
    </div>
  );
}
function Button(props) {
  return <button className={"text-white bg-gray-500 text-center rounded-xl hover:bg-green-700 ml-3 px-2"}>{props.coba}</button>;
}
