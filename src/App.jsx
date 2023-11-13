import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './index.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName : '',
    email: '',
    feedBack: '',
  });

  const [submitted,setSubmitted] = useState(false)

  const [name,setName] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:',formData)
    setName(formData.fullName)
    setFormData({
      fullName:'',
      email:'',
      feedBack:'',
    })
    setSubmitted(true)
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Full Name
        <br />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Email
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Feedback
        <br />
        <input
          type="text"
          name="feedBack"
          value={formData.feedBack}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <button type="submit">Submit</button>
    </form>
    <br/><br/>
    {submitted && (
      <div>
        <p>{`Thank you for submitting this form ${name}`}</p>
      </div>
    )

    }

    </div>
  );
};





const App = () => {
  return (
    <div>
      <h2>Feedback Form</h2>
      <Form/>
    </div>
  )
}

export default App;