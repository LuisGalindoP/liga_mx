import React from 'react';
import Teams from '../data/teams'

const BannerTeams = () => {

    
    return (
        <div className={'bg-gray-300 h-16'}>
            <div className={'flex justify-center gap-6 pt-3'}>
                {Teams.map((item, index)=>{
                    return (
                        <div key={index}>
                            <img
                                src={require(`../images/teams/${item.teamBanner}`)}
                                alt={item.name}
                                width={'36px'}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default BannerTeams;