'use client';
import Modal from './modal'
import { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Footer() {
    const [showModal, setShowModal] = useState(false);
    const openCSV = () => {
        window.open('https://docs.google.com/spreadsheets/d/1R6YWEmEideaQAC1DaFecAE-x01-X6aYqN9jcJffahSo/edit?usp=sharing', '_blank');
    }
    const userId = Math.random().toString(36).substring(2)
    const timestamp = Math.floor(Date.now() / 1000)
    const { register, handleSubmit } = useForm();

    const onSubmit = async (formData) => {
        const values = [userId, timestamp, formData.name, formData.paternal_surname, formData.maternal_surname, formData.email, formData.phone, formData.charge, formData.area, formData.salary]
        const result = await fetch('api/createuser/', { method: 'POST', body: JSON.stringify({ values }) });
        setShowModal(false);
        location.reload();
    }

    return (
        <>
            <footer className="h-15 rounded-lg shadow m-4 bg-white sticky bottom-0">
                <div className="flex flex-wrap items-center w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <button onClick={() => setShowModal(true)} data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" className="text-white transition ease-in-out delay-150 shadow-lg shadow-rose-500/50 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 rounded-lg font-medium text-sm px-5 py-2.5 text-center me-4 mb-2">
                        Crear usuario
                    </button>
                    <button onClick={openCSV} type="button" className="text-white transition ease-in-out delay-150 shadow-lg shadow-rose-500/50 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 rounded-lg font-medium text-sm px-5 py-2.5 text-center me-1 mb-2  ">
                        Visualizar CSV
                    </button>
                </div>
            </footer>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className='py-6 px-6 lg:px-8 text-left'>
                    <h3 className='text-xl font-medium text-gray-900 mb-4'>Agregar usuario</h3>
                    <form onSubmit={handleSubmit(onSubmit)} action='#' className='space-y-6 p-4 md:p-5' id='formUser'>
                        <div className='grid gap-4 mb-4 grid-cols-2'>
                            <div className='col-span-2 sm:col-span-1'>
                                <label
                                    for='name'
                                    className='block mb-2 text-sm font-medium text-gray-900'
                                >Nombre</label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    className='bg-gray-50 border border-gray-300 text-gray-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                    placeholder='Nombre'
                                    required
                                    {...register('name')}
                                />
                            </div>
                            <div>
                                <label
                                    for='paternal_surname'
                                    className='block mb-2 text-sm font-medium text-gray-900'
                                >Apellido paterno</label>
                                <input
                                    type='text'
                                    name='paternal_surname'
                                    id='paternal_surname'
                                    className='bg-gray-50 border border-gray-300 text-gray-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                    placeholder='Apellido paterno'
                                    required
                                    {...register('paternal_surname')}
                                />
                            </div>
                            <div>
                                <label
                                    for='maternal_surname'
                                    className='block mb-2 text-sm font-medium text-gray-900'
                                >Apellido materno</label>
                                <input
                                    type='text'
                                    name='maternal_surname'
                                    id='maternal_surname'
                                    className='bg-gray-50 border border-gray-300 text-gray-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                    placeholder='Apellido materno'
                                    required
                                    {...register('maternal_surname')}
                                />
                            </div>
                            <div>
                                <label
                                    for='email'
                                    className='block mb-2 text-sm font-medium text-gray-900'
                                >Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    className='bg-gray-50 border border-gray-300 text-gray-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                    placeholder='ejemplo@email.com'
                                    required
                                    {...register('email')}
                                />
                            </div>
                            <div>
                                <label
                                    for='phone'
                                    className='block mb-2 text-sm font-medium text-gray-900'
                                >Teléfono</label>
                                <input
                                    type='number'
                                    name='phone'
                                    id='phone'
                                    className='bg-gray-50 border border-gray-300 text-gray-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                    placeholder='Teléfono'
                                    required
                                    {...register('phone')}
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label for="charge" className="block mb-2 text-sm font-medium text-gray-900 ">Puesto</label>
                                <select {...register('charge')} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option selected>Selecciona</option>
                                    <option value="Desarrollador de software">Desarrollador de software</option>
                                    <option value="Arquitecto de software">Arquitecto de software</option>
                                    <option value="Tester">Tester</option>
                                    <option value="Diseñador grafico">Diseñador gráfico</option>
                                    <option value="Analista de requerimientos">Analista de requerimientos</option>
                                </select>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label for="area" className="block mb-2 text-sm font-medium text-gray-900 ">Área</label>
                                <select {...register('area')} id="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option selected>Selecciona</option>
                                    <option value="Ventas y Marketing">Ventas y Marketing</option>
                                    <option value="Recursos Humanos">Recursos Humanos</option>
                                    <option value="Administración y Finanzas">Administración y Finanzas</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    for='salary'
                                    className='block mb-2 text-sm font-medium text-gray-900'
                                >Salario</label>
                                <input
                                    type='number'
                                    name='salary'
                                    id='salary'
                                    className='bg-gray-50 border border-gray-300 text-gray-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                    placeholder='Salario'
                                    required
                                    {...register('salary')}
                                />
                            </div>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="col-span-2 sm:col-span-1 text-white transition ease-in-out delay-150 shadow-lg shadow-rose-500/50 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 rounded-lg font-medium text-sm px-5 py-2.5 text-center me-1 mb-2  ">
                            Agregar
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
}