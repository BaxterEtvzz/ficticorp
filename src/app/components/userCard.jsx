export default function UserCard({ name, paternal_surname, maternal_surname, email, phone, charge, area, salary }) {
    console.log(name);
    return (
        <div class="w-9/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow md::w-3/4">
            <div class="flex flex-col items-center pb-10 mt-6 justify-center">
                <h5 class="mb-1 text-center text-medium font-medium text-gray-900">{name + ' ' + paternal_surname + ' ' + maternal_surname}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{email}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{phone}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{charge}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{area}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{salary}</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</a>
                    <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Eliminar</a>
                </div>
            </div>
        </div>
    )
}