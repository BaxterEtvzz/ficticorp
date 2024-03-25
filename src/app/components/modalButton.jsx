export default function ModalButton() {
    return (
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" className="text-white transition ease-in-out delay-150 shadow-lg shadow-rose-500/50 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 rounded-lg font-medium text-sm px-5 py-2.5 text-center me-4 mb-2">
            Crear usuario
        </button>
    )
}