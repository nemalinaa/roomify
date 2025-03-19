import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';


const AdminAuth = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const authData = {
            login: login,
            password: password
        };
        try {
            const response = await fetch('http://localhost:3002/authadm',
                {
                    method: 'POST', // Используйте POST
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(authData),
                    credentials: 'include'
                }
            );

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            const json = await response.json();
            console.log('Серверный ответ', json);
            alert(json);
            navigate('/admin');
        } catch (error) {
            setErr(error);
            console.error('Ошибка при авторизации:', error);
            alert(error);
        }
    }

    return (
        <div className="">
            <Link to='/'><div className="">На Главную</div></Link>
            <div className="">
                <h3 className="">Авторизация админа</h3>
                <form action="" method='post' onSubmit={HandleSubmit}>
                    <input type="text" placeholder="Логин" value={login} onChange={(event) => setLogin(event.target.value)} className="" />
                    <input type="password" placeholder="Пароль" value={password} onChange={(event) => setPassword(event.target.value)} className="" />
                    <button type="submit">Войти</button>
                </form>
            </div>

        </div>
    )
};
export default AdminAuth;
