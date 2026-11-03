import { useState, useRef, useEffect } from 'react'
import headerImg1 from '@/shared/assets/img/headerImg1.png';
import achievementImg1 from '@/shared/assets/img/achievementImg1.png'
import achievementImg2 from '@/shared/assets/img/achievementImg2.png'
import achievementImg3 from '@/shared/assets/img/achievementImg3.png'
import { createContext } from 'react'
export const MyContext = createContext(null);


export function MyContextProvider ({children}){

  return (
    <MyContext.Provider value={{ headerImg1,achievementImg1, achievementImg2, achievementImg3 }}>
      {children}
    </MyContext.Provider>
  );
}



