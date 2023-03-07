// Components

// Types
type Props = {
  handleClick?: () => void;
  text: string;
  className:string;
}

export default function Button(props:Props) {
  return (
    <div className="">
      <button  onClick={props.handleClick}  className={`${props.className} bg-blue-500 hover:bg-blue-700 rounded text-white py-1 px-4 h-10 }`}>
     
      {props.text}
    </button>

    </div>
  )
}