import spinner from "./spinner.svg"
import "./spinner.css"

export const Spinner =()=>{
    return (
        <div className="spinner">
          <img className="spinner-img" alt="spin" src={spinner} />
        </div>
    )
}