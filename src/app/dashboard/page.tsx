
import Image from 'next/image'
import React, { FormEvent, useState, ChangeEvent, Component } from 'react'
import {MyComponent} from '@/app/dashboard/action';

export default function Home() {


  
    

    return (
        <div className="flex flex-col items-center justify-between p-44 space-y-3 text-xl">
            <h1>ข้อมูลการแบบสำรวจ</h1>
            <h2>จำนวนสรุป</h2>
            <MyComponent/>
        </div>

    )
}
