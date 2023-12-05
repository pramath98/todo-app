import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import styles from './Welcome.module.css';
import { Button } from "primereact/button";
function Welcome() {

    document.title = 'Welcome';

    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');
    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted');
        if (fname === '' || email === '' || uname === '' || pwd === '') {
            alert('Please fill mandatory fields!');
        } else {
            console.log(pwd, uname, email, fname);
        }
        const data = {
            userName: uname,
            password: pwd,
            email: email,
            firstName: fname
        }
        const response = await fetch('http://localhost:5000/users/add', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        console.log(response.json());
    }

    return (
        <div className="App">
            <div className={styles.welcomeContainer}>
                <span className={styles.welcome}>Welcome</span>
                <span className={styles.letsStart}>Let's create your account!</span>
            </div>
            <form className={styles.signupContainer} onSubmit={onFormSubmit}>
                <div className={styles.ipRow}>
                    <span>First Name</span>
                    <input className={'signupIP'} value={fname} onChange={(e) => setFname(e.target.value)}></input>
                </div>
                <div className={styles.ipRow}>
                    <span>Email</span>
                    <input className={'signupIP'} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className={styles.ipRow}>
                    <span>User Name</span>
                    <input className={'signupIP'} value={uname} onChange={(e) => setUname(e.target.value)}></input>
                </div>
                <div className={styles.ipRow}>
                    <span>Password</span>
                    <input className={'signupIP signupIP-pwd'} type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}></input>
                </div>
                <Button type="submit" severity="success">
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Welcome;