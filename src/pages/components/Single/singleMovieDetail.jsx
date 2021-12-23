import "./Style.css";

export default function MovieSinglePage({
  Title,
  Img,
  Description,
  Time,
  Genres,
  Actors,
}) {
  return (
    <div>
      <div className="flex justify-between  w-full sticky top-0  ">
        <div className="backIcon iconBackground w-24 h-24 "></div>

        <div className="heartIcon iconBackground w-24 h-24"></div>
      </div>

      <div>
        <img src={Img} alt={Title} className=" w-auto movieIMG" />
      </div>
      <div className="h-3/4 background mt-60 ">
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl font-bold mt-24 ">{Title}</h2>
          <h6>{Time}</h6>
          <div>Stars</div>
        </div>


        <div className="m-5">
          <div className="">
            <div>
              <div>gUanre</div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-2xl font-bold">Summary</h1>
            <p className="mt-4">{Description}</p>
          </div>

          <div className="mt-5">
            <h1 className="text-2xl font-bold">Cast</h1>
            <div className="mt-3 flex ">
              <img src="" alt="" />
              <p>Tom Hordy</p>
              <p>Capitan America</p>
              
            </div>
          </div>

    
          <div className="mt-5 sticky bottom-0">
              
            <button>Buy Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}
