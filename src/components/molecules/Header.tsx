// Components
import CreateList from "../molecules/CreateList"
// Types
type Props = {}

export default function Header({}:Props) {
  return (
    <div className="">
                        
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="#pablo"
                    >
                    Todo
                    </a>
                    
                </div>
                </div>
                </nav>

                  
    </div>
    
    )
  }