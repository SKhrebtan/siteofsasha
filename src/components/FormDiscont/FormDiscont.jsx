import { StyledMailSvg, StyledForm, StyledInputsBlock, StyledContainer, CssTextField, FormControlWrap } from "./FormDiscont.styled";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema } from "./validationSchema";
import axios from 'axios';

const handleSubmit = async (values) => {

  const { name, email, phone } = values;
  
   try {
    const formData = {
      name,
      email,
      phone
    }
  
    await axios.post('http://localhost:3333/api/v1/users', formData)
  } catch (error) {
    console.log(error.message)
  }

}

export const ContactForm = () => {
    const initialValues = {
    name: '',
    email: '',
    number: '',
  };
    return (
        <>
            <StyledMailSvg />
            <StyledContainer>
        <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
                    <StyledForm as={Form}>
                        
                        <StyledInputsBlock>
                            <FormControlWrap>
                                         <Field
            as={CssTextField}
            label="Ім'я"
            id="standard-basic"
            variant="standard"
            name="name"
                                    type="text"
                                    style={{width:'100%'}}
          />
                            <ErrorMessage className='error-message' name="name" component="div" />
                           </FormControlWrap>
                            <FormControlWrap>
                                  <Field
            as={CssTextField}
            label="Пошта"
            id="standard-basic"
            variant="standard"
            name="email"
                                    type="text"
                                    style={{width:'100%'}}
          />
          <ErrorMessage className='error-message' name="email" component="div" />
                       </FormControlWrap>
                            <FormControlWrap>
                            <Field
             style={{width: '100%'}}
            as={CssTextField}
            label="Телефон"
            id="standard-basic"
            variant="standard"
            name="phone"
            type='text'
            /> <ErrorMessage className='error-message' name="phone" component="div" /></FormControlWrap>        
          
            </StyledInputsBlock>
                
            <button className='submit-btn' type="submit">Отримати знижку!</button>
                    </StyledForm>
     </Formik>
            </StyledContainer>
            </>
    )
}