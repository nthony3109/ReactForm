import { useState } from "react"

const useTnxForm = () => {

    // this is hook for form usage, a practice of clean coding 

    const formfields = {
         subject : " ",
        description : "",
        type : "",
        date : "",
        amount : "",

    }
    const [formValue, setFormValue] = useState (formfields)

    const resetForm = () => {
        setFormValue(formfields)
        setErr({})
    }

    const [err, setErr] = useState({})

    const setValue = (e) => {
        const {name, value} = e.target

        if (name === "amount") {
            if (!/^\d*\.?\d*$/.test(value)) {
                return;
            }
        }

        setFormValue((prev) => ({...prev, [name] : value}))

        setErr ((prev)=>({
            ...prev, [name] : " "
        }))
    }
    const validate = () => {
        const newErr = {}
        if (!formValue.subject.trim()) newErr.subject = " the subject is required"
        if (!formValue.description.trim()) newErr.description = "description is required"

        if(!formValue.amount || Number(formValue.amount) < 10) newErr.amount = "amount must be more than NGN10"
        if (!formValue.type) newErr.type = "select transaction type"
        if (!formValue.date) newErr.date = " please choose date"
        setErr(newErr)
        
        return Object.keys(newErr).length == 0
    }

    return {
        formValue,
        err,
        setValue,
        validate,
        resetForm
    };
}
export default useTnxForm