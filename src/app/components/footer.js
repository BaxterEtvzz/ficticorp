'use client';
export default function Footer() {
    return (
        <footer className="h-15 rounded-lg shadow m-4 bg-white sticky bottom-0">
            <div className="flex flex-wrap items-center w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" className="text-white transition ease-in-out delay-150 shadow-lg shadow-rose-500/50 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 rounded-lg font-medium text-sm px-5 py-2.5 text-center me-4 mb-2">
                    Crear usuario
                </button>
                <button type="button" className="text-white transition ease-in-out delay-150 shadow-lg shadow-rose-500/50 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 rounded-lg font-medium text-sm px-5 py-2.5 text-center me-1 mb-2  ">
                    Visualizar CSV
                </button>
            </div>
        </footer>
    );
}