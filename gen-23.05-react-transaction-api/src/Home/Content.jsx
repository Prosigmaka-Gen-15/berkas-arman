export default function Content() {
  return (
    <div className="flex mx-auto justify-between my-4">
      <div className="flex-col lg:gap-2 items-center">
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
  return <button className={"text-white bg-gray-500 text-center rounded-xl hover:bg-green-700 ml-3 my-2 px-2 "}>{props.coba}</button>;
}
