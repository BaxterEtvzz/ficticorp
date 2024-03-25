import Image from "next/image";
import Modal from './components/modal';
import Datatable from "./components/datatable";
import Footer from "./components/footer";

import { getInfo, createUser, deleteUser } from '../app/api/users/sheets';

export default async function Home() {

  const data = await getInfo();
  // console.log('data: ', data);

  // const data2 = await createUser();
  // console.log(data2);

  // const data3 = await deleteUser();
  // console.log(data3);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounde d-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-rose-200 after:via-rose-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-rose-700 before:dark:opacity-10 after:dark:from-rose-900 after:dark:via-[#ff1601] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          src="/fictiCorp.svg"
          alt="FictiCorp Logo"
          className=""
          width={200}
          height={37}
          priority
        ></Image>
      </div>
      <div className="container w-full md:w-4/5 xl:w-3/5 mx-auto px-2">
        <Datatable />
      </div>
      <Footer />
    </main>
  );
}
