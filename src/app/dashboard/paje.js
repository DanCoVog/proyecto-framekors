//esto va depues del login
'use client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // Limpiar sesión/token aquí si los tienes
    router.push('/');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '20px',
        borderRadius: '10px'
      }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '30px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ 
            fontSize: '28px', 
            color: '#333',
            margin: 0
          }}>
            Dashboard
          </h1>
          <button 
            onClick={handleLogout}
            style={{
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Cerrar Sesión
          </button>
        </div>

        {/* Bienvenida */}
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginBottom: '30px'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            color: '#333',
            marginBottom: '10px'
          }}>
            ¡Bienvenido de nuevo!
          </h2>
          <p style={{ 
            color: '#666',
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            Has iniciado sesión correctamente. Desde aquí puedes gestionar tu aplicación.
          </p>
        </div>

        {/* Estadísticas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#4a90e2', fontSize: '18px', marginBottom: '10px' }}>
              Usuarios Totales
            </h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', margin: 0 }}>
              1,234
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#5cb85c', fontSize: '18px', marginBottom: '10px' }}>
              Ventas del Mes
            </h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', margin: 0 }}>
              $45,678
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#f0ad4e', fontSize: '18px', marginBottom: '10px' }}>
              Actividad
            </h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', margin: 0 }}>
              89%
            </p>
          </div>
        </div>

        {/* Actividad Reciente */}
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ 
            fontSize: '20px', 
            color: '#333',
            marginBottom: '20px'
          }}>
            Actividad Reciente
          </h3>
          <div style={{ borderTop: '1px solid #eee' }}>
            <div style={{ padding: '15px 0', borderBottom: '1px solid #eee' }}>
              <p style={{ margin: 0, color: '#666' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Nuevo usuario:</span> María García se registró
              </p>
              <small style={{ color: '#999' }}>Hace 2 horas</small>
            </div>
            <div style={{ padding: '15px 0', borderBottom: '1px solid #eee' }}>
              <p style={{ margin: 0, color: '#666' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Venta completada:</span> $1,299 - Cliente Premium
              </p>
              <small style={{ color: '#999' }}>Hace 4 horas</small>
            </div>
            <div style={{ padding: '15px 0' }}>
              <p style={{ margin: 0, color: '#666' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Sistema:</span> Backup automático completado
              </p>
              <small style={{ color: '#999' }}>Hace 6 horas</small>
            </div>
          </div>
        </div>

        {/* Acciones Rápidas */}
        <div style={{
          marginTop: '30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          <button style={{
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            padding: '15px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Ver Usuarios
          </button>
          <button style={{
            backgroundColor: '#5cb85c',
            color: 'white',
            border: 'none',
            padding: '15px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Reportes
          </button>
          <button style={{
            backgroundColor: '#f0ad4e',
            color: 'white',
            border: 'none',
            padding: '15px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Configuración
          </button>
        </div>
      </div>
    </div>
  );
}