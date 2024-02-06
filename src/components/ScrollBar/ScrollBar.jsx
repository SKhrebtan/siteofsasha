import { useState } from "react"
import { ReactComponent as ArrowDown } from '../../img/arrowdown.svg';
import {ReactComponent as GearSvg} from '../../img/gear.svg'
export const SideNavBar = () => {
    const [showBar, setShowBar] = useState(false);
    const [clickOnOpen, setClickOnOpen] = useState(false);
    const [modal, setModal] = useState(false)
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
    return (
        <div
            onClick={()=> !showBar && setShowBar(true)}
            onMouseEnter={() => !clickOnOpen && setShowBar(true)}
            onMouseLeave={() => {
                if (clickOnOpen || modal) return;
                setShowBar(false)
                setModal(false)
            }}
            className={`fixed left-0 top-[40%] z-50  border-l-0 h-[135px] rounded-r-md bg-cyan-400 ${!showBar?'w-[10px]':'w-[42px]'} flex flex-col justify-center items-center`}>
           {showBar ? <><button
                type='button'
                onClick={scrollToTop}
                className='w-[100%] h-[45px] hover:bg-cyan-700'
            >
                <ArrowDown
                    width={30}
                    height={30}
                    className='rotate-180 w-[100%] h-[42px]'
                />
            </button>
                <GearSvg
                    className='w-[100%] h-[45px] hover:bg-cyan-700'
                    onClick={() => {
                        setModal(!modal)
                    }}
                />
            <button
                type='button'
                onClick={scrollToBottom}
                className='w-[100%] h-[45px] hover:bg-cyan-700'
            >
  <ArrowDown
                    
                    height={30}
                    className='w-[100%] h-[42px]'
                />
                </button></> :
                <button
                type='button'
                className='w-[100%] h-[60px]'
            >
                <ArrowDown
                    width={20}
                    height={30}
                    className='-rotate-90 w-[100%] h-[42px]'
                />
            </button>}                 
            {modal && showBar && <div className='flex flex-col items-start absolute w-[200px] left-[43px] bg-gray-400 rounded-sm'>
                <button
                    onClick={() => {
                        setShowBar(false)
                        setModal(false)
                        setClickOnOpen(true)
                    }}
                    className="h-[30px] hover:text-zinc-600"
                    type='button'>
                    Показувати по кліку
                </button>
                <button
                    className="h-[30px] hover:text-zinc-600"
                    onClick={() => {
                        setClickOnOpen(false)
                        setShowBar(false)
                        setModal(false)
                        
                    }}
                    type='button'>
                    Показувати по наведенню
                </button>
            </div>}
            </div>
    )
}
 //<div
//             onMouseEnter={() => setShowBar(true)}
//             onMouseLeave={()=>setShowBar(false)}
//             className="fixed left-0 top-[40%] z-50 w-[10px] border-l-0 h-[135px] rounded-r-md bg-cyan-400 hover:w-[42px] hover:justify-between flex flex-col justify-center items-center">
//            {showBar ? <><button
//                 type='button'
//                 onClick={scrollToTop}
//                 className='w-[100%] h-[45px] hover:bg-cyan-700'
//             >
//                 <ArrowDown
//                     width={30}
//                     height={30}
//                     className='rotate-180 w-[100%] h-[42px]'
//                 />
//             </button>
//                 <GearSvg
//                     className='w-[100%] h-[45px] hover:bg-cyan-700'
//                 />
//             <button
//                 type='button'
//                 onClick={scrollToBottom}
//                 className='w-[100%] h-[45px] hover:bg-cyan-700'
//             >
//   <ArrowDown
                    
//                     height={30}
//                     className='w-[100%] h-[42px]'
//                 />
//                 </button></> :
//                 <button
//                 type='button'
//                 className='w-[100%] h-[60px]'
//             >
//                 <ArrowDown
//                     width={20}
//                     height={30}
//                     className='-rotate-90 w-[100%] h-[42px]'
//                 />
//             </button>}                 
            
//             </div>
