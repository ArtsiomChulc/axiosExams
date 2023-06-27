// ===============  exam #19  q1 ================

// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
//
// export const Main = () => {
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             <h2>📜 Список постов</h2>
//         </>
//     )
// }
//
// // App
// export const App = () => {
//     return (
//         <BrowserRouter><Routes><Route path={'/'} element={<Main/>}/></Routes></BrowserRouter> // ==========  //
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)
//
// // 📜 Описание:
// // Белый экран... Приложение не работает.
// // Найдите и исправьте ошибку, чтобы на экране отобразилось 2 заголовка.
// // Исправленную версию строки напишите в качестве ответа.
//
// // 🖥 Пример ответа: <Route path={'/'} component={<Main/>}/>


// ===============  exam #19  q2 ================

// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
// export const Main = () => {
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             <h2>📜 Список постов</h2>
//         </>
//     )
// }
//
// // App
// export const App = () => {
//
//     return (
//         <Routes>
//            <Route path={'/'} element={<Main/>}/>  //  =============     // ======= ////
//         </Routes>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App/></BrowserRouter>)
//
// // 📜 Описание:
// // Приложение при старте падает с ошибкой...
// // Найдите и исправьте ошибку, чтобы на экране отобразилось 2 заголовка.
// // Исправленную версию строки напишите в качестве ответа.
//
// // 🖥 Пример ответа: type InitStateType = typeof initState


// ===============  exam #19  q3 ================

// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
//
//
// export const PageNotFound = () => {
//     return <h2>⛔ 404. Page not found ⛔</h2>
// }
//
// export const Profile = () => {
//     return <h2>😎 Профиль</h2>
// }
//
//
// export const Main = () => {
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             <h2>📜 Список постов</h2>
//         </>
//     )
// }
//
// // App
// export const App = () => {
//
//     return (
//         <Routes>
//             <Route path={'profile'} element={<Profile/>}/>
//             {/*/!* ❗❗❗ <Route path = {'*'} element = {<Navigate to = '/profile'/>}/> ❗❗❗  *!/  // ========== //*/}
//         </Routes>
//     )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App/></BrowserRouter>)
//
// // 📜 Описание:
// // Вместо ХХХ напишите роут таким образом, чтобы вне зависимости от того чтобы будет в урле (login или home или...)
// // вас всегда редиректило на страницу профиля и при в это в урле по итогу
// // был адрес /profile
//
// // 🖥 Пример ответа: <Route path={'/'} element={'to profile page'}/>


// ===============  exam #19  q4 ================

// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
// // Main
// export const Login = () => {
//
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });
//
//
//     return (
//         <form onSubmit={formik.handleSubmit}> /*//  ============ // ======== //*/
//             <div>
//                 <input
//                     name="email"
//                     onChange={formik.handleChange}
//                     value={formik.values.email}
//                     type="text"
//                     placeholder={'Введите email'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="password"
//                     onChange={formik.handleChange}
//                     value={formik.values.password}
//                     type="password"
//                     placeholder={'Введите пароль'}
//                 />
//             </div>
//             <button type="submit">Отправить</button>
//         </form>
//     );
// }
//
// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login/>}/>
//         </Routes>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App/></BrowserRouter>)
//
// // 📜 Описание:
// // При заполнении данных формы и их отправке вы должны увидеть alert c
// // введенными значениями, но из-за допущенной ошибки форма работает не корректно.
// // Найдите ошибку и исправленную версию строки напишите в качестве ответа.
// // ❗После того как показался alert форма не должна перегружать все приложение
//
// // 🖥 Пример ответа: alert(JSON.stringify(values))




// ===============  exam #19  q5 ================

// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
//
// // Main
// export const Login = () => {
//
//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             phone: '',
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });
//
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input
//                     name="firstName"
//                     onChange={formik.handleChange}
//                     value={formik.values.firstName}
//                     placeholder={'Введите имя'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="lastName"
//                     onChange={formik.handleChange}
//                     value={formik.values.lastName}
//                     placeholder={'Введите фамилию'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="email"
//                     onChange={formik.handleChange}
//                     value={formik.values.email}
//                     placeholder={'Введите email'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="password"
//                     onChange={formik.handleChange}
//                     value={formik.values.password}
//                     placeholder={'Введите пароль'}
//                     type={'password'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="phone"      // =================== //
//                     onChange={formik.handleChange}
//                     value={formik.values.phone}
//                     placeholder={'Введите телефон'}
//                 />
//             </div>
//             <button type="submit">Отправить</button>
//         </form>
//     );
// }
//
// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login/>}/>
//         </Routes>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App/></BrowserRouter>)
//
// // 📜 Описание:
// // Форма заполнения данных работает некорректно.
// // Пользователи жалуются на поле ввода "Телефона"
// // Найдите в коде ошибку. Исправленную версию строки напишите в качестве ответа.
//
// // 🖥 Пример ответа: <form onSubmit={formik.handleSubmit}>




// ===============  exam #19  q6 ================

// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
//
// // Types
// type LoginFieldsType = {
//     firstName?: string
// }
//
// // Main
// export const Login = () => {
//
//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//         },
//         validate: (values) => {
//             const errors: LoginFieldsType = {};
//             if (values.firstName.length < 5) errors.firstName = 'Must be 5 characters or more'  // ========  //
//
//             return errors
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         }
//     });
//
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input placeholder={'Введите имя'} {...formik.getFieldProps('firstName')}/>
//             </div>
//             <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Отправить</button>
//         </form>
//     );
// }
//
// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login/>}/>
//         </Routes>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App/></BrowserRouter>)
//
// // 📜 Описание:
// // Начните вводить в поле firstName символы. После ввода первого символа кнопка "Отправить" раздизаблится.
// // Задача: кнопка "Отправить" должна раздизаблиться только в том случае, если длинна имени больше, либо равна 5 символам.
// // Т.е. вам необходимо самостоятельно написать эту валидацию для поля firstName.
// // ❗ В качестве текста ошибки напишите 'Must be 5 characters or more'
// // ❗ Текст ошибки выводить не нужно (только если для себя поиграться).
//
// // В качестве ответа напишите полностью строку кода с условием.
// // 🖥 Пример ответа: return errors.firstName = 'Must be 5 characters or more'
// // ❗ Сторонние библиотеки (например yup) использовать запрещено




// ===============  exam #19  q7 ================

// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import {Simulate} from "react-dom/test-utils";
// import error = Simulate.error;
//
//
// // Types
// type LoginFieldsType = {
//     firstName: string
//     email: string
// }
//
// // Main
// export const Login = () => {
//
//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             email: '',
//         },
//         validate: (values) => {
//             const errors: Partial<LoginFieldsType> = {};
//
//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                 errors.email = 'Invalid email address';
//             }
//             return errors
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         }
//     });
//
//     // Функция необходима для того, чтобы вебшторм не ругался на true в JSX
//     const getTrue = () => {
//         return true
//     }
//
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input placeholder={'Введите имя'} {...formik.getFieldProps('firstName')}/>
//             </div>
//             <div>
//                 <input placeholder={'Введите email'}{...formik.getFieldProps('email')}/>
//                 {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}  {/*// ============= //*/}
//             </div>
//             <button type="submit">Отправить</button>
//         </form>
//     );
// }
//
// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login/>}/>
//         </Routes>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App/></BrowserRouter>)
//
// // 📜 Описание:
// // Загрузив приложение вы увидите ошибку под полем email, но вы еще ничего не ввели.
// // Исправьте 46 строку кода так, чтобы:
// // 1) Сообщение об ошибке показывалось только в том случае, когда email введен некорректно.
// // 2) Вместо ERROR должен быть конкретный текст ошибки прописанный в валидации к этому полю.
// // 3) Сообщение должно показываться только в том случае, когда мы взаимодействовали с полем.
// // Исправленную версию строки напишите в качестве ответа.
//
// // 🖥 Пример ответа: {true && <div style={{color: 'red'}}>error.email</div>}



// ===============  exam #19  q8 ================


import { useFormik } from 'formik';
import React from 'react'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';


// Types
type LoginFieldsType = {
    email: string
    password: string
}

// API
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

const api = {
    login(data: LoginFieldsType) {
        return instance.post('auth/login', data)
    },
}


// Reducer
const initState = {
    isLoading: false,
    error: null as string | null,
    isLoggedIn: false,
}

type InitStateType = typeof initState

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'APP/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'APP/IS-LOADING':
            return {...state, isLoading: action.isLoading}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// Actions
const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
type ActionsType =
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setError>


// Thunk
const loginTC = (values: LoginFieldsType): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true))
    api.login(values)
        .then((res) => {
            dispatch(setIsLoggedIn(true))
            alert('Вы залогинились успешно')
        })
        .catch((e) => {
            dispatch(setError(e.response.data.errors))
        })
        .finally(() => {
            dispatch(setLoadingAC(false))
            setTimeout(() => {
                dispatch(setError(null))
            }, 3000)
        })
}

// Store
const rootReducer = combineReducers({
    app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
export const Loader = () => {
    return <h1>Loading ...</h1>
}

// Profile
export const Profile = () => {
    return <h2>😎 Profile</h2>
}

// Login
export const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const error = useAppSelector(state => state.app.error)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: 'darrell@gmail.com',
            password: '123',
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        }
    });

    if(isLoggedIn) {
        // return navigate('profile')
        console.log('redirect to profile')
    }

    return (
        <div>
            {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
            {isLoading && <Loader/>}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input placeholder={'Введите email'}
                           {...formik.getFieldProps('email')}/>
                </div>
                <div>
                    <input type={'password'}
                           placeholder={'Введите пароль'}
                           {...formik.getFieldProps('password')}/>
                </div>
                <button type="submit">Залогиниться</button>
            </form>
        </div>
    );
}

// App
export const App = () => {

    return (
        <Routes>
            <Route path={''} element={<Login/>}/>
            <Route path={'profile'} element={<Profile/>}/>
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)
// dispatch(setIsLoggedIn(true))


// 📜 Описание:
// ❗ Email и password менять не надо. Это просто тестовые данные с которыми будет происходить успешный запрос.
// Нажмите на кнопку "Залогиниться" и вы увидели alert с успешным сообщением
// Задача: при успешной логинизации, редиректнуть пользователя на страницу Profile.

// Напишите правильную строку кода
// 🖥 Пример ответа:  console.log('If login => redirect to profile')
