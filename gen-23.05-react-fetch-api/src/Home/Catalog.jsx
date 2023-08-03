import Card from "./Card";
const Catalog = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 px-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12 pb-10">
        {data.map((item) => (
          <div className="h-full" key={item.id}>
            <Card productId={item.id} name={item.namaProduct} price={item.hargaProduct} desc={item.KeteranganProduct} image={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
