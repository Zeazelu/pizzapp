import { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        try {
            await axios.post("http://localhost:3000/api/login", {username, password,});
            router.push("/admin");
        } catch(err) {
            console.log(err);
            setError(true);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Panel Administratora</h1>
                <input placeholder='login' className={styles.input} onChange={(e) => setUsername(e.target.value)} />
                <input placeholder='hasło' type='password' className={styles.input} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleClick} className={styles.button}>Zaloguj się</button>
                {error && <span className={styles.error}>Niepoprawne dane logowania</span>}
            </div>
        </div>
    )
}
export default Login