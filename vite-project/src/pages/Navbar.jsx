import styles from '../css/Navbar.module.css';
import { Button } from '@/components/ui/button';
import { MdEdit } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { openPopup } from '@/redux/popupSlice';


export function Navbar(){

    const dispatch = useDispatch();

    const {isOpen} = useSelector( (state) => state.popup );


    return (
        <div className="bg-slate-800 text-white p-4 flex justify-between items-center">

            <div className={styles.firstDiv}>
                 <Button variant="outline">Save</Button>
                 <Button variant="outline">Exit</Button>
                <p>Unsave Changes</p>
            </div>
            <div className={styles.middleDiv}>
                <p>New Template</p>
                <button>
                    <MdEdit size={20} />
                </button>
            </div>
            <div className={styles.lastDiv}>
                <Button variant="destructive" onClick={() => dispatch(openPopup())} >Review and send</Button>
            </div>
            
        </div>
    )
}