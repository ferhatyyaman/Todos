// Components
import { type } from 'os';
import React, { useState } from 'react'

// Types
type Props = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number | readonly string[] | undefined;
    type: string;
    className:string;
}

export default function Input(props:Props) {
  return (
    <div className="">
        <input type={props.type} required value={props.value} onChange={props.handleChange} className={`${props.className} border border-blue-400 appearance-none rounded  p-1 focus focus:border-blue-600 focus:outline-none active:outline-none active:border-blue-600}`}></input>

    </div>
  )
}