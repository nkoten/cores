import React from 'react';

export default function VSCodeCard({
  bgAction = '#333333',
  bgSidebar = '#252526',
  bgCode = '#1e1e1e',
  bgFooter = '#0e639c',
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '500px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        fontFamily:
          'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
      }}
    >
      {/* Área Principal */}
      <div style={{ display: 'flex', flex: '1' }}>
        {/* 1. Barra de Ações (ActionBar) */}
        <div
          style={{
            width: '50px',
            backgroundColor: bgAction,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '10px',
          }}
        >
          <div
            style={{
              color: '#fff',
              fontSize: '24px',
              marginBottom: '15px',
              opacity: 0.8,
            }}
          >
            ≡
          </div>
          <div
            style={{
              color: '#fff',
              fontSize: '20px',
              marginBottom: '15px',
              opacity: 0.5,
            }}
          >
            ⯐
          </div>
          <div
            style={{
              color: '#fff',
              fontSize: '20px',
              marginBottom: '15px',
              opacity: 0.5,
            }}
          >
            ⎗
          </div>
        </div>

        {/* 2. Barra Lateral (Sidebar) */}
        <div
          style={{
            width: '200px',
            backgroundColor: bgSidebar,
            color: '#cccccc',
            padding: '10px',
            fontSize: '12px',
          }}
        >
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Explorer
          </p>
          <div style={{ paddingLeft: '5px' }}>
            <p style={{ margin: '5px 0', opacity: 0.9 }}>📁 src</p>
            <p
              style={{ paddingLeft: '15px', margin: '3px 0', color: '#569cd6' }}
            >
              📄 App.js
            </p>
            <p
              style={{ paddingLeft: '15px', margin: '3px 0', color: '#569cd6' }}
            >
              📄 index.js
            </p>
          </div>
        </div>

        {/* 3. Tela de Código (Code Area) */}
        <div
          style={{
            flex: '1',
            backgroundColor: bgCode,
            color: '#d4d4d4',
            padding: '20px',
            fontSize: '14px',
            fontFamily: 'Consolas, Courier New, monospace',
          }}
        >
          <span style={{ color: '#569cd6' }}>function</span>{' '}
          <span style={{ color: '#dcdcaa' }}>App</span>() &#123;
          <br />
          &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>return</span> (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;
          <span style={{ color: '#569cd6' }}>div</span>&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
          <span style={{ color: '#569cd6' }}>h1</span>&gt;Olá, VS Code!&lt;/
          <span style={{ color: '#569cd6' }}>h1</span>&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
          <span style={{ color: '#569cd6' }}>div</span>&gt;
          <br />
          &nbsp;&nbsp;);
          <br />
          &#125;
        </div>
      </div>

      {/* 4. Rodapé (Footer/StatusBar) */}
      <div
        style={{
          height: '22px',
          backgroundColor: bgFooter,
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          fontSize: '12px',
          justifyContent: 'space-between',
        }}
      >
        <span>Branch: main ⎇</span>
        <span>⚡ 0 Errors</span>
        <span>JavaScript React</span>
      </div>
    </div>
  );
}
