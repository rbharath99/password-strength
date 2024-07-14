import { useState } from 'react'
import './App.css'
import { patterns } from './utils/Patterns';
import { StrengthBar } from './components/StrengthBar';

function App() {
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<string>('');

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value)
    calculatePasswordStrength(e.currentTarget.value);
  }

  const calculatePasswordStrength = (input: string) => {
    let score: number = 0;
    for (const key in patterns) {
      if (patterns.hasOwnProperty(key) && patterns[key].test(input)) {
        score++;
      }
    }

    if (score === 5) {
      setStrength('Excellent');
    } else if (score >= 4) {
      setStrength('Very Strong');
    } else if (score >= 3) {
      setStrength('Strong');
    } else if (score >= 2) {
      setStrength('Moderate');
    } else {
      setStrength('Weak');
    }
  }

  return (
    <>
      <label>
        Password: <input type='text' onChange={(e) => handlePasswordChange(e)}></input>
      </label>
      <div className='password-strength'>
        <h3>Password Strength</h3>
        <StrengthBar strength={strength} />
        <p>{strength}</p>
      </div>
    </>
  )
}

export default App
