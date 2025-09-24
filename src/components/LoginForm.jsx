'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
    

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Aquí harías la llamada a tu API
      console.log('Datos de login:', formData);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirigir al dashboard
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Iniciar sesión con ${provider}`);
    // Aquí implementarías la lógica para login social
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <p className="title">Bienvenido de nuevo</p>
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input" 
            placeholder="Email"
            required 
          />
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input" 
            placeholder="Contraseña"
            required 
          />
          <p className="page-link">
            <span className="page-link-label">¿Olvidaste tu contraseña?</span>
          </p>
          <button 
            type="submit"
            className="form-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>
        <p className="sign-up-label">
          ¿No tienes una cuenta?
          <span className="sign-up-link"> Regístrate</span>
        </p>
        <div className="buttons-container">
          <div 
            className="apple-login-button"
            onClick={() => handleSocialLogin('Apple')}
            style={{ cursor: 'pointer' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              className="apple-icon"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-173.4 38.4-37.1 0-92.7-35.9-152.6-32.5C258.7 306.8 183 373.9 147.9 469.2 75.1 660.7 135.9 936.2 207.8 1034.4c35.2 48.1 77.9 102.6 133.9 100.3 52.8-2.3 72.5-34.2 136.6-34.2 62.5 0 79.8 34.2 141.9 32.5 58.4-2.6 94.4-49.6 129.5-97.8 40.8-55.9 57.4-109.7 58.8-112.7-1.1-.9-113.2-43.7-114.2-173.8zM590.4 203.1c29.6-35.3 49.3-86.9 44-138.2-42.8 2.9-92.6 29.2-123.7 65.1-27.8 32.4-51.9 84.8-45.1 133.7 47.8 3.7 96.8-24.2 124.8-60.6z"></path>
            </svg>
            <span>Iniciar sesión con Apple</span>
          </div>
          <div 
            className="google-login-button"
            onClick={() => handleSocialLogin('Google')}
            style={{ cursor: 'pointer' }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              version="1.1"
              x="0px"
              y="0px"
              className="google-icon"
              viewBox="0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Iniciar sesión con Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;