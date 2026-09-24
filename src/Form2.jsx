import styles from './form.module.css'
import reducer from './hooks/Reducer'
import initialState from './hooks/InitialState'
import { useReducer, useRef } from 'react'

const Form2 = () => {
    const [state,dispatch] = useReducer()
    const formRef = useRef(null)
    const dateRef = useRef(null)

    const setValue = (e) => {
        const {name, value} = e.target

        dispatch({
            type: 'SET_FIELD',
            field: name,
            value: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({type:'SET_IS_SUBMITTING'})

        {// post API request here to submit the form data
            }
            
        }
  return (
    <div>
         <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-2 items-center">
                    <label className="block"> description</label>
                    
                    <input type="text" aria-invalid={!!state.error.description} name="description" value={state.values.description} placeholder="enter short description" maxLength={50} onChange= {setValue}
                    className="border-2 border-white rounded-sm" />
                    {err.description && (<p className="text-sm outline-none text-pink-600">{err.description}</p>)}
        
                    <input type="text" name="subject" aria-invalid={!!err.subject} onChange= {setValue} value={state.values.subject} placeholder=" enter subject/topic"
                    className="border-2  focus:border-green-200 focus:ring-0 outline-none border-white rounded-sm" />
                     {err.subject && (<p className="text-sm text-pink-600">{err.subject}</p>)}
        
                    <select name="type" aria-invalid={!!err.type} value ={state.values.type} onChange= {setValue} placeholder="choose type" className="border-2 border-white outline-none rounded-sm" >
                        <option value={""} >select the transaction Type</option>
                        <option value={"CREDIT"}>credit</option>
                        <option value={"DEBIT"}>debit</option>
                    </select>
                     {err.type && (<p className="text-sm text-pink-600">{err.type}</p>)}
        
                    <br />
                    <input type="date" ref={dateRef} aria-invalid={!!err.date} name="date" value={state.values.date} onChange={setValue} onClick={() => dateRef.current?.showPicker()}
                    className="border-2 outline-none border-white rounded-sm"/>
                     {err.date && (<p className="text-sm text-pink-600">{err.date}</p>)}
        
                    <br />
                    <input type="number" name="amount" aria-invalid={!!err.amount} value={state.values.amount} placeholder="enter amount" min={10} step={0.01}  onChange= {setValue}
                    className={`${styles.noSpinner} border-2 outline-none border-white rounded-sm`} />
                     {err.amount && (<p className="text-sm text-pink-600">{err.amount}</p>)}
        
                    <button type="submit" className="border-2 border-white rounded-sm" >submit form</button>
        
        
                </form>

     </div>
    )
}
export default Form2