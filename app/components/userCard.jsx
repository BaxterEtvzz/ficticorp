'use client';
import { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import EditModal from './editModal';


export default function UserCard({ id, timestamp, name, paternal_surname, maternal_surname, email, phone, charge, area, salary }) {
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit } = useForm();
    const getId = async () => {
        try {
            const idUser = id;
            const result = await fetch('api/deleteuser/', { method: 'POST', body: JSON.stringify({ idUser }) });
            location.reload();
        } catch (error) {
            console.error('Error en la solicitud', error);
        }
    }

    const onSubmit = async (formData) => {
        const values = [id, timestamp, formData.name, formData.paternal_surname, formData.maternal_surname, formData.email, formData.phone, formData.charge, formData.area, formData.salary]
        const result = await fetch('api/updateuser/', { method: 'POST', body: JSON.stringify({ values }) });
        setShowModal(false);
        location.reload();
    }
    return (
        <div className="w-9/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow md::w-3/4">
            <div className="flex flex-col items-center pb-10 mt-6 justify-center">
                <h5 className="mb-1 text-center text-medium font-medium text-gray-900">{name + ' ' + paternal_surname + ' ' + maternal_surname}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{phone}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{charge}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{area}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{salary}</span>
                <div className="flex mt-4 md:mt-6">
                    <button onClick={() => setShowModal(true)} href="#" className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300">Editar</button>
                    <button onClick={getId} href="#" className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 py-2 px-4 ms-2 text-sm font-medium text-white focus:outline-none bg-rose-500 rounded-lg border border-gray-200 hover:bg-rose-300 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100">Eliminar</button>
                </div>
            </div>
            <EditModal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className='py-6 px-6 lg:px-8 text-left'>
                    <h3 className='text-xl font-medium text-gray-900 mb-4'>Editar usuario</h3>
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
                                    placeholder={name}
                                    {...register('name')}
                                    required
                                ></input>
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
                                    placeholder={paternal_surname}
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
                                    placeholder={maternal_surname}
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
                                    placeholder={email}
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
                                    placeholder={phone}
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
                                    placeholder={salary}
                                    required
                                    {...register('salary')}
                                />
                            </div>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="col-span-2 sm:col-span-1 text-white transition ease-in-out delay-150 shadow-lg shadow-rose-500/50 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-700 duration-300 rounded-lg font-medium text-sm px-5 py-2.5 text-center me-1 mb-2  ">
                            Confirmar
                        </button>
                    </form>
                </div>
            </EditModal>
        </div>
    )
}