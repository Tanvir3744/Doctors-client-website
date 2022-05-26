import React from 'react';

const AppointmentBanner = () => {
    return (
        const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <div class="hero min-h-screen flex justify-evenly">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='shadow rounded'>
                       <DayPicker mode='single' selected={selected} onSelect={setSelected} />
                    </div>
                </div>
            </div>
        </div>
    );
    );
};

export default AppointmentBanner;