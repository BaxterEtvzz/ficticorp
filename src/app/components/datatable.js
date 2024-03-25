import { getInfo, createUser, deleteUser } from '../api/users/sheets';

export default async function Datatable() {
    const data = await getInfo();
    function displayInfo(data) {
        data.forEach((element) => {
            console.log(element['id']);
            const id = element['id'];
            let timestamp = element['timestamp'];
            // let name = element['name'];
            let paternal_surname = element['paternal_surname'];
            let maternal_surname = element['maternal_surname'];
            let email = element['email'];
            let phone = element['phone'];
            let charge = element['charge'];
            let area = element['area'];
            let salary = element['salary'];
            return (
                <>
                    <div><p>{element['name']}</p></div>
                </>
            )
        })
    };
    return displayInfo(data);
}

