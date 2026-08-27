import { useEffect, useRef, useState } from "react"
import styles from './form.module.css'
import useTnxForm  from './hooks/useTnxForm'

const Form = () => {

    const {formValue, err, setValue, validate, resetForm} = useTnxForm()

    const dateRef = useRef(null);
    const formRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()

        if (!isValid) {

            // to focus input on the first field of error fileds
            const focusErr = formRef.current.querySelector("[aria-invalid = 'true']")
            focusErr?.focus()

            return
        }

        console.log(formValue);
        resetForm()
       
    }


    return (
        <>
        <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-2 items-center">
            <label className="block"> description</label>
            
            <input type="text" aria-invalid={!!err.description} name="description" value={formValue.description} placeholder="enter short description" maxLength={50} onChange= {setValue}
            className="border-2 border-white rounded-sm" />
            {err.description && (<p className="text-sm outline-none text-pink-600">{err.description}</p>)}

            <input type="text" name="subject" aria-invalid={!!err.subject} onChange= {setValue} value={formValue.subject} placeholder=" enter subject/topic"
            className="border-2  focus:border-green-200 focus:ring-0 outline-none border-white rounded-sm" />
             {err.subject && (<p className="text-sm text-pink-600">{err.subject}</p>)}

            <select name="type" aria-invalid={!!err.type} value ={formValue.type} onChange= {setValue} placeholder="choose type" className="border-2 border-white outline-none rounded-sm" >
                <option value={""} >select the transaction Type</option>
                <option value={"CREDIT"}>credit</option>
                <option value={"DEBIT"}>debit</option>
            </select>
             {err.type && (<p className="text-sm text-pink-600">{err.type}</p>)}

            <br />
            <input type="date" ref={dateRef} aria-invalid={!!err.date} name="date" value={formValue.date} onChange={setValue} onClick={() => dateRef.current?.showPicker()}
            className="border-2 outline-none border-white rounded-sm"/>
             {err.date && (<p className="text-sm text-pink-600">{err.date}</p>)}

            <br />
            <input type="number" name="amount" aria-invalid={!!err.amount} value={formValue.amount} placeholder="enter amount" min={10} step={0.01}  onChange= {setValue}
            className={`${styles.noSpinner} border-2 outline-none border-white rounded-sm`} />
             {err.amount && (<p className="text-sm text-pink-600">{err.amount}</p>)}

            <button type="submit" className="border-2 border-white rounded-sm" >submit form</button>


        </form>

        </>
    )
}
export default Form