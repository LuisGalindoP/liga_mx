import React from 'react'

const LogoBanner = () => {
    return (
        <div className={' h-40'}>
            <div className={'flex justify-around'}>
                <div className={'pl-6 pt-7'}>
                    <img src={require("../images/logo_grita_mexico.png")} alt=""/>
                </div>
                <div className={'flex justify-center items-center'}>
                    <p className={'hover:bg-blue-500 hover:text-white font-bold text-sm text-blue-500 border-y-2 border-l-2 p-2 rounded-l-full'}>LIGA EXPANSION</p>
                    <p className={'hover:bg-red-500 hover:text-white font-bold text-sm text-red-500 border-y-2 p-2'}>LIGA FEMENIL</p>
                    <p className={'hover:bg-green-700 hover:text-white font-bold text-sm text-black-500 border-y-2 border-r-2 p-2 rounded-r-full'}>FUERZAS BASICAS</p>
                </div>
            </div>
        </div>
    )
};

export default LogoBanner;