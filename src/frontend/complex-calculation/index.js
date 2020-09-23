import React, {useState, useMemo} from 'react';

export const ComplexCalculation = () => {

    const [base, setBase] = useState(5);
    const handleChangeBase = (e) => setBase(e.target.value);

    const [exponent, setExponent] = useState(10);
    const handleChangeExponent = (e) => setExponent(e.target.value);

    const operationResult = useMemo(
        () => {
            return Math.pow(base, exponent);
        },
        [base, exponent]
    );
    
    return (
        <section>
            <input
                placeholder="Ingrese la base"
                value={base}
                onChange={handleChangeBase}
                type="number"
            />
            <input
                placeholder="Ingrese el exponente"
                value={exponent}
                onChange={handleChangeExponent}
                type="number"
            />
            <p>Exponente: {operationResult}</p>
        </section>
    );
};