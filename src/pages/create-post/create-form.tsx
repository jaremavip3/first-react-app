import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { title } from "process"
import { StringLiteral } from "typescript"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import "../../pages-style/create-form.css"

interface createFormData {
  title: string
  description: string
}

export const CreateForm = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a description"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createFormData>({
    resolver: yupResolver(schema),
  })

  const postsRef = collection(db, "posts")

  const onCreateForm = async (data: createFormData) => {
    console.log(data)
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    })

    navigate("/")
  }

  return (
    <div className="form-container">
      <h1> Create a post</h1>
      <form onSubmit={handleSubmit(onCreateForm)}>
        {/* prettier-ignore */}
        <input placeholder="Title..." type="text" className="title" {...register("title")}/>
        {/* prettier-ignore */}
        <p style={{color: "red"}}>{errors.title?.message}</p>
        <textarea
          placeholder="Description..."
          className="description"
          {...register("description")}
        />
        <p style={{ color: "red" }}>{errors.description?.message}</p>
        <input type="submit" className="submit" />
      </form>
    </div>
  )
}
