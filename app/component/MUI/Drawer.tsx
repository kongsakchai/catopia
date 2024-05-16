'use client';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Image from 'next/image';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DrawerExample({ openDrawer, setOpenDrawer }: any) {

    const router = useRouter();

    const [notification, setNotification] = useState<any[]>([]);

    const toggleDrawer = (state: boolean) => () => {
        setOpenDrawer(state);
    };

    useEffect(() => {
        getNotification();
    }, []);

    const getNotification = async () => {
        try {
            const response = await axios.get('/api/user/noti', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.status === 200) {
                setNotification(response.data.data);
            }

        } catch (error) {
            console.log('Error : ', error);
        }
    }

    // console.log('notification : ', notification);

    function formatThaiDate(dateString : string) {
        const date = new Date(dateString);
      
        const day = new Intl.DateTimeFormat('th-TH', { day: '2-digit' }).format(date);
        const month = new Intl.DateTimeFormat('th-TH', { month: 'long' }).format(date);
        const year = (date.getFullYear() + 543).toString().slice(-2); // Buddhist year in short format
        const time = new Intl.DateTimeFormat('th-TH', { hour: '2-digit', minute: '2-digit' }).format(date).replace(':', '.');
      
        return `${day} ${month} ${year}  • ${time}`;
      }

    return (
        <>
            <Drawer
                anchor="bottom"
                open={openDrawer}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        borderRadius: '8px 8px 0px 0px'
                    }
                }}
            >
                <List>
                    <div className='flex flex-col w-full h-full'>
                        <button onClick={toggleDrawer(false)} className='flex justify-end mr-2'>
                            <Image
                                src='/close.svg'
                                width={24}
                                height={24}
                                alt='Notification-btn'
                            />
                        </button>
                        <h1 className='text-center text-black01 text-2xl not-italic font-bold leading-10'>การแจ้งเตือน</h1>
                        {notification && (
                            notification.map((noti: any, index: number) => (
                                <div key={index} className='flex flex-col w-full px-6 py-4 mt-4 items-start justify-center gap-2 border-b-[1px] border-solid border-textfield'>
                                    <div className='flex w-full justify-between items-center'>
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-black01 text-base not-italic font-bold leading-6'>{noti.name} ({noti.appointment})</span>
                                            <span className='text-black01 text-base not-italic font-bold leading-6'>{formatThaiDate(noti.appointmentDate)}</span>
                                        </div>
                                        <button type='button' onClick={() => router.push(`/main/profile/detail_treatment/${noti.catID}/${noti.id}`)}>
                                            <Image
                                                src="/aboutcat-btn.svg"
                                                width={24}
                                                height={24}
                                                alt="About cats"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </List>
            </Drawer>
        </>
    );
}
