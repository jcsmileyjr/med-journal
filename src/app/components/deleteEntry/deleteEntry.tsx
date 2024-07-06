"use client"
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Delete from '../../images/delete.png';

const DeleteEntry = ({id}: {id: string}) => {
    const router = useRouter();
console.log("DeleteEntry id", id);
    const [toggleUI, setToggleUI] = useState(false);

    const deleteEntry = async () => {
    
    }

    return (
        <section>
            {!toggleUI && 
                <button onClick={() => setToggleUI(true)} className='flex justify-center items-center gap-4 mt-8 md:mt-12 w-2/3 md:w-1/3 m-auto border-2 border-rose-600 rounded'>
                    <Image src={Delete} className='h-8 p-2' alt="" width={20} height={50} style={{width:'auto' }} />
                    <p className='text-black text-base'>Click to delete</p>
                </button>
            }
            {toggleUI &&
                <div>
                    <button onClick={() => console.log("works")} className='flex justify-center items-center gap-4 mt-2 w-2/3 md:w-1/3 m-auto border-2 border-rose-600 rounded'>
                        <Image src={Delete} className='h-8 p-2' alt="" width={20} height={50} style={{width:'auto' }} />
                        <p className='text-red-800 text-base font-bold '>Confirm Delete</p>
                    </button>
                    <button onClick={() => setToggleUI(false)} className='flex justify-center items-center gap-4 mt-2 w-2/3 md:w-1/3 m-auto border-2 border-rose-600 rounded text-black text-base font-bold'>
                        Cancel
                    </button>

                </div>
            }
        </section>
    )
}

export default DeleteEntry;