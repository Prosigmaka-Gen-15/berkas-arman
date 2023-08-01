import Card from "./Card";
const Catalog = () => {
  const data = [
    {
      id: 1,
      namaProduct: "wireless Earnuds",
      hargaProduct: "159.000",
      KeteranganProduct: "Pariatur labore mollit aute deserunt ex.",
      img: "/src/img/Wireless Earbuds.jpg",
    },
    {
      id: 2,
      namaProduct: "AirPods Max",
      hargaProduct: "300.000",
      KeteranganProduct: "Pariatur labore mollit aute deserunt ex.",
      img: "/src/img/pink.jpg",
    },
    {
      id: 3,
      namaProduct: "Bose BT Earphones",
      hargaProduct: "2.000.000",
      KeteranganProduct: "Pariatur labore mollit aute deserunt ex.",
      img: "/src/img/bose bt.jpg",
    },
    {
      id: 4,
      namaProduct: "VIVEFOX Headphones",
      hargaProduct: "255.000",
      KeteranganProduct: "Pariatur labore mollit aute deserunt ex.",
      img: "/src/img/vivefox.jpg",
    },
    {
      id: 5,
      namaProduct: "JBL Tune",
      hargaProduct: "940.000",
      KeteranganProduct: "Pariatur labore mollit aute deserunt ex.",
      img: "/src/img/jbl tune.jpg",
    },
    {
      id: 6,
      namaProduct: "TAGRY Bluetooth",
      hargaProduct: "549.000",
      KeteranganProduct: "Pariatur labore mollit aute deserunt ex.",
      img: "/src/img/tagry.jpg",
    },
    {
      id: 7,
      namaProduct: "Monster MNFLEX",
      hargaProduct: "399.000",
      KeteranganProduct: "Pariatur labore mollit aute deserunt ex.",
      img: "/src/img/monster.jpg",
    },
    {
      id: 8,
      namaProduct: "MPOW",
      hargaProduct: "199.000",
      KeteranganProduct: "Pariatur labore mollit aute deserunt ex.",
      img: "/src/img/mpow.jpg",
    },
  ];
  console.log(data);
  return (
    <div className="flex flex-col gap-6 px-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12 pb-10">
        {data.map((item) => (
          <div className="h-full" key={item.id}>
            <Card name={item.namaProduct} price={item.hargaProduct} desc={item.KeteranganProduct} image={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
