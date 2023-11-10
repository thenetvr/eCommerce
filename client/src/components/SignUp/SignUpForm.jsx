import { useReducer } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { urlAPI } from "../../utils/urls";

export default function SignUpForm() {
  const fieldText = "w-64 text-xl bg-slate-50 text-black p-1 rounded";
  const fieldEl = "p-3";
  const fieldLabel = "py-3";
  const notify = () => {
    toast.success("Sign In Successful!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      username: "",
      password: "",
    }
  );

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    // check if all fields are entered
    for (const key in state) {
      if (state[key] === "") {
        console.log("please fill in the username and password fields");
        return;
      }
    }
    let configHeaders = {
      headers : {
        'username': state.username,
        'password': state.password,

      }
    }

    axios.get(urlAPI + "/signUp", {
      headers :{
      'username': state.username,
      'password': state.password,
      }
    })
      .then( (response)=> {
        console.log(response.data);
        window.localStorage.setItem("signUpToken",response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    notify();
    console.log(localStorage.getItem("signUpToken"));
    console.log(state);
  };

  return (
    <div className="flex items-center flex-col">
      <div className="form w-full flex flex-wrap justify-center">
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Username</h1>
          <input
            className={fieldText}
            type="text"
            value={state.username}
            onChange={(e) => dispatch({ username: e.target.value })}
          />
        </div>
        <div className={fieldEl}>
          <h1 className={fieldLabel}>Password</h1>
          <input
            className={fieldText}
            type="password"
            value={state.password}
            onChange={(e) => dispatch({ password: e.target.value })}
          />
        </div>
        <div className="w-full flex md:justify-center justify-end p-3">
          <button
            className="bg-sky-500 px-6 py-3 rounded-md font-bold"
            onClick={handleSignUpFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
