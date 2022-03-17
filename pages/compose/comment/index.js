/*
    userName: displayName,
    userId: uid,
    avatar: photoURL, 
 */
    
import 'firebase/compat/storage';  


import Button from "components/Button";
import useUser from "components/hooks/useUser";
import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { addComments, uploading } from "../../../firebase/client";
import Avatar from "components/Avatar";


const COMPOSE_STATE = {
  USER_NOT_KNOW: "user not know",
  LOADING: "loading comment",
  SUCCES: "succes comment",
  ERROR: "error in comment process",
};

const DRAG_AND_DROP = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};




export default function ComposeComment() {


  const userInfo = useUser(); // devuelve la info del usuario
  

// estados texto 
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_KNOW);

  const router = useRouter();

// estados DRAG AND DROP

    const [drag , setDrag] = useState(DRAG_AND_DROP.NONE);

// manejo del Task del file
    const [task , setTask] = useState(null);
    const [imgURL , setImgURL] = useState(null);

// "on" de firebase (noProgress, onError, onComplete) para el file


    
useEffect(() => {
    if (task) {
    const onProgress = () => {}
    const onError = () => {}
    const onComplete = () => {
        
        task.snapshot.ref.getDownloadURL().then(setImgURL) //esta promesa me da el url por eso de esta forma llamo directamente al setImg y lo coloco en el useState

    }

    task.on("state_changed", onProgress, onError, onComplete)
   
    }
}, [task])
    

// Manejo el texto 

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
   
  };

  const handleForm = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATE.LOADING);
    addComments({
      content: message,
      userName: userInfo.userName,
      avatar: userInfo.avatar,
      userId: userInfo.userId,
      img:imgURL
    })
      .then(() => {
        router.push("/Home");
      })
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATE.ERROR);
      });
  };


  //DRAG AND DROP

  const handleDragEnter = (event) => {
      event.preventDefault()
      setDrag(DRAG_AND_DROP.DRAG_OVER)
  }

  const handleDragLeave = (event) => {
    event.preventDefault()  
    setDrag(DRAG_AND_DROP.NONE)
  }
  

  const handleDrop = (event) => {
    event.preventDefault();
    setDrag(DRAG_AND_DROP.NONE)
    const file = event.dataTransfer.files[0]

    const newtask = uploading(file)
    setTask(newtask)

    }
  

  return (
    <>
     
        <Head>
          <title>Leave your comment</title>
        </Head>
        <section className="form-container">
         {userInfo && (

            <section className="avatar-container">
              <Avatar src={userInfo.avatar}/>
            </section>
         )
          }
       
        <form onSubmit={handleForm}>
            <textarea
              placeholder="What´s on your mind?. Drag and drop a picture if you wish!"
              value={message}
              onChange={handleChange}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={ handleDrop }

            ></textarea>
            {imgURL && 
            <section className="remove-img">
              <button
              onClick={()=>setImgURL(null)}
              >x</button>
              <img src={imgURL} /> 
            </section>}
            <div>
              <Button
                disabled={
                  message.length === 0 && !imgURL || status === COMPOSE_STATE.LOADING 
                }
              >
                {" "}
                Comment
              </Button>
          </div>
        </form>
        </section>
    

      <style jsx>
        {`
              
        .avatar-container {
          padding-top: 20px;
          padding-left: 10px;
          
         
        }

        .form-container {
          display: flex;
          align-items:flex-start;
        }

          button{
              position:absolute;
              right:15px;
              background:rgb(255, 99, 71, 0.3 );
              color:white;
              top:15px;
              border-radius:999px;
              width:25px;
              height: 25px;



          }
          
              
          div {
            padding: 15px;
          }

          form {
              padding: 10px;
              width:100%
            
          }

          img{
              border-radius: 10px;
              height: auto;
              width:100%
          }

          .remove-img{
              position:relative
          }

          textarea {
            border: ${drag === DRAG_AND_DROP.DRAG_OVER
                ?"3px dashed #09f"
                :"3px solid transparent"} ;
            border-radius: 7px;    
            font-size: 21px;
            min-height: 200px;
            outline: 0;
            padding: 15px;
            resize: none;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
