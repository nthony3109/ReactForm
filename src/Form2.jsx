import styles from './form.module.css'
import validateForm from './hooks/validateForm'
import { useReducer, useRef, useEffect} from 'react'
import useTnxForm2 from './hooks/useTnxForm2'

const Form2 = () => {
    const formRef = useRef(null)
    const dateRef = useRef(null)

    const {state, setValue, dispatch } = useTnxForm2()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errors = validateForm(state)
        if (Object.keys(errors).length > 0) {
            dispatch({
                type: 'SET_ERRORS',
                errors
            })
            return
        }
        dispatch({type:'SUBMIT_START'})

        // post API request here to submit the form data
            
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API request delay

            console.log("Form submitted successfully obj below:", state.values)

            //try to simulate an error during form submission for testing purposes
            // try {
            //     console.log("inside try");
            //         throw new Error("Something went wrong while submitting the form");
                    
                    
            //     } catch (error) {
            //         console.log("inside catch");
            //          console.log("error:", error.message);
            //         dispatch({
            //             type: 'SUBMIT_ERROR',
            //             error: error.message
            //         });

            //         return;
            //     }
            dispatch({type:'SUBMIT_SUCCESS'})
        
            //to delay the form reset after submission
            setTimeout(() => {
                dispatch({type:'RESET_FORM'})
            }, 1000)

        
     }
     // for testing purposes
     useEffect(() => {
                console.log("isSubmitting changed:", state.isSubmitting);
            }, [state.isSubmitting]);

            //for just testing purposes to see if the form is submitted successfully
     useEffect(() => {
                console.log("isSubmitted changed:", state.isSubmitted);
            }, [state.isSubmitted]);


  return (
    <div>
         <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-2 items-center">
                    <label className="block"> description</label>
                    
                    <input type="text" aria-invalid={!!state.errors.description} name="description" value={state.values.description} placeholder="enter short description" maxLength={50} onChange= {setValue}
                    className="border-2 border-white rounded-sm" />
                    {state.errors.description && (<p className="text-sm outline-none text-pink-600">{state.errors.description}</p>)}
        
                    <input type="text" name="subject" aria-invalid={!!state.errors.subject} onChange= {setValue} value={state.values.subject} placeholder=" enter subject/topic"
                    className="border-2  focus:border-green-200 focus:ring-0 outline-none border-white rounded-sm" />
                     {state.errors.subject && (<p className="text-sm text-pink-600">{state.errors.subject}</p>)}
        
                    <select name="type" aria-invalid={!!state.errors.type} value ={state.values.type} onChange= {setValue} placeholder="choose type" className="border-2 border-white outline-none rounded-sm" >
                        <option value={""} >select the transaction Type</option>
                        <option value={"CREDIT"}>credit</option>
                        <option value={"DEBIT"}>debit</option>
                    </select>
                     {state.errors.type && (<p className="text-sm text-pink-600">{state.errors.type}</p>)}
        
                    <br />
                    <input type="date" ref={dateRef} aria-invalid={!!state.errors.date} name="date" value={state.values.date} onChange={setValue} onClick={() => dateRef.current?.showPicker()}
                    className="border-2 outline-none border-white rounded-sm"/>
                     {state.errors.date && (<p className="text-sm text-pink-600">{state.errors.date}</p>)}
        
                    <br />
                    <input type="number" name="amount" aria-invalid={!!state.errors.amount} value={state.values.amount} placeholder="enter amount" min={10} step={0.01}  onChange= {setValue}
                    className={`${styles.noSpinner} border-2 outline-none border-white rounded-sm`} />
                     {state.errors.amount && (<p className="text-sm text-pink-600">{state.errors.amount}</p>)}
        
                    <button type="submit" disabled={state.isSubmitting} className="border-2 border-white rounded-sm" > 
                        {state.isSubmitting ? <small className=" text-amber-400">submitting...</small>: "Submit form"}

                    </button>
        
        
                </form>

     </div>
    )
}
export default Form2