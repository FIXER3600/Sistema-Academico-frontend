import { useState } from "react"

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [span, setSpan] = useState('')
  const onChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const clearFields = () => {
    setForm(initialState)
  }

  return { form, onChange, clearFields, errors, setErrors, span, setSpan }
}

export default useForm