import React, { useState } from 'react';

function SimpleForm() {
    const [name, setName] = useState('');

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input
                        style={{ marginTop: '40px' }}
                        type="text"
                        className='input'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </form>
            <p>Hello, {name}!</p>
        </div>
    );
}

export default SimpleForm;
