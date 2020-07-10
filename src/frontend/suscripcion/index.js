import React, { useState } from 'react';

export const Suscripcion = () => {
    const [nombre, setNombre] = useState('');
    const handleChangeNombre = (e) => setNombre(e.target.value);

    const [estaGuardado, setEstaGuardado] = useState(false);
    const handleClickGuardar = () => setEstaGuardado(true);

    return (
        <section>
            {!estaGuardado ? (
                    <>
                    <label>Suscríbete</label>
                        <input
                            placeholder='Correo electrónico'
                            onChange={handleChangeNombre}
                            value={nombre}
                        />
                        <button
                            onClick={handleClickGuardar}
                        >
                            Suscribirse
                        </button>
                    </>
                )
                :
                (
                    <h1>Graciar por suscribirse: {nombre}</h1>
                )
            }
        </section>
    );
};

