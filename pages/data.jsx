import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import FormQuestion from '../component/form/formQuestion';
import Navbar from '../component/navbar';

export default function User() {
    const [user, setUser] = useState('')
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        console.log(JSON.parse(localStorage.getItem('user')))
    }, [])

    return (
        <div className="text-center">
            <Navbar></Navbar>
            <div className="w-full mt-20">
                <FormQuestion />
            </div>
            <div className="text-xs text-red-400">
                Anda diperkenankan untuk mengisi lebih dari satu inputan
            </div>
        </div >
    )
}