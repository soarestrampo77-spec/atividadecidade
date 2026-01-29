import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-white -500 w-full h-full border-white-20 ">

       <div className="bg-amber-400 w-200 h-40 gap-20 mt-10 rounded-lg "></div>

      <div className="bg-black w-400 h-100 gap-20 flex   mt-10 justify-center items-center">
            <div className="bg-blue-600   w-100 h-80 rounded-lg">
           
                {/*imagem1 8*/}
                <Image
                src="/bruxa.jpg"
                alt="senac"
                width={400}
                height={1600}
                className="rounded"
                />
                     <h2>Pedra da Bruxa</h2>
            </div>
    


              <div className="text-lg text-green-700">
                  <div className="bg-red-600 w-100 h-80 border-black-500 rounded-lg">
                  <h1>São Thomé das Letras</h1>
                         {/*imagem1 8*/}
                <Image
                src="/bruxa.jpg"
                alt="senac"
                width={400}
                height={1600}
                className="rounded"
                />
                </div>
            </div>

              <div className="bg-orange-500 w-100 h-80 run rounded-lg" >
                       {/*imagem1 8*/}
                <Image
                src="/bruxa.jpg"
                alt="senac"
                width={400}
                height={1600}
                className="rounded"
                />
              </div>
      </div>





      <div className="bg-red-400 w-400 h-100 gap-5 flex m-10 justify-center items-center ">


        <div className="bg-blue-600  text-green-700 mt-5 w-100 h-80 rounded-lg">
          <div className="bgl-blue-200">
                   {/*imagem1 8*/}
                <Image
                src="/bruxa.jpg"
                alt="senac"
                width={400}
                height={1600}
                className="rounded"
                />
            <h1>Cidade Mística</h1>
          </div>
        </div>


        <div className="text-lg text-green-700 ">
          <div className="bg-red-600 w-100 h-80 rounded-lg">
            <h1>São Thomé das Letras</h1>
                     <Image
                src="/bruxa.jpg"
                alt="senac"
                width={400}
                height={1600}
                className="rounded"
                />
          </div>
        </div>

        <div className="bg-orange-500 w-100 h-80  rounded-lg">
                   <Image
                src="/bruxa.jpg"
                alt="senac"
                width={400}
                height={1600}
                className="rounded"
                />
        </div>


      </div>





    </div>
  );
}
