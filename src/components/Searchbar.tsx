'use client'
import {useRouter} from 'next/navigation';
import { GoSearch } from "react-icons/go";

const Searchbar = () => {
    const router = useRouter()

    const handleSearch =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;

        if(name){
            router.push(`/list?name=${name}`)
        }
    }

    return (
        <section>
            <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
                <input type="text" name='name' placeholder="Search" className='flex-1 bg-transparent outline-none'/>
                <button className="cursor-pointer">
                <GoSearch /> 
                </button>
            </form>
        </section>
    )
}

export default Searchbar