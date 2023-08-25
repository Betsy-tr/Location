import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendrier() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar className={'card w-full bg-accent text-black font-serif text-2xl'} onChange={onChange} value={value} />
    </div>
  );
}

export default Calendrier