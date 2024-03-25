import UserCard from "./userCard"
import { getInfo } from '../api/users/sheets'

export default async function DisplayUsers() {
    const data = await getInfo();
    return (
        <div className="container w-full md:w-4/5 xl:w-3/5 mx-auto px-1 grid gap-6 mb-5 grid-cols-3 ">
            {data && data.map((item) => {
                console.log(item);
                return <UserCard
                    key={item.id}
                    name={item.name}
                    paternal_surname={item.paternal_surname}
                    maternal_surname={item.maternal_surname}
                    email={item.email}
                    phone={item.phone}
                    charge={item.charge}
                    area={item.area}
                ></UserCard>
            })}
        </div>
    )
};