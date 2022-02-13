import Input from "../Input.js/Input";
import '../Input.js/Input.css'
import { Formik, Form } from "formik";
import * as Yup from 'yup';
function Forms({translate, setTranslate}) {
  const validate = Yup.object({
    username:Yup.string()
      .max(15,'Must be 15 character')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
  })
  return (
      <Formik
        initialValues={{
          username:'',
          password:''
        }}
        validationSchema={validate}
      >
        {formik => (
          <div>
             <h1 className="form__title">{translate['Бесплатная регистрация']}</h1>
             {console.log(formik.values)}
             <Form>
               <Input type="text" name="username" placeholder="Username" />
               <Input type="password" name="password" placeholder="Password" />
               <button className="form__btn">{translate['Далее']}</button>
             </Form>
          </div>
           
        )

        }
      </Formik>
  )
}

export default Forms;