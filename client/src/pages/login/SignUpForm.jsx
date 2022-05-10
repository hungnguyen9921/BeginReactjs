import React from "react";
export function SignUpForm(){


    return(
        <>
            <form
                className='auth-form'
                method='POST'
                autoComplete={'off'}
            >
            <div className="input-form">
                <div className="name">
                    <input 
                        type="text" 
                        placeholder='Nhập họ tên'
                        className="input-text"
                    />
                </div>  
                <div className="phone">
                    <input 
                        type="text" 
                        placeholder='Nhập số điện thoại'
                        className="input-text"
                        /> 
                </div>
                <div className="email">
                    <input 
                        type="text" 
                        placeholder='Nhập email'
                        className="input-text"
                        /> 
                </div>
                <div className="password">
                    <input 
                        type="password" 
                        placeholder='Mật khẩu'
                        className="input-text"
                        /> 
                </div>
                <div className="check">
                    <label htmlFor="" className="checkbox"> 
                        <input type="checkbox" value="Nhớ mật khẩu" className='checkbox-input'/>
                        <span className='checkbox-label'>Nhớ mật khẩu</span>
                    </label>
                    <a href="#">Quên mật khẩu?</a>
                </div>
                <div className="button">
                    <button type="submit">Tạo tài khoản</button>
                </div>
            </div>
            </form>
        </>
    );
}